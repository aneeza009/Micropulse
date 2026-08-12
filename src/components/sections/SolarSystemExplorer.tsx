"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SectionHeading, Reveal } from "@/components/ui/primitives";
import {
  SunIcon,
  InverterIcon,
  HomeIcon,
  BatteryIcon,
  GridIcon,
  GearIcon,
} from "@/components/ui/icons";

const STEPS = [
  {
    id: "sun",
    label: "Sun",
    Icon: SunIcon,
    text: "Sunlight is the fuel. The more direct sun your panels receive, the more clean energy your system generates through the day.",
  },
  {
    id: "panels",
    label: "Solar Panels",
    Icon: GearIcon,
    text: "Photovoltaic panels convert sunlight into DC electricity. A-grade panels deliver higher efficiency and a longer, more reliable service life.",
  },
  {
    id: "inverter",
    label: "Inverter",
    Icon: InverterIcon,
    text: "The inverter transforms DC electricity from the panels into AC power — the form your home and business appliances actually use.",
  },
  {
    id: "home",
    label: "Home / Business",
    Icon: HomeIcon,
    text: "Your property runs on solar power first, directly reducing what you draw — and pay for — from the grid every single day.",
  },
  {
    id: "battery",
    label: "Battery",
    Icon: BatteryIcon,
    text: "Surplus energy is stored in batteries for the evening or for backup, keeping essential loads running during outages.",
  },
  {
    id: "grid",
    label: "Grid",
    Icon: GridIcon,
    text: "On-grid systems stay connected to the utility grid to balance supply and further reduce your electricity bills.",
  },
] as const;

export function SolarSystemExplorer() {
  const [active, setActive] = useState(0);
  const current = STEPS[active];

  return (
    <section id="how-it-works" className="relative scroll-mt-24 py-20 md:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="How Solar Works"
          title={
            <>
              Follow the <span className="text-gradient-solar">energy flow.</span>
            </>
          }
          intro="Tap any stage to see how MicroPulse turns sunlight into reliable power and lower bills."
        />

        {/* Flow rail */}
        <Reveal delay={0.1}>
          <div className="mt-14 overflow-x-auto pb-2">
            <div className="relative flex min-w-[720px] items-stretch justify-between gap-2 md:min-w-0">
              {/* connecting line */}
              <div className="absolute left-6 right-6 top-[42px] -z-0 h-[2px] bg-[var(--line-strong)]">
                <motion.div
                  className="h-full bg-gradient-to-r from-gold to-orange"
                  initial={{ width: "0%" }}
                  animate={{ width: `${(active / (STEPS.length - 1)) * 100}%` }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>

              {STEPS.map((s, i) => {
                const on = i <= active;
                return (
                  <button
                    key={s.id}
                    onClick={() => setActive(i)}
                    aria-pressed={i === active}
                    className="group relative z-[1] flex flex-1 flex-col items-center gap-3 focus-ring"
                  >
                    <span
                      className={`grid h-[52px] w-[52px] place-items-center rounded-2xl border transition-all duration-400 md:h-[68px] md:w-[68px] ${
                        i === active
                          ? "scale-110 border-transparent bg-gradient-to-br from-gold to-orange text-[#1a0f02] shadow-[0_10px_30px_-8px_rgba(241,138,35,0.6)]"
                          : on
                            ? "border-orange/40 bg-orange/12 text-orange"
                            : "border-[var(--line)] bg-[var(--surface-2)] text-text-lo group-hover:text-text-mid"
                      }`}
                    >
                      <s.Icon className="h-6 w-6 md:h-7 md:w-7" />
                    </span>
                    <span
                      className={`text-center text-[11px] font-medium md:text-sm ${
                        i === active ? "text-text-hi" : "text-text-lo"
                      }`}
                    >
                      {s.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* Explanation */}
        <div className="mt-10 min-h-[120px] md:mt-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="card mx-auto max-w-3xl p-7 md:p-9"
            >
              <div className="flex items-start gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-gold to-orange text-[#1a0f02]">
                  <current.Icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-display text-xl font-bold text-text-hi md:text-2xl">
                    {current.label}
                  </h3>
                  <p className="mt-2 text-text-mid">{current.text}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
