import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import { SiteShell } from "@/components/layout/SiteShell";
import { SITE } from "@/lib/constants";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} — Démarches administratives au Mali | App gratuite`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [...SITE.keywords],
  authors: [{ name: "Daba Diallo" }, { name: "Tenen Madyeh Sylla" }],
  creator: SITE.name,
  publisher: SITE.name,
  metadataBase: new URL(SITE.url),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-48.png", type: "image/png", sizes: "48x48" },
      { url: "/images/logo-fasodocs.png", type: "image/png", sizes: "288x279" },
    ],
    apple: [{ url: "/apple-touch-icon.png", type: "image/png", sizes: "180x180" }],
    shortcut: "/favicon.png",
  },
  openGraph: {
    title: `${SITE.name} — Démarches administratives au Mali`,
    description: SITE.description,
    locale: "fr_ML",
    type: "website",
    siteName: SITE.name,
    url: SITE.url,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — Démarches administratives au Mali`,
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  category: "government",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: SITE.name,
  applicationCategory: "LifestyleApplication",
  operatingSystem: "Android, iOS",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "XOF",
  },
  description: SITE.description,
  url: SITE.url,
  email: SITE.email,
  inLanguage: ["fr", "en", "bm"],
  author: [
    { "@type": "Person", name: "Daba Diallo" },
    { "@type": "Person", name: "Tenen Madyeh Sylla" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang={SITE.defaultLocale}
      data-scroll-behavior="smooth"
      className={`${dmSans.variable} ${fraunces.variable}`}
    >
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
