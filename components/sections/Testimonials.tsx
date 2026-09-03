"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { useTranslation } from "@/lib/i18n/useTranslation";

function Avatar({ index, initial, name }: { index: number; initial: string; name: string }) {
  const [err, setErr] = useState(false);

  if (err) {
    return (
      <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center shrink-0">
        <span className="text-white font-bold text-sm" aria-hidden="true">{initial}</span>
      </div>
    );
  }

  return (
    <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 bg-tint">
      <Image
        src={`/img/testimonial-${index + 1}.jpg`}
        alt={name}
        fill
        sizes="40px"
        className="object-cover"
        onError={() => setErr(true)}
      />
    </div>
  );
}

export default function Testimonials() {
  const t = useTranslation();
  const [active, setActive] = useState(0);
  const items = t.testimonials.items;
  const touchStartX = useRef<number>(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) < 50) return;
    if (delta > 0) {
      setActive((prev) => Math.min(prev + 1, items.length - 1));
    } else {
      setActive((prev) => Math.max(prev - 1, 0));
    }
  };

  return (
    <section id="reviews" className="bg-tint py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-5">
        <h2 className="text-2xl md:text-4xl font-extrabold text-navy mb-12 text-center tracking-tight">
          {t.testimonials.heading}
        </h2>

        {/* Mobile: swipeable single-card carousel */}
        <div className="md:hidden">
          <div
            className="bg-white rounded-2xl p-6 border border-line select-none"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <p className="text-base text-ink mb-5 leading-relaxed">
              &ldquo;{items[active].quote}&rdquo;
            </p>
            <div className="flex items-center gap-3 pt-4 border-t border-line">
              <Avatar index={active} initial={items[active].initial} name={items[active].name} />
              <div>
                <p className="text-sm font-bold text-navy">{items[active].name}</p>
                <p className="text-xs text-muted">{items[active].location}</p>
              </div>
            </div>
          </div>
          <div className="flex gap-2 justify-center mt-5">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Testimonio ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${i === active ? "w-6 bg-navy" : "w-1.5 bg-line"}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop: 3-column grid */}
        <div className="hidden md:grid grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 border border-line flex flex-col">
              <p className="text-sm text-ink leading-relaxed flex-1">
                &ldquo;{item.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3 mt-5 pt-4 border-t border-line">
                <Avatar index={i} initial={item.initial} name={item.name} />
                <div>
                  <p className="text-sm font-bold text-navy">{item.name}</p>
                  <p className="text-xs text-muted">{item.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
