"use client";

import Image from "next/image";
import { Reveal } from "@/components/ui/primitives";
import { CheckIcon } from "@/components/ui/icons";

const expertise = [
  "Solar systems",
  "Safety compliance",
  "Maintenance",
  "Professional installation",
];

export function About() {
  return (
    <section id="about" className="relative scroll-mt-24 py-20 md:py-28">
      <div className="container-x grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left — story */}
        <div>
          <Reveal>
            <span className="eyebrow">About MICROPULSE</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              Engineers who know
              <br />
              <span className="text-gradient-solar">solar systems.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-text-mid md:text-lg">
              MicroPulse Engineering is an engineering company with{" "}
              <strong className="text-text-hi">8+ years of experience</strong> and
              more than{" "}
              <strong className="text-text-hi">2 MW of installed capacity</strong>{" "}
              as of 2026. We provide complete, high-quality solutions — including
              A-grade equipment and high-earning opportunities.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-8 grid grid-cols-2 gap-3">
              {expertise.map((e) => (
                <div
                  key={e}
                  className="flex items-center gap-3 rounded-xl border border-[var(--line)] bg-[var(--surface-2)] px-4 py-3"
                >
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-orange/12 text-orange">
                    <CheckIcon className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm text-text-hi">{e}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <a href="/contact" className="btn btn-primary mt-9 focus-ring">
              Book a Free Site Visit
            </a>
          </Reveal>
        </div>

        {/* Right — real installation photo */}
        <Reveal delay={0.1}>
          <div className="relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[26px] border border-[var(--line)] shadow-[var(--shadow-card)]">
              <Image
                src="/images/about.jpg"
                alt="MICROPULSE engineer installing solar panels on a rooftop"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 55%, rgba(28,22,38,0.55) 100%)",
                }}
              />
            </div>
            {/* floating stat card */}
            <div className="absolute -bottom-6 -left-4 hidden rounded-2xl border border-[var(--line)] bg-white px-6 py-4 shadow-[var(--shadow-card)] sm:block">
              <div className="font-display text-3xl font-extrabold text-gradient-solar">
                2+ MW
              </div>
              <div className="text-xs uppercase tracking-wider text-text-lo">
                Installed Capacity
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
