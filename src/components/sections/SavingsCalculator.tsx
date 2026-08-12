"use client";

import { useMemo, useState } from "react";
import { SectionHeading, Reveal } from "@/components/ui/primitives";

// --- Indicative engineering assumptions (Pakistan, general) ---
const TARIFF = 55; // PKR per kWh (indicative average)
const PEAK_SUN_HOURS = 5.0; // average usable sun hours/day
const PERFORMANCE_RATIO = 0.78; // real-world system losses
const COST_PER_KW = 165000; // PKR, indicative installed cost/kW
const OFFSET = { grid: 0.85, hybrid: 0.9, off: 1.0 } as const;

type SysType = keyof typeof OFFSET;

const fmtPKR = (n: number) =>
  "PKR " +
  Math.round(n).toLocaleString("en-PK", { maximumFractionDigits: 0 });

export function SavingsCalculator() {
  const [bill, setBill] = useState(40000);
  const [type, setType] = useState<SysType>("hybrid");

  const r = useMemo(() => {
    const monthlyKwh = bill / TARIFF;
    const dailyKwh = monthlyKwh / 30;
    const sizeKw = dailyKwh / (PEAK_SUN_HOURS * PERFORMANCE_RATIO);
    const monthlyProdKwh = sizeKw * PEAK_SUN_HOURS * 30 * PERFORMANCE_RATIO;
    const monthlySavings = Math.min(bill * OFFSET[type], monthlyProdKwh * TARIFF);
    const annualSavings = monthlySavings * 12;
    const systemCost = sizeKw * COST_PER_KW;
    const payback = annualSavings > 0 ? systemCost / annualSavings : 0;
    return {
      sizeKw,
      monthlyProdKwh,
      monthlySavings,
      annualSavings,
      payback,
    };
  }, [bill, type]);

  const types: { id: SysType; label: string }[] = [
    { id: "grid", label: "On-Grid" },
    { id: "hybrid", label: "Hybrid" },
    { id: "off", label: "Off-Grid" },
  ];

  const outputs = [
    { label: "Estimated System Size", value: `${r.sizeKw.toFixed(1)} kW` },
    {
      label: "Est. Monthly Production",
      value: `${Math.round(r.monthlyProdKwh).toLocaleString()} kWh`,
    },
    { label: "Potential Monthly Savings", value: fmtPKR(r.monthlySavings) },
    { label: "Potential Annual Savings", value: fmtPKR(r.annualSavings) },
    { label: "Estimated Payback Period", value: `${r.payback.toFixed(1)} yrs` },
  ];

  return (
    <section id="calculator" className="relative scroll-mt-24 py-20 md:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Solar Savings Estimator"
          title={
            <>
              See what solar could{" "}
              <span className="text-gradient-solar">save you.</span>
            </>
          }
          intro="Move the slider to explore an indicative estimate. For accurate figures, book a free site visit."
        />

        <Reveal delay={0.1}>
          <div className="card mt-12 grid grid-cols-1 gap-8 p-7 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] md:p-10 lg:gap-12">
            {/* Inputs */}
            <div className="flex flex-col justify-center">
              <label
                htmlFor="bill"
                className="font-display text-sm font-semibold text-text-hi"
              >
                Average monthly electricity bill
              </label>
              <div className="mt-4 font-display text-4xl font-extrabold text-gradient-solar">
                {fmtPKR(bill)}
              </div>
              <input
                id="bill"
                type="range"
                min={5000}
                max={300000}
                step={5000}
                value={bill}
                onChange={(e) => setBill(Number(e.target.value))}
                className="mt-5 w-full accent-[var(--brand-orange)]"
                aria-valuetext={fmtPKR(bill)}
              />
              <div className="mt-1 flex justify-between text-xs text-text-lo">
                <span>PKR 5k</span>
                <span>PKR 300k</span>
              </div>

              <span className="mt-8 font-display text-sm font-semibold text-text-hi">
                System preference
              </span>
              <div className="mt-3 flex gap-2">
                {types.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setType(t.id)}
                    className={`flex-1 rounded-full border px-3 py-2 text-sm font-semibold transition-all focus-ring ${
                      type === t.id
                        ? "border-transparent bg-gradient-to-r from-gold to-orange text-[#1a0f02]"
                        : "border-[var(--line-strong)] text-text-mid hover:text-text-hi"
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Outputs */}
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange/40 bg-orange/12 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-orange">
                Estimate only
              </div>
              <div className="grid grid-cols-2 gap-3">
                {outputs.slice(0, 4).map((o) => (
                  <div
                    key={o.label}
                    className="rounded-xl border border-[var(--line)] bg-[var(--surface-2)] p-4"
                  >
                    <div className="text-xs uppercase tracking-wider text-text-lo">
                      {o.label}
                    </div>
                    <div className="mt-2 font-display text-xl font-bold text-text-hi">
                      {o.value}
                    </div>
                  </div>
                ))}
                <div className="col-span-2 rounded-xl border border-orange/40 bg-gradient-to-r from-gold/10 to-orange/5 p-4">
                  <div className="text-xs uppercase tracking-wider text-text-lo">
                    {outputs[4].label}
                  </div>
                  <div className="mt-2 font-display text-2xl font-extrabold text-gradient-solar">
                    {outputs[4].value}
                  </div>
                </div>
              </div>

              <a href="/contact" className="btn btn-primary mt-5 w-full focus-ring">
                Book a Free Site Visit for Exact Figures
              </a>
            </div>
          </div>
        </Reveal>

        <p className="mx-auto mt-6 max-w-3xl text-center text-xs leading-relaxed text-text-lo">
          Estimates are indicative and may vary based on site conditions,
          electricity tariffs, system design and usage. This estimator does not
          constitute a quotation.
        </p>
      </div>
    </section>
  );
}
