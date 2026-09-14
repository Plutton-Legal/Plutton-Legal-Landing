"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "@/lib/i18n/useTranslation";
import Reveal from "@/components/ui/Reveal";

export default function FAQ() {
  const t = useTranslation();
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-white py-16 md:py-24">
      <div className="max-w-2xl mx-auto px-5">
        <Reveal>
          <h2 className="text-2xl md:text-4xl font-extrabold text-navy mb-10 tracking-tight">
            {t.faq.heading}
          </h2>
        </Reveal>
        <div className="divide-y divide-line">
          {t.faq.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={i} delayMs={i * 60}>
                <div>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-4 py-4 text-left"
                  >
                    <span className="text-sm font-bold text-navy leading-snug">{item.q}</span>
                    <ChevronDown
                      size={16}
                      strokeWidth={2}
                      className={`text-muted shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                      aria-hidden="true"
                    />
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-4 text-sm text-ink leading-relaxed">{item.a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
