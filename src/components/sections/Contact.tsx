"use client";

import { Reveal } from "@/components/ui/primitives";
import { COMPANY } from "@/lib/company";
import {
  PhoneIcon,
  WhatsAppIcon,
  PinIcon,
  ArrowIcon,
} from "@/components/ui/icons";

export function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-24 py-20 md:py-28">
      {/* solar glow backdrop */}
      <div
        aria-hidden
        className="absolute inset-0 -z-0"
        style={{
          background:
            "radial-gradient(55% 60% at 50% 15%, rgba(241,138,35,0.18), transparent 70%)",
        }}
      />
      <div className="container-x relative">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="eyebrow justify-center">Get Started</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 text-4xl font-extrabold sm:text-5xl md:text-6xl">
              Ready to power{" "}
              <span className="text-gradient-solar">your future?</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-5 max-w-xl text-text-mid md:text-lg">
              Talk to the MicroPulse Solar Energy team about your solar
              requirements anywhere in Lahore or across Pakistan. Book a free
              site visit or a free consultation — no obligation.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <a
                href={COMPANY.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary focus-ring"
              >
                Book a Free Site Visit <ArrowIcon className="h-4 w-4" />
              </a>
              <a
                href={`tel:${COMPANY.phones[0].tel}`}
                className="btn btn-ghost focus-ring"
              >
                <PhoneIcon className="h-4 w-4" /> Free Consultation
              </a>
            </div>
          </Reveal>
        </div>

        {/* contact grid */}
        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {/* phones */}
          <Reveal>
            <div className="card h-full p-6">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-orange/12 text-orange">
                <PhoneIcon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display font-bold text-text-hi">Call Us</h3>
              <div className="mt-3 space-y-2">
                {COMPANY.phones.map((p) => (
                  <a
                    key={p.tel}
                    href={`tel:${p.tel}`}
                    className="block text-text-mid transition-colors hover:text-orange focus-ring"
                  >
                    {p.label}
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          {/* whatsapp */}
          <Reveal delay={0.06}>
            <div className="card h-full p-6">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-orange/12 text-orange">
                <WhatsAppIcon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display font-bold text-text-hi">WhatsApp</h3>
              <p className="mt-3 text-sm text-text-mid">
                Message us for a quick response.
              </p>
              <a
                href={COMPANY.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-orange focus-ring"
              >
                Chat now <ArrowIcon className="h-4 w-4" />
              </a>
            </div>
          </Reveal>

          {/* offices */}
          {COMPANY.offices.map((o, i) => (
            <Reveal key={o.city} delay={0.12 + i * 0.06}>
              <div className="card h-full p-6">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-orange/12 text-orange">
                  <PinIcon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display font-bold text-text-hi">
                  {o.city} Office
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text-mid">
                  {o.lines.map((l) => (
                    <span key={l} className="block">
                      {l}
                    </span>
                  ))}
                </p>
                <a
                  href={o.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-orange focus-ring"
                >
                  View on map <ArrowIcon className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
