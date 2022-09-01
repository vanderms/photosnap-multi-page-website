import { StoriesHeroSection } from "@/components/sections/stories-hero-section";
import { StoriesSection } from "@/components/sections/stories-section";

export const StoriesPage: React.FC = () => {
  return (
    <>
      <StoriesHeroSection />
      <StoriesSection />
    </>
  );
};
