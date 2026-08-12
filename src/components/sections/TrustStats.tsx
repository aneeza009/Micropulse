"use client";

import { useEffect, useRef, useState } from "react";
import { STATS } from "@/lib/company";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(0);
  const done = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setN(value);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !done.current) {
            done.current = true;
            const dur = 1400;
            const t0 = performance.now();
            const tick = (t: number) => {
              const p = Math.min((t - t0) / dur, 1);
              const eased = 1 - Math.pow(1 - p, 3);
              setN(Math.round(value * eased));
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value]);

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

export function TrustStats() {
  return (
    <section
      aria-label="Company statistics"
      className="relative z-[4] border-y border-[var(--line)] bg-ink-850/60 backdrop-blur-sm"
    >
      <div className="container-x grid grid-cols-2 divide-x divide-y divide-[var(--line)] md:grid-cols-4 md:divide-y-0">
        {STATS.map((s) => (
          <div key={s.label} className="px-4 py-9 md:px-8 md:py-12">
            <div className="font-display text-4xl font-extrabold tracking-tight text-gradient-solar md:text-6xl">
              <Counter value={s.value} suffix={s.suffix} />
            </div>
            <div className="mt-2 text-xs font-medium uppercase tracking-wider text-text-lo md:text-sm">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
