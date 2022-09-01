import { Link } from "react-router-dom";

interface SectionProps {
  title: string;
  image: string;
  cta: { text: string; to: string };
  description: string;
  inverted: boolean;
  hero: boolean;
  key: number;
}

export const SectionCardHomepage: React.FC<SectionProps> = (props) => {
  return (
    <article
      className={`grid grid-cols-1 justify-items-center 
      ${
        props.inverted
          ? "md:grid-cols-[1fr,35.5469%] xl:grid-cols-[1fr,57.6389%]"
          : "md:grid-cols-[35.5469%,1fr] xl:grid-cols-[57.6389%,1fr]"
      }
    `}
    >
      <picture className={props.inverted ? "md:order-1" : ""}>
        <source
          media="(min-width: 75rem)"
          srcSet={`/assets/home/desktop/${props.image}`}
        />
        <source
          media="(min-width: 45rem)"
          srcSet={`/assets/home/tablet/${props.image}`}
        />
        <img
          src={`/assets/home/mobile/${props.image}`}
          className={`max-w-[27.5rem] w-screen md:max-w-full md:w-full ${
            props.hero
              ? "aspect-[1.27551] md:aspect-[0.42] xl:aspect-[1.276923]"
              : "aspect-[1.383764] md:aspect-[0.455] xl:aspect-[1.383333]"
          }`}
          alt=""
        />
      </picture>
      <header
        className={`py-20  md:flex items-center xl:py-10 relative ${
          props.hero
            ? "text-surface bg-neutral-800 w-[min(100vw,27.5rem)] md:w-full"
            : "text-neutral-800"
        }`}
      >
        {props.hero && (
          <div
            className="absolute top-0 left-8 w-32 h-1.5 bg-rainbow md:w-1.5 md:h-[19rem] md:top-[10.8125rem]
            md:left-0
          "
          ></div>
        )}
        <div className="container md:w-[24.1875rem] md:h-max">
          <h2 className="heading-xl">{props.title}</h2>
          <p className="mt-4 paragraph-md opacity-60 xl:mt-5">
            {props.description}
          </p>
          <div className="mt-6 w-max xl:mt-12">
            <Link
              className={` ternary-button ${props.hero ? "white" : "black"}`}
              to={props.cta.to}
            >
              <span>{props.cta.text}</span>
            </Link>
          </div>
        </div>
      </header>
    </article>
  );
};
