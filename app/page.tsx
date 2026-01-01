'use client';

import React from 'react';
import { ScrollerHorizontalDemo, ScrollerHorizontalBottomDemo } from '@/components/ui/horizontal-scroll';
import { ScrollerVerticalAspectDemo } from '@/components/ui/verticle-scroll';
import { FileUploadChatInputDemo } from '@/components/text-area-upload';

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
          <FileUploadChatInputDemo />
        </div>
        <div className="flex-1 max-w-[480px]">
          <ScrollerVerticalAspectDemo />
        </div>
      </section>

      {/* Bottom horizontal scroller */}
      <section>
        <ScrollerHorizontalBottomDemo />
      </section>
    </main>
  );
}
