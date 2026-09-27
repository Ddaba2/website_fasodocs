"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { NAV_LINKS, SITE } from "@/lib/constants";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <header
      className={[
        "sticky top-0 z-50 border-b transition-colors duration-200",
        scrolled || open
          ? "border-border bg-white/95 backdrop-blur-md"
          : "border-transparent bg-white/80 backdrop-blur-sm",
      ].join(" ")}
    >
      <div className="brand-accent-bar" aria-hidden="true" />
      <div className="container-page flex h-16 items-center justify-between gap-4 md:h-[4.25rem]">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2.5"
          aria-label={`${SITE.name} — Accueil`}
        >
          <Image
            src="/images/logo-fasodocs.png"
            alt=""
            width={40}
            height={48}
            className="h-10 w-auto object-contain"
            priority
          />
          <span className="font-display text-xl font-semibold tracking-tight text-ink">
            {SITE.name}
          </span>
        </Link>

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Navigation principale"
        >
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={[
                  "rounded-lg px-3.5 py-2 text-sm font-medium transition-colors",
                  active
                    ? "bg-brand-green-soft text-brand-green-dark"
                    : "text-ink-muted hover:bg-surface-muted hover:text-ink",
                ].join(" ")}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button href="/telecharger" size="md">
            Télécharger l&apos;application
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-border text-ink lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div
          id="mobile-menu"
          className="border-t border-border bg-white lg:hidden"
        >
          <nav
            className="container-page flex flex-col gap-1 py-4"
            aria-label="Navigation mobile"
          >
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={[
                    "rounded-lg px-3 py-3 text-base font-medium",
                    active
                      ? "bg-brand-green-soft text-brand-green-dark"
                      : "text-ink hover:bg-surface-muted",
                  ].join(" ")}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-3">
              <Link
                href="/telecharger"
                className="inline-flex h-11 w-full items-center justify-center rounded-lg bg-brand-green px-5 text-sm font-medium text-white transition-colors hover:bg-brand-green-dark"
              >
                Télécharger l&apos;application
              </Link>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
