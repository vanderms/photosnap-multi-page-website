import data from "@/data/pages/stories.json";
import { Link } from "react-router-dom";

export const StoriesHeroSection: React.FC = () => {
  return (
    <section className="bg-neutral-950">
      <div className="container grid grid-cols-1 justify-items-center relative">
        <picture className="w-max h-max">
          <source
            media="(min-width: 75rem)"
            srcSet={`/assets/stories/desktop/${data.mainStory.image}`}
          />
          <source
            media="(min-width: 45rem)"
            srcSet={`/assets/stories/tablet/${data.mainStory.image}`}
          />
          <img
            src={`/assets/stories/mobile/${data.mainStory.image}`}
            alt=""
            className="max-w-[27.5rem] w-screen opacity-90 aspect-[1.182965] md:max-w-[48rem] 
            md:aspect-[1.181538] xl:aspect-[2.215385] xl:max-w-[90rem]"
          />
        </picture>
        <div className="md:absolute md:top-0 md:left-0 md:flex md:items-center md:h-full md:w-full">
          <header className="w-screen py-12 text-surface md:max-w-[24.1875rem]">
            <div className="container">
              <p className="text-[0.75rem] leading-[1rem] font-bold tracking-[2px]">
                {data.mainStory.subheadline}
              </p>
              <h2 className="mt-4 heading-xl xl:mt-6">
                {data.mainStory.title}
              </h2>
              <p className="mt-4 paragraph-sm flex items-center gap-2">
                <span className="opacity-60">{data.mainStory.date} </span>
                <span>by {data.mainStory.author}</span>
              </p>
              <p className="mt-6 paragraph-md opacity-60">
                {data.mainStory.description}
              </p>
              <div className="mt-6 w-max">
                <Link to={data.mainStory.link} className="ternary-button white">
                  READ THE STORY
                </Link>
              </div>
            </div>
          </header>
        </div>
      </div>
    </section>
  );
};
