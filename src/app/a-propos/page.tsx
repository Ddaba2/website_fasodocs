import Image from "next/image";
import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { FOUNDERS, SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Découvrez la mission de FasoDocs, application gratuite d'information administrative au Mali, et l'équipe fondatrice : Daba Diallo et Tenen Madyeh Sylla.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="À propos"
        title="Une plateforme au service de l'accès à l'information administrative"
        description={`${SITE.name} contribue à la digitalisation du Mali en aidant les citoyens à comprendre leurs démarches administratives — clairement, simplement, et avant de se déplacer. L'application est gratuite.`}
      />

      <section className="bg-white py-16 md:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl">
              Notre mission
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-muted">
              Trop de citoyens perdent du temps, de l&apos;argent ou des
              déplacements faute d&apos;informations claires sur les procédures
              administratives. FasoDocs centralise ces informations pour rendre
              l&apos;orientation plus accessible.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink-muted">
              L&apos;application mobile FasoDocs est conçue pour être intuitive
              : rechercher une démarche, consulter les éléments utiles, puis se
              préparer avant de se rendre au service compétent.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-surface-alt p-6 md:p-8">
            <h2 className="text-lg font-semibold text-ink">
              Ce que FasoDocs est — et n&apos;est pas
            </h2>
            <ul className="mt-5 space-y-4 text-sm leading-relaxed">
              <li className="rounded-xl border border-brand-green/20 bg-brand-green-soft/60 px-4 py-3 text-ink">
                <strong className="font-semibold text-brand-green-dark">
                  FasoDocs est
                </strong>{" "}
                une application gratuite d&apos;information et d&apos;orientation
                sur les démarches administratives au Mali.
              </li>
              <li className="rounded-xl border border-border bg-white px-4 py-3 text-ink-muted">
                <strong className="font-semibold text-ink">
                  FasoDocs n&apos;est pas
                </strong>{" "}
                un guichet administratif : il ne délivre aucun document et ne
                remplace pas les administrations.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface-alt py-16 md:py-20">
        <div className="container-page">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl">
            L&apos;équipe fondatrice
          </h2>
          <p className="mt-3 max-w-2xl text-base text-ink-muted">
            FasoDocs est porté par {FOUNDERS[0].name} et {FOUNDERS[1].name}.
          </p>

          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:max-w-3xl">
            {FOUNDERS.map((founder) => (
              <li
                key={founder.name}
                className="overflow-hidden rounded-2xl border border-border bg-white shadow-card"
              >
                <div className="aspect-[4/5] overflow-hidden bg-surface-muted">
                  <Image
                    src={founder.image}
                    alt={`Portrait de ${founder.name}, ${founder.role}`}
                    width={480}
                    height={600}
                    className="h-full w-full object-cover object-top"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-ink">
                    {founder.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-brand-green">
                    {founder.role}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {founder.skills}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="container-page max-w-3xl text-center">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl">
            Une ambition GovTech malienne
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-muted">
            FasoDocs s&apos;adresse aux citoyens comme aux institutions : une
            présence sérieuse, moderne et utile, au service de la
            digitalisation du Mali.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/fonctionnalites" size="lg">
              Voir les fonctionnalités
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Nous contacter
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
