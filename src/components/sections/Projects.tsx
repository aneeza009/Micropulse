"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/primitives";
import { SunIcon } from "@/components/ui/icons";

/**
 * Portfolio gallery. Images are representative of MICROPULSE's solar work
 * by category. No client names, locations or capacity figures are shown —
 * those fields are ready to be populated when the client supplies verified
 * project data (swap `PROJECTS` for a real data array).
 */
const FILTERS = ["All", "Residential", "Commercial", "Industrial"] as const;
type Filter = (typeof FILTERS)[number];

const PROJECTS = [
  { img: "/images/proj1.jpg", category: "Residential" },
  { img: "/images/proj2.jpg", category: "Commercial" },
  { img: "/images/proj3.jpg", category: "Industrial" },
  { img: "/images/proj4.jpg", category: "Commercial" },
  { img: "/images/proj5.jpg", category: "Residential" },
  { img: "/images/proj6.jpg", category: "Industrial" },
] as const;

export function Projects() {
  const [filter, setFilter] = useState<Filter>("All");
  const shown = PROJECTS.filter(
    (p) => filter === "All" || p.category === filter
  );

  return (
    <section id="projects" className="relative scroll-mt-24 py-20 md:py-28">
      <div className="container-x">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Our Work"
            title={
              <>
                Projects across{" "}
                <span className="text-gradient-solar">Pakistan.</span>
              </>
            }
            intro="A selection of MicroPulse solar installations across residential, commercial and industrial sites."
          />
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-all focus-ring ${
                  filter === f
                    ? "border-transparent bg-gradient-to-r from-gold to-orange text-[#1a0f02]"
                    : "border-[var(--line-strong)] text-text-mid hover:text-text-hi"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((p) => (
            <motion.div
              key={p.img}
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="group relative aspect-[4/3] overflow-hidden rounded-[var(--radius-lg)] border border-[var(--line)]"
            >
              <Image
                src={p.img}
                alt={`${p.category} solar installation by MICROPULSE`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(20,12,28,0.05) 40%, rgba(20,12,28,0.82) 100%)",
                }}
              />
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 p-5">
                <div className="flex items-center gap-2">
                  <span className="grid h-8 w-8 place-items-center rounded-lg bg-white/15 text-gold backdrop-blur">
                    <SunIcon className="h-4 w-4" />
                  </span>
                  <span className="font-display text-sm font-semibold text-white">
                    {p.category} Solar
                  </span>
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-widest text-white/70">
                  MICROPULSE
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
