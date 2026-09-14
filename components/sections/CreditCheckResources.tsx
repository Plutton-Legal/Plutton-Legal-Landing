"use client";

import { ExternalLink } from "lucide-react";
import ExperianLogo from "@/components/ui/ExperianLogo";
import EquifaxLogo from "@/components/ui/EquifaxLogo";
import TransUnionLogo from "@/components/ui/TransUnionLogo";
import { useTranslation } from "@/lib/i18n/useTranslation";

const resourceLogos: Record<string, React.ReactNode> = {
  "Experian": <ExperianLogo height={30} />,
  "Equifax": <EquifaxLogo height={36} />,
  "TransUnion": <TransUnionLogo height={28} />,
};

export default function CreditCheckResources() {
  const t = useTranslation();
  const s = t.creditCheck;

  return (
    <section id="check-your-score" className="bg-navy py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-5">

        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
            {s.heading}
          </h2>
          <p className="text-base text-white/70 max-w-xl mx-auto leading-relaxed">
            {s.subtext}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {s.resources.map((resource) => (
            <a
              key={resource.name}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl p-6 flex flex-col hover:shadow-2xl transition-shadow"
              aria-label={`${resource.name} — ${resource.description}`}
            >
              <div className="mb-4">
                {resourceLogos[resource.name]}
              </div>

              <span
                className={`inline-flex self-start text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full mb-3 ${
                  resource.paid
                    ? "bg-line text-muted"
                    : "bg-tint border border-line text-navy"
                }`}
              >
                {resource.badgeLabel}
              </span>

              <p className="text-sm text-muted leading-relaxed flex-1 mb-5">
                {resource.description}
              </p>

              <span className="inline-flex items-center gap-1.5 text-sm font-bold text-navy group-hover:gap-3 transition-all">
                {resource.cta}
                <ExternalLink size={13} strokeWidth={2} aria-hidden="true" />
              </span>
            </a>
          ))}
        </div>

        <p className="text-center text-xs text-white/40 mt-8 max-w-lg mx-auto leading-relaxed">
          {s.note}
        </p>

      </div>
    </section>
  );
}
