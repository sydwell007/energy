import type { Metadata } from "next";
import PageHero from "@/components/marketing/PageHero";
import Reveal from "@/components/motion/Reveal";
import { InfoCard, SectionTitle } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";
import { manufacturingPillars, manufacturingProcess } from "@/data/manufacturingData";

export const metadata: Metadata = {
  title: "Design & Manufacturing",
  description: "Modular EV charging hardware engineered for uptime: serviceable power modules, robust enclosures, and remote monitoring.",
};

export default function ManufacturingPage() {
  return (
    <>
      <PageHero
        eyebrow="Design & manufacturing"
        title="Hardware engineered for uptime, not just installation day"
        intro="We build modular charging hardware designed for uptime: serviceable power modules, robust enclosures, and remote monitoring baked in from the factory floor."
        actions={
          <>
            <ButtonLink href="/contact" variant="gold">
              Request a Factory Brief
            </ButtonLink>
            <ButtonLink href="/offerings">See our offerings</ButtonLink>
          </>
        }
      />

      <section>
        <div className="container">
          <SectionTitle title="Three pillars of the build">
            Industrial design, power electronics, and factory QA — engineered together.
          </SectionTitle>
          <div className="grid3">
            {manufacturingPillars.map((pillar, index) => (
              <Reveal key={pillar.title} delay={index * 70}>
                <InfoCard {...pillar} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <SectionTitle title="From design to deployment">Four stages, every unit.</SectionTitle>
          <div className="grid4">
            {manufacturingProcess.map((step, index) => (
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
