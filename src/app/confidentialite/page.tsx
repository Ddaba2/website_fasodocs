import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: `Politique de confidentialité de ${SITE.name}.`,
};

const BLOCKS = [
  {
    title: "Introduction",
    body: `La présente politique décrit la manière dont ${SITE.name} traite les données personnelles dans le cadre de son site web. [Version et date d'entrée en vigueur à renseigner]`,
  },
  {
    title: "Responsable du traitement",
    body: `[Identité du responsable du traitement à renseigner]
[Coordonnées à renseigner]`,
  },
  {
    title: "Données collectées",
    body: `Selon les fonctionnalités activées, peuvent être concernés : données de navigation techniques, messages envoyés via le formulaire de contact, et toute autre donnée volontairement transmise. [Liste détaillée à renseigner]`,
  },
  {
    title: "Finalités",
    body: `Les données peuvent être utilisées pour répondre aux demandes de contact, assurer le fonctionnement technique du site et améliorer l'expérience utilisateur — dans le respect des finalités déclarées. [Finalités officielles à renseigner]`,
  },
  {
    title: "Base légale et durée de conservation",
    body: `[Bases légales à renseigner]
[Durées de conservation à renseigner]`,
  },
  {
    title: "Partage et transferts",
    body: `[Sous-traitants / hébergeurs à renseigner]
Aucune vente de données personnelles n'est pratiquée.`,
  },
  {
    title: "Vos droits",
    body: `Selon la réglementation applicable, vous pouvez disposer de droits d'accès, de rectification, d'effacement ou d'opposition. Pour les exercer : [contact DPO / e-mail à renseigner].`,
  },
  {
    title: "Cookies",
    body: `[Politique cookies et outils de mesure d'audience à renseigner]`,
  },
  {
    title: "Mises à jour",
    body: `Cette page pourra être mise à jour. La version publiée sur le site fait foi.`,
  },
] as const;

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Confidentialité"
        title="Politique de confidentialité"
        description="Transparence sur le traitement des données. Les éléments entre crochets seront complétés avec les informations juridiques officielles."
      />

      <section className="bg-white py-14 md:py-16">
        <div className="container-page max-w-3xl space-y-8">
          {BLOCKS.map((block) => (
            <article key={block.title}>
              <h2 className="text-lg font-semibold text-ink">{block.title}</h2>
              <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-ink-muted">
                {block.body}
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
