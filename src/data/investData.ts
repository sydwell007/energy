export const marketStats = [
  { value: 30, suffix: "GW+", label: "Estimated African EV charging infrastructure gap by 2035" },
  { value: 45, suffix: "%", label: "Of grid-connected sites in target markets facing frequent outages" },
  { value: 6, suffix: "", label: "Countries in the initial rollout addressable market" },
  { value: 12000, suffix: "+", label: "Petrol stations viable as EV bay retrofit sites across the region" },
];

export const platformPillars = [
  {
    icon: "🧩",
    title: "Repeatable deployment model",
    text: "A standardised site-assessment-to-operations playbook so each new site deploys faster and cheaper than the last.",
  },
  {
    icon: "🔗",
    title: "Conglomerate lock-in",
    text: "Civitas Energy powers Civitas Mobility shuttles, drone hubs, and robotics facilities — every site strengthens multiple subsidiaries at once.",
  },
  {
    icon: "🤝",
    title: "Diversified revenue base",
    text: "Charging margin, fleet contracts, EPC/maintenance revenue, and site partner revenue-share — not one single payer.",
  },
  {
    icon: "📊",
    title: "Reportable uptime & impact",
    text: "Every site tracks uptime, utilisation, and revenue — the data layer investors and utility partners require.",
  },
] as const;

export const tractionStats = [
  { value: 10, suffix: "", label: "Pilot sites in the initial deployment pipeline" },
  { value: 3, suffix: "", label: "Fleet depot pilots in active discussion" },
  { value: 6, suffix: "", label: "Offering categories deployed as one integrated system" },
  { value: 100, suffix: "%", label: "Of pilot sites tracked in a structured deployment pipeline" },
];

export const revenueModel = [
  {
    tag: "ENERGY MARGIN",
    title: "Charging energy sales",
    text: "Per-kWh margin on public fast-charging and fleet depot sessions, improved by solar and storage blending.",
    bullets: ["Dynamic, demand-aware pricing", "Idle fees at high-utilisation sites", "Margin compounds with network density"],
  },
  {
    tag: "SITE & FLEET CONTRACTS",
    title: "Recurring platform revenue",
    text: "Monthly platform, energy, and maintenance fees from fleet depots and partner sites under long-term contracts.",
    bullets: ["Per-vehicle / per-site subscriptions", "Bundled O&M and SLA reporting", "Multi-year fleet electrification contracts"],
  },
  {
    tag: "EPC & PROJECT MARGIN",
    title: "Design, build & maintain",
    text: "Installation and commissioning margin plus ongoing warranty and uptime-guarantee subscriptions per site.",
    bullets: ["Install & commissioning fees", "Warranty extensions", "Uptime-guarantee subscriptions"],
  },
] as const;

export const investRoadmap = [
  {
    number: "01",
    title: "Prove the model",
    text: "Launch founding pilot sites across petrol, retail, and fleet-depot formats; validate uptime and unit economics.",
  },
  {
    number: "02",
    title: "Scale the network",
    text: "Expand to 40–120 sites across key metros using the standardised deployment playbook.",
  },
  {
    number: "03",
    title: "Build corridors & density",
    text: "Layer in highway corridors, BESS + solar standard packages, and a network operations center.",
  },
  {
    number: "04",
    title: "Deepen the ecosystem",
    text: "Power Civitas Mobility, drone hubs, and robotics facilities — positioning Energy as the group's energy layer.",
  },
] as const;
