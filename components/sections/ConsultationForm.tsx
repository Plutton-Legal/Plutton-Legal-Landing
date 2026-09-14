"use client";

import { useState } from "react";
import { Phone, Check, Loader2 } from "lucide-react";
import Listbox from "@/components/ui/Listbox";
import ConsentCheckbox from "@/components/ui/ConsentCheckbox";
import VisaLogo from "@/components/ui/VisaLogo";
import MastercardLogo from "@/components/ui/MastercardLogo";
import { useTranslation } from "@/lib/i18n/useTranslation";
import { site } from "@/config/site";
import Reveal from "@/components/ui/Reveal";

type FormState = {
  name: string;
  email: string;
  phone: string;
  cityState: string;
  creditScore: string;
  income: string;
  goals: string;
  comments: string;
  consent1: boolean;
  consent2: boolean;
  honeypot: string;
};

const EMPTY_FORM: FormState = {
  name: "", email: "", phone: "", cityState: "",
  creditScore: "", income: "", goals: "", comments: "",
  consent1: false, consent2: false, honeypot: "",
};

function FieldLabel({ text, required }: { text: string; required: boolean }) {
  return (
    <span className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-widest text-white mb-1.5">
      {text}
      {required && <span className="text-gold text-xs leading-none">*</span>}
    </span>
  );
}

function inputCls(hasError?: string) {
  return `w-full min-h-[48px] px-4 text-base rounded-xl border bg-white text-navy placeholder:text-muted focus:outline-none transition-colors ${
    hasError ? "border-red-400 focus:border-red-400" : "border-line focus:border-navy"
  }`;
}

function ErrorMsg({ msg }: { msg?: string }) {
  if (!msg) return null;
  return <p className="mt-1 text-xs text-red-300" role="alert">{msg}</p>;
}

// Splits consent copy so specific terms become stub links
function ConsentText({ text }: { text: string }) {
  const linked = ["Privacy Policy", "Terms of Service", "Política de Privacidad", "Términos de Servicio", "SMS Terms", "Privacy", "Términos SMS", "Privacidad"];
  const pattern = new RegExp(`(${linked.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`, "g");
  const parts = text.split(pattern);
  return (
    <>
      {parts.map((part, i) =>
        linked.includes(part)
          ? <a key={i} href="#" className="underline text-white/90 hover:text-white">{part}</a>
          : part
      )}
    </>
  );
}

export default function ConsultationForm() {
  const t = useTranslation();
  const f = t.consultationForm;

  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const set = (key: keyof FormState, val: string | boolean) => {
    setForm((prev) => ({ ...prev, [key]: val }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const isValid =
    form.name.trim() &&
    form.email.trim() &&
    form.phone.replace(/\D/g, "").length >= 10 &&
    form.goals.trim() &&
    form.consent1;

  const validate = () => {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) e.name = f.errors.name;
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = f.errors.email;
    if (form.phone.replace(/\D/g, "").length < 10) e.phone = f.errors.phone;
    if (!form.goals.trim()) e.goals = f.errors.goals;
    if (!form.consent1) e.consent1 = f.errors.consent1;
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.honeypot) return;
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200)); // TODO: replace with real /api/lead POST
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="consultation" className="bg-navy-deep py-16 md:py-24">
      <div className="max-w-2xl mx-auto px-5">
        <Reveal>
          <h2 className="text-2xl md:text-4xl font-extrabold text-white text-center mb-10 tracking-tight leading-tight">
            {f.heading}
          </h2>
        </Reveal>

        <Reveal delayMs={100}>
        {submitted ? (
          <div className="bg-white/10 rounded-2xl p-8 text-center border border-white/10">
            <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center mx-auto mb-4">
              <Check size={22} strokeWidth={2.5} className="text-navy" aria-hidden="true" />
            </div>
            <p className="text-xl font-bold text-white mb-2">{f.successTitle}</p>
            <p className="text-sm text-white/70 mb-6">{f.successBody}</p>
            <a
              href={site.tel}
              className="inline-flex items-center gap-2 bg-gold text-navy font-bold text-sm px-6 py-3 rounded-xl hover:brightness-105 transition-all"
            >
              <Phone size={15} strokeWidth={2.5} aria-hidden="true" />
              {site.phoneDisplay}
            </a>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            noValidate
            className="bg-white/[0.06] border border-white/10 rounded-2xl p-6 md:p-10 space-y-5"
          >
            {/* Honeypot — hidden from real users */}
            <div className="absolute -left-[9999px] overflow-hidden" aria-hidden="true">
              <label htmlFor="hp-field">{f.honeypotLabel}</label>
              <input
                id="hp-field"
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                value={form.honeypot}
                onChange={(e) => set("honeypot", e.target.value)}
              />
            </div>

            {/* Name */}
            <div>
              <label htmlFor="f-name">
                <FieldLabel text={f.fields.name.label} required />
              </label>
              <input
                id="f-name"
                type="text"
                autoComplete="name"
                placeholder={f.fields.name.placeholder}
                value={form.name}
                aria-invalid={!!errors.name}
                onChange={(e) => set("name", e.target.value)}
                className={inputCls(errors.name)}
              />
              <ErrorMsg msg={errors.name} />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="f-email">
                <FieldLabel text={f.fields.email.label} required />
              </label>
              <input
                id="f-email"
                type="email"
                inputMode="email"
                autoComplete="email"
                placeholder={f.fields.email.placeholder}
                value={form.email}
                aria-invalid={!!errors.email}
                onChange={(e) => set("email", e.target.value)}
                className={inputCls(errors.email)}
              />
              <ErrorMsg msg={errors.email} />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="f-phone">
                <FieldLabel text={f.fields.phone.label} required />
              </label>
              <input
                id="f-phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                placeholder={f.fields.phone.placeholder}
                value={form.phone}
                aria-invalid={!!errors.phone}
                onChange={(e) => set("phone", e.target.value)}
                className={inputCls(errors.phone)}
              />
              <ErrorMsg msg={errors.phone} />
            </div>

            {/* City & State */}
            <div>
              <label htmlFor="f-city">
                <FieldLabel text={f.fields.cityState.label} required={false} />
              </label>
              <input
                id="f-city"
                type="text"
                autoComplete="address-level2"
                placeholder={f.fields.cityState.placeholder}
                value={form.cityState}
                onChange={(e) => set("cityState", e.target.value)}
                className={inputCls()}
              />
            </div>

            {/* Credit Score */}
            <div>
              <FieldLabel text={f.fields.creditScore.label} required={false} />
              <Listbox
                id="f-score"
                aria-label={f.fields.creditScore.label}
                options={f.fields.creditScore.options}
                value={form.creditScore}
                onChange={(v) => set("creditScore", v)}
              />
            </div>

            {/* Income */}
            <div>
              <FieldLabel text={f.fields.income.label} required={false} />
              <Listbox
                id="f-income"
                aria-label={f.fields.income.label}
                options={f.fields.income.options}
                value={form.income}
                onChange={(v) => set("income", v)}
              />
            </div>

            {/* Goals */}
            <div>
              <label htmlFor="f-goals">
                <FieldLabel text={f.fields.goals.label} required />
              </label>
              <textarea
                id="f-goals"
                rows={4}
                placeholder={f.fields.goals.placeholder}
                value={form.goals}
                aria-invalid={!!errors.goals}
                onChange={(e) => set("goals", e.target.value)}
                className={`${inputCls(errors.goals)} py-3 resize-none`}
              />
              <ErrorMsg msg={errors.goals} />
            </div>

            {/* Comments */}
            <div>
              <label htmlFor="f-comments">
                <FieldLabel text={f.fields.comments.label} required={false} />
              </label>
              <textarea
                id="f-comments"
                rows={4}
                placeholder={f.fields.comments.placeholder}
                value={form.comments}
                onChange={(e) => set("comments", e.target.value)}
                className={`${inputCls()} py-3 resize-none`}
              />
            </div>

            {/* Consent checkboxes */}
            <div className="space-y-4 pt-2">
              <div>
                <ConsentCheckbox checked={form.consent1} onChange={(v) => set("consent1", v)}>
                  <ConsentText text={f.consent1} />
                </ConsentCheckbox>
                {errors.consent1 && (
                  <p className="mt-1 text-xs text-red-300 pl-11" role="alert">{errors.consent1}</p>
                )}
              </div>
              <ConsentCheckbox checked={form.consent2} onChange={(v) => set("consent2", v)}>
                <ConsentText text={f.consent2} />
              </ConsentCheckbox>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={!isValid || loading}
              className="w-full min-h-[52px] rounded-xl font-bold text-base transition-all flex items-center justify-center gap-2 bg-gold text-navy hover:brightness-105 active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:brightness-100 mt-2"
            >
              {loading ? (
                <><Loader2 size={18} className="animate-spin" aria-hidden="true" />{f.loading}</>
              ) : f.submit}
            </button>

            {/* Payment + contact info */}
            <div className="border-t border-white/10 pt-5 space-y-3">
              <p className="text-xs text-white/50 text-center">{f.paymentNote}</p>
              <div className="flex items-center justify-center gap-3">
                <VisaLogo />
                <MastercardLogo />
              </div>
              <p className="text-[11px] text-white/40 text-center leading-relaxed">{f.paymentFine}</p>
              <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 pt-1">
                <a
                  href={`mailto:${site.email}`}
                  className="text-xs text-white/60 underline hover:text-white transition-colors"
                >
                  {site.email}
                </a>
                <span className="text-white/20 text-xs hidden sm:inline" aria-hidden="true">·</span>
                <a
                  href={site.tel}
                  className="text-xs text-white/60 underline hover:text-white transition-colors"
                >
                  {site.phoneDisplay}
                </a>
              </div>
            </div>
          </form>
        )}
        </Reveal>
      </div>
    </section>
  );
}
