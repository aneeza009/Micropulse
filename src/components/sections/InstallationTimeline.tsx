"use client";

import { useEffect, useRef, useState } from "react";
import { SectionHeading } from "@/components/ui/primitives";
import { PROCESS } from "@/lib/company";

/**
 * Scroll-linked process rail.
 *
 * The fill advances one step at a time via IntersectionObserver and a CSS
 * transition, rather than recomputing a spring on every scroll frame — the rail
 * reads the same on the way down but costs nothing while scrolling.
 */
export function InstallationTimeline() {
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [reached, setReached] = useState(0);

  useEffect(() => {
    const els = stepRefs.current.filter(Boolean) as HTMLDivElement[];
    if (els.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const i = els.indexOf(entry.target as HTMLDivElement);
          if (i >= 0) {
            setReached((r) => Math.max(r, i + 1));
            entry.target.classList.add("is-in");
          }
        }
      },
      { rootMargin: "0px 0px -35% 0px", threshold: 0.01 }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section id="process" className="relative scroll-mt-24 py-20 md:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Our Installation Process"
          title={
            <>
              Your solar journey,{" "}
              <span className="text-gradient-solar">done right.</span>
            </>
          }
          intro="A clear, engineered path from first conversation to a fully tested system — six steps, no surprises."
        />

        <div className="relative mt-16 pl-2">
          {/* rail */}
          <div className="absolute bottom-2 left-[26px] top-2 w-[2px] bg-[var(--line-strong)] md:left-[34px]" />
          <div
            className="absolute bottom-2 left-[26px] top-2 w-[2px] origin-top bg-gradient-to-b from-gold via-orange to-purple transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] md:left-[34px]"
            style={{ transform: `scaleY(${reached / PROCESS.length})` }}
          />

          <div className="flex flex-col gap-10 md:gap-14">
            {PROCESS.map((step, i) => (
              <div
                key={step.n}
                ref={(el) => {
                  stepRefs.current[i] = el;
                }}
                className="reveal relative flex items-start gap-6 pl-16 md:pl-24"
              >
                {/* node */}
                <span className="absolute left-0 top-0 grid h-[54px] w-[54px] place-items-center rounded-full border border-orange/40 bg-ink-900 font-display text-lg font-bold text-orange md:h-[70px] md:w-[70px] md:text-xl">
                  {step.n}
                </span>
                <div className="pt-1 md:pt-3">
                  <h3 className="font-display text-xl font-bold text-text-hi md:text-2xl">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-text-mid">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
