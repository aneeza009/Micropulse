"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/primitives";
import { SOLUTIONS } from "@/lib/company";
import {
  SunIcon,
  InverterIcon,
  BatteryIcon,
  HomeIcon,
  GridIcon,
  PinIcon,
} from "@/components/ui/icons";

const NODE_ICON: Record<string, typeof SunIcon> = {
  Panels: SunIcon,
  Inverter: InverterIcon,
  Battery: BatteryIcon,
  Home: HomeIcon,
  Grid: GridIcon,
  "Remote Site": PinIcon,
};

export function SolarSolutions() {
  const [active, setActive] = useState(0);
  const sol = SOLUTIONS[active];

  return (
    <section id="solutions" className="relative scroll-mt-24 py-20 md:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Complete Solar Solutions"
          title={
            <>
              Hybrid · On-Grid ·{" "}
              <span className="text-gradient-solar">Off-Grid</span>
            </>
          }
          intro="Three engineered system types, each matched to a different need — backup, bill savings, or full energy independence."
        />

        {/* selector */}
        <div className="mt-12 flex flex-wrap gap-3">
          {SOLUTIONS.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setActive(i)}
              className={`rounded-full border px-5 py-2.5 font-display text-sm font-semibold tracking-wide transition-all focus-ring ${
                i === active
                  ? "border-transparent bg-gradient-to-r from-gold to-orange text-[#1a0f02]"
                  : "border-[var(--line-strong)] text-text-mid hover:text-text-hi"
              }`}
            >
              {s.tag}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={sol.id}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4 }}
            className="card mt-6 grid gap-8 p-7 md:grid-cols-2 md:p-10 lg:gap-12"
          >
            {/* copy */}
            <div className="flex flex-col justify-center">
              <span className="font-display text-xs font-bold uppercase tracking-[0.25em] text-orange">
                {sol.tag}
              </span>
              <h3 className="mt-3 text-2xl font-bold text-text-hi md:text-3xl">
                {sol.title}
              </h3>
              <p className="mt-4 text-text-mid md:text-lg">{sol.desc}</p>
              <a href="#contact" className="btn btn-ghost mt-7 w-fit focus-ring">
                Discuss this system
              </a>
            </div>

            {/* schematic */}
            <div className="relative flex items-center justify-center rounded-2xl border border-[var(--line)] bg-[var(--surface-2)] p-6">
              <div className="flex w-full flex-col gap-4">
                {sol.nodes.map((node, i) => {
                  const Icon = NODE_ICON[node] ?? HomeIcon;
                  return (
                    <div key={node} className="flex flex-col items-center gap-4">
                      <motion.div
                        initial={{ opacity: 0, x: -14 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + i * 0.12 }}
                        className="flex w-full items-center gap-4 rounded-xl border border-[var(--line)] bg-[var(--surface-2)] px-4 py-3"
                      >
                        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-purple/40 to-purple/10 text-orange">
                          <Icon className="h-5 w-5" />
                        </span>
                        <span className="font-display font-semibold text-text-hi">
                          {node}
                        </span>
                        <span className="ml-auto text-xs uppercase tracking-widest text-text-lo">
                          0{i + 1}
                        </span>
                      </motion.div>
                      {i < sol.nodes.length - 1 && (
                        <div className="relative h-6 w-[2px] bg-[var(--line-strong)]">
                          <motion.div
                            className="absolute left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-orange"
                            animate={{ y: [0, 24, 0], opacity: [0, 1, 0] }}
                            transition={{
                              duration: 1.6,
                              repeat: Infinity,
                              delay: i * 0.2,
                            }}
                          />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
