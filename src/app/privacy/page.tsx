import type { Metadata } from "next";
import LegalPage from "@/components/marketing/LegalPage";
import { privacySections } from "@/data/legalData";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Civitas Energy collects, uses, and protects your information.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Privacy"
      title="Privacy Policy"
      intro="How we collect, use, and protect information submitted through this site."
      updated="July 2026"
      sections={privacySections}
    />
  );
}
