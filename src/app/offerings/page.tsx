import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/marketing/PageHero";
import Reveal from "@/components/motion/Reveal";
import { InfoCard, SectionTitle } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";
import { offerings } from "@/data/offeringsData";

export const metadata: Metadata = {
  title: "Offerings",
  description: "DC fast charging, petrol station integration, fleet depot charging, BESS, solar hybrid, and energy management software.",
};

export default function OfferingsPage() {
  return (
    <>
      <PageHero
        eyebrow="What we build"
        title="Hardware, software, and operations — as one system"
        intro="We deploy reliable charging by designing the full system: grid integration, storage, installation, and ongoing maintenance. Every offering below can be deployed alone or combined into one integrated site."
        actions={
          <>
            <ButtonLink href="/deploy" variant="gold">
              Deploy at Your Site
            </ButtonLink>
            <ButtonLink href="/how-it-works">See how it works</ButtonLink>
          </>
        }
        chips={["150–300 kW DC hubs", "Fleet depot scheduling", "BESS + solar hybrid"]}
      />

      <section>
        <div className="container">
          <SectionTitle title="Every offering, in detail">
            Deploy one, or combine several into a single integrated site.
          </SectionTitle>
          <div className="grid3">
            {offerings.map((offering, index) => (
              <Reveal key={offering.title} delay={index * 60}>
                <InfoCard {...offering} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="callout">
            <b>Not sure which offering fits your site?</b> Our team assesses site traffic, grid capacity, and fleet
            demand, then proposes the right combination.{" "}
            <Link href="/deploy">Start a site assessment</Link>.
          </div>
        </div>
      </section>
    </>
  );
}
