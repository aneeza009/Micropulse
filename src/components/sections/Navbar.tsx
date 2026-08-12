"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NAV, COMPANY } from "@/lib/company";
import { Logo } from "@/components/ui/Logo";
import { PhoneIcon, WhatsAppIcon } from "@/components/ui/icons";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Over the dark video hero (top, menu closed) use light controls.
  const onDark = !scrolled && !open;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[100] transition-all duration-500 ${
          scrolled
            ? "border-b border-[var(--line)] bg-white/85 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <nav className="container-x flex h-[70px] items-center justify-between md:h-20">
          <a href="#home" aria-label="MICROPULSE home" className="focus-ring">
            <span className="inline-flex rounded-md bg-white px-2 py-1 shadow-sm">
              <Logo />
            </span>
          </a>

          {/* desktop links */}
          <ul className="hidden items-center gap-1 lg:flex">
            {NAV.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  className={`rounded-full px-4 py-2 text-sm transition-colors focus-ring ${
                    onDark
                      ? "text-white/80 hover:text-white"
                      : "text-text-mid hover:text-text-hi"
                  }`}
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>

          {/* right actions */}
          <div className="flex items-center gap-2">
            <a
              href={`tel:${COMPANY.phones[0].tel}`}
              className={`hidden items-center gap-2 rounded-full border px-4 py-2 text-sm transition-colors sm:inline-flex focus-ring ${
                onDark
                  ? "border-white/30 text-white hover:border-white"
                  : "border-[var(--line-strong)] text-text-hi hover:border-purple"
              }`}
            >
              <PhoneIcon className="h-4 w-4 text-orange" /> Call
            </a>
            <a
              href={COMPANY.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-gold to-orange px-4 py-2 text-sm font-semibold text-[#1a0f02] sm:inline-flex focus-ring"
            >
              <WhatsAppIcon className="h-4 w-4" /> WhatsApp
            </a>

            {/* hamburger */}
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className={`ml-1 grid h-11 w-11 place-items-center rounded-full border lg:hidden focus-ring ${
                onDark
                  ? "border-white/30 text-white"
                  : "border-[var(--line-strong)] text-text-hi"
              }`}
            >
              <span className="relative block h-3.5 w-5">
                <span
                  className={`absolute left-0 h-0.5 w-5 bg-current transition-all duration-300 ${
                    open ? "top-1.5 rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute left-0 top-1.5 h-0.5 w-5 bg-current transition-all duration-300 ${
                    open ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 h-0.5 w-5 bg-current transition-all duration-300 ${
                    open ? "top-1.5 -rotate-45" : "top-3"
                  }`}
                />
              </span>
            </button>
          </div>
        </nav>
      </header>

      {/* mobile fullscreen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[99] bg-white/97 backdrop-blur-xl lg:hidden"
          >
            <div className="container-x flex h-full flex-col justify-center gap-2 pt-20">
              {NAV.map((n, i) => (
                <motion.a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.05 }}
                  className="border-b border-[var(--line)] py-4 font-display text-3xl font-semibold text-text-hi"
                >
                  {n.label}
                </motion.a>
              ))}
              <div className="mt-8 flex flex-col gap-3">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="btn btn-primary"
                >
                  Book a Free Site Visit
                </a>
                <div className="flex gap-3">
                  <a href={`tel:${COMPANY.phones[0].tel}`} className="btn btn-ghost flex-1">
                    <PhoneIcon className="h-4 w-4" /> Call
                  </a>
                  <a
                    href={COMPANY.whatsapp.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost flex-1"
                  >
                    <WhatsAppIcon className="h-4 w-4" /> WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
