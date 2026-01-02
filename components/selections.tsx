'use client';

import * as React from "react";
import { Button } from "@/components/ui/button";
import { saveSelections } from "@/components/US-bank";

export type SelectionBadge = {
  key: string;
  label: string;
};

type SelectionsBarProps = {
  items: SelectionBadge[];
};

/**
 * Badge bar shown above the TOP horizontal "styles" scroller.
 * - No badges when there are no selections.
 * - Badges always fill the full container width.
 * - Badge width is equal and automatically adjusts based on count.
 *
 * Behavior note: SelectionsBar is the authoritative writer for the US-bank and will persist the
 * exact displayed pills to sessionStorage by calling saveSelections(items) on every items change.
 * This ensures the bank reflects the visible UI state; any storage or prop-shape issues should
 * surface via runtime errors so they can be fixed before a "fire" action consumes the bank.
 */
export function SelectionsBar({ items }: SelectionsBarProps) {
  React.useEffect(() => {
    // persist the exact SelectionsBar items to the US-bank on every change
    // per your instruction the US-bank only accepts data from this file.
    saveSelections(items);
  }, [items]);

  if (!items || items.length === 0) {
    // still persist empty arrays (saveSelections already called above)
    return null;
  }

  return (
    <div className="w-full mb-2">
      <div
        className="grid w-full gap-2"
        style={{
          gridTemplateColumns: `repeat(${items.length}, minmax(0, 1fr))`,
        }}
      >
        {items.map((item) => (
          <Button
            key={item.key}
            variant="outline"
            size="sm"
            className="w-full rounded-full bg-white text-black shadow-sm transition-all duration-200 animate-in slide-in-from-top-1"
          >
            <span className="block truncate text-xs sm:text-sm">
              {item.label}
            </span>
          </Button>
        ))}
      </div>
    </div>
  );
}
