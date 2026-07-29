export type RoadmapBlock = { title: string; items: readonly string[] };
export type RoadmapKey = "12" | "24" | "36";

export const roadmapTabs: { key: RoadmapKey; label: string }[] = [
  { key: "12", label: "0–12 months" },
  { key: "24", label: "12–24 months" },
  { key: "36", label: "24–36 months" },
];

export const roadmap: Record<RoadmapKey, RoadmapBlock[]> = {
  "12": [
    {
      title: "Phase 1 — Pilot deployments",
      items: [
        "5–10 public charging sites (retail + petrol pilots)",
        "1–3 fleet depot pilots (shuttle/fleet operators)",
        "Energy platform MVP: monitoring, pricing, uptime alerts",
        "Deployment playbooks + QA + compliance checklists",
      ],
    },
    {
      title: "Phase 1 — Partnerships",
      items: [
        "Fuel retail partner pipeline (site approvals + templates)",
        "Utility engagement (metering + grid studies)",
        "Financing structure v1 (project finance / leases)",
        "Supplier agreements (power modules, cabinets, cables)",
      ],
    },
    {
      title: "Phase 1 — Uptime proof",
      items: [
        "SLA baseline & reporting to customers/investors",
        "Preventative maintenance cadence",
        "BESS pilots at constrained sites",
        "Cost/kWh + payback baseline",
      ],
    },
  ],
  "24": [
    {
      title: "Phase 2 — Regional expansion",
      items: [
        "40–120 sites across key metros",
        "Petrol station rollout program (repeatable design kits)",
        "Fleet depot expansion (multi-site contracts)",
        "Network operations center (NOC) + service team",
      ],
    },
    {
      title: "Phase 2 — Platform scale",
      items: [
        "Billing automation + finance exports",
        "Partner APIs (fleet operators, fuel retailers)",
        "Dynamic pricing + utilization tools",
        "Customer portal + scheduled SLA reports",
      ],
    },
    {
      title: "Phase 2 — Corridors",
      items: [
        "Highway/corridor strategy",
        "Site density planning",
        "BESS + solar standard packages",
        "Brand network map + availability UX",
      ],
    },
  ],
  "36": [
    {
      title: "Phase 3 — Energy ecosystem",
      items: [
        "200+ site network density (metro + corridor)",
        "Microgrids + multi-source energy blending",
        "Vehicle-to-grid readiness (where feasible)",
        "Smart city reporting integrations",
      ],
    },
    {
      title: "Phase 3 — Advanced economics",
      items: [
        "Energy arbitrage via storage",
        "Standardised capex packages & procurement scale",
        "Improved margins via solar + off-peak scheduling",
        "Carbon/impact reporting (optional)",
      ],
    },
    {
      title: "Phase 3 — Conglomerate synergy",
      items: [
        "Power Civitas Mobility fleets (shuttles)",
        "Drone hubs + robotics facilities energy packages",
        "Unified Civitas Fleet Software integration",
        "Long-term infrastructure positioning",
      ],
    },
  ],
};
