export const manufacturingPillars = [
  {
    icon: "🏗️",
    title: "Industrial design",
    text: "Clean geometric forms, easy branding, weatherproofing, and service-access panels.",
    bullets: ["IP-rated enclosure + anti-vandal design", "Intuitive UI + high-visibility signage"],
  },
  {
    icon: "🔌",
    title: "Power electronics",
    text: "Modular cabinets scale from 150 kW upward using standardised power blocks.",
    bullets: ["Serviceable rectifier modules", "Thermal management + protection"],
  },
  {
    icon: "🧪",
    title: "Factory QA",
    text: "High-voltage safety tests, functional checks, and burn-in style verification.",
    bullets: ["Insulation & isolation validation", "Comms + telemetry verification"],
  },
] as const;

export const manufacturingProcess = [
  { number: "01", title: "Design", text: "Industrial design and power-electronics engineering happen in parallel, not in sequence." },
  { number: "02", title: "Assemble", text: "Modular cabinets are built from standardised, serviceable power blocks for fast field repair." },
  { number: "03", title: "Test", text: "Every unit passes high-voltage safety, thermal, and telemetry verification before shipping." },
  { number: "04", title: "Deploy", text: "Units ship with remote monitoring already active, ready for commissioning on site." },
] as const;
