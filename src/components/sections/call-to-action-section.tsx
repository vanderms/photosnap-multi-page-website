import data from "@/data/pages/features.json";
import { Link } from "react-router-dom";

export const CallToActionSection: React.FC = () => {
  return (
    <section className="relative py-16 md:py-[4.25rem]">
      <picture>
        <source
          media="(min-width: 75rem)"
          srcSet={data.calltoaction.image.replace("mobile", "desktop")}
        />
        <source
          media="(min-width: 75rem)"
          srcSet={data.calltoaction.image.replace("mobile", "tablet")}
        />
        <img
          src={data.calltoaction.image}
          alt=""
          className="object-cover object-center top-0 left-0 w-full h-full absolute max-w-none"
        />
      </picture>
      <div className="absolute top-0 w-32 h-1.5 bg-rainbow left-8 md:h-full md:w-1.5 md:left-0"></div>

      <header className="container text-surface relative z-10 flex flex-col md:flex-row md:justify-between md:items-center">
        <h2 className="heading-xl md:max-w-[25rem]">
          {data.calltoaction.title}
        </h2>
        <div className="w-max mt-6">
          <Link to={data.calltoaction.link.to} className="ternary-button white">
            <span>{data.calltoaction.link.text}</span>
          </Link>
        </div>
      </header>
    </section>
  );
};
