"use client";

import { useEffect, useState } from "react";
import { COMPANY } from "@/lib/company";
import { PhoneIcon, WhatsAppIcon } from "./icons";

export function FloatingActions() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-5 right-5 z-[90] flex flex-col gap-3 transition-all duration-500 ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
      }`}
    >
      {/* Call — mobile-friendly */}
      <a
        href={`tel:${COMPANY.phones[0].tel}`}
        aria-label="Call MICROPULSE"
        className="grid h-12 w-12 place-items-center rounded-full border border-[var(--line-strong)] bg-ink-800/90 text-orange backdrop-blur transition-transform hover:scale-105 focus-ring sm:hidden"
      >
        <PhoneIcon className="h-5 w-5" />
      </a>

      {/* WhatsApp */}
      <a
        href={COMPANY.whatsapp.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Message MICROPULSE on WhatsApp"
        className="group relative grid h-12 w-12 place-items-center"
      >
        <span className="relative grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-gold to-orange text-[#122] shadow-[0_10px_26px_-8px_rgba(241,138,35,0.7)] transition-transform group-hover:scale-105">
          <WhatsAppIcon className="h-6 w-6 text-[#1a0f02]" />
        </span>
      </a>
    </div>
  );
}
