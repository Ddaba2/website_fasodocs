"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { SEARCH_EXAMPLES } from "@/lib/constants";

export function SearchSection() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmed = query.trim();
    if (!trimmed) return;
    router.push(`/recherche?q=${encodeURIComponent(trimmed)}`);
  }

  return (
    <section
      id="recherche"
      className="border-y border-border bg-white py-12 md:py-16"
      aria-labelledby="search-heading"
    >
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="search-heading"
            className="font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl"
          >
            Quelle démarche recherchez-vous&nbsp;?
          </h2>
          <p className="mt-3 text-sm text-ink-muted md:text-base">
            Recherchez une procédure pour accéder aux informations disponibles
            sur FasoDocs.
          </p>
        </div>

        <form
          onSubmit={onSubmit}
          className="mx-auto mt-8 max-w-3xl"
          role="search"
          aria-label="Recherche de démarches"
        >
          <div className="flex flex-col gap-3 rounded-2xl border border-border bg-surface-alt p-2 shadow-card sm:flex-row sm:items-center sm:gap-2 sm:p-2.5">
            <label htmlFor="home-search" className="sr-only">
              Rechercher une démarche administrative
            </label>
            <div className="relative flex-1">
              <Search
                className="pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-ink-subtle"
                aria-hidden="true"
              />
              <input
                id="home-search"
                type="search"
                name="q"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ex. carte d'identité, passeport, permis..."
                className="h-12 w-full rounded-xl border border-transparent bg-white pl-11 pr-4 text-base text-ink placeholder:text-ink-subtle focus:border-brand-green focus:outline-none"
                autoComplete="off"
              />
            </div>
            <button
              type="submit"
              className="inline-flex h-12 shrink-0 items-center justify-center rounded-xl bg-brand-green px-6 text-sm font-semibold text-white transition-colors hover:bg-brand-green-dark"
            >
              Rechercher
            </button>
          </div>
        </form>

        <div className="mx-auto mt-5 flex max-w-3xl flex-wrap items-center justify-center gap-2">
          <span className="text-xs font-medium text-ink-subtle">Exemples :</span>
          {SEARCH_EXAMPLES.map((example) => (
            <button
              key={example}
              type="button"
              onClick={() => {
                setQuery(example);
                router.push(`/recherche?q=${encodeURIComponent(example)}`);
              }}
              className="rounded-full border border-border bg-white px-3 py-1.5 text-xs font-medium text-ink-muted transition-colors hover:border-brand-green hover:text-brand-green"
            >
              {example}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
