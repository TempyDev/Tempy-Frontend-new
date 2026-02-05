import Hero_Section from "../../components/home_hero_section";
import FeaturesGrid from "../../components/home_features_grid";
import HeroSlider from "../../components/home_hero_slider";
import Home_Tempy_Work from "../../components/home_tempy_work";
export default function Home() {
  return (
    <div>
      <div className="">
        <Hero_Section />
        <FeaturesGrid />
      </div>

      <HeroSlider />
      <Home_Tempy_Work />
    </div>
  );
}
