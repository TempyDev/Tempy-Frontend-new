import FeaturesGrid from "../components/FeaturesGrid";
import HeroSection from "../components/HeroSection";
import HowTempyWorksSection from "../components/HowTempyWorksSection";
import TemplateCarousel from "../components/TemplateCarousel";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <FeaturesGrid />
      <TemplateCarousel />
      <HowTempyWorksSection />
    </div>
  );
}
