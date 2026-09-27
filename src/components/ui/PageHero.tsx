import type { ReactNode } from "react";
import { Button } from "@/components/ui/Button";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  /** Contenu d'action libre (ex. bouton YouTube) placé à côté des CTA */
  actions?: ReactNode;
};

function isExternal(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

export function PageHero({
  eyebrow,
  title,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  actions,
}: PageHeroProps) {
  const hasCtas =
    (primaryHref && primaryLabel) ||
    (secondaryHref && secondaryLabel) ||
    actions;

  return (
    <section className="border-b border-border bg-surface-alt">
      <div className="container-page max-w-3xl py-14 md:py-16 lg:py-20">
        {eyebrow ? (
          <p className="text-sm font-semibold uppercase tracking-[0.08em] text-brand-green">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl lg:text-[2.75rem] text-balance">
          {title}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-ink-muted md:text-lg">
          {description}
        </p>
        {hasCtas ? (
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            {primaryHref && primaryLabel ? (
              <Button
                href={primaryHref}
                size="lg"
                {...(isExternal(primaryHref)
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {primaryLabel}
              </Button>
            ) : null}
            {secondaryHref && secondaryLabel ? (
              <Button
                href={secondaryHref}
                variant="outline"
                size="lg"
                {...(isExternal(secondaryHref)
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {secondaryLabel}
              </Button>
            ) : null}
            {actions}
          </div>
        ) : null}
      </div>
    </section>
  );
}
