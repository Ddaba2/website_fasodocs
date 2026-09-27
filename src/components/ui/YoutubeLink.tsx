import Link from "next/link";

type YoutubeLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: "button" | "text" | "pill";
};

/** Lien / bouton aux couleurs officielles YouTube (rouge #FF0000, texte blanc). */
export function YoutubeLink({
  href,
  children,
  className = "",
  variant = "button",
}: YoutubeLinkProps) {
  if (variant === "text") {
    return (
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-1.5 font-medium text-[#FF0000] underline-offset-2 hover:text-[#CC0000] hover:underline ${className}`}
      >
        <YoutubeIcon className="h-4 w-4" />
        {children}
      </Link>
    );
  }

  if (variant === "pill") {
    return (
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex h-10 items-center gap-2 rounded-lg bg-[#FF0000] px-3.5 text-sm font-medium text-white transition-colors hover:bg-[#CC0000] ${className}`}
      >
        <YoutubeIcon className="h-4 w-4" />
        {children}
      </Link>
    );
  }

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-[#FF0000] px-6 text-base font-medium text-white transition-colors hover:bg-[#CC0000] ${className}`}
    >
      <YoutubeIcon className="h-5 w-5" />
      {children}
    </Link>
  );
}

function YoutubeIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="currentColor"
    >
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8zM9.8 15.5v-7l6.3 3.5-6.3 3.5z" />
    </svg>
  );
}
