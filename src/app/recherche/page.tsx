import type { Metadata } from "next";
import { SearchSection } from "@/components/home/SearchSection";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Recherche",
  description: "Recherchez une démarche administrative sur FasoDocs.",
};

type SearchPageProps = {
  searchParams: Promise<{ q?: string }>;
};

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q } = await searchParams;
  const query = q?.trim() ?? "";

  return (
    <div>
      <section className="border-b border-border bg-surface-alt py-12 md:py-16">
        <div className="container-page max-w-3xl">
          <h1 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            Recherche
          </h1>
          {query ? (
            <p className="mt-3 text-ink-muted">
              Résultats pour&nbsp;:{" "}
              <span className="font-medium text-ink">
                &laquo;&nbsp;{query}&nbsp;&raquo;
              </span>
            </p>
          ) : (
            <p className="mt-3 text-ink-muted">
              Saisissez une démarche pour lancer une recherche.
            </p>
          )}

          <div className="mt-6 rounded-xl border border-dashed border-border-strong bg-white px-4 py-5">
            <p className="text-sm leading-relaxed text-ink-muted">
              {query
                ? "La connexion au catalogue FasoDocs n'est pas encore active sur le site. Aucun résultat inventé n'est affiché."
                : "La recherche sera reliée aux données officielles FasoDocs prochainement."}
            </p>
            <p className="mt-2 text-xs text-ink-subtle">
              [Connexion aux données FasoDocs à venir]
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Button href="/demarches" variant="outline" size="sm">
                Voir les démarches
              </Button>
              <Button href="/demarches" variant="ghost" size="sm">
                Comprendre les démarches
              </Button>
            </div>
          </div>
        </div>
      </section>
      <SearchSection />
    </div>
  );
}
