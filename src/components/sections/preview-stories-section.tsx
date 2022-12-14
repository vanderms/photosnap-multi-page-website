import data from "@/data/pages/stories.json";
import { StoryCard } from "../cards/story-card";

export const PreviewStoriesSection: React.FC = () => {
  return (
    <section>
      <header className="sr-only">
        <h2>Features Preview</h2>
      </header>
      <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        {data.stories.slice(0, 4).map((story, i) => (
          <li key={i}>
            <StoryCard story={story} key={`${i}`} date={false} />
          </li>
        ))}
      </ul>
    </section>
  );
};
