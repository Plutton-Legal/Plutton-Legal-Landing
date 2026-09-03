"use client";

import { Phone, MessageSquare } from "lucide-react";
import { useTranslation } from "@/lib/i18n/useTranslation";
import { site } from "@/config/site";

export default function StickyBar() {
  const t = useTranslation();

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex border-t border-line bg-white">
      <a
        href={site.tel}
        className="flex-1 flex items-center justify-center gap-2 bg-gold text-navy font-bold text-sm min-h-[54px] active:brightness-95 transition-all"
      >
        <Phone size={15} strokeWidth={2.5} aria-hidden="true" />
        {t.stickyBar.call}
      </a>
      <a
        href={site.sms}
        className="flex-1 flex items-center justify-center gap-2 bg-white text-navy font-bold text-sm min-h-[54px] border-l border-line active:bg-tint transition-all"
      >
        <MessageSquare size={15} strokeWidth={2.5} aria-hidden="true" />
        {t.stickyBar.text}
      </a>
    </div>
  );
}
