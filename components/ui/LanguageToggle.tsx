"use client";

import { Globe } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import type { Lang } from "@/types/i18n";

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage();
  const next: Lang = lang === "es" ? "en" : "es";

  return (
    <button
      type="button"
      onClick={() => setLang(next)}
      className="flex items-center gap-1.5 text-sm font-semibold text-navy hover:text-gold transition-colors min-h-[40px] px-1"
      aria-label={`Cambiar idioma a ${next.toUpperCase()}`}
    >
      <Globe size={13} strokeWidth={2} aria-hidden="true" />
      {next.toUpperCase()}
    </button>
  );
}
