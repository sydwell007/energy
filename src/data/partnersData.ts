export const partnerTypes = [
  {
    icon: "⛽",
    title: "Fuel retailers",
    text: "Blend EV bays into existing forecourts with a revenue-share model and minimal disruption to trade.",
  },
  {
    icon: "🏢",
    title: "Property owners & developers",
    text: "Add charging as an amenity at malls, offices, and campuses to increase dwell time and site value.",
  },
  {
    icon: "🚚",
    title: "Fleet operators",
    text: "Electrify shuttle, logistics, and delivery fleets with depot charging and load-managed scheduling.",
  },
  {
    icon: "🔌",
    title: "Utilities & grid partners",
    text: "Collaborate on metering, grid studies, and constrained-grid solutions using storage and solar blending.",
  },
  {
    icon: "🏦",
    title: "Financing & leasing partners",
    text: "Structure project finance, leases, and equipment financing across the deployment pipeline.",
  },
  {
    icon: "🏛️",
    title: "Municipalities & public sector",
    text: "Deploy public charging infrastructure aligned to municipal transport and climate mandates.",
  },
] as const;

export const partnerProcess = [
  { number: "01", title: "Introduce", text: "Tell us about your sites, fleets, or partnership idea and the regions you operate in." },
  { number: "02", title: "Assess fit", text: "Our team reviews the opportunity and proposes a deployment or partnership structure." },
  { number: "03", title: "Agree terms", text: "We agree revenue-share, lease, or contract terms suited to the partnership type." },
  { number: "04", title: "Launch together", text: "Sites go live with joint reporting on uptime, revenue, and utilisation." },
] as const;
