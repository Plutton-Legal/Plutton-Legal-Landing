"use client";

import Image from "next/image";
import { Phone } from "lucide-react";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import ExperianLogo from "@/components/ui/ExperianLogo";
import EquifaxLogo from "@/components/ui/EquifaxLogo";
import TransUnionLogo from "@/components/ui/TransUnionLogo";
import { useTranslation } from "@/lib/i18n/useTranslation";
import { site } from "@/config/site";

export default function Hero() {
  const t = useTranslation();
  const [line1, line2] = t.hero.heading.split("\n");

  return (
    <section className="bg-white pt-10 pb-16 md:pt-16 md:pb-24">
      <div className="max-w-6xl mx-auto px-5">
        <div className="flex flex-col md:grid md:grid-cols-2 md:gap-14 md:items-center">

          {/* Image — top on mobile, right column on desktop */}
          <div className="order-first md:order-last mb-6 md:mb-0">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl bg-tint">
              <Image
                src="/img/hero.jpeg"
                alt={t.hero.imageAlt}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Text — below image on mobile, left column on desktop */}
          <div className="order-last md:order-first">

            {/* Pill badge */}
            <span className="inline-flex items-center gap-2 bg-tint border border-line text-navy text-xs font-semibold px-3 py-1.5 rounded-full mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" aria-hidden="true" />
              {t.hero.subCta}
            </span>

            {/* H1 */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy mb-4 leading-[1.1] tracking-tight">
              <span className="block">{line1}</span>
              <span className="block">{line2}</span>
            </h1>

            {/* Subtext */}
            <p className="text-base text-ink leading-relaxed mb-6 md:mb-8">
              {t.hero.subtext}
            </p>

            {/* Primary CTA */}
            <a
              href={site.tel}
              className="inline-flex items-center justify-center gap-2 bg-gold text-navy font-bold text-base px-7 py-4 min-h-[52px] rounded-xl hover:brightness-105 active:scale-[0.98] transition-all w-full sm:w-auto"
            >
              <Phone size={17} strokeWidth={2.5} aria-hidden="true" />
              {t.hero.cta}
            </a>

            {/* WhatsApp secondary */}
            <div className="mt-4">
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-navy transition-colors"
              >
                <WhatsAppIcon size={15} />
                {t.hero.whatsappLink}
              </a>
            </div>

            {/* Bureau trust strip */}
            <div className="mt-6 pt-5 border-t border-line">
              <p className="text-xs text-muted mb-3">{t.hero.bureauLabel}</p>
              <div className="flex flex-wrap items-center gap-3">
                {/* Fixed-height pill container per logo — consistent padding and alignment */}
                <div className="inline-flex items-center justify-center bg-tint border border-line rounded-lg px-4 h-11">
                  <ExperianLogo height={22} />
                </div>
                <div className="inline-flex items-center justify-center bg-tint border border-line rounded-lg px-4 h-11">
                  {/* Equifax viewBox has 75% fill — higher height compensates */}
                  <EquifaxLogo height={27} />
                </div>
                <div className="inline-flex items-center justify-center bg-tint border border-line rounded-lg px-4 h-11">
                  <TransUnionLogo height={21} />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
