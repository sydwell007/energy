export const faqCategories = ["Site hosts & fleets", "Partners & fuel retailers", "Investors"] as const;

export const faqs: { question: string; answer: string; category: (typeof faqCategories)[number] }[] = [
  {
    category: "Site hosts & fleets",
    question: "What does Civitas Energy actually build?",
    answer:
      "We design, manufacture, deploy, and operate EV charging and energy systems: DC fast-charging hubs, petrol station EV bays, fleet depot charging, battery energy storage (BESS), solar hybrid canopies, and the energy management software that runs all of it.",
  },
  {
    category: "Site hosts & fleets",
    question: "How fast can a site go live?",
    answer:
      "Site assessment typically takes days, not weeks. Once load modelling and system design are approved, installation and commissioning timelines depend on site complexity and whether storage or solar is included.",
  },
  {
    category: "Site hosts & fleets",
    question: "Do you work with sites that have unreliable grid power?",
    answer:
      "Yes — Civitas Energy is built for constrained-grid environments. Battery energy storage buffers peak demand and outages, and solar hybrid canopies reduce grid dependence further.",
  },
  {
    category: "Site hosts & fleets",
    question: "How do fleet operators work with Civitas Energy?",
    answer:
      "We design depot charging with smart, load-managed overnight or shift-based scheduling, plus fleet billing and reporting — bundled as a monthly platform, energy, and maintenance contract.",
  },
  {
    category: "Site hosts & fleets",
    question: "How do I get charging deployed at my site?",
    answer:
      "Use the \"Deploy at My Site\" form with your site type, city, and available bays. Our team assesses your site and proposes a deployment package, typically within days.",
  },
  {
    category: "Partners & fuel retailers",
    question: "What does the petrol station program involve?",
    answer:
      "We add 2–6 dedicated EV bays, chargers, safety infrastructure, and a back-of-site power zone to an existing forecourt, typically under a revenue-share or lease model, with staged installation so the site keeps trading.",
  },
  {
    category: "Partners & fuel retailers",
    question: "What kinds of partners does Civitas Energy work with?",
    answer:
      "Fuel retailers, property owners and developers, fleet operators, utilities and grid partners, financing and leasing partners, and municipalities. See the Partners page for the full list and process.",
  },
  {
    category: "Partners & fuel retailers",
    question: "Is a partner application a binding commitment?",
    answer:
      "No — submitting a partner application is an expression of interest. Formal terms are agreed separately in writing once a deployment or partnership is scoped.",
  },
  {
    category: "Investors",
    question: "How is Civitas Energy funded and what is the revenue model?",
    answer:
      "Revenue is recurring and stacked: charging energy margin, fleet and site contracts, and EPC/maintenance revenue. See the Revenue and Investor Relations pages for the full model and rollout roadmap.",
  },
  {
    category: "Investors",
    question: "Can I request the investor pack?",
    answer:
      "Yes — use the Investor Relations page to request the pack. It includes the market opportunity, unit economics, revenue model, and rollout roadmap.",
  },
  {
    category: "Investors",
    question: "How does Civitas Energy fit into the wider Civitas Holdings group?",
    answer:
      "Civitas Energy is designed to become the group's energy layer — powering Civitas Mobility shuttles, drone hubs, and robotics facilities as the network scales.",
  },
];
