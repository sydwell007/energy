import type { Metadata } from "next";
import Link from "next/link";
import HomeHero from "@/components/marketing/HomeHero";
import RoadmapTabs from "@/components/marketing/RoadmapTabs";
import Reveal from "@/components/motion/Reveal";
import { InfoCard, SectionTitle } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";
import { offerings } from "@/data/offeringsData";
import { deploymentSteps } from "@/data/howItWorksData";
import { retailerBenefits } from "@/data/petrolProgramData";
import { manufacturingPillars } from "@/data/manufacturingData";
import { revenueStreams } from "@/data/revenueData";
import { faqs } from "@/data/faqData";

export const metadata: Metadata = {
  title: "EV Charging + Storage + Smart Power for Africa",
};

export default function Home() {
  return (
    <>
      <HomeHero />

      <div className="marquee" aria-label="Built with trusted infrastructure partners">
        <div className="marqueeTrack">
          {Array.from({ length: 2 }).flatMap((_, loop) =>
            ["Fuel Retailers", "Fleet Operators", "Utilities", "Municipalities", "Property Developers", "Financiers", "Communities"].map(
              (item) => <span key={`${loop}-${item}`}>{item} <i aria-hidden="true" /></span>
            )
          )}
        </div>
      </div>

      <section id="offerings">
        <div className="container">
          <SectionTitle
            title="What Civitas Energy delivers"
            action={<ButtonLink href="/offerings">Explore Offerings</ButtonLink>}
          >
            Hardware + software + operations. We deploy reliable charging by designing the full system: grid
            integration, storage, installation, and ongoing maintenance.
          </SectionTitle>

          <div className="grid3">
            {offerings.slice(0, 6).map((offering, index) => (
              <Reveal key={offering.title} delay={index * 60}>
                <InfoCard {...offering} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="how">
        <div className="container">
          <SectionTitle
            title="How Civitas Energy works"
            action={<ButtonLink href="/how-it-works" variant="primary">See the full process</ButtonLink>}
          >
            A repeatable deployment system: site assessment → load modelling → design → install → operate → report.
          </SectionTitle>

          <div className="steps">
            {deploymentSteps.slice(0, 3).map((step, index) => (
              <Reveal key={step.number} delay={index * 80}>
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

      <section id="petrol">
        <div className="container">
          <div className="innerHeroCard investorBand">
            <div className="heroOverlay" aria-hidden="true" />
            <div className="innerHeroBlob" aria-hidden="true" />
            <div className="heroInner">
              <span className="badge">Petrol Station Blend</span>
              <h2 className="h1 innerH1">Blend EV charging into petrol stations.</h2>
              <p className="heroSub">
                Upgrade existing fuel retailers with EV bays, signage, safety zones, and optional solar + storage —
                without redesigning the whole forecourt.
              </p>
              <div className="heroActions">
                <ButtonLink href="/petrol-program" variant="gold">
                  Explore the Petrol Program
                </ButtonLink>
                <ButtonLink href="/deploy">Deploy at My Site</ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="manufacturing">
        <div className="container">
          <SectionTitle
            title="Design, manufacturing & assembly"
            action={<ButtonLink href="/manufacturing">See how we build</ButtonLink>}
          >
            We build modular charging hardware designed for uptime: serviceable power modules, robust enclosures,
            and remote monitoring baked in.
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

      <section id="rollout">
        <div className="container">
          <SectionTitle
            title="Project phases rollout"
            action={<ButtonLink href="/rollout" variant="primary">Full rollout plan</ButtonLink>}
          >
            We scale from pilot hubs → regional networks → corridors + storage → smart city energy systems.
          </SectionTitle>

          <RoadmapTabs />
        </div>
      </section>

      <section id="revenue">
        <div className="container">
          <SectionTitle
            title="How Civitas Energy makes revenue"
            action={<ButtonLink href="/revenue">Revenue model</ButtonLink>}
          >
            Multiple stacked revenue streams: charging energy margin, site revenue share, fleet subscriptions,
            maintenance contracts, and EPC/project margins.
          </SectionTitle>

          <div className="grid3">
            {revenueStreams.map((stream, index) => (
              <Reveal key={stream.title} delay={index * 70}>
                <InfoCard {...stream} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="invest">
        <div className="container">
          <div className="innerHeroCard investorBand">
            <div className="heroOverlay" aria-hidden="true" />
            <div className="innerHeroBlob" aria-hidden="true" />
            <div className="heroInner">
              <span className="badge">For investors</span>
              <h2 className="h1 innerH1">Massive infrastructure gap. Recurring revenue model.</h2>
              <p className="heroSub">
                Civitas Energy becomes the energy layer powering mobility and automation across Civitas
                subsidiaries. Review the market opportunity, unit economics, and rollout roadmap.
              </p>
              <div className="heroActions">
                <ButtonLink href="/investors" variant="gold">
                  Investor Relations
                </ButtonLink>
                <ButtonLink href="/partners">Partner With Us</ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq">
        <div className="container">
          <SectionTitle title="Frequently Asked Questions" action={<ButtonLink href="/faq">All FAQs</ButtonLink>}>
            Quick answers for site hosts, fleet operators, partners, and investors.
          </SectionTitle>

          <div className="faqGrid">
            {faqs.slice(0, 4).map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="petrol-benefits">
        <div className="container">
          <SectionTitle title="Why petrol retailers win">
            New revenue, more dwell time, and a future-proofed forecourt.
          </SectionTitle>
          <div className="grid4">
            {retailerBenefits.map((benefit, index) => (
              <Reveal key={benefit.title} delay={index * 60}>
                <article className="card">
                  <h4>{benefit.title}</h4>
                  <p>{benefit.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="container">
          <div className="callout">
            <b>Ready to get involved?</b> Whether you host a site, run a fleet, or want to partner or invest, our{" "}
            <Link href="/contact">contact page</Link> routes your message to the right Civitas Energy team.
          </div>
        </div>
      </section>
    </>
  );
}
