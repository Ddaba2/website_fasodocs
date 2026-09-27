import { SectionHeading } from "@/components/ui/SectionHeading";

const PLACEHOLDERS = [
  {
    title: "Partenaires",
    detail: "[Organismes et partenaires à renseigner]",
  },
  {
    title: "Chiffres clés",
    detail: "[Indicateurs officiels à renseigner]",
  },
  {
    title: "Distinctions & presse",
    detail: "[Mentions et couverture médiatique à renseigner]",
  },
] as const;

export function CredibilitySection() {
  return (
    <section
      className="border-y border-border bg-surface-alt py-16 md:py-20"
      aria-labelledby="credibility-heading"
    >
      <div className="container-page">
        <SectionHeading
          eyebrow="Engagement"
          title="Une présence institutionnelle en construction"
          description="Cet espace accueillera prochainement les partenaires, distinctions et éléments de crédibilité officiels de FasoDocs."
          as="h2"
          align="center"
        />
        <h2 id="credibility-heading" className="sr-only">
          Crédibilité et partenaires
        </h2>

        <ul className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-3">
          {PLACEHOLDERS.map((item) => (
            <li
              key={item.title}
              className="rounded-xl border border-dashed border-border-strong bg-white/70 px-5 py-8 text-center"
            >
              <p className="text-sm font-semibold text-ink">{item.title}</p>
              <p className="mt-2 text-xs leading-relaxed text-ink-subtle">
                {item.detail}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
