import Image from "next/image";
import { CategoryIcon, type IconName } from "@/components/icons/CategoryIcon";

type CategoryVisualProps = {
  icon: IconName;
  iconUrl?: string;
  name: string;
  size?: number;
};

/** Affiche l'icône image (remplace les emojis du SQL) avec repli Lucide. */
export function CategoryVisual({
  icon,
  iconUrl,
  name,
  size = 40,
}: CategoryVisualProps) {
  if (iconUrl) {
    return (
      <Image
        src={iconUrl}
        alt=""
        width={size}
        height={size}
        className="object-contain"
        aria-hidden="true"
        unoptimized
        title={name}
      />
    );
  }

  return <CategoryIcon name={icon} className="h-6 w-6" />;
}
