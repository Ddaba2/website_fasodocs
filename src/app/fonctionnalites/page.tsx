import Image from "next/image";
import type { Metadata } from "next";
import {
  BadgeCheck,
  BookOpenCheck,
  CircleHelp,
  ClipboardList,
  Languages,
  MapPinned,
  Search,
  Volume2,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { YoutubeLink } from "@/components/ui/YoutubeLink";
import { FEATURES, SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Fonctionnalités",
  description:
    "Découvrez les fonctionnalités de FasoDocs, application gratuite : démarches, recherche, multilingue, synthèse vocale et quiz.",
};

const featureIcons: Record<string, LucideIcon> = {
  demarches: BookOpenCheck,
  recherche: Search,
  infos: ClipboardList,
  lieux: MapPinned,
  langues: Languages,
  voix: Volume2,
  quiz: CircleHelp,
  gratuit: BadgeCheck,
};

export default function FeaturesPage() {
  return (
    <>
      <PageHero
        eyebrow="Fonctionnalités"
        title="Des outils concrets pour s'orienter"
        description="FasoDocs regroupe gratuitement les fonctions utiles pour comprendre une démarche administrative au Mali — sans remplacer l'administration."
        primaryHref="/telecharger"
        primaryLabel="Télécharger l'application"
        actions={<YoutubeLink href={SITE.youtubeDemo}>Voir la démo YouTube</YoutubeLink>}
      />

      <section className="bg-white py-14 md:py-16">
        <div className="container-page">
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((feature) => {
              const Icon = featureIcons[feature.id] ?? ClipboardList;
              return (
                <li
                  key={feature.id}
                  className="rounded-2xl border border-border bg-surface-alt p-6"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-white text-brand-green shadow-card">
                    <Icon className="h-5 w-5" aria-hidden="true" strokeWidth={1.75} />
                  </span>
                  <h2 className="mt-4 text-base font-semibold text-ink">
                    {feature.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {feature.description}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="border-t border-border bg-surface-alt py-14 md:py-16">
        <div className="container-page grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl">
              Conçu pour l&apos;accessibilité
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-muted">
              Au-delà du catalogue de démarches, FasoDocs intègre le français,
              l&apos;anglais, le bambara et une synthèse vocale pour élargir
              l&apos;accès à l&apos;information administrative.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/a-propos">En savoir plus sur FasoDocs</Button>
              <YoutubeLink href={SITE.youtubeDemo}>Voir la démo</YoutubeLink>
            </div>
          </div>
          <div className="mx-auto w-full max-w-sm overflow-hidden rounded-[1.75rem] border border-border bg-ink shadow-soft">
            <Image
              src="/images/screens/quiz.png"
              alt="Écran Quiz de l'application FasoDocs"
              width={400}
              height={800}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
