'use client';

import React, { useState } from "react";
import { Scroller } from "@/components/ui/scroller";
 
export function ScrollerHiddenDemo() {
  const [selected, setSelected] = useState<Set<number>>(new Set());

  function toggle(index: number) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  }

  return (
    <Scroller className="flex h-80 w-full flex-col gap-2.5 p-4" hideScrollbar>
      {Array.from({ length: 20 }).map((_, index) => {
        const isSelected = selected.has(index);
        return (
          <div
            key={index}
            role="button"
            tabIndex={0}
            aria-pressed={isSelected}
            onClick={() => toggle(index)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                toggle(index);
              }
            }}
            className={`flex h-40 flex-col rounded-md bg-accent p-4 cursor-pointer ring-offset-2 ring-offset-background transition-all duration-200 ease-in-out focus:outline-none ${isSelected ? "ring-4 ring-primary/80" : "ring-2 ring-primary/60"}`}
          >
            <div className="font-medium text-lg">Card {index + 1}</div>
            <span className="text-muted-foreground text-sm">
              Scroll smoothly without visible scrollbars
            </span>
          </div>
        );
      })}
    </Scroller>
  );
}

/**
 * Vertical scroller showing aspect ratios.
 * This is intended to replace only one of the vertical scrollers on the page.
 * Labels are shown centered and use the same font sizing as the horizontal scrollers.
 */
export function ScrollerVerticalAspectDemo() {
  const [selected, setSelected] = useState<Set<number>>(new Set());

  function toggle(index: number) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  }

  const items: [string, string][] = [
    ["1:1", "Magic Mushroom Portal"],
    ["16:9", "Horizontally Confused Lizard"],
    ["21:9", "Stretchy Reality Carpet"],
    ["3:2", "Sideways Goblin Nap"],
    ["2:3", "Totem That Breathes"],
    ["4:5", "Almost Square But It’s Watching You"],
    ["5:4", "Square After One More Hit"],
    ["3:4", "Tall-ish Eldritch Snack"],
    ["4:3", "Ancient Default Rectangle"],
    ["9:16", "Phone Became a Tree"],
    ["9:21", "Cosmic Doorway to Somewhere Moist"],
  ];

  return (
    <Scroller className="flex h-80 w-full flex-col gap-2.5 p-4" hideScrollbar>
      {items.map(([num, name], index) => {
        const isSelected = selected.has(index);
        return (
          <div
            key={index}
            role="button"
            tabIndex={0}
            aria-pressed={isSelected}
            onClick={() => toggle(index)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                toggle(index);
              }
            }}
            className={`flex h-40 items-center justify-center rounded-md bg-accent p-4 cursor-pointer ring-offset-2 ring-offset-background transition-all duration-200 ease-in-out focus:outline-none ${isSelected ? "ring-4 ring-primary/80" : "ring-2 ring-primary/60"}`}
          >
            <div className="flex items-center gap-3">
              <div className="font-medium text-[20px] md:text-[24px] text-center">{num}</div>
              <div className="font-medium text-[20px] md:text-[24px] text-center">{name}</div>
            </div>
          </div>
        );
      })}
    </Scroller>
  );
}
