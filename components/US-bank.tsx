'use client';

import * as React from "react";

export type SelectionRecord = {
  category: string; // matches SelectionBadge.key from selections.tsx
  index: number | null; // preserved for compatibility (we'll set null when saving from SelectionsBar)
  label?: string;
  ts: number;
};

const STORAGE_KEY = "us_bank_selections_v1";

/**
 * Bank storage helpers — explicit and defensive.
 * This module intentionally fails fast when sessionStorage or the expected bank data is missing so
 * integration problems are detected immediately (for example: SelectionsBar not writing, SSR path,
 * or the browser blocking storage). Do not silently return defaults here — add a controlled
 * initialization or an explicit in-memory queue only when the "fire" (commit) semantics are finalized.
 * SelectionsBar (morons/components/selections.tsx) is the authoritative writer via saveSelections().
 */
function readBank(): SelectionRecord[] {
  if (typeof window === "undefined") {
    throw new Error("US-bank: sessionStorage not available (not running in a browser).");
  }
  const raw = sessionStorage.getItem(STORAGE_KEY);
  if (raw === null) {
    throw new Error("US-bank: no data in sessionStorage; use saveSelections(...) to populate the bank.");
  }
  const parsed = JSON.parse(raw);
  if (!Array.isArray(parsed)) {
    throw new Error("US-bank: invalid data in sessionStorage.");
  }
  return parsed as SelectionRecord[];
}

/**
 * Write the bank to sessionStorage and dispatch update event.
 * Notifies subscribers via the "us-bank-update" CustomEvent so UI can react immediately.
 * Low-level storage failures intentionally throw to surface environment issues rather than
 * silently masking them.
 */
function writeBank(bank: SelectionRecord[]) {
  if (typeof window === "undefined") {
    throw new Error("US-bank: sessionStorage not available (not running in a browser).");
  }
  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(bank));
  const ev = new CustomEvent("us-bank-update", { detail: bank });
  window.dispatchEvent(ev);
}


export function saveSelections(items: { key: string; label: string }[]) {
  if (typeof window === "undefined") {
    throw new Error("US-bank: sessionStorage not available (not running in a browser).");
  }
  const now = Date.now();
  const bank: SelectionRecord[] = items.map((it) => ({
    category: it.key,
    index: null,
    label: it.label,
    ts: now,
  }));
  writeBank(bank);
}

/** Get the selection record for a given category (or throws if not present). */
export function getSelection(category: string): SelectionRecord | undefined {
  const bank = readBank();
  return bank.find((r) => r.category === category);
}

/** Return all selections as an array (throws if bank missing). */
export function getAllSelections(): SelectionRecord[] {
  return readBank();
}

/**
 * Commit (fire out) the bank contents.
 * Returns the current bank. If clearAfterCommit is true the session storage key is removed.
 */
export function commitBank(opts?: { clearAfterCommit?: boolean }) {
  const bank = readBank();
  if (opts?.clearAfterCommit) {
    sessionStorage.removeItem(STORAGE_KEY);
    window.dispatchEvent(new CustomEvent("us-bank-update", { detail: [] }));
  }
  return bank;
}


export function subscribeToBank(cb: (bank: SelectionRecord[]) => void) {
  const handler = (e: Event) => {
    const ce = e as CustomEvent;
    cb(ce && ce.detail ? (ce.detail as SelectionRecord[]) : readBank());
  };

  if (typeof window === "undefined") {
    throw new Error("US-bank: sessionStorage not available (not running in a browser).");
  }

  window.addEventListener("us-bank-update", handler as EventListener);

  return () => {
    window.removeEventListener("us-bank-update", handler as EventListener);
  };
}

/**
 * React hook to read the bank (no fallback) and subscribe to updates.
 * It intentionally throws when the bank is missing to force consumers to handle initialization
 * or to ensure the writer (SelectionsBar) is functioning — this prevents silent failures.
 *
 * Usage:
 *   const { bank, commit, getAll } = useUSBank();
 */
export function useUSBank() {
  const [bank, setBank] = React.useState<SelectionRecord[]>(() => {
    return readBank();
  });

  React.useEffect(() => {
    const handler = (b: SelectionRecord[]) => setBank(b);
    const unsub = subscribeToBank((b) => setBank(b));
    // setBank(readBank()); // readBank already used for initial state
    return unsub;
  }, []);

  const commit = React.useCallback((opts?: { clearAfterCommit?: boolean }) => {
    return commitBank(opts);
  }, []);

  return {
    bank,
    commit,
    getAll: getAllSelections,
    saveSelections,
    subscribeToBank,
  } as const;
}

// Export defaults for convenience
export default {
  saveSelections,
  getSelection,
  getAllSelections,
  commitBank,
  subscribeToBank,
  useUSBank,
};
