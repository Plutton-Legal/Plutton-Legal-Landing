"use client";

import { Phone } from "lucide-react";
import Logo from "@/components/ui/Logo";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import VisaLogo from "@/components/ui/VisaLogo";
import MastercardLogo from "@/components/ui/MastercardLogo";
import { useTranslation } from "@/lib/i18n/useTranslation";
import { site } from "@/config/site";

export default function Footer() {
  const t = useTranslation();
  const cols = t.footer.columns;

  return (
    <footer className="bg-footer pt-14 pb-8">
      <div className="max-w-5xl mx-auto px-5">
        {/* Logo */}
        <div className="mb-10">
          <Logo variant="white" />
        </div>

        {/* Three columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 mb-10">
          {/* Contact */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-widest text-gold mb-4">
              {cols.contact.heading}
            </p>
            <ul className="space-y-2">
              <li className="text-sm font-bold text-white">{site.company}</li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="text-sm text-muted hover:text-white transition-colors"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.tel}
                  className="flex items-center gap-2 text-sm text-muted hover:text-white transition-colors"
                >
                  <Phone size={13} strokeWidth={2} className="shrink-0" aria-hidden="true" />
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted hover:text-white transition-colors"
                >
                  <WhatsAppIcon size={13} />
                  {site.phoneDisplay}
                </a>
              </li>
              <li className="text-sm text-muted">{cols.contact.hours}</li>
              <li className="text-sm text-muted">{site.web}</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-widest text-gold mb-4">
              {cols.legal.heading}
            </p>
            <ul className="space-y-2">
              {cols.legal.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Accepted Payments */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-widest text-gold mb-4">
              {cols.payments.heading}
            </p>
            <div className="flex gap-3 mb-3">
              <VisaLogo />
              <MastercardLogo />
            </div>
            <p className="text-xs text-muted leading-relaxed">{cols.payments.note}</p>
          </div>
        </div>

        {/* Bottom band */}
        <div className="border-t border-white/10 pt-8 space-y-3 text-center">
          <p className="text-xs text-muted">{t.footer.copyright}</p>
          <p className="text-xs text-muted leading-relaxed max-w-2xl mx-auto">
            {t.footer.disclaimer}
          </p>
          <p className="text-xs text-muted leading-relaxed max-w-2xl mx-auto">
            {t.footer.sms}
          </p>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 pt-2">
            {t.footer.bottomLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs text-muted hover:text-white transition-colors underline underline-offset-2"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
