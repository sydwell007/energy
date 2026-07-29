import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/marketing/PageHero";
import { footerLinkGroups, navLinks } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Site Map",
  description: "Every page on the Civitas Energy site, in one place.",
};

export default function SiteMapPage() {
  const groups = [{ title: "Main Navigation", links: navLinks }, ...footerLinkGroups];

  return (
    <>
      <PageHero eyebrow="Site map" title="Every page, in one place" intro="A full index of the Civitas Energy website." />

      <section>
        <div className="container">
          <div className="grid3">
            {groups.map((group) => (
              <article className="card" key={group.title}>
                <h4>{group.title}</h4>
                <div className="miniLinks footColumn">
                  {group.links.map((link) => (
                    <Link href={link.href} key={link.href}>
                      {link.label}
                    </Link>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
