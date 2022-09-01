import data from "@/data/pages/features.json";

export const IconCard: React.FC<{ feature: typeof data.features[0] }> = ({
  feature,
}) => {
  return (
    <article className="text-neutral-800 text-center flex flex-col items-center max-w-[28.5625rem]">
      <div className="h-[4.5rem] grid place-items-center">
        <img src={`/assets/features/desktop/${feature.icon}`} alt="" />
      </div>

      <h3 className="heading-sm mt-12">{feature.title}</h3>
      <p className="mt-4 paragraph-md opacity-60">{feature.description}</p>
    </article>
  );
};
