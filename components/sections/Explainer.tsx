"use client";

import { useTranslation } from "@/lib/i18n/useTranslation";
import Reveal from "@/components/ui/Reveal";

export default function Explainer() {
  const t = useTranslation();

  return (
    <section className="bg-tint py-16 md:py-24">
      <Reveal className="max-w-2xl mx-auto px-5">
        <h2 className="text-2xl md:text-4xl font-extrabold text-navy tracking-tight leading-tight mb-6 md:mb-8">
          {t.explainer.heading}
        </h2>
        <p className="text-base text-ink leading-relaxed mb-4">
          {t.explainer.p1}
        </p>
        <p className="text-base text-ink leading-relaxed">
          {t.explainer.p2}
        </p>
      </Reveal>
    </section>
  );
}
