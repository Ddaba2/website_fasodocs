import Link from "next/link";
import { CategoryVisual } from "@/components/icons/CategoryVisual";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CATEGORIES } from "@/lib/constants";
import type { IconName } from "@/components/icons/CategoryIcon";

export function CategoriesSection() {
  return (
    <section
      id="categories"
      className="bg-surface-alt py-16 md:py-20"
      aria-labelledby="categories-heading"
    >
      <div className="container-page">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Catégories"
            title="Explorer par catégorie administrative"
            description="Retrouvez les grandes familles de démarches disponibles dans FasoDocs."
            as="h2"
          />
          <Link
            href="/demarches#categories"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-green transition-colors hover:text-brand-green-dark"
          >
            Voir les démarches
            <span aria-hidden="true">→</span>
          </Link>
        </div>
        <h2 id="categories-heading" className="sr-only">
          Catégories de démarches
        </h2>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {CATEGORIES.map((category) => (
            <li key={category.id}>
              <div className="group flex h-full flex-col rounded-xl border border-border bg-white p-5 transition-all duration-200 hover:border-brand-green/40 hover:shadow-card">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-green-soft transition-transform duration-200 group-hover:scale-105">
                  <CategoryVisual
                    icon={category.icon as IconName}
                    iconUrl={category.iconUrl}
                    name={category.name}
                    size={36}
                  />
                </span>
                <h3 className="mt-4 text-base font-semibold text-ink transition-colors group-hover:text-brand-green-dark">
                  {category.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">
                  {category.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
