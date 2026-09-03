"use client";

import { useTranslation } from "@/lib/i18n/useTranslation";

export default function PullQuote() {
  const t = useTranslation();

  return (
    <section className="bg-navy-deep py-16 md:py-24">
      <div className="max-w-2xl mx-auto px-5 text-center">
        <blockquote className="text-xl md:text-3xl font-bold text-white leading-snug tracking-tight">
          &ldquo;{t.pullQuote.quote}&rdquo;
        </blockquote>
      </div>
    </section>
  );
}
