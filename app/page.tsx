'use client';

import React from 'react';
import { ScrollerHorizontalDemo } from '@/components/ui/horizontal-scroll';
import { ScrollerHiddenDemo } from '@/components/ui/verticle-scroll';

export default function Page() {
  return (
    <main className="container mx-auto p-6">
      {/* Top horizontal scroller */}
      <section className="mb-[10px]">
        <ScrollerHorizontalDemo />
      </section>

      {/* Two vertical scrollers side-by-side */}
      <section className="flex gap-[100px] justify-center mb-[10px]">
        <div className="flex-1 max-w-[480px]">
          <ScrollerHiddenDemo />
        </div>
        <div className="flex-1 max-w-[480px]">
          <ScrollerHiddenDemo />
        </div>
      </section>

      {/* Bottom horizontal scroller */}
      <section>
        <ScrollerHorizontalDemo />
      </section>
    </main>
  );
}
