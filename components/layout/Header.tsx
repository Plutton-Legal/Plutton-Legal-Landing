"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import Logo from "@/components/ui/Logo";
import LanguageToggle from "@/components/ui/LanguageToggle";
import { useTranslation } from "@/lib/i18n/useTranslation";
import { site } from "@/config/site";

export default function Header() {
  const t = useTranslation();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-line">
      {/* Main bar */}
      <div className="flex h-14 md:h-16 items-center gap-4 px-6">
        <Link href="/" className="shrink-0">
          <Logo />
        </Link>

        {/* Desktop nav — hidden on mobile */}
        <nav
          className="hidden md:flex items-center gap-6 ml-auto"
          aria-label="Navegación principal"
        >
          <a href="#how-it-works" className="text-sm font-semibold text-navy hover:text-gold transition-colors">
            {t.header.navHowItWorks}
          </a>
          <a href="#reviews" className="text-sm font-semibold text-navy hover:text-gold transition-colors">
            {t.header.navReviews}
          </a>
          <a href="#faq" className="text-sm font-semibold text-navy hover:text-gold transition-colors">
            {t.header.navFaq}
          </a>
          <a href="#check-your-score" className="text-sm font-semibold text-navy hover:text-gold transition-colors">
            {t.header.navCheckScore}
          </a>
          <a href="#consultation" className="text-sm font-semibold text-navy hover:text-gold transition-colors">
            {t.header.navConsultation}
          </a>
        </nav>

        {/* Language toggle + CTA — ml-auto on mobile, md:ml-4 after nav on desktop */}
        <div className="flex items-center gap-3 ml-auto md:ml-4">
          <LanguageToggle />
          <a
            href={site.tel}
            className="flex items-center gap-1.5 bg-gold text-navy font-bold text-sm px-4 rounded-lg min-h-[40px] hover:brightness-105 active:scale-[0.98] transition-all"
          >
            <Phone size={14} strokeWidth={2.5} aria-hidden="true" />
            {t.header.callNow}
          </a>
        </div>
      </div>

      {/* Mobile nav strip — scrollable horizontally to fit all links */}
      <div className="md:hidden bg-tint border-b border-line overflow-x-auto scrollbar-none">
        <div className="flex items-center gap-5 py-2.5 px-5 w-max">
          <a href="#how-it-works" className="text-sm font-semibold text-navy hover:text-gold transition-colors whitespace-nowrap">
            {t.header.navHowItWorks}
          </a>
          <a href="#reviews" className="text-sm font-semibold text-navy hover:text-gold transition-colors whitespace-nowrap">
            {t.header.navReviews}
          </a>
          <a href="#faq" className="text-sm font-semibold text-navy hover:text-gold transition-colors whitespace-nowrap">
            {t.header.navFaq}
          </a>
          <a href="#check-your-score" className="text-sm font-semibold text-navy hover:text-gold transition-colors whitespace-nowrap">
            {t.header.navCheckScore}
          </a>
          <a href="#consultation" className="text-sm font-semibold text-navy hover:text-gold transition-colors whitespace-nowrap">
            {t.header.navConsultation}
          </a>
        </div>
      </div>
    </header>
  );
}
