import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { FaqAccordion } from "@/components/faq/FaqAccordion";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Questions fréquentes sur FasoDocs : mission, usage, langues et limites de la plateforme.",
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Questions fréquentes"
        description="Des réponses claires pour comprendre ce que FasoDocs propose — et ce qu'il ne fait pas."
      />

      <section className="bg-white py-14 md:py-16">
        <div className="container-page max-w-3xl">
          <FaqAccordion />
          <div className="mt-10 rounded-2xl border border-border bg-surface-alt p-6 text-center">
            <p className="text-sm text-ink-muted">
              Vous ne trouvez pas votre réponse&nbsp;?
            </p>
            <div className="mt-4">
              <Button href="/contact">Contacter l&apos;équipe</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
