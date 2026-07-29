import type { Metadata } from "next";
import PageHero from "@/components/marketing/PageHero";
import DeploySiteForm from "@/components/forms/DeploySiteForm";
import { MiniList } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Deploy at My Site",
  description: "Request an EV charging deployment assessment for your petrol station, mall, office park, campus, airport, or fleet depot.",
};

export default function DeployPage() {
  return (
    <>
      <PageHero
        eyebrow="Deploy charging"
        title="Deploy charging at your site"
        intro="Tell us about your site and we'll assess it in days, model load and ROI, then propose a deployment package — chargers, storage, and software as one system."
        chips={["Days, not weeks, to assess", "Works on constrained grids", "One integrated deployment"]}
      />

      <section>
        <div className="container">
          <div className="splitGrid">
            <div className="card">
              <h3>Deployment request</h3>
              <DeploySiteForm />
            </div>

            <aside className="sideCard">
              <h3>What happens next?</h3>
              <MiniList
                items={[
                  "Our team reviews your site details within a few business days.",
                  "We schedule a site assessment: traffic, parking flow, and grid capacity.",
                  "You receive a load model and a proposed deployment package with indicative timeline.",
                ]}
              />
              <div className="callout topSpace">
                Prefer to talk it through first? Email <a href="mailto:deploy@civitasenergy.co.za">deploy@civitasenergy.co.za</a>.
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
