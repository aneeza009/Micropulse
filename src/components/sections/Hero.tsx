"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { COMPANY } from "@/lib/company";
import { PhoneIcon, WhatsAppIcon, ArrowIcon } from "@/components/ui/icons";

const miniStats = [
  { v: "8+", l: "Years Experience" },
  { v: "2+ MW", l: "Installed Capacity" },
  { v: "100%", l: "Safety Compliance" },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      v.pause();
    } else {
      v.play().catch(() => {});
    }
  }, []);

  return (
    <section
      id="home"
      className="on-dark relative min-h-[100svh] w-full overflow-hidden bg-[#140d1f]"
    >
      {/* Video background */}
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        poster="/images/hero-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden
      >
        <source src="/media/hero-solar.mp4" type="video/mp4" />
      </video>

      {/* Legibility overlays (brand-tinted) */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(20,10,30,0.92) 0%, rgba(20,10,30,0.68) 42%, rgba(20,10,30,0.15) 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(0deg, rgba(20,10,30,0.9) 0%, transparent 42%), radial-gradient(60% 50% at 85% 12%, rgba(99,30,136,0.35), transparent 60%)",
        }}
      />

      {/* Content */}
      <div className="container-x relative z-[3] flex min-h-[100svh] flex-col justify-center pt-28 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="max-w-2xl"
        >
          <span className="eyebrow mb-6">Solar Engineering · Pakistan</span>

          <h1 className="mt-5 text-[13vw] leading-[0.92] text-white sm:text-6xl md:text-7xl lg:text-[5.4rem]">
            <span className="block">Powering Today.</span>
            <span className="block text-gradient-solar bright">
              Energizing Tomorrow.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
            {COMPANY.intro} Smart solar solutions engineered for reliability,
            savings and a cleaner future.
          </p>

          {/* CTAs */}
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#contact" className="btn btn-primary focus-ring">
              Book a Free Site Visit <ArrowIcon className="h-4 w-4" />
            </a>
            <a href="#contact" className="btn btn-ghost focus-ring">
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
        </motion.div>

        {/* mini stats */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease }}
          className="mt-14 flex flex-wrap gap-x-10 gap-y-5 border-t border-white/15 pt-6"
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
        </motion.div>
      </div>

      {/* scroll cue */}
      <div className="absolute bottom-5 left-1/2 z-[3] hidden -translate-x-1/2 flex-col items-center gap-2 text-white/60 md:flex">
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <span className="scroll-dot" />
      </div>
    </section>
  );
}
