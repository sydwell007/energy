import type { Metadata } from "next";
import LegalPage from "@/components/marketing/LegalPage";
import { termsSections } from "@/data/legalData";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms for using the Civitas Energy website and submitting deployment, partner, or investor requests.",
};

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Terms"
      title="Terms of Service"
      intro="Terms for using this site and submitting deployment, partner, or investor requests."
      updated="July 2026"
      sections={termsSections}
    />
  );
}
