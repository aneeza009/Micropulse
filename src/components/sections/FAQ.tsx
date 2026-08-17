"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/ui/primitives";
import { FAQS } from "@/lib/company";
import { PlusIcon } from "@/components/ui/icons";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative scroll-mt-24 py-20 md:py-28">
      <div className="container-x grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
        <SectionHeading
          eyebrow="FAQ"
          title={
            <>
              Solar questions,{" "}
              <span className="text-gradient-solar">answered.</span>
            </>
          }
          intro="Clear, honest answers to help you make an informed decision."
        />

        <div className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left focus-ring"
                >
                  <span className="font-display text-base font-semibold text-text-hi md:text-lg">
                    {f.q}
                  </span>
                  <span
                    className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border border-[var(--line-strong)] text-orange transition-transform duration-300 ${
                      isOpen ? "rotate-45 bg-orange/12" : ""
                    }`}
                  >
                    <PlusIcon className="h-4 w-4" />
                  </span>
                </button>
                {/* Animating grid-template-rows 0fr -> 1fr gives a real
                    height transition without measuring anything in JS. */}
                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-350 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-6 pr-12 text-text-mid">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
