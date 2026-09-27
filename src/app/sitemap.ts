import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    "",
    "/demarches",
    "/a-propos",
    "/fonctionnalites",
    "/faq",
    "/contact",
    "/telecharger",
    "/recherche",
    "/mentions-legales",
    "/confidentialite",
  ].map((path) => ({
    url: `${SITE.url}${path}`,
    lastModified: now,
    changeFrequency:
      path === "" || path === "/demarches"
        ? ("weekly" as const)
        : ("monthly" as const),
    priority:
      path === ""
        ? 1
        : path === "/demarches" || path === "/fonctionnalites"
          ? 0.9
          : 0.7,
  }));

  return staticRoutes;
}
