export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://energy.civitasholdings.co.za";

export const siteName = "Civitas Energy";

export const siteTagline = "EV Charging + Storage + Smart Power";

export const siteDescription =
  "Civitas Energy designs, manufactures, deploys, and operates EV charging and smart energy systems across Africa: public fast-charging hubs, petrol-station integration, fleet depot charging, battery energy storage (BESS), and energy management software.";

export type NavLink = { href: string; label: string };
export type HeaderNavItem =
  | { kind: "link"; label: string; href: string }
  | { kind: "menu"; label: string; links: NavLink[] };

export const navLinks: NavLink[] = [
  { href: "/offerings", label: "Offerings" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/petrol-program", label: "Petrol Station Blend" },
  { href: "/manufacturing", label: "Manufacturing" },
  { href: "/rollout", label: "Rollout" },
  { href: "/revenue", label: "Revenue" },
  { href: "/investors", label: "Investors" },
  { href: "/contact", label: "Contact" },
];

export const headerNavItems: HeaderNavItem[] = [
  {
    kind: "menu",
    label: "Discover",
    links: [
      { href: "/about", label: "About Civitas Energy" },
      { href: "/offerings", label: "What we build" },
      { href: "/how-it-works", label: "How it works" },
      { href: "/manufacturing", label: "Design & manufacturing" },
    ],
  },
  { href: "/petrol-program", kind: "link", label: "Petrol Station Blend" },
  { href: "/rollout", kind: "link", label: "Rollout" },
  {
    kind: "menu",
    label: "Partner",
    links: [
      { href: "/deploy", label: "Deploy at your site" },
      { href: "/partners", label: "Partner with us" },
      { href: "/partners/apply", label: "Partner application" },
    ],
  },
  {
    kind: "menu",
    label: "Investors",
    links: [
      { href: "/revenue", label: "Revenue model" },
      { href: "/investors", label: "Investor relations" },
      { href: "/faq", label: "Frequently asked questions" },
    ],
  },
];

export const footerLinkGroups: { title: string; links: NavLink[] }[] = [
  {
    title: "Platform",
    links: [
      { href: "/about", label: "About" },
      { href: "/offerings", label: "Offerings" },
      { href: "/how-it-works", label: "How It Works" },
      { href: "/manufacturing", label: "Design & Manufacturing" },
      { href: "/rollout", label: "Rollout" },
    ],
  },
  {
    title: "Get Involved",
    links: [
      { href: "/deploy", label: "Deploy at My Site" },
      { href: "/petrol-program", label: "Petrol Station Blend" },
      { href: "/partners", label: "Partner With Us" },
      { href: "/investors", label: "Investor Relations" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/faq", label: "FAQ" },
      { href: "/contact", label: "Contact" },
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms of Service" },
      { href: "/site-map", label: "Site Map" },
    ],
  },
];

export const contactEmails = [
  { label: "Site Deployments", email: "deploy@civitasenergy.co.za" },
  { label: "Partners", email: "partners@civitasenergy.co.za" },
  { label: "Investors", email: "invest@civitasenergy.co.za" },
] as const;

export const contactPhone = "+27 10 020 0000";

export const primaryCtas = {
  deploy: { href: "/deploy", label: "Deploy at My Site" },
  invest: { href: "/investors", label: "Investor Information" },
  partner: { href: "/partners", label: "Partner With Us" },
  offerings: { href: "/offerings", label: "Explore Offerings" },
};
