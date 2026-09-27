import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { ContactForm } from "@/components/contact/ContactForm";
import { YoutubeLink } from "@/components/ui/YoutubeLink";
import { LinkedInLink, TikTokLink } from "@/components/ui/BrandLinks";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez FasoDocs à fasodocs@gmail.com pour une question, une suggestion ou un partenariat.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Écrire à l'équipe FasoDocs"
        description="Questions, suggestions, partenariats ou demandes d'information — nous vous répondons à fasodocs@gmail.com."
      />

      <section className="bg-white py-14 md:py-16">
        <div className="container-page grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
              Informations
            </h2>
            <dl className="mt-6 space-y-5 text-sm">
              <div>
                <dt className="font-semibold text-ink">E-mail</dt>
                <dd className="mt-1">
                  <a
                    href={`mailto:${SITE.email}`}
                    className="font-medium text-brand-green hover:underline"
                  >
                    {SITE.email}
                  </a>
                  <p className="mt-1 text-ink-muted">
                    Pour vos questions, suggestions et demandes d&apos;information.
                  </p>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-ink">Vidéo démo</dt>
                <dd className="mt-2">
                  <YoutubeLink href={SITE.youtubeDemo} variant="text">
                    Voir la démo FasoDocs sur YouTube
                  </YoutubeLink>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-ink">Réseaux</dt>
                <dd className="mt-2 flex flex-wrap gap-2">
                  <LinkedInLink href="#" />
                  <TikTokLink href="#" />
                  <YoutubeLink href={SITE.youtubeDemo} variant="pill">
                    YouTube
                  </YoutubeLink>
                </dd>
              </div>
            </dl>
            <p className="mt-8 text-sm leading-relaxed text-ink-muted">
              FasoDocs ne traite pas les demandes de délivrance de documents
              administratifs. Pour une démarche, consultez les informations dans
              l&apos;application ou sur la page Démarches, puis adressez-vous à
              l&apos;administration compétente.
            </p>
          </div>

          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
