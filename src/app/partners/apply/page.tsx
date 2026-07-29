import type { Metadata } from "next";
import PageHero from "@/components/marketing/PageHero";
import PartnerApplicationForm from "@/components/forms/PartnerApplicationForm";
import { MiniList } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Partner Application",
  description: "Propose a partnership with Civitas Energy as a fuel retailer, property owner, fleet operator, utility, financier, or municipality.",
};

export default function PartnerApplyPage() {
  return (
    <>
      <PageHero
        eyebrow="Propose a partnership"
        title="Apply to partner with Civitas Energy"
        intro="Tell us about your sites, fleet, or partnership idea, and our team will follow up to assess fit and next steps."
      />

      <section>
        <div className="container">
          <div className="splitGrid">
            <div className="card">
              <h3>Partner application</h3>
              <PartnerApplicationForm />
            </div>

            <aside className="sideCard">
              <h3>What happens next?</h3>
              <MiniList
                items={[
                  "We review your submission within a few business days.",
                  "A Civitas Energy team member reaches out to assess site fit, grid capacity, and demand.",
                  "If it's a fit, we agree deployment or partnership terms and schedule a launch date together.",
                ]}
              />
              <div className="callout topSpace">
                Prefer to talk it through first? Email <a href="mailto:partners@civitasenergy.co.za">partners@civitasenergy.co.za</a>.
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
