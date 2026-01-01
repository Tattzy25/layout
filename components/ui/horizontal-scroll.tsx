'use client';

import React, { useState } from "react";
import { Scroller } from "@/components/ui/scroller";
 
export function ScrollerHorizontalDemo() {
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
    <Scroller orientation="horizontal" hideScrollbar className="w-full p-4" asChild>
      <div className="flex items-center gap-2.5">
        {Array.from({ length: 10 }).map((_, index) => {
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
              className={`flex h-32 w-[180px] shrink-0 flex-col items-center justify-center rounded-md bg-accent p-4 cursor-pointer ring-offset-2 ring-offset-background transition-all duration-200 ease-in-out focus:outline-none ${isSelected ? "ring-4 ring-primary/80" : "ring-2 ring-primary/60"}`}
            >
              <div className="font-medium text-lg">Card {index + 1}</div>
              <span className="text-muted-foreground text-sm">
                Scroll horizontally
              </span>
            </div>
          );
        })}
      </div>
    </Scroller>
  );
}
