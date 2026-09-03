"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

interface ListboxProps {
  id: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
  hasError?: boolean;
  "aria-label"?: string;
}

export default function Listbox({
  id,
  options,
  value,
  onChange,
  hasError,
  "aria-label": ariaLabel,
}: ListboxProps) {
  const [open, setOpen] = useState(false);
  const [focusedIdx, setFocusedIdx] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const isPlaceholder = value === "" || value === options[0];
  const displayed = isPlaceholder ? options[0] : value;

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  // Scroll focused option into view
  useEffect(() => {
    if (!open || !listRef.current) return;
    const item = listRef.current.children[focusedIdx] as HTMLElement;
    item?.scrollIntoView({ block: "nearest" });
  }, [focusedIdx, open]);

  const select = (opt: string) => {
    onChange(opt === options[0] ? "" : opt);
    setOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!open) {
      if (e.key === "Enter" || e.key === " " || e.key === "ArrowDown") {
        e.preventDefault();
        setOpen(true);
        setFocusedIdx(0);
      }
      return;
    }
    if (e.key === "Escape") { setOpen(false); return; }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setFocusedIdx((i) => Math.min(i + 1, options.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setFocusedIdx((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      select(options[focusedIdx]);
    }
  };

  return (
    <div ref={containerRef} className="relative" onKeyDown={handleKeyDown}>
      <button
        id={id}
        type="button"
        role="combobox"
        aria-label={ariaLabel}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-controls={`${id}-list`}
        onClick={() => { setOpen((o) => !o); setFocusedIdx(0); }}
        className={`w-full min-h-[48px] px-4 text-base text-left rounded-xl border bg-white flex items-center justify-between gap-2 transition-colors focus:outline-none ${
          hasError
            ? "border-red-400 focus:border-red-400"
            : "border-line focus:border-navy"
        } ${isPlaceholder ? "text-muted" : "text-navy"}`}
      >
        <span className="truncate">{displayed}</span>
        <ChevronDown
          size={16}
          strokeWidth={2}
          className={`shrink-0 text-muted transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>

      {open && (
        <ul
          id={`${id}-list`}
          ref={listRef}
          role="listbox"
          aria-label={ariaLabel}
          className="absolute z-30 left-0 right-0 mt-1.5 bg-white border border-line rounded-xl shadow-lg overflow-y-auto max-h-56 py-1"
        >
          {options.map((opt, i) => {
            const isSelected = value !== "" && opt === value;
            return (
              <li
                key={opt}
                role="option"
                aria-selected={isSelected}
                onMouseDown={() => select(opt)}
                onMouseEnter={() => setFocusedIdx(i)}
                className={`flex items-center justify-between px-4 py-2.5 text-sm cursor-pointer select-none ${
                  i === focusedIdx ? "bg-tint" : ""
                } ${i === 0 ? "text-muted" : "text-navy"}`}
              >
                {opt}
                {isSelected && (
                  <svg
                    className="w-4 h-4 text-navy shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
