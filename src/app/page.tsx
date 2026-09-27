import { AppSection } from "@/components/home/AppSection";
import { CategoriesSection } from "@/components/home/CategoriesSection";
import { CredibilitySection } from "@/components/home/CredibilitySection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { Hero } from "@/components/home/Hero";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CategoriesSection />
      <HowItWorksSection />
      <FeaturesSection />
      <AppSection />
      <CredibilitySection />
    </>
  );
}
