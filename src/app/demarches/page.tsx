import type { Metadata } from "next";
import { CategoryVisual } from "@/components/icons/CategoryVisual";
import type { IconName } from "@/components/icons/CategoryIcon";
import { CategoryIcon } from "@/components/icons/CategoryIcon";
import { PageHero } from "@/components/ui/PageHero";
import { CATEGORIES, PROCEDURE_INFO_TYPES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Démarches administratives",
  description:
    "Explorez les démarches administratives au Mali avec FasoDocs : catégories, recherche et informations d'orientation.",
};

export default function DemarchesPage() {
  return (
    <>
      <PageHero
        eyebrow="Démarches"
        title="Comprendre une démarche avant de vous déplacer"
        description="FasoDocs vous aide à préparer vos formalités : documents, étapes, coûts, délais et lieux — selon les informations disponibles dans la plateforme."
        primaryHref="#categories"
        primaryLabel="Parcourir les catégories"
      />

      <section className="bg-white py-14 md:py-16">
        <div className="container-page">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl">
            Ce que vous pouvez consulter
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PROCEDURE_INFO_TYPES.map((item) => (
              <li
                key={item.title}
                className="rounded-xl border border-border bg-surface-alt p-5"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-brand-green-soft text-brand-green">
                  <CategoryIcon name={item.icon} className="h-5 w-5" size={22} />
                </span>
                <h3 className="mt-4 text-base font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="categories"
        className="border-y border-border bg-surface-alt py-14 md:py-16"
      >
        <div className="container-page">
          <div>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl">
              Parcourir par categorie
            </h2>
            <p className="mt-3 max-w-xl text-sm text-ink-muted md:text-base">
              Commencez par une catégorie administrative, puis consultez les
              démarches associées dans l&apos;application.
            </p>
          </div>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {CATEGORIES.map((category) => (
              <li key={category.id} id={`categorie-${category.slug}`}>
                <div className="flex items-start gap-3 rounded-xl border border-border bg-white p-4">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-green-soft">
                    <CategoryVisual
                      icon={category.icon as IconName}
                      iconUrl={category.iconUrl}
                      name={category.name}
                      size={32}
                    />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-ink">
                      {category.name}
                    </span>
                    <span className="mt-1 block text-xs leading-relaxed text-ink-muted">
                      {category.description}
                    </span>
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
