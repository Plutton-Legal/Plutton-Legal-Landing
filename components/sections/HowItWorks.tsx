"use client";

import { FileSearch, Scale, TrendingUp } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useTranslation } from "@/lib/i18n/useTranslation";

const stepIcons: LucideIcon[] = [FileSearch, Scale, TrendingUp];

export default function HowItWorks() {
  const t = useTranslation();
  const steps = t.howItWorks.steps;

  return (
    <section id="how-it-works" className="bg-white py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-5">
        <h2 className="text-2xl md:text-4xl font-extrabold text-navy mb-12 text-center tracking-tight">
          {t.howItWorks.heading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-8">
          {steps.map((step, i) => {
            const Icon = stepIcons[i];
            return (
              <div
                key={i}
                className={`py-8 md:py-0${i < steps.length - 1 ? " border-b md:border-b-0 border-line" : ""}`}
              >
                <div className="w-10 h-10 rounded-lg bg-tint flex items-center justify-center mb-4">
                  <Icon size={20} strokeWidth={1.75} className="text-navy" aria-hidden="true" />
                </div>
                <p className="text-xs font-bold text-gold tracking-widest uppercase mb-2">
                  0{i + 1}
                </p>
                <h3 className="text-lg font-bold text-navy mb-2 leading-snug">{step.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{step.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
