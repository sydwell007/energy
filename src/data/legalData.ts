import type { LegalSection } from "@/components/marketing/LegalPage";

export const privacySections: LegalSection[] = [
  {
    title: "What we collect",
    body: [
      "When you use this site, we may collect information you provide directly - such as your name, email address, phone number, organisation, and message content - through the deploy, partner, and investor forms.",
      "We also collect basic technical information (such as browser type and pages visited) to keep the site secure and improve it over time.",
    ],
  },
  {
    title: "How we use your information",
    body: [
      "We use the information you submit to assess your site or fleet, process partner applications, respond to investor requests, and route enquiries to the right Civitas Energy team.",
      "We do not sell your personal information. It is used solely to operate and improve Civitas Energy and, where relevant, to coordinate with other Civitas Holdings subsidiaries you are engaging with.",
    ],
  },
  {
    title: "How we store & protect it",
    body: [
      "Submitted data is stored on secured infrastructure with restricted access, and all requests between this site and our backend are authenticated.",
      "We retain enquiry and application data only as long as needed to action your request and meet reporting obligations to partners and investors.",
    ],
  },
  {
    title: "Your rights",
    body: [
      "You can request access to, correction of, or deletion of your personal information at any time by emailing deploy@civitasenergy.co.za.",
      "If you no longer want to be contacted about a submission you made, let us know and we will update our records accordingly.",
    ],
  },
];

export const termsSections: LegalSection[] = [
  {
    title: "Using this site",
    body: [
      "This website provides information about Civitas Energy's charging and energy infrastructure, and forms to request a site deployment, propose a partnership, or request investor information.",
      "You agree to provide accurate information when submitting any form on this site and not to misuse the site or attempt to disrupt its operation.",
    ],
  },
  {
    title: "Deployment proposals & pricing",
    body: [
      "Site assessments, load models, and deployment packages shown or discussed via this site are indicative and subject to a final site survey and written proposal.",
      "Revenue-share, lease, and contract figures referenced on this site are illustrative examples, not binding offers, until confirmed in a signed agreement.",
    ],
  },
  {
    title: "Partnership & investor commitments",
    body: [
      "Submitting a partner or investor request through this site is an expression of interest, not a binding agreement. Formal terms are confirmed separately in writing once a deployment or partnership is scoped.",
      "Civitas Energy reserves the right to decline or adjust a proposed partnership where it does not fit our deployment standards or safety requirements.",
    ],
  },
  {
    title: "Limitation of liability",
    body: [
      "Content on this site is provided in good faith for informational purposes. Civitas Energy is not liable for decisions made solely on the basis of this website without direct confirmation from our team.",
    ],
  },
];
