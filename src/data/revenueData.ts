export const revenueStreams = [
  {
    icon: "⚡",
    title: "Charging energy margin",
    text: "Sell kWh at public sites and hubs with dynamic, demand-aware pricing.",
    bullets: ["Per-kWh pricing + optional idle fees", "Gross margin improves with solar + BESS"],
  },
  {
    icon: "🚚",
    title: "Fleet contracts",
    text: "Depot charging packages: hardware + software + operations SLA, billed monthly.",
    bullets: ["Per-vehicle / per-month platform fees", "Energy + maintenance bundled"],
  },
  {
    icon: "🏗️",
    title: "Project + maintenance revenue",
    text: "EPC margin, service plans, warranty extensions, and uptime guarantees.",
    bullets: ["Install & commissioning fees", "O&M subscriptions per site"],
  },
] as const;

export const unitEconomics = [
  { value: 4, suffix: " streams", label: "Stacked, recurring revenue lines per deployed site" },
  { value: 92, suffix: "%", label: "Target fleet-depot SLA uptime once BESS buffering is live" },
  { value: 3, suffix: "x", label: "Improvement in gross margin per site with solar + storage vs grid-only" },
  { value: 100, suffix: "%", label: "Of pilot sites reporting monthly uptime and revenue to partners" },
];
