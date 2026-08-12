import { COMPANY, NAV, SERVICES } from "@/lib/company";
import { Logo } from "@/components/ui/Logo";
import { PhoneIcon, WhatsAppIcon, PinIcon } from "@/components/ui/icons";

export function Footer() {
  return (
    <footer className="relative border-t border-[var(--line)] bg-ink-850/60 pt-16">
      <div className="container-x">
        {/* closing message */}
        <div className="mb-14 text-center">
          <p className="font-display text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl md:text-4xl">
            <span className="text-gradient-solar">Clean Energy</span>
            <span className="mx-3 text-text-lo">·</span>
            <span className="text-text-hi">Brighter Future</span>
            <span className="mx-3 text-text-lo">·</span>
            <span className="text-text-hi">Stronger Pakistan</span>
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 border-t border-[var(--line)] py-12 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1.2fr)]">
          {/* brand */}
          <div>
            <span className="inline-flex rounded-md bg-white px-2.5 py-1.5">
              <Logo />
            </span>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-text-mid">
              {COMPANY.legalName}. Smart solar solutions for a better future —
              engineered, installed and supported across Pakistan.
            </p>
          </div>

          {/* nav */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-text-hi">
              Explore
            </h4>
            <ul className="mt-4 space-y-2.5">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="text-sm text-text-mid transition-colors hover:text-orange"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* services */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-text-hi">
              Services
            </h4>
            <ul className="mt-4 space-y-2.5">
              {SERVICES.slice(0, 5).map((s) => (
                <li key={s.id}>
                  <a
                    href="/services"
                    className="text-sm text-text-mid transition-colors hover:text-orange"
                  >
                    {s.title.replace(" — All Over Pakistan", "")}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* contact */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-text-hi">
              Contact
            </h4>
            <ul className="mt-4 space-y-3">
              {COMPANY.phones.map((p) => (
                <li key={p.tel}>
                  <a
                    href={`tel:${p.tel}`}
                    className="inline-flex items-center gap-2 text-sm text-text-mid transition-colors hover:text-orange"
                  >
                    <PhoneIcon className="h-4 w-4 text-orange" /> {p.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={COMPANY.whatsapp.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-text-mid transition-colors hover:text-orange"
                >
                  <WhatsAppIcon className="h-4 w-4 text-orange" /> WhatsApp
                </a>
              </li>
              {COMPANY.offices.map((o) => (
                <li
                  key={o.city}
                  className="flex items-start gap-2 text-sm text-text-mid"
                >
                  <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                  <span>
                    <strong className="text-text-hi">{o.city}:</strong>{" "}
                    {o.lines.join(" ")}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-[var(--line)] py-7 text-xs text-text-lo sm:flex-row">
          <p>
            © {new Date().getFullYear()} {COMPANY.legalName}. All rights reserved.
          </p>
          <p>Powering Today. Energizing Tomorrow.</p>
        </div>
      </div>
    </footer>
  );
}
