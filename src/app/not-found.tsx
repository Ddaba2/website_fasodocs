import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="bg-surface-alt py-20 md:py-28">
      <div className="container-page max-w-xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.08em] text-brand-green">
          Erreur 404
        </p>
        <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
          Page introuvable
        </h1>
        <p className="mt-4 text-base leading-relaxed text-ink-muted">
          Cette page n&apos;existe pas ou a été déplacée. Revenez à l&apos;accueil
          ou explorez les démarches disponibles.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/">Retour à l&apos;accueil</Button>
          <Button href="/demarches" variant="outline">
            Voir les démarches
          </Button>
        </div>
      </div>
    </section>
  );
}
