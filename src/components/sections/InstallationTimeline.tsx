"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { SectionHeading } from "@/components/ui/primitives";
import { PROCESS } from "@/lib/company";

export function InstallationTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 65%", "end 55%"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    restDelta: 0.001,
  });

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

        <div ref={ref} className="relative mt-16 pl-2">
          {/* rail */}
          <div className="absolute bottom-2 left-[26px] top-2 w-[2px] bg-[var(--line-strong)] md:left-[34px]" />
          <motion.div
            style={{ scaleY: progress }}
            className="absolute bottom-2 left-[26px] top-2 w-[2px] origin-top bg-gradient-to-b from-gold via-orange to-purple md:left-[34px]"
          />

          <div className="flex flex-col gap-10 md:gap-14">
            {PROCESS.map((step, i) => (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="relative flex items-start gap-6 pl-16 md:pl-24"
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
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
