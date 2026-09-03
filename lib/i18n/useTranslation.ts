"use client";

import { useLanguage } from "./LanguageProvider";
import { dictionaries } from "./dictionaries";

export function useTranslation() {
  const { lang } = useLanguage();
  return dictionaries[lang];
}
