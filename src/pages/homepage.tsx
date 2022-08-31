import { SectionA } from "@/components/sections/sectionA";
import data from "@/data/pages/homepage.json";

const sections = [data.sectionA, data.sectionB, data.sectionC].map(
  (section, i) => ({
    ...section,
    inverted: i % 2 !== 0,
    hero: i === 0,
  })
);

export const HomePage: React.FC = () => {
  return (
    <>
      {sections.map((section) => (
        <SectionA {...section} key={section.title} />
      ))}
    </>
  );
};
