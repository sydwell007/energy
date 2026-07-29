import type { Metadata } from "next";
import ArchitectureDiagram from "@/components/marketing/ArchitectureDiagram";
import PageHero from "@/components/marketing/PageHero";
import Reveal from "@/components/motion/Reveal";
import { MiniList, SectionTitle } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";
import { deploymentSteps } from "@/data/howItWorksData";

export const metadata: Metadata = {
  title: "How It Works",
  description: "Civitas Energy's repeatable deployment process: site assessment, load modelling, system design, installation, and operations.",
};

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="Deployment process"
        title="A repeatable system, from survey to operations"
        intro="Site assessment → load modelling → system design → installation & compliance → operations. The same playbook runs whether it's a single petrol forecourt or a 40-site rollout."
        actions={
          <>
            <ButtonLink href="/deploy" variant="gold">
              Start a Site Assessment
            </ButtonLink>
            <ButtonLink href="/manufacturing">Design & manufacturing</ButtonLink>
          </>
        }
      />

      <section>
        <div className="container">
          <SectionTitle title="The five-step deployment process">
            Every site — from a single forecourt to a 40-site rollout — follows the same playbook.
          </SectionTitle>
          <div className="grid3">
            {deploymentSteps.map((step, index) => (
              <Reveal key={step.number} delay={index * 60}>
                <article className="step">
                  <div className="num">{step.number}</div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                  <div className="pillRow">
                    {step.pills.map((pill) => (
                      <span className="pill" key={pill}>
                        {pill}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <SectionTitle title="System architecture">
            Built to operate in constrained-grid environments: storage buffers peaks and improves reliability.
          </SectionTitle>
          <div className="splitGrid">
            <ArchitectureDiagram />
            <aside className="sideCard">
              <h3>Why this architecture</h3>
              <MiniList
                items={[
                  "Grid, solar, and BESS all feed one power core — not three separate systems",
                  "Switchgear and controls blend sources automatically for lowest-cost energy",
                  "Charging, billing, and operations run off the same live telemetry",
                  "Storage smooths outages instead of taking the site offline",
                ]}
              />
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
