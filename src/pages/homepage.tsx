import { PreviewFeaturesSection } from "@/components/sections/preview-stories-section";
import { SectionCardHomepage } from "@/components/sections/sectionCardHomepage";
import data from "@/data/pages/homepage.json";

const sections = [data.sectionA, data.sectionB, data.sectionC].map(
  (section, i) => ({
    ...section,
    inverted: i % 2 === 0,
    hero: i === 0,
    key: i,
  })
);

export const HomePage: React.FC = () => {
  return (
    <>
      {sections.map((section) => (
        <SectionCardHomepage {...section} />
      ))}
      <PreviewFeaturesSection />
    </>
  );
};
