import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ProcedureDetailView } from "@/components/demarches/ProcedureDetailView";
import {
  EMPTY_PROCEDURE_SHELL,
  PROCEDURE_PLACEHOLDER,
} from "@/lib/procedures";

type ProcedurePageProps = {
  params: Promise<{ slug: string }>;
};

function titleFromSlug(slug: string) {
  return decodeURIComponent(slug)
    .split("-")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export async function generateMetadata({
  params,
}: ProcedurePageProps): Promise<Metadata> {
  const { slug } = await params;
  const title = titleFromSlug(slug) || "Démarche";
  return {
    title: `${title} — fiche en préparation`,
    description:
      "Fiche démarche FasoDocs. Les données officielles seront connectées prochainement.",
  };
}

export default async function ProcedureDetailPage({ params }: ProcedurePageProps) {
  const { slug } = await params;
  const title = titleFromSlug(slug) || "Démarche";

  return (
    <section className="bg-surface-alt py-12 md:py-16">
      <div className="container-page max-w-3xl">
        <nav className="mb-6 text-sm text-ink-subtle" aria-label="Fil d'Ariane">
          <Link href="/demarches" className="hover:text-brand-green">
            Démarches
          </Link>
          <span aria-hidden="true"> / </span>
          <span className="text-ink">{title}</span>
        </nav>

        <div className="mb-6 rounded-xl border border-dashed border-border-strong bg-white px-4 py-3 text-sm text-ink-muted">
          Fiche structurelle prête pour la connexion aux données FasoDocs.{" "}
          <span className="text-ink-subtle">{PROCEDURE_PLACEHOLDER}</span>
        </div>

        <div className="rounded-2xl border border-border bg-white p-6 shadow-card md:p-8">
          <ProcedureDetailView
            procedure={{
              slug,
              title,
              ...EMPTY_PROCEDURE_SHELL,
            }}
          />
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/demarches">Retour aux démarches</Button>
          <Button href="/recherche" variant="outline">
            Rechercher
          </Button>
        </div>
      </div>
    </section>
  );
}
