"use client";

import { Reveal } from "@/components/ui/primitives";
import { TruckIcon, CheckIcon } from "@/components/ui/icons";

const points = [
  "A-grade solar panels, inverters & batteries",
  "Supply for dealers, installers & projects",
  "On-time delivery, guaranteed",
];

export function WholesaleSupply() {
  return (
    <section className="relative scroll-mt-24 py-20 md:py-28">
      <div className="container-x">
        <div className="card grid items-center gap-10 overflow-hidden p-8 md:grid-cols-2 md:p-12 lg:gap-16">
          <div>
            <Reveal>
              <span className="eyebrow">Wholesale Supply</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 text-3xl font-bold sm:text-4xl md:text-5xl">
                Supplying solar{" "}
                <span className="text-gradient-solar">all over Pakistan.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-lg text-text-mid md:text-lg">
                From our offices in Lahore and Bahawalpur, MicroPulse delivers
                A-grade solar equipment nationwide — reliable stock, fair pricing
                and dependable timelines.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <ul className="mt-7 space-y-3">
                {points.map((p) => (
                  <li key={p} className="flex items-center gap-3 text-text-hi">
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-orange/12 text-orange">
                      <CheckIcon className="h-3.5 w-3.5" />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.2}>
              <a href="#contact" className="btn btn-primary mt-8 focus-ring">
                <TruckIcon className="h-4 w-4" /> Enquire About Supply
              </a>
            </Reveal>
          </div>

          {/* Abstract national network graphic */}
          <Reveal delay={0.1}>
            <NetworkGraphic />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function NetworkGraphic() {
  // Abstract node network — communicates reach without asserting specific
  // locations. Only the two verified offices are labeled.
  const nodes = [
    { x: 120, y: 90 },
    { x: 210, y: 60 },
    { x: 300, y: 120 },
    { x: 90, y: 190 },
    { x: 250, y: 210 },
    { x: 330, y: 250 },
    { x: 160, y: 270 },
  ];
  const offices = [
    { x: 175, y: 150, label: "Lahore" },
    { x: 230, y: 240, label: "Bahawalpur" },
  ];
  const links: [number, number][] = [
    [0, 1],
    [1, 2],
    [0, 3],
    [1, 4],
    [4, 5],
    [3, 6],
    [4, 6],
    [2, 5],
  ];

  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--surface-2)]">
      <svg viewBox="0 0 400 320" className="h-full w-full">
        {/* faint grid */}
        <g stroke="rgba(38,20,60,0.07)">
          {Array.from({ length: 8 }).map((_, i) => (
            <line key={`h${i}`} x1="0" y1={i * 45} x2="400" y2={i * 45} />
          ))}
          {Array.from({ length: 10 }).map((_, i) => (
            <line key={`v${i}`} x1={i * 45} y1="0" x2={i * 45} y2="320" />
          ))}
        </g>

        {/* links */}
        <g stroke="url(#wsg)" strokeWidth="1.5" opacity="0.6">
          {links.map(([a, b], i) => (
            <line
              key={i}
              x1={nodes[a].x}
              y1={nodes[a].y}
              x2={nodes[b].x}
              y2={nodes[b].y}
              strokeDasharray="3 5"
            >
              <animate
                attributeName="stroke-dashoffset"
                from="16"
                to="0"
                dur="1.4s"
                repeatCount="indefinite"
              />
            </line>
          ))}
        </g>
        <defs>
          <linearGradient id="wsg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#fbc423" />
            <stop offset="1" stopColor="#8b3fb8" />
          </linearGradient>
        </defs>

        {/* generic nodes */}
        {nodes.map((n, i) => (
          <circle key={i} cx={n.x} cy={n.y} r="4" fill="#8b3fb8">
            <animate
              attributeName="opacity"
              values="0.4;1;0.4"
              dur="2.6s"
              begin={`${i * 0.3}s`}
              repeatCount="indefinite"
            />
          </circle>
        ))}

        {/* verified offices */}
        {offices.map((o) => (
          <g key={o.label}>
            <circle cx={o.x} cy={o.y} r="10" fill="none" stroke="#f18a23" strokeWidth="1.5">
              <animate attributeName="r" values="6;14;6" dur="2.4s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.8;0;0.8" dur="2.4s" repeatCount="indefinite" />
            </circle>
            <circle cx={o.x} cy={o.y} r="5" fill="#f18a23" />
            <text
              x={o.x + 12}
              y={o.y + 4}
              fill="#1c1626"
              fontSize="12"
              fontFamily="var(--font-sora), sans-serif"
              fontWeight="600"
            >
              {o.label}
            </text>
          </g>
        ))}
      </svg>
      <span className="absolute bottom-3 left-4 text-[10px] uppercase tracking-widest text-text-lo">
        Nationwide supply network
      </span>
    </div>
  );
}
