import type { Metadata } from "next";
import Link from "next/link";
import RoadmapTabs from "@/components/marketing/RoadmapTabs";
import PageHero from "@/components/marketing/PageHero";
import { ButtonLink } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Rollout",
  description: "Civitas Energy's three-phase rollout: pilot deployments, regional expansion, and a continent-scale energy ecosystem.",
};

export default function RolloutPage() {
  return (
    <>
      <PageHero
        eyebrow="Rollout"
        title="Project phases rollout"
        intro="We scale from pilot hubs → regional networks → corridors + storage → smart city energy systems. Each phase compounds on the deployment playbook proven in the last."
        actions={
          <>
            <ButtonLink href="/investors" variant="gold">
              Investor Pack
            </ButtonLink>
            <ButtonLink href="/deploy">Deploy at My Site</ButtonLink>
          </>
        }
      />

      <section>
        <div className="container">
          <RoadmapTabs />
        </div>
      </section>

      <section>
        <div className="container">
          <div className="callout">
            <b>Ready to deploy?</b> We&apos;ll assess your site in days, model load and ROI, then propose a
            deployment package. <Link href="/deploy">Start now</Link>.
          </div>
        </div>
      </section>
    </>
  );
}
