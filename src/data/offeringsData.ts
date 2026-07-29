export type Offering = {
  icon: string;
  title: string;
  text: string;
  bullets: readonly string[];
};

export const offerings: Offering[] = [
  {
    icon: "⚡",
    title: "DC Fast Charging Stations",
    text: "Modular DC chargers engineered for high-traffic sites and highway corridors.",
    bullets: [
      "150–300 kW scalable power cabinets",
      "Remote diagnostics + real-time uptime monitoring",
      "CCS2 / GB/T connector support for the African fleet mix",
    ],
  },
  {
    icon: "⛽",
    title: "Petrol Station Integration",
    text: "Blend EV bays into existing petrol stations with minimal disruption to forecourt operations.",
    bullets: [
      "EV bays + signage + dedicated safety zones",
      "Revenue-share models available to site owners",
      "Staged installation plans that keep pumps trading",
    ],
  },
  {
    icon: "🚚",
    title: "Fleet Depot Charging",
    text: "Optimised load scheduling for shuttle, logistics, and delivery fleets — overnight and shift-based.",
    bullets: [
      "Peak shaving + automated demand control",
      "Fleet reporting, billing, and route-aware scheduling",
      "Depot-wide energy management dashboard",
    ],
  },
  {
    icon: "🔋",
    title: "Battery Energy Storage (BESS)",
    text: "Containerised storage that buffers peak demand, stabilises power, and boosts site uptime.",
    bullets: [
      "Modular, scalable containerised units",
      "Purpose-built for weak-grid environments",
      "Peak-shave and backup power in one system",
    ],
  },
  {
    icon: "☀️",
    title: "Solar + Hybrid Canopies",
    text: "Solar canopies for EV bays with smart blending across grid, solar, and storage.",
    bullets: [
      "Reduced energy cost per kWh dispensed",
      "Shade + brandable site identity",
      "Automatic source-blending for lowest-cost energy",
    ],
  },
  {
    icon: "📊",
    title: "Energy Management Software",
    text: "Live monitoring, dynamic pricing, SLAs, and multi-site reporting from one platform.",
    bullets: [
      "Operations dashboards + proactive alerts",
      "Billing, tariffs, and fleet scheduling",
      "Multi-site uptime and SLA reporting for partners",
    ],
  },
];
