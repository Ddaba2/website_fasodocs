import Image from "next/image";
import Link from "next/link";
import {
  LinkedInLink,
  TikTokLink,
} from "@/components/ui/BrandLinks";
import { YoutubeLink } from "@/components/ui/YoutubeLink";
import {
  FOOTER_LINKS,
  LEGAL_LINKS,
  SITE,
  SOCIAL_LINKS,
} from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();
  const linkedIn = SOCIAL_LINKS.find((l) => l.label === "LinkedIn");
  const tikTok = SOCIAL_LINKS.find((l) => l.label === "TikTok");
  const youtube = SOCIAL_LINKS.find((l) => l.label === "YouTube");

  return (
    <footer className="border-t border-border bg-ink text-white">
      <div className="container-page py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src="/images/logo-fasodocs.png"
                alt=""
                width={36}
                height={44}
                className="h-9 w-auto object-contain"
              />
              <span className="font-display text-xl font-semibold">{SITE.name}</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
              {SITE.tagline}. Application gratuite d&apos;information et
              d&apos;orientation pour les démarches administratives au Mali.
            </p>
            <p className="mt-3 text-sm">
              <a
                href={`mailto:${SITE.email}`}
                className="text-white/80 transition-colors hover:text-white"
              >
                {SITE.email}
              </a>
            </p>
            <p className="mt-4 text-xs leading-relaxed text-white/50">
              FasoDocs ne délivre pas de documents et ne remplace pas les
              administrations.
            </p>
          </div>

          <div className="md:col-span-3">
            <h2 className="text-sm font-semibold uppercase tracking-[0.08em] text-white/50">
              Navigation
            </h2>
            <ul className="mt-4 space-y-2.5">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/80 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h2 className="text-sm font-semibold uppercase tracking-[0.08em] text-white/50">
              Réseaux sociaux
            </h2>
            <ul className="mt-4 flex flex-wrap gap-3">
              <li>
                <LinkedInLink href={linkedIn?.href ?? "#"} />
              </li>
              <li>
                <TikTokLink href={tikTok?.href ?? "#"} />
              </li>
              <li>
                <YoutubeLink
                  href={youtube?.href ?? SITE.youtubeDemo}
                  variant="pill"
                >
                  YouTube
                </YoutubeLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-white/45">
            © {year} {SITE.name}. Tous droits réservés.
          </p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {LEGAL_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-xs text-white/55 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
