import Image from "next/image";
import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { YoutubeLink } from "@/components/ui/YoutubeLink";
import {
  AppStoreButton,
  GooglePlayButton,
} from "@/components/ui/BrandLinks";
import { APP_DOWNLOAD, SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Télécharger l'application",
  description:
    "Téléchargez FasoDocs gratuitement : application d'information sur les démarches administratives au Mali. Voir aussi la démo YouTube.",
};

const SCREENS = [
  {
    src: "/images/screens/onboarding-commencer.png",
    alt: "Onboarding FasoDocs — simple, facile et accessible",
  },
  {
    src: "/images/screens/demarche-etapes.png",
    alt: "Détail d'une démarche — étapes à suivre",
  },
  {
    src: "/images/screens/categories.png",
    alt: "Écran des catégories de démarches",
  },
  {
    src: "/images/screens/fasobot.png",
    alt: "Assistant FasoBot dans l'application",
  },
] as const;

export default function DownloadPage() {
  return (
    <>
      <PageHero
        eyebrow="Application mobile gratuite"
        title="Emportez FasoDocs partout avec vous"
        description="Consultez gratuitement les informations administratives sur votre téléphone : recherche, catégories, étapes, lieux, langues et synthèse vocale en bambara."
      />

      <section className="bg-white py-14 md:py-16">
        <div className="container-page grid items-start gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl">
              Gratuit — bientôt sur les stores
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-muted">
              FasoDocs est une application gratuite. Les liens de
              téléchargement officiels seront publiés ici dès validation.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <GooglePlayButton
                href={APP_DOWNLOAD.googlePlay.href}
                available={APP_DOWNLOAD.googlePlay.available}
              />
              <AppStoreButton
                href={APP_DOWNLOAD.appStore.href}
                available={APP_DOWNLOAD.appStore.available}
              />
              <YoutubeLink href={SITE.youtubeDemo}>Voir la démo</YoutubeLink>
            </div>

            <div className="mt-10 rounded-2xl border border-border bg-surface-alt p-5">
              <h3 className="text-sm font-semibold text-ink">Rappel important</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                L&apos;application informe et oriente. Elle ne délivre pas de
                documents et ne remplace pas les administrations.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {SCREENS.map((screen) => (
              <div
                key={screen.src}
                className="overflow-hidden rounded-2xl border border-border bg-ink shadow-soft"
              >
                <Image
                  src={screen.src}
                  alt={screen.alt}
                  width={360}
                  height={720}
                  className="h-auto w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
