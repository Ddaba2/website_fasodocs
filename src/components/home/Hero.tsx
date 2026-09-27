import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-surface-alt">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 12% 18%, rgba(0,155,58,0.12), transparent 42%), radial-gradient(circle at 88% 8%, rgba(252,209,22,0.10), transparent 36%)",
        }}
      />

      <div className="container-page relative grid items-center gap-10 py-14 md:gap-12 md:py-20 lg:grid-cols-12 lg:gap-8 lg:py-24">
        <div className="lg:col-span-6 xl:col-span-6">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-brand-green">
            Application gratuite · Information administrative
          </p>

          <h1 className="font-display text-4xl font-semibold leading-[1.12] tracking-tight text-ink sm:text-5xl lg:text-[3.25rem] text-balance">
            Comprendre les démarches administratives au Mali, simplement.
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-muted md:text-lg">
            FasoDocs est une application <strong className="font-semibold text-ink">gratuite</strong> qui
            centralise les informations utiles — documents, étapes, coûts, délais
            et lieux — pour vous orienter avant de vous rendre au service
            concerné. FasoDocs n&apos;émet pas de documents et ne remplace pas
            les administrations.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              href="/demarches"
              size="lg"
              iconRight={<ArrowRight className="h-4 w-4" aria-hidden="true" />}
            >
              Voir les démarches
            </Button>
            <Button href="/a-propos" variant="outline" size="lg">
              Découvrir FasoDocs
            </Button>
          </div>
        </div>

        <div className="relative lg:col-span-6 xl:col-span-6">
          <div className="relative mx-auto w-full max-w-[320px] sm:max-w-[360px] lg:ml-auto lg:mr-0">
            <div
              className="absolute -inset-6 rounded-[2rem] bg-brand-green/8 blur-2xl"
              aria-hidden="true"
            />
            <div className="relative overflow-hidden rounded-[2rem] border border-border bg-ink shadow-soft">
              <Image
                src="/images/screens/onboarding-commencer.png"
                alt="Écran d'accueil de l'application mobile FasoDocs"
                width={720}
                height={1440}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-4 -left-3 hidden max-w-[210px] rounded-xl border border-border bg-white p-3 shadow-card sm:block md:-left-8">
              <p className="text-xs font-semibold text-brand-green">Application mobile</p>
              <p className="mt-1 text-sm leading-snug text-ink">
                Simple, facile et accessible — conçue pour les citoyens.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
