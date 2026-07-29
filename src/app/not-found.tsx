import PageHero from "@/components/marketing/PageHero";
import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <PageHero
      eyebrow="Page not found"
      title="We couldn't find that page"
      intro="The page you're looking for may have moved. Try our offerings, or head back home."
      actions={
        <>
          <ButtonLink href="/" variant="gold">
            Back Home
          </ButtonLink>
          <ButtonLink href="/offerings">Explore Offerings</ButtonLink>
        </>
      }
    />
  );
}
