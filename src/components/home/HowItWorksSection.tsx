import { SectionHeading } from "@/components/ui/SectionHeading";
import { HOW_IT_WORKS } from "@/lib/constants";

export function HowItWorksSection() {
  return (
    <section
      className="bg-white py-16 md:py-20"
      aria-labelledby="how-heading"
    >
      <div className="container-page">
        <SectionHeading
          eyebrow="Comment ça marche"
          title="Trois étapes pour vous orienter"
          description="FasoDocs est un outil d'information et d'orientation. Il vous aide à comprendre une démarche — sans la remplacer."
          as="h2"
        />
        <h2 id="how-heading" className="sr-only">
          Comment fonctionne FasoDocs
        </h2>

        <ol className="mt-12 grid gap-6 md:grid-cols-3 md:gap-8">
          {HOW_IT_WORKS.map((item, index) => (
            <li key={item.step} className="relative">
              {index < HOW_IT_WORKS.length - 1 ? (
                <span
                  className="absolute left-[1.65rem] top-12 hidden h-px w-[calc(100%+2rem)] bg-border md:block"
                  aria-hidden="true"
                />
              ) : null}
              <div className="relative rounded-xl border border-border bg-surface-alt p-6">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-green text-sm font-bold text-white">
                  {item.step}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
