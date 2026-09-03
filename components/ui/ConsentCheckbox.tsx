"use client";

import { Check } from "lucide-react";

interface ConsentCheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  children: React.ReactNode;
}

export default function ConsentCheckbox({ checked, onChange, children }: ConsentCheckboxProps) {
  return (
    <label className="flex gap-3 items-start cursor-pointer group">
      <span className="shrink-0 flex items-center justify-center w-11 h-11 -m-1.5">
        <span
          className={`w-6 h-6 rounded-md border-2 flex items-center justify-center transition-colors ${
            checked
              ? "bg-gold border-gold"
              : "bg-white/10 border-white/30 group-hover:border-white/60"
          }`}
        >
          {checked && (
            <Check size={14} strokeWidth={3} className="text-navy" aria-hidden="true" />
          )}
        </span>
      </span>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="sr-only"
      />
      <span className="text-xs text-white/70 leading-relaxed pt-0.5">{children}</span>
    </label>
  );
}
