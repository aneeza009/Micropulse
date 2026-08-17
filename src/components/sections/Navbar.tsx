"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV, COMPANY } from "@/lib/company";
import { Logo } from "@/components/ui/Logo";
import { PhoneIcon, WhatsAppIcon } from "@/components/ui/icons";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  // Remembering which route the menu was opened on closes it on navigation —
  // including back/forward — without an effect that resets state.
  const [openedOn, setOpenedOn] = useState<string | null>(null);
  const pathname = usePathname();
  const open = openedOn === pathname;
  const setOpen = (next: boolean) => setOpenedOn(next ? pathname : null);
  const isHome = pathname === "/";

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

  // Solid white bar on inner pages, and on home once scrolled.
  const solid = scrolled || !isHome;
  // Light controls only while overlaying the dark home hero.
  const onDark = isHome && !scrolled && !open;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[100] transition-all duration-500 ${
          solid
            ? "border-b border-[var(--line)] bg-white/85 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <nav className="container-x flex h-[68px] items-center justify-between md:h-20">
          <Link
            href="/"
            aria-label="MICROPULSE home"
            className="focus-ring inline-flex shrink-0 items-center"
          >
            <Logo priority />
          </Link>

          {/* desktop links */}
          <ul className="hidden items-center gap-1 lg:flex">
            {NAV.map((n) => {
              const active = n.href === pathname;
              return (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    className={`rounded-full px-3 py-2 text-sm transition-colors focus-ring xl:px-4 ${
                      active
                        ? onDark
                          ? "text-white"
                          : "text-purple"
                        : onDark
                          ? "text-white/75 hover:text-white"
                          : "text-text-mid hover:text-text-hi"
                    }`}
                  >
                    {n.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* right actions */}
          <div className="flex items-center gap-2">
            <a
              href={`tel:${COMPANY.phones[0].tel}`}
              className={`hidden items-center gap-2 rounded-full border px-4 py-2 text-sm transition-colors focus-ring sm:inline-flex lg:hidden xl:inline-flex ${
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
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
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

      {/* mobile menu */}
      <div
        id="mobile-menu"
        inert={!open}
        className={`fixed inset-0 z-[99] overflow-y-auto overscroll-contain bg-white/97 backdrop-blur-xl transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="container-x flex min-h-full flex-col gap-1 pb-10 pt-24">
          {NAV.map((n, i) => {
            const active = n.href === pathname;
            return (
              <Link
                key={n.href}
                href={n.href}
                style={{ animationDelay: `${0.04 + i * 0.04}s` }}
                className={`${open ? "slide-in" : ""} block border-b border-[var(--line)] py-3.5 font-display text-xl font-semibold ${
                  active ? "text-purple" : "text-text-hi"
                }`}
              >
                {n.label}
              </Link>
            );
          })}
          <div className="mt-7 flex flex-col gap-3">
            <Link href="/contact" className="btn btn-primary">
              Book a Free Site Visit
            </Link>
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
      </div>
    </>
  );
}
