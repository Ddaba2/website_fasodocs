import {
  Building2,
  Car,
  ClipboardList,
  FileText,
  IdCard,
  Landmark,
  Lightbulb,
  MapPin,
  Plane,
  Receipt,
  Scale,
  Search,
  Volume2,
  Wallet,
  Clock,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { FrancCfaIcon } from "@/components/icons/FrancCfaIcon";

const iconMap = {
  "id-card": IdCard,
  building: Building2,
  car: Car,
  land: Landmark,
  bolt: Lightbulb,
  scales: Scale,
  receipt: Receipt,
  plane: Plane,
  search: Search,
  steps: ClipboardList,
  docs: FileText,
  place: MapPin,
  voice: Volume2,
  wallet: Wallet,
  clock: Clock,
  cfa: "cfa",
} as const;

export type IconName = keyof typeof iconMap;

type CategoryIconProps = {
  name: IconName;
  className?: string;
  size?: number;
};

export function CategoryIcon({
  name,
  className = "h-6 w-6",
  size = 20,
}: CategoryIconProps) {
  if (name === "cfa") {
    return <FrancCfaIcon className={className} size={size} />;
  }

  const Icon = iconMap[name] as LucideIcon;
  return <Icon className={className} aria-hidden="true" strokeWidth={1.75} />;
}
