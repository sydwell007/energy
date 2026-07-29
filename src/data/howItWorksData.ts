export const deploymentSteps = [
  {
    number: "01",
    title: "Site assessment",
    text: "Foot traffic, parking flow, transformer capacity, and grid reliability are assessed on site within days.",
    pills: ["Grid survey", "Traffic study", "Capacity check"],
  },
  {
    number: "02",
    title: "Load modelling",
    text: "We model predicted kWh/day, peak demand, queueing, and utilisation before a single cable is run.",
    pills: ["kWh/day forecast", "Peak demand", "Utilisation"],
  },
  {
    number: "03",
    title: "System design",
    text: "Chargers, switchgear, BESS, solar, and civil works are engineered as one integrated system, not separate parts.",
    pills: ["Switchgear", "BESS + solar", "Civil works"],
  },
  {
    number: "04",
    title: "Installation & compliance",
    text: "Testing, safety signage, and commissioning checklists are completed before a site goes live.",
    pills: ["HV testing", "Safety signage", "Commissioning"],
  },
  {
    number: "05",
    title: "Operations",
    text: "Uptime monitoring, maintenance SLAs, dynamic pricing, and reporting run for the life of the site.",
    pills: ["Uptime SLA", "Pricing", "Reporting"],
  },
] as const;

export const architectureNodes = {
  inputs: [
    {
      title: "Grid / Utility",
      caption: "Transformer • metering • approvals",
    },
    {
      title: "Solar Canopy (optional)",
      caption: "PV generation • shade • branding",
    },
    {
      title: "BESS (optional)",
      caption: "Peak shave • backup • buffering",
    },
  ],
  core: {
    title: "Civitas Power Core",
    caption: "Switchgear • protection • controls",
    caption2: "Energy blending + site safety",
  },
  outputs: [
    {
      title: "Charging Stations",
      caption: "DC fast • AC • fleet depot",
    },
    {
      title: "Billing & Pricing",
      caption: "Payments • tariffs • receipts",
    },
    {
      title: "Operations Platform",
      caption: "Uptime • alerts • SLA reporting",
    },
  ],
} as const;
