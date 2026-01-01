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
        {(() => {
          const items: [string, string][] = [
            ["Neo-Traditional", "Old School, Still Fucking"],
            ["Minimal", "Just the Tip"],
            ["Abstract", "Hard to Explain, Easy to Judge"],
            ["Dotwork", "Tiny Dots, Big Commitment"],
            ["Pointillism", "Dot After Dot After Dot"],
            ["Surreal", "Weird Turned Me On"],
            ["New School", "Loud, Bratty, Expensive"],
            ["3D", "Looks Like It’s Coming Out"],
            ["Anaglyph", "Double Vision, No Regrets"],
            ["Mandala", "Spiritual, But Make It Kinky"],
            ["Sketch", "Rough Draft Energy"],
            ["Etching", "Old-Timey Freak Shit"],
            ["Engraving", "Carved Like It Matters"],
            ["Glitch", "Broken in a Hot Way"],
            ["Vaporwave", "Pornhub at the Mall"],
            ["UV", "Only Hot After Dark"],
            ["Blacklight", "Surprise, Motherfucker"],
            ["Japanese", "Disciplined but Dangerous"],
            ["Irezumi", "Go Big or Cry Later"],
            ["Ornamental", "Decorative as Hell"],
            ["Blackwork", "No Safe Word"],
            ["Script", "Hope You Mean This Forever"],
            ["Calligraphy", "Pretty Lies in Cursive"],
            ["Gothic", "Catholic Guilt Activated"],
            ["Trash Polka", "Angry and Horny"],
            ["Watercolor", "Looks Soft, Hits Hard"],
            ["Pixel", "Censored but You Know"],
            ["8-bit", "Retro Freak Mode"],
            ["American Old School", "Daddy Issues Classic"],
            ["Negative Space", "Teasing on Purpose"],
            ["Bio-organic", "Wet Sci-Fi Feelings"],
            ["Anime", "Questionable Taste"],
            ["Manga", "Black Ink, Dirty Thoughts"],
            ["Celtic", "Knotted Up Emotionally"],
            ["Nordic", "Pillaging With Intent"],
            ["Biomechanical", "Hard Parts Everywhere"],
            ["Tribal Polynesian", "Earned, Not Cosplay"],
            ["Māori", "Sacred and Serious Heat"],
            ["Samoan", "Pain You Asked For"],
            ["Marquesan", "Patterns That Dominate"],
            ["Sticker", "Commitment Issues"],
            ["Patch", "Temporary Vibes, Permanent Ink"],
            ["Black & Grey", "No Color, All Tension"],
            ["Micro-Realism", "Too Detailed, Staring Back"],
            ["Realism", "Why Is It Watching Me"],
            ["Geometric", "Sharp Angles, Sharp Intent"],
            ["Cyberpunk", "Future Is Filthy"],
            ["Futuristic", "Illegal in Some Timelines"],
            ["Comic", "Speech Bubble Energy"],
            ["Cartoon", "Cute but Unhinged"],
            ["Linework", "Clean Lines, Dirty Mind"],
            ["Illustrative", "Artist Has a Type"],
            ["Fine Line", "Delicate but Dangerous"],
            ["Single Needle", "Slow, Precise, Intimate"],
            ["Chicano", "Lowriders & Late Nights"],
            ["Lettering", "Hope You’re Sure"]
          ];
          return items.map(([name, comment], index) => {
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
                <div
                  className="font-medium text-[24px] text-center leading-none"
                  style={{ textShadow: "0 8px 24px rgba(0,0,0,0.95)" }}
                >
                  {name}
                </div>
                <div
                  className="font-medium text-[24px] text-center mt-0 leading-none"
                  style={{ textShadow: "0 8px 24px rgba(0,0,0,0.95)" }}
                >
                  {comment}
                </div>
              </div>
            );
          });
        })()}
      </div>
    </Scroller>
  );
}

/**
 * Bottom horizontal scroller - separate data from the top scroller.
 * This component is intentionally separate so its labels do not affect the top scroller.
 * Only the label array below was added — everything else mirrors the top scroller's behavior.
 */
export function ScrollerHorizontalBottomDemo() {
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
        {(() => {
          const items: [string, string][] = [
            ["Monochrome (Purple)", "Spiritual Mess"],
            ["black", "No Soul"],
            ["Neon", "Electric Crack"],
            ["High-Vibrancy", "Too Loud"],
            ["Jewel Tones", "Fake Rich"],
            ["Black & Grey Only", "Emotionally Stable-ish"],
            ["Duotone", "Two-Timing"],
            ["High-Saturation", "Overstimulated"],
            ["Pastel", "Soft Chaos"],
            ["Full Color", "Zero Filter"],
            ["blue", "Sad Hot"],
            ["Black & Grey", "Trust Me"],
            ["green", "Therapy Failed"],
            ["yellow", "Panic Mode"],
            ["Sepia", "Old Trauma"],
            ["Monochrome (Blue)", "Late Night Spiral"],
            ["red", "Red Flag"],
            ["Monochrome (Red)", "Anger Mode"],
            ["Muted", "Burnt Out"],
            ["Earth Tones", "Touch Grass"],
            ["Monochrome (Green)", "Broke Witch"],
            ["White-Ink Accents", "Blink & Miss"],
          ];

          // 3D-like extrusion using layered text-shadows (no neon/glow)
          const textShadowValue =
            "1px 1px 0 rgba(0,0,0,0.95), 2px 2px 0 rgba(0,0,0,0.9), 3px 3px 0 rgba(0,0,0,0.85), 0 8px 20px rgba(0,0,0,0.6)";

          return items.map(([name, comment], index) => {
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
                <div
                  className="font-medium text-[20px] md:text-[24px] text-center leading-none"
                  style={{ textShadow: textShadowValue }}
                >
                  {name}
                </div>
                <div
                  className="font-medium text-[20px] md:text-[24px] text-center mt-0 leading-none"
                  style={{ textShadow: textShadowValue }}
                >
                  {comment}
                </div>
              </div>
            );
          });
        })()}
      </div>
    </Scroller>
  );
}
