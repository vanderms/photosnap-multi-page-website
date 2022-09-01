interface Props {
  title: string;
  image: string;
  description: string;
}

export const BannerSection: React.FC<Props> = (props) => {
  return (
    <article
      className="grid grid-cols-1 justify-items-center md:grid-cols-[1fr,35.5469%] 
      xl:grid-cols-[1fr,57.6389%]"
    >
      <picture className="md:order-1">
        <source
          media="(min-width: 75rem)"
          srcSet={props.image.replace("mobile", "desktop")}
        />
        <source
          media="(min-width: 45rem)"
          srcSet={props.image.replace("mobile", "tablet")}
        />
        <img
          src={props.image}
          className="max-w-[27.5rem] w-screen md:max-w-full md:w-full aspect-[1.27551] 
            md:aspect-[0.557143] xl:aspect-[1.693878]"
          alt=""
        />
      </picture>
      <header
        className={`py-20  md:flex items-center xl:py-10 relative text-surface bg-neutral-800 w-[min(100vw,27.5rem)] md:w-full`}
      >
        <div
          className="absolute top-0 left-8 w-32 h-1.5 bg-rainbow md:w-1.5 md:h-[9rem] md:top-[10.8125rem]
            md:left-0
          "
        ></div>
        <div className="container md:w-[24.1875rem] md:h-max">
          <h2 className="heading-xl">{props.title}</h2>
          <p className="mt-4 paragraph-md opacity-60 xl:mt-5">
            {props.description}
          </p>
        </div>
      </header>
    </article>
  );
};
