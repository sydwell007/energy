"use client";

import { useEffect } from "react";
import PageHero from "@/components/marketing/PageHero";
import { Button, ButtonLink } from "@/components/ui/Button";

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <PageHero
      eyebrow="Something went wrong"
      title="We hit an unexpected error"
      intro="Please try again, or head back to the homepage. If this keeps happening, let us know."
      actions={
        <>
          <Button onClick={reset} variant="gold">
            Try Again
          </Button>
          <ButtonLink href="/contact">Contact Support</ButtonLink>
        </>
      }
    />
  );
}
