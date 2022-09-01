import { Link } from "react-router-dom";
import { useId } from "react";
import data from "@/data/pages/stories.json";


export const StoryCard: React.FC<{ story: typeof data.stories[0], date: boolean }> = ({
  story, date
}) => {
  const linkId = useId();

  return (
    <Link to={story.link} aria-labelledby={linkId}>
      <article
        className="relative overflow-hidden top-0 xl:hover:top-[-1.875rem] xl:hover:overflow-visible
      transition-all duration-500 z-40"
      >
        <picture className="block w-full h-max [background:var(--stories-gradient)]">
          <source
            media="(min-width: 45rem)"
            srcSet={`/assets/stories/desktop/${story.image}`}
          />
          <img
            src={`/assets/stories/mobile/${story.image}`}
            alt=""
            className="aspect-[1] relative z-[1] w-full max-w-none md:aspect-[0.768] object-cover object-center
              xl:aspect-[0.72]
            "
          />
        </picture>
        <header className="absolute z-10 bottom-10 text-surface px-8 w-full">
          {date && <p className="paragraph-sm">{story.date}</p>}
          <h3 className="heading-sm">{story.title}</h3>
          <p className="paragraph-sm mt-1">by {story.author}</p>
          <div className="mt-4 w-full h-0 border-b border-surface opacity-25"></div>
          <div className="mt-5">
            <p id={linkId} className="ternary-button white">
              <span>READ STORY</span>
            </p>
          </div>
        </header>
        <div className="hidden xl:block absolute bottom-[-0.375rem] h-1.5 w-full [background:var(--rainbow-gradient)]"></div>
      </article>
    </Link>
  );
};
