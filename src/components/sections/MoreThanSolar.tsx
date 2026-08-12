"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/primitives";
import { MORE_THAN_SOLAR } from "@/lib/company";
import { CameraIcon, FenceIcon, CpuIcon } from "@/components/ui/icons";

const ICONS = [CameraIcon, FenceIcon, CpuIcon];

export function MoreThanSolar() {
  return (
    <section className="relative scroll-mt-24 py-20 md:py-28">
      {/* distinct band: deeper purple wash to set it apart from solar sections */}
      <div
        aria-hidden
        className="absolute inset-0 -z-0"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 0%, rgba(99,30,136,0.18), transparent 70%)",
        }}
      />
      <div className="container-x relative">
        <SectionHeading
          eyebrow="More Than Just Solar"
          title={
            <>
              Complete <span className="text-gradient-solar">smart & secure</span>{" "}
              systems.
            </>
          }
          intro="Beyond energy, MicroPulse secures and automates your property with the same engineering standard."
          align="center"
        />

        <div className="mx-auto mt-14 grid max-w-5xl gap-4 md:grid-cols-3">
          {MORE_THAN_SOLAR.map((m, i) => {
            const Icon = ICONS[i];
            return (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-[var(--radius-lg)] border border-purple/25 bg-gradient-to-b from-purple/[0.12] to-transparent p-8 text-center"
              >
                <span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl border border-purple-lt/40 bg-purple/20 text-orange transition-transform duration-500 group-hover:scale-110">
                  <Icon className="h-8 w-8" />
                </span>
                <h3 className="mt-6 font-display text-xl font-bold text-text-hi">
                  {m.title}
                </h3>
                <span className="mt-1 inline-block text-xs font-semibold uppercase tracking-widest text-orange">
                  {m.tag}
                </span>
                <p className="mt-3 text-sm text-text-mid">{m.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
