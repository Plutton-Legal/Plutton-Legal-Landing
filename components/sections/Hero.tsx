"use client";

import Image from "next/image";
import { Phone } from "lucide-react";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import ExperianLogo from "@/components/ui/ExperianLogo";
import EquifaxLogo from "@/components/ui/EquifaxLogo";
import TransUnionLogo from "@/components/ui/TransUnionLogo";
import { useTranslation } from "@/lib/i18n/useTranslation";
import { site } from "@/config/site";
import Reveal from "@/components/ui/Reveal";

export default function Hero() {
  const t = useTranslation();
  const [line1, line2] = t.hero.heading.split("\n");

  return (
    <section className="relative isolate flex items-center min-h-[85vh] lg:min-h-[90vh] overflow-hidden bg-navy">
      {/* Full-bleed background image */}
      <Image
        src="/img/newHero.jpeg"
        alt=""
        fill
        preload
        sizes="100vw"
        className="-z-20 object-cover object-[75%_center] md:object-center"
      />

      {/* Overlay — flat wash on mobile (text spans full width), left-to-right fade on desktop (text sits in left column) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-navy/70 md:bg-gradient-to-r md:from-navy/80 md:via-navy/35 md:to-transparent"
      />

      <Reveal className="w-full max-w-7xl mx-auto px-6 lg:px-16 py-20">
        <div className="max-w-xl">

          {/* 1. Badge */}
          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium px-4 py-2 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" aria-hidden="true" />
            {t.hero.subCta}
          </span>

          {/* 2. Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight mb-5">
            <span className="block">{line1}</span>
            <span className="block">{line2}</span>
          </h1>

          {/* 3. Subcopy */}
          <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-md mb-8">
            {t.hero.subtext}
          </p>

          {/* 4. CTA group */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <a
              href={site.tel}
              className="inline-flex items-center justify-center gap-2 bg-gold text-navy font-bold text-base px-8 py-4 min-h-[52px] rounded-xl shadow-lg hover:brightness-105 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <Phone size={17} strokeWidth={2.5} aria-hidden="true" />
              {t.hero.cta}
            </a>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-semibold text-base px-8 py-4 min-h-[52px] rounded-xl hover:bg-white/10 transition-all"
            >
              <WhatsAppIcon size={17} />
              {t.hero.whatsappLink}
            </a>
          </div>

          {/* 5. Bureau trust strip — links to the credit check section */}
          <a
            href="#check-your-score"
            aria-label={t.creditCheck.heading}
            className="group block pt-6 border-t border-white/20"
          >
            <p className="text-xs uppercase tracking-wide text-white/60 mb-3 group-hover:text-white transition-colors">
              {t.hero.bureauLabel}
            </p>
            <div className="flex flex-wrap items-center gap-3">
              {/* Fixed-height pill container per logo — opaque so navy-fill logos stay legible over the photo */}
              <div className="inline-flex items-center justify-center bg-white border border-line rounded-lg px-4 h-11 group-hover:border-gold transition-colors">
                <ExperianLogo height={22} />
              </div>
              <div className="inline-flex items-center justify-center bg-white border border-line rounded-lg px-4 h-11 group-hover:border-gold transition-colors">
                {/* Equifax viewBox has 75% fill — higher height compensates */}
                <EquifaxLogo height={27} />
              </div>
              <div className="inline-flex items-center justify-center bg-white border border-line rounded-lg px-4 h-11 group-hover:border-gold transition-colors">
                <TransUnionLogo height={21} />
              </div>
            </div>
          </a>

        </div>
      </Reveal>
    </section>
  );
}
