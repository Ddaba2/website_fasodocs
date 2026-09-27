import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: `Mentions légales du site ${SITE.name}.`,
};

const BLOCKS = [
  {
    title: "Éditeur du site",
    body: `[Raison sociale / dénomination à renseigner]
[Forme juridique à renseigner]
[Siège social à renseigner]
[Responsable de la publication à renseigner]`,
  },
  {
    title: "Hébergement",
    body: `[Nom de l'hébergeur à renseigner]
[Adresse de l'hébergeur à renseigner]
[Contact hébergeur à renseigner]`,
  },
  {
    title: "Objet du site",
    body: `${SITE.name} présente la plateforme d'information et d'orientation sur les démarches administratives au Mali. Ce site ne constitue pas un service de délivrance de documents administratifs et ne remplace pas les administrations publiques.`,
  },
  {
    title: "Propriété intellectuelle",
    body: `Les contenus, marques, logos et éléments graphiques présentés sur ce site sont protégés. Toute reproduction non autorisée est interdite, sauf accord préalable. [Précisions juridiques à renseigner]`,
  },
  {
    title: "Limitation de responsabilité",
    body: `Les informations publiées ont une vocation informative et orientative. ${SITE.name} s'efforce d'assurer l'exactitude des contenus, sans garantir l'exhaustivité ni se substituer aux sources administratives officielles. [Clause complète à renseigner]`,
  },
  {
    title: "Contact",
    body: `E-mail : ${SITE.email}
Pour toute question ou suggestion, voir également la page Contact.`,
  },
] as const;

export default function LegalPage() {
  return (
    <>
      <PageHero
        eyebrow="Informations légales"
        title="Mentions légales"
        description="Cadre légal du site FasoDocs. Les champs entre crochets seront complétés avec les informations officielles."
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
