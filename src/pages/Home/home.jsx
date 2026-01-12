import Hero_Section from "../../components/home_hero_section";
import FeaturesGrid from "../../components/home_features_grid";
import HeroSlider from "../../components/home_hero_slider"
export default function Home() {
  return (
    <div className="h-screen">
      <Hero_Section />
      <FeaturesGrid />
      <HeroSlider />
    </div>
  );
}
