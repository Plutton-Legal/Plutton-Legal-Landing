"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useTranslation } from "@/lib/i18n/useTranslation";

export default function FAQ() {
  const t = useTranslation();
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-white py-16 md:py-24">
      <div className="max-w-2xl mx-auto px-5">
        <h2 className="text-2xl md:text-4xl font-extrabold text-navy mb-10 tracking-tight">
          {t.faq.heading}
        </h2>
        <div className="divide-y divide-line">
          {t.faq.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={i}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 py-4 text-left"
                >
                  <span className="text-sm font-bold text-navy leading-snug">{item.q}</span>
                  {isOpen
                    ? <ChevronUp size={16} strokeWidth={2} className="text-muted shrink-0" aria-hidden="true" />
                    : <ChevronDown size={16} strokeWidth={2} className="text-muted shrink-0" aria-hidden="true" />
                  }
                </button>
                {isOpen && (
                  <p className="pb-4 text-sm text-ink leading-relaxed">{item.a}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
