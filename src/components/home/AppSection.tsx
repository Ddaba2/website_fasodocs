import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { YoutubeLink } from "@/components/ui/YoutubeLink";
import {
  AppStoreButton,
  GooglePlayButton,
} from "@/components/ui/BrandLinks";
import { APP_DOWNLOAD, SITE } from "@/lib/constants";

export function AppSection() {
  return (
    <section
      id="telecharger"
      className="bg-white py-16 md:py-20"
      aria-labelledby="app-heading"
    >
      <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Application mobile gratuite"
            title="FasoDocs dans votre poche"
            description="Une application gratuite conçue pour les citoyens maliens : consultez les informations administratives où que vous soyez, en français, en anglais ou en bambara."
            as="h2"
          />
          <h2 id="app-heading" className="sr-only">
            Télécharger l&apos;application FasoDocs
          </h2>

          <p className="mt-5 max-w-lg text-sm leading-relaxed text-ink-muted">
            FasoDocs oriente et informe. Les démarches sont effectuées auprès
            des administrations compétentes.
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
        </div>

        <div className="relative mx-auto grid w-full max-w-md grid-cols-2 gap-4 sm:max-w-lg">
          <div className="overflow-hidden rounded-2xl border border-border bg-ink shadow-soft">
            <Image
              src="/images/screens/demarche-etapes.png"
              alt="Capture FasoDocs : étapes d'une démarche administrative"
              width={400}
              height={800}
              className="h-auto w-full object-cover"
            />
          </div>
          <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-ink shadow-soft">
            <Image
              src="/images/screens/fasobot.png"
              alt="Capture FasoDocs : assistant FasoBot"
              width={400}
              height={800}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
