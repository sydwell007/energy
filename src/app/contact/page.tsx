import type { Metadata } from "next";
import PageHero from "@/components/marketing/PageHero";
import ContactForm from "@/components/forms/ContactForm";
import { MiniList } from "@/components/ui/Card";
import { contactEmails, contactPhone } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Contact",
  description: "Deploy charging at your site, electrify your fleet depot, or partner and invest in the Civitas Energy rollout.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Civitas Energy"
        title="Let's build your site"
        intro="Deploy charging at your site, electrify your fleet depot, or partner or invest in the rollout — one message routes to the right team."
      />

      <section>
        <div className="container">
          <div className="splitGrid">
            <div className="card">
              <h3>Send us a message</h3>
              <ContactForm />
            </div>

            <aside className="sideCard">
              <h3>Direct lines</h3>
              <MiniList items={contactEmails.map((entry) => `${entry.label}: ${entry.email}`)} />
              <p className="note topSpace">General enquiries: {contactPhone}</p>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
