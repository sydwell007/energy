import type { Metadata } from "next";
import PageHero from "@/components/marketing/PageHero";
import Reveal from "@/components/motion/Reveal";
import { InfoCard, SectionTitle } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";
import { partnerProcess, partnerTypes } from "@/data/partnersData";

export const metadata: Metadata = {
  title: "Partner With Us",
  description: "Fuel retailers, property developers, fleet operators, utilities, financiers, and municipalities partnering with Civitas Energy.",
};

export default function PartnersPage() {
  return (
    <>
      <PageHero
        eyebrow="Partner with Civitas Energy"
        title="Build the network with us"
        intro="We partner with fuel retailers, property owners, fleet operators, utilities, financiers, and municipalities to deploy charging and energy infrastructure faster."
        actions={
          <>
            <ButtonLink href="/partners/apply" variant="gold">
              Propose a Partnership
            </ButtonLink>
            <ButtonLink href="/petrol-program">Petrol Station Blend</ButtonLink>
          </>
        }
      />

      <section>
        <div className="container">
          <SectionTitle title="Who we partner with">Six partner categories, one deployment playbook.</SectionTitle>
          <div className="grid3">
            {partnerTypes.map((partner, index) => (
              <Reveal key={partner.title} delay={index * 60}>
                <InfoCard {...partner} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <SectionTitle title="How a partnership comes together">Four steps from introduction to launch.</SectionTitle>
          <div className="grid4">
            {partnerProcess.map((step, index) => (
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
    </>
  );
}
