import data from "@/data/pages/stories.json";
import { StoryCard } from "../cards/story-card";

export const StoriesSection: React.FC = () => {
  return (
    <section>
      <header className="sr-only">
        <h2>Stories</h2>
      </header>
      <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        {data.stories.map((story, i) => (
          <li key={i}>
            <StoryCard story={story} date={true} />
          </li>
        ))}
      </ul>
    </section>
  );
};
