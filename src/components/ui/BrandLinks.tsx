import Link from "next/link";

type BrandLinkProps = {
  href: string;
  children?: React.ReactNode;
  className?: string;
  available?: boolean;
};

export function LinkedInLink({ href, children = "LinkedIn", className = "" }: BrandLinkProps) {
  const isPlaceholder = !href || href === "#";
  const classes = `inline-flex h-10 items-center gap-2 rounded-lg bg-[#0A66C2] px-3.5 text-sm font-medium text-white transition-colors hover:bg-[#004182] ${className}`;

  if (isPlaceholder) {
    return (
      <span className={`${classes} opacity-80`} title="Lien LinkedIn à renseigner">
        <LinkedInIcon />
        {children}
        <span className="text-[11px] opacity-70">bientôt</span>
      </span>
    );
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={classes} aria-label="LinkedIn">
      <LinkedInIcon />
      {children}
    </a>
  );
}

export function TikTokLink({ href, children = "TikTok", className = "" }: BrandLinkProps) {
  const isPlaceholder = !href || href === "#";
  const classes = `inline-flex h-10 items-center gap-2 rounded-lg bg-black px-3.5 text-sm font-medium text-white transition-colors hover:bg-[#1a1a1a] ${className}`;

  if (isPlaceholder) {
    return (
      <span className={`${classes} opacity-80`} title="Lien TikTok à renseigner">
        <TikTokIcon />
        {children}
        <span className="text-[11px] opacity-70">bientôt</span>
      </span>
    );
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={classes} aria-label="TikTok">
      <TikTokIcon />
      {children}
    </a>
  );
}

export function GooglePlayButton({
  href,
  available = false,
  className = "",
}: BrandLinkProps) {
  const classes = `inline-flex h-12 items-center gap-2.5 rounded-lg bg-black px-5 text-sm font-medium text-white transition-colors hover:bg-[#1a1a1a] ${className}`;

  const content = (
    <>
      <GooglePlayIcon />
      <span className="flex flex-col items-start leading-tight">
        <span className="text-[10px] font-normal opacity-80">
          {available ? "Disponible sur" : "Bientôt sur"}
        </span>
        <span className="text-sm font-semibold">Google Play</span>
      </span>
    </>
  );

  if (!available) {
    return (
      <span className={`${classes} opacity-90`} title="Lien Google Play à renseigner">
        {content}
      </span>
    );
  }

  return (
    <Link href={href} className={classes} aria-label="Google Play">
      {content}
    </Link>
  );
}

export function AppStoreButton({
  href,
  available = false,
  className = "",
}: BrandLinkProps) {
  const classes = `inline-flex h-12 items-center gap-2.5 rounded-lg bg-black px-5 text-sm font-medium text-white transition-colors hover:bg-[#1a1a1a] ${className}`;

  const content = (
    <>
      <AppleIcon />
      <span className="flex flex-col items-start leading-tight">
        <span className="text-[10px] font-normal opacity-80">
          {available ? "Télécharger dans" : "Bientôt sur"}
        </span>
        <span className="text-sm font-semibold">l&apos;App Store</span>
      </span>
    </>
  );

  if (!available) {
    return (
      <span className={`${classes} opacity-90`} title="Lien App Store à renseigner">
        {content}
      </span>
    );
  }

  return (
    <Link href={href} className={classes} aria-label="App Store">
      {content}
    </Link>
  );
}

function LinkedInIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .56.04.82.12v-3.4a6.37 6.37 0 0 0-.82-.05A6.34 6.34 0 0 0 3.16 15.5a6.34 6.34 0 0 0 10.95 4.36 6.3 6.3 0 0 0 1.86-4.47V8.73a8.16 8.16 0 0 0 4.77 1.52V6.84a4.85 4.85 0 0 1-1.15-.15z" />
    </svg>
  );
}

function GooglePlayIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#EA4335" d="M3.6 2.1 13.5 12 3.6 21.9A2.2 2.2 0 0 1 2 20.1V3.9c0-.8.4-1.5 1.1-1.9.2-.1.3-.1.5.1z" />
      <path fill="#FBBC04" d="M16.7 8.8 13.5 12l3.2 3.2 4.1-2.3c.8-.5.8-1.6 0-2.1l-4.1-2z" />
      <path fill="#4285F4" d="M13.5 12 3.6 2.1c.3-.2.6-.2.9 0L16.7 8.8 13.5 12z" />
      <path fill="#34A853" d="M13.5 12 3.6 21.9c.3.2.6.2.9 0l12.2-6.7L13.5 12z" />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}
