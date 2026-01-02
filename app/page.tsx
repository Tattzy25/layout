'use client';

import React, { useState } from 'react';
import { ScrollerHorizontal, ScrollerHorizontalBottom } from '@/components/ui/horizontal-scroll';
import { ScrollerHidden, ScrollerVerticalAspect } from '@/components/ui/verticle-scroll';
import { SelectionsBar } from '@/components/selections';
import { FileUploadChatInput } from "@/components/text-area-upload";


export default function Page() {
  const [placement, setPlacement] = useState<number | null>(null);
  const [placementLabel, setPlacementLabel] = useState<string | undefined>(undefined);

  const [style, setStyle] = useState<number | null>(null);
  const [styleLabel, setStyleLabel] = useState<string | undefined>(undefined);

  const [color, setColor] = useState<number | null>(null);
  const [colorLabel, setColorLabel] = useState<string | undefined>(undefined);

  const [aspect, setAspect] = useState<number | null>(null);
  const [aspectLabel, setAspectLabel] = useState<string | undefined>(undefined);

  const badges: { key: string; label: string }[] = [];
  if (placement !== null) badges.push({ key: 'placement', label: placementLabel ?? 'Placement' });
  if (style !== null) badges.push({ key: 'style', label: styleLabel ?? 'Style' });
  if (color !== null) badges.push({ key: 'color', label: colorLabel ?? 'Color' });
  if (aspect !== null) badges.push({ key: 'aspect', label: aspectLabel ?? 'Aspect' });

  return (
    <main className="container mx-auto p-6">
      {/* Badge bar (shows selections from all components) */}
      <div className="w-full mb-2 flex flex-col gap-2">
        <FileUploadChatInput />
        <SelectionsBar items={badges} />
      </div>

      {/* Top horizontal scroller (Styles) */}
      <section className="mb-[10px]">
        <ScrollerHorizontal
          selected={style}
          onSelect={(i: number | null, label?: string) => {
            setStyle(i);
            setStyleLabel(label);
          }}
        />
      </section>

      {/* Two vertical scrollers side-by-side */}
      <section className="flex gap-[80px] justify-center mb-[10px]">
        <div className="flex-1 max-w-[480px]">
          <ScrollerHidden
            selected={placement}
            onSelect={(i: number | null, label?: string) => {
              setPlacement(i);
              setPlacementLabel(label);
            }}
          />
        </div>
        <div className="flex-1 max-w-[480px]">
          <ScrollerVerticalAspect
            selected={aspect}
            onSelect={(i: number | null, label?: string) => {
              setAspect(i);
              setAspectLabel(label);
            }}
          />
        </div>
      </section>

      {/* Bottom horizontal scroller (Colors) */}
      <section>
        <ScrollerHorizontalBottom
          selected={color}
          onSelect={(i: number | null, label?: string) => {
            setColor(i);
            setColorLabel(label);
          }}
        />
      </section>
    </main>
  );
}
