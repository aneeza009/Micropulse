/**
 * MicroPulse Solar Energy Pvt Ltd
 * Single source of truth — VERIFIED company facts only.
 * Do not add certifications, awards, warranties, brands, financing,
 * testimonials, or project numbers unless the client supplies them.
 *
 * CORPORATE STRUCTURE — this website belongs to the solar company.
 * MicroPulse Engineering is the main company; MicroPulse Solar Energy
 * Pvt Ltd is its solar-energy subsidiary and is the entity named
 * customer-facing throughout this site (footer, metadata, structured data).
 * `parentName` exists only so the About page can state that relationship in
 * one place; it is not a second brand and must not be used as the site name.
 */

export const COMPANY = {
  legalName: "MicroPulse Solar Energy Pvt Ltd",
  /** Short customer-facing form of `legalName`. Use in prose and metadata. */
  shortName: "MicroPulse Solar Energy",
  /** Parent company. Only referenced by the About page's structure section. */
  parentName: "MicroPulse Engineering",
  brand: "MICROPULSE",
  /** Head office city. Local search intent is built around this. */
  city: "Lahore",
  tagline: "Powering Today. Energizing Tomorrow.",
  subTagline: "Smart Solar Solutions for a Better Future.",
  intro:
    "Switch to clean, reliable and affordable solar energy and take control of your electricity bills.",
  // Derived from the client-stated 12 years of experience as of 2026.
  // Not rendered anywhere today; kept consistent with STATS so the two
  // cannot drift apart. Confirm the exact founding year before using it.
  founded: 2014,
  afterSalesMonths: 6,
  phones: [
    { label: "+92 335 0815954", tel: "+923350815954" },
    { label: "+92 324 5351808", tel: "+923245351808" },
  ],
  whatsapp: {
    number: "923350815954",
    href:
      "https://wa.me/923350815954?text=" +
      encodeURIComponent(
        "Hello MicroPulse Solar Energy, I'd like to book a free site visit / consultation for a solar system."
      ),
  },
  offices: [
    {
      city: "Lahore",
      // Official registered address, client-supplied. This replaced an earlier
      // Park View City address; it is a different location, not a reformat, so
      // do not merge the two or list both.
      lines: [
        "Office # G03, Plaza 54,",
        "Park View Commercial, Eiffel Tower,",
        "Bahria Town, Lahore, Pakistan.",
      ],
      maps: "https://www.google.com/maps/search/?api=1&query=Park+View+Commercial+Eiffel+Tower+Bahria+Town+Lahore",
    },
    {
      city: "Bahawalpur",
      lines: ["Office # 1324-B, Sector B, DHA,", "Bahawalpur."],
      maps: "https://www.google.com/maps/search/?api=1&query=Sector+B+DHA+Bahawalpur",
    },
  ],
  closing: ["CLEAN ENERGY", "BRIGHTER FUTURE", "STRONGER PAKISTAN"],
} as const;

export const STATS = [
  { value: 12, suffix: "+", label: "Years of Experience" },
  { value: 50, suffix: "+", label: "MW Installed Capacity" },
  { value: 100, suffix: "%", label: "Safety Compliance" },
  { value: 6, suffix: "", label: "Months After-Sales Service" },
] as const;

export const NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Solutions", href: "/solutions" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Team", href: "/team" },
  { label: "Process", href: "/process" },
  { label: "Why Us", href: "/why-us" },
  { label: "Contact", href: "/contact" },
] as const;

export const SERVICES = [
  {
    id: "residential",
    title: "Residential Solar Solutions",
    desc: "Complete home solar systems engineered for reliable power and lower monthly electricity bills.",
  },
  {
    id: "commercial",
    title: "Commercial Solar Solutions",
    desc: "Scalable solar for businesses and industry, designed to cut operating costs and secure supply.",
  },
  {
    id: "installation",
    title: "Solar Installation by Expert Team",
    desc: "Professional, neat and safe installation delivered by our certified engineering team.",
  },
  {
    id: "maintenance",
    title: "Operation & Maintenance",
    desc: "Ongoing servicing and monitoring that keeps your system performing at its best.",
  },
  {
    id: "wholesale",
    title: "Wholesale Supply — All Over Pakistan",
    desc: "A-grade solar equipment supplied nationwide for dealers, installers and projects.",
  },
  {
    id: "delivery",
    title: "On-Time Delivery Guaranteed",
    desc: "Dependable timelines from proposal to handover, with commitments we keep.",
  },
] as const;

export const SOLUTIONS = [
  {
    id: "hybrid",
    tag: "HYBRID",
    title: "Hybrid with Battery",
    desc: "Hybrid systems store solar energy in batteries for backup power during outages and maximize energy savings.",
    nodes: ["Panels", "Inverter", "Battery", "Home"],
  },
  {
    id: "on-grid",
    tag: "ON-GRID",
    title: "On-Grid Connection",
    desc: "On-grid systems connect to the utility grid to reduce electricity bills and support energy efficiency and sustainability.",
    nodes: ["Panels", "Inverter", "Home", "Grid"],
  },
  {
    id: "off-grid",
    tag: "OFF-GRID",
    title: "Off-Grid with Remote Site Battery",
    desc: "Off-grid systems provide complete energy independence for remote locations with battery storage.",
    nodes: ["Panels", "Inverter", "Battery", "Remote Site"],
  },
] as const;

export const PROCESS = [
  {
    n: "01",
    title: "Free Consultation",
    desc: "Free consultation at our office, your site, or over the phone.",
  },
  {
    n: "02",
    title: "Free Site Visit",
    desc: "We visit your site to assess your needs and conditions.",
  },
  {
    n: "03",
    title: "Design & Planning",
    desc: "We design and plan your system using advanced engineering software.",
  },
  {
    n: "04",
    title: "Proposal & Agreement",
    desc: "We provide a detailed proposal with equipment specifications and terms for your approval.",
  },
  {
    n: "05",
    title: "Professional Installation",
    desc: "Our certified team ensures professional and timely installation with the highest safety standards.",
  },
  {
    n: "06",
    title: "Testing & Handover",
    desc: "We test the system thoroughly and hand it over with full documentation and training.",
  },
] as const;

export const WHY_US = [
  "Experienced & Professional Team",
  "High Quality A-Grade Products",
  "Neat & Safe Installation",
  "After Sales Support",
  "100% Customer Satisfaction",
] as const;

export const VALUE_PROPS = [
  {
    title: "Lower Than Market Price",
    desc: "Get high quality systems at prices lower than the market.",
  },
  {
    title: "Premium Quality Work",
    desc: "We ensure durable, efficient and safe installations.",
  },
  {
    title: "Save More On Electricity Bills",
    desc: "Reduce your electricity bills and enjoy uninterrupted power.",
  },
  {
    title: "Promoting Green Energy",
    desc: "A cleaner environment and a sustainable future.",
  },
] as const;

export const MORE_THAN_SOLAR = [
  {
    title: "CCTV Systems",
    tag: "24/7 Security",
    desc: "Security solutions and systems for safety and monitoring.",
  },
  {
    title: "Electric Fencing",
    tag: "Property Protection",
    desc: "Professional solutions for property protection and perimeter security.",
  },
  {
    title: "Home Automation",
    tag: "Smart Controls",
    desc: "Smart control solutions for home and business automation.",
  },
] as const;

export const FAQS = [
  {
    q: "How does solar energy work?",
    a: "Solar panels convert sunlight into DC electricity. An inverter turns that into AC power your home or business can use. Any surplus can charge batteries or, on an on-grid system, feed back to the utility grid.",
  },
  {
    q: "What is a hybrid solar system?",
    a: "A hybrid system combines solar panels, an inverter and battery storage. It powers your property from the sun, stores surplus energy for later, and can keep critical loads running during outages.",
  },
  {
    q: "What is an on-grid system?",
    a: "An on-grid system stays connected to the utility grid. It reduces your electricity bills by offsetting daytime consumption and supports energy efficiency and sustainability.",
  },
  {
    q: "What is an off-grid system?",
    a: "An off-grid system operates independently of the utility grid, using batteries to store energy. It is ideal for remote locations where a grid connection is unavailable or impractical.",
  },
  {
    q: "Does a hybrid system work during power outages?",
    a: "Yes. Because a hybrid system includes battery storage, it can supply backup power to keep essential loads running when the grid goes down.",
  },
  {
    q: "How much roof space is required?",
    a: "It depends on your energy needs and the equipment selected. Our engineers assess your available space during the free site visit and design a system that fits.",
  },
  {
    q: "What maintenance does a solar system require?",
    a: "Solar systems need minimal maintenance — mainly periodic cleaning of panels and routine checks. Our Operation & Maintenance service keeps everything running at its best.",
  },
  {
    q: "What happens during cloudy weather?",
    a: "Panels still generate power on cloudy days, though at reduced output. Battery storage or a grid connection covers the difference so your supply stays reliable.",
  },
  {
    q: "What is involved in a site assessment?",
    a: "Our team visits your site to evaluate your energy usage, roof or ground conditions, shading and electrical setup — then designs a system matched to your needs.",
  },
  {
    q: "How long does installation take?",
    a: "Timelines vary with system size and site conditions. After the site visit and design, we share a clear schedule and deliver on time, as agreed in your proposal.",
  },
] as const;
