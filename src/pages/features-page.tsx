import { BannerSection } from "@/components/sections/banner-section";
import { FeaturesSection } from "@/components/sections/features-section";
import data from "@/data/pages/features.json";

export const FeaturesPage: React.FC = () => {
  return (
    <>
      <BannerSection {...data.banner} />
      <FeaturesSection />
    </>
  );
};
