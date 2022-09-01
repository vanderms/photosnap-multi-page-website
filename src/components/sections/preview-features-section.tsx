import data from "@/data/pages/features.json";
import { IconCard } from "../cards/icon-card";

export const PreviewFeaturesSection: React.FC = () => {
  return (
    <section className="py-20 md:py-[7.5rem]">
      <header className="sr-only">
        <h2>Features Preview</h2>
      </header>
      <ul className="container grid grid-cols-1 justify-items-center gap-y-14 xl:grid-cols-3 xl:gap-x-[1.875rem]">
        {data.features.slice(0, 3).map((feature, i) => (
          <li key={i}>
            <IconCard feature={feature} />
          </li>
        ))}
      </ul>
    </section>
  );
};
