'use client';

import React, { useState } from "react";
import { Scroller } from "@/components/ui/scroller";
 
export function ScrollerHidden({ selected: selectedProp, onSelect }: { selected?: number | null; onSelect?: (index: number | null, label?: string) => void }) {
  const [internalSelected, setInternalSelected] = useState<number | null>(null);
  const selected = selectedProp ?? internalSelected;

  function toggle(index: number, label?: string) {
    if (onSelect) {
      onSelect(selected === index ? null : index, selected === index ? undefined : label);
    } else {
      setInternalSelected((prev) => (prev === index ? null : index));
    }
  }

  const placements: string[] = [
    "Upper Stomach – Midlife Choice",
    "Calf / Shin – Pain Farming",
    "Under Skin Implants – Too Far",
    "Legs – Commitment Issues",
    "Elbow Pit – Why Here",
    "Behind Knee Crease – Self-Hate",
    "Spine – Main Character",
    "Web of Hand – Career Killer",
    "Sole of Foot – Masochist",
    "Back – Overcompensating",
    "Feet – Unnecessary",
    "Face – Life Choice",
    "Forearm – Attention Seeking",
    "Thigh – Safe Bet",
    "Buttocks – Inside Joke",
    "Back – Ran Out",
    "Lower Back – Brave Today",
    "Hands – No Regrets",
    "Arms – Story Time",
    "Hand – Bold Move",
    "Finger – Tiny Flex",
    "Neck – Look At Me",
    "Front Thigh – Casual Lie",
    "Chest – Feelings Zone",
    "Palm Lines – Too Deep",
    "Under Tongue – Unwell",
    "Behind Ears – Sneaky Freak",
    "Ankle – Starter Pack",
    "Eye Corners – Unhinged",
    "Scalp Under Hair – Secret Psycho",
    "Upper Back – Playing Safe",
    "Between Toes – Absolutely Not",
    "Inside Nostrils – Seek Help",
    "Between Fingers – Try-Hard",
    "Under Breast Tissue – Risky Choice",
    "Third Eye – Delusional",
    "Ribcage – Breathe Wrong",
    "Shoulder / Deltoid – Gym Proof",
    "Thigh – Ran Out",
    "Back of Neck – Warning Label",
    "Neck – Bold Today",
    "Behind Ear – Low-Key Mess",
    "Chest / Sternum / Under-bust – Sacred Chaos",
    "Armpit – No Standards",
    "Sacral – Lower Issues",
    "Heart Chakra – Trauma Dump",
    "Ear Canal Interior – Unacceptable",
    "Root – Deep Problems",
    "Upper Arm / Bicep – Safe Choice",
    "Gums – Unstable",
    "Hand / Palm / Fingers / Knuckles – Zero Chill",
    "Back Thigh – Hidden Regret",
    "Mid Back – Center Mess",
    "Inner Lip – Secret Dumb",
    "Front Neck – Bold Idiot",
    "Throat Chakra – Oversharing",
    "Foot / Toes – Pain Goblin",
    "Chest – Emotional",
    "Spine – Final Boss",
    "Sternum – Pain Magnet",
    "Finger Joints – Hard Mode",
    "Inner Thigh – Close Call",
    "Stomach / Abdomen – Core Trauma",
    "Collarbone Strips – Pretty Risk",
    "Upper Arm – Default Setting",
    "Outer Forearm – Showoff",
    "Palate – Deranged",
    "Ribs / Side – Bad Breathing",
  ];

  return (
    <Scroller className="flex h-80 w-full flex-col gap-2.5 p-4" hideScrollbar>
      {placements.map((item, index) => {
        const isSelected = selected === index;
        return (
          <div
            key={index}
            role="button"
            tabIndex={0}
            aria-pressed={isSelected}
            onClick={() => toggle(index, placements[index])}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                toggle(index, placements[index]);
              }
            }}
            className={`flex h-40 items-center justify-center rounded-md bg-accent p-4 cursor-pointer ring-offset-2 ring-offset-background transition-all duration-200 ease-in-out focus:outline-none ${isSelected ? "ring-4 ring-primary/80" : "ring-2 ring-primary/60"}`}
          >
            <div className="font-medium text-[18px] md:text-[22px] text-center">{item}</div>
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
export function ScrollerVerticalAspect({ selected: selectedProp, onSelect }: { selected?: number | null; onSelect?: (index: number | null, label?: string) => void }) {
  const [internalSelected, setInternalSelected] = useState<number | null>(null);
  const selected = selectedProp ?? internalSelected;

  function toggle(index: number, label?: string) {
    if (onSelect) {
      onSelect(selected === index ? null : index, selected === index ? undefined : label);
    } else {
      setInternalSelected((prev) => (prev === index ? null : index));
    }
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
    ["9:21", "Cosmic Doorway, Somewhere Moist"],
  ];

  return (
    <Scroller className="flex h-80 w-full flex-col gap-2.5 p-4" hideScrollbar>
      {items.map(([num, name], index) => {
        const isSelected = selected === index;
        return (
          <div
            key={index}
            role="button"
            tabIndex={0}
            aria-pressed={isSelected}
            onClick={() => toggle(index, `${num} ${name}`)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                toggle(index, `${num} ${name}`);
              }
            }}
            className={`flex h-40 items-center justify-center rounded-md bg-accent p-4 cursor-pointer ring-offset-2 ring-offset-background transition-all duration-200 ease-in-out focus:outline-none ${isSelected ? "ring-4 ring-primary/80" : "ring-2 ring-primary/60"}`}
          >
            <div className="flex items-center gap-3">
              <div className="font-medium text-[18px] md:text-[22px] text-center">{num}</div>
              <div className="font-medium text-[18px] md:text-[22px] text-center">{name}</div>
            </div>
          </div>
        );
      })}
    </Scroller>
  );
}
