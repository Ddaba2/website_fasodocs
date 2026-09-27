import Link from "next/link";
import {
  ArrowRight,
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
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FEATURES } from "@/lib/constants";

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

export function FeaturesSection() {
  return (
    <section
      id="fonctionnalites"
      className="bg-surface-alt py-16 md:py-20"
      aria-labelledby="features-heading"
    >
      <div className="container-page">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Fonctionnalités"
            title="Ce que propose l'application FasoDocs"
            description="Des fonctionnalités conçues pour rendre l'information administrative plus accessible aux citoyens."
            as="h2"
          />
          <Link
            href="/fonctionnalites"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-green transition-colors hover:text-brand-green-dark"
          >
            Toutes les fonctionnalités
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
        <h2 id="features-heading" className="sr-only">
          Fonctionnalités de FasoDocs
        </h2>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => {
            const Icon = featureIcons[feature.id] ?? ClipboardList;
            return (
              <li
                key={feature.id}
                className="rounded-xl border border-border bg-white p-6"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-brand-green-soft text-brand-green">
                  <Icon className="h-5 w-5" aria-hidden="true" strokeWidth={1.75} />
                </span>
                <h3 className="mt-4 text-base font-semibold text-ink">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {feature.description}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
