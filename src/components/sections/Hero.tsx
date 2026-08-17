"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useMediaQuery, REDUCED_MOTION } from "@/lib/useMediaQuery";
import { COMPANY } from "@/lib/company";
import { PhoneIcon, WhatsAppIcon, ArrowIcon } from "@/components/ui/icons";

const miniStats = [
  { v: "8+", l: "Years Experience" },
  { v: "2+ MW", l: "Installed Capacity" },
  { v: "100%", l: "Safety Compliance" },
];

export function Hero() {
  // Who gets the background clip at all: phones, reduced-motion and data-saver
  // users get the poster image alone, which is the entire background cost on
  // mobile.
  const reduceMotion = useMediaQuery(REDUCED_MOTION);
  const wideEnough = useMediaQuery("(min-width: 768px)");
  const reduceData = useMediaQuery("(prefers-reduced-data: reduce)");
  const eligible = wideEnough && !reduceMotion && !reduceData;

  // ...and when. The poster is the LCP element, so the clip is held back until
  // the browser is idle rather than competing with first paint and hydration.
  const [idle, setIdle] = useState(false);
  useEffect(() => {
    if (!eligible) return;
    const w = window as Window & {
      requestIdleCallback?: (cb: () => void, o?: { timeout: number }) => number;
      cancelIdleCallback?: (h: number) => void;
    };
    if (w.requestIdleCallback) {
      const h = w.requestIdleCallback(() => setIdle(true), { timeout: 2500 });
      return () => w.cancelIdleCallback?.(h);
    }
    const t = window.setTimeout(() => setIdle(true), 1200);
    return () => window.clearTimeout(t);
  }, [eligible]);

  const wantsVideo = eligible && idle;

  return (
    <section
      id="home"
      className="on-dark relative min-h-[100svh] w-full overflow-hidden bg-[#140d1f]"
    >
      {/* Background: poster always, video only where it is worth the bytes */}
      <Image
        src="/images/hero-poster.webp"
        alt=""
        aria-hidden
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {wantsVideo && (
        <video
          className="fade-in absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          aria-hidden
        >
          <source src="/media/hero-solar.mp4" type="video/mp4" />
        </video>
      )}

      {/* Legibility overlays (brand-tinted, strong enough for white text) */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(14,8,22,0.96) 0%, rgba(14,8,22,0.82) 38%, rgba(14,8,22,0.4) 72%, rgba(14,8,22,0.15) 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(0deg, rgba(14,8,22,0.92) 0%, rgba(14,8,22,0.2) 38%, transparent 60%), radial-gradient(60% 50% at 85% 12%, rgba(99,30,136,0.3), transparent 60%)",
        }}
      />

      {/* Content */}
      <div className="container-x relative z-[3] flex min-h-[100svh] flex-col justify-center pt-28 pb-16">
        <div className="rise-in max-w-2xl">
          <span className="eyebrow mb-6">Solar Engineering · Pakistan</span>

          <h1 className="mt-5 text-[12vw] leading-[0.95] text-white [text-shadow:0_2px_24px_rgba(0,0,0,0.55)] sm:text-6xl md:text-7xl lg:text-[5.4rem]">
            <span className="block">Powering Today.</span>
            <span className="block text-gradient-solar bright">
              Energizing Tomorrow.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 [text-shadow:0_1px_12px_rgba(0,0,0,0.5)] md:text-lg">
            {COMPANY.intro} Smart solar solutions engineered for reliability,
            savings and a cleaner future.
          </p>

          {/* CTAs */}
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href="/contact" className="btn btn-primary focus-ring">
              Book a Free Site Visit <ArrowIcon className="h-4 w-4" />
            </a>
            <a href="/contact" className="btn btn-ghost focus-ring">
              Get a Free Consultation
            </a>
          </div>

          {/* quick contact */}
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/75">
            <a
              href={`tel:${COMPANY.phones[0].tel}`}
              className="inline-flex items-center gap-2 transition-colors hover:text-white focus-ring"
            >
              <PhoneIcon className="h-4 w-4 text-gold" />
              {COMPANY.phones[0].label}
            </a>
            <a
              href={COMPANY.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-white focus-ring"
            >
              <WhatsAppIcon className="h-4 w-4 text-gold" />
              WhatsApp
            </a>
          </div>
        </div>

        {/* mini stats */}
        <div
          className="rise-in mt-14 flex flex-wrap gap-x-10 gap-y-5 border-t border-white/15 pt-6"
          style={{ animationDelay: "0.25s" }}
        >
          {miniStats.map((s) => (
            <div key={s.l}>
              <div className="font-display text-2xl font-bold text-white md:text-3xl">
                {s.v}
              </div>
              <div className="mt-1 text-xs uppercase tracking-wider text-white/55">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* scroll cue */}
      <div className="absolute bottom-5 left-1/2 z-[3] hidden -translate-x-1/2 flex-col items-center gap-2 text-white/60 md:flex">
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <span className="scroll-dot" />
      </div>
    </section>
  );
}
