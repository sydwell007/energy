import type { Metadata } from "next";
import PageHero from "@/components/marketing/PageHero";
import Reveal from "@/components/motion/Reveal";
import { MiniList, SectionTitle } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";
import { petrolProcess, retailerBenefits, siteAdditions } from "@/data/petrolProgramData";

export const metadata: Metadata = {
  title: "Petrol Station Blend",
  description: "Blend EV charging into existing petrol stations with a revenue-share model and minimal disruption to forecourt operations.",
};

export default function PetrolProgramPage() {
  return (
    <>
      <PageHero
        eyebrow="Petrol Station Blend"
        title="Blend EV charging into petrol stations"
        intro="Upgrade existing fuel retailers with EV bays, signage, safety zones, and optional solar + storage — without redesigning the whole forecourt."
        actions={
          <>
            <ButtonLink href="/partners/apply" variant="gold">
              Become a Fuel Retail Partner
            </ButtonLink>
            <ButtonLink href="/deploy">Deploy at My Site</ButtonLink>
          </>
        }
        chips={["Revenue-share model", "Staged installation", "Minimal forecourt disruption"]}
      />

      <section>
        <div className="container">
          <div className="grid2">
            <article className="card">
              <h3>What we add to your site</h3>
              <MiniList items={siteAdditions} />
            </article>
            <article className="card">
              <h3>Why petrol retailers win</h3>
              <div className="grid2" style={{ gap: 12 }}>
                {retailerBenefits.map((benefit) => (
                  <div key={benefit.title}>
                    <b style={{ fontSize: 13.5 }}>{benefit.title}</b>
                    <p style={{ fontSize: 13, marginTop: 4 }}>{benefit.text}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <SectionTitle title="How the program runs">Four steps from survey to live reporting.</SectionTitle>
          <div className="grid4">
            {petrolProcess.map((step, index) => (
              <Reveal key={step.number} delay={index * 60}>
                <article className="card">
                  <div className="num">{step.number}</div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="callout">
            <b>Fuel retail chains:</b> we can scope a repeatable rollout across multiple forecourts under one
            partnership agreement. <a href="mailto:partners@civitasenergy.co.za">Talk to our partnerships team</a>.
          </div>
        </div>
      </section>
    </>
  );
}
