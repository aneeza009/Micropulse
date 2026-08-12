import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;
const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

export const ArrowIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const PhoneIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M4 5c0-.6.4-1 1-1h2.5c.5 0 .9.3 1 .8l.8 3c.1.4 0 .8-.3 1L7.6 10.6a12 12 0 0 0 5.8 5.8l1.8-1.4c.3-.2.7-.3 1-.2l3 .8c.5.1.8.5.8 1V19c0 .6-.4 1-1 1A15 15 0 0 1 4 5Z" />
  </svg>
);

export const WhatsAppIcon = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M17.5 14.4c-.3-.2-1.7-.8-2-.9-.3-.1-.5-.2-.7.2-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.2-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.5-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5L9.2 6.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5 0-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1.1 2.7c.1.2 1.9 2.9 4.6 4 .6.3 1.1.4 1.5.6.6.2 1.2.2 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2 0-.1-.2-.2-.5-.3ZM12 2a10 10 0 0 0-8.5 15.2L2 22l4.9-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Z" />
  </svg>
);

export const SunIcon = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
  </svg>
);

export const HomeIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M4 11 12 4l8 7M6 10v9h12v-9" />
    <path d="M10 19v-5h4v5" />
  </svg>
);

export const BuildingIcon = (p: P) => (
  <svg {...base} {...p}>
    <rect x="5" y="3" width="14" height="18" rx="1" />
    <path d="M9 7h1M14 7h1M9 11h1M14 11h1M9 15h1M14 15h1M10 21v-3h4v3" />
  </svg>
);

export const WrenchIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M14.7 6.3a4 4 0 0 1-5 5L5 16v3h3l4.7-4.7a4 4 0 0 0 5-5l-2.2 2.2-2-.2-.2-2 2.2-2.2Z" />
  </svg>
);

export const GearIcon = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" />
  </svg>
);

export const TruckIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M3 6h10v9H3zM13 9h4l3 3v3h-7" />
    <circle cx="7" cy="17.5" r="1.6" />
    <circle cx="17" cy="17.5" r="1.6" />
  </svg>
);

export const ClockIcon = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="8" />
    <path d="M12 8v4l3 2" />
  </svg>
);

export const BatteryIcon = (p: P) => (
  <svg {...base} {...p}>
    <rect x="3" y="8" width="16" height="8" rx="1.5" />
    <path d="M21 11v2M7 10v4M11 10v4" />
  </svg>
);

export const GridIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 3v4M8 7h8M6 7l-2 4h16l-2-4M6 11v4M18 11v4M9 15h6M9 15v4M15 15v4" />
  </svg>
);

export const InverterIcon = (p: P) => (
  <svg {...base} {...p}>
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <path d="M8 15l3-6 2 4 3-4" />
  </svg>
);

export const ShieldIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3Z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

export const CameraIcon = (p: P) => (
  <svg {...base} {...p}>
    <rect x="3" y="7" width="18" height="12" rx="2" />
    <circle cx="12" cy="13" r="3" />
    <path d="M8 7l1-2h6l1 2" />
  </svg>
);

export const FenceIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M6 4l-1 3v13h3V7l-1-3zM17 4l-1 3v13h3V7l-1-3zM2 10h20M2 14h20" />
  </svg>
);

export const CpuIcon = (p: P) => (
  <svg {...base} {...p}>
    <rect x="7" y="7" width="10" height="10" rx="1.5" />
    <path d="M10 3v2M14 3v2M10 19v2M14 19v2M3 10h2M3 14h2M19 10h2M19 14h2" />
  </svg>
);

export const CheckIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M4 12l5 5L20 6" />
  </svg>
);

export const PinIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

export const PlusIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);

export const LeafIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M4 20c0-8 6-14 16-14 0 10-6 15-14 15" />
    <path d="M4 20c4-6 8-8 12-9" />
  </svg>
);

export const SavingsIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M4 12a7 5 0 0 0 14 0V9a7 5 0 0 0-14 0Z" />
    <path d="M18 10c1 .3 2 1 2 2s-1 1.5-1.5 1.7M8 8.5h.01" />
  </svg>
);

export const TagIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M4 4h8l8 8-8 8-8-8V4Z" />
    <circle cx="8" cy="8" r="1.2" />
  </svg>
);
