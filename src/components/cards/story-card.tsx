import { Link } from "react-router-dom";
import { useId } from "react";

interface Props {
  title: string;
  author: string;
  image: string;
  date: string;
  link: string;
  key: string;
}

export const StoryCard: React.FC<Props> = (props) => {
  const linkId = useId();

  return (
    <Link to="/" aria-labelledby={linkId}>
      <article className="relative top-0 xl:hover:top-[-1.875rem] transition-all duration-500 z-40">
        <picture className="block w-full h-max [background:var(--stories-gradient)]">
          <source
            media="(min-width: 45rem)"
            srcSet={`/assets/stories/desktop/${props.image}`}
          />
          <img
            src={`/assets/stories/mobile/${props.image}`}
            alt=""
            className="aspect-[1] relative z-[1] w-full max-w-none md:aspect-[0.768] object-cover object-center
              xl:aspect-[0.72]
            "
          />
        </picture>
        <header className="absolute z-10 bottom-10 text-surface px-8 w-full">
          {props.date && <p className="paragraph-sm">{props.date}</p>}
          <h3 className="heading-sm">{props.title}</h3>
          <p className="paragraph-sm mt-1">by {props.author}</p>
          <div className="mt-4 w-full h-0 border-b border-surface opacity-25"></div>
          <div className="mt-5">
            <p id={linkId} className="ternary-button white">
              READ STORY
            </p>
          </div>
        </header>
        <div className="hidden xl:block absolute bottom-[-0.375rem] h-1.5 w-full [background:var(--rainbow-gradient)]"></div>
      </article>
    </Link>
  );
};
