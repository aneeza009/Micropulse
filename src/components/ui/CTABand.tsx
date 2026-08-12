"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/primitives";
import { COMPANY } from "@/lib/company";
import { PhoneIcon, WhatsAppIcon, ArrowIcon } from "@/components/ui/icons";

export function CTABand({
  title = "Ready to power your future?",
  text = "Book a free site visit or a free consultation — no obligation.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="relative py-16 md:py-24">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-[26px] border border-[var(--line)] bg-gradient-to-br from-[#1c1230] to-[#2a123f] px-7 py-12 text-center md:px-12 md:py-16">
            <div
              aria-hidden
              className="absolute inset-0 -z-0"
              style={{
                background:
                  "radial-gradient(50% 80% at 50% 0%, rgba(241,138,35,0.25), transparent 65%)",
              }}
            />
            <h2 className="relative text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
              {title.split(" ").slice(0, -1).join(" ")}{" "}
              <span className="text-gradient-solar bright">
                {title.split(" ").slice(-1)}
              </span>
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-white/75">{text}</p>
            <div className="relative mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/contact" className="btn btn-primary focus-ring">
                Book a Free Site Visit <ArrowIcon className="h-4 w-4" />
              </Link>
              <a
                href={COMPANY.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn focus-ring bg-white/10 text-white ring-1 ring-white/30 backdrop-blur hover:bg-white/20"
              >
                <WhatsAppIcon className="h-4 w-4" /> WhatsApp
              </a>
              <a
                href={`tel:${COMPANY.phones[0].tel}`}
                className="btn focus-ring bg-white/10 text-white ring-1 ring-white/30 backdrop-blur hover:bg-white/20"
              >
                <PhoneIcon className="h-4 w-4" /> Call
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
