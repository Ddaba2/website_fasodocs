import Image from "next/image";

type FrancCfaIconProps = {
  className?: string;
  size?: number;
};

/** Icône officielle Franc CFA fournie pour FasoDocs. */
export function FrancCfaIcon({ className = "", size = 20 }: FrancCfaIconProps) {
  return (
    <Image
      src="/images/icons/franc-cfa.png"
      alt=""
      width={size}
      height={size}
      className={`object-contain ${className}`}
      aria-hidden="true"
    />
  );
}
