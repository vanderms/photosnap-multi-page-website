import data from "@/data/pages/pricing.json";
import { Link } from "react-router-dom";

type Plan = typeof data.plans.Basic;

export const PricingCard: React.FC<{ plan: Plan; period: string }> = ({
  plan,
  period,
}) => {
  return (
    <article
      className={` px-5 pt-14 pb-10 grid grid-cols-1 items-center justify-items-center
      md:grid-cols-2 md:px-10 xl:grid-cols-1 relative
        ${
          plan.highlighted
            ? "bg-neutral-950 text-surface xl:pt-[5.5rem] xl:pb-[4.4375rem]"
            : "bg-[#F5F5F5] text-neutral-950"
        }`}
    >
      {
        plan.highlighted && (
          <div className='hidden xl:block absolute top-0 w-full h-1.5 bg-rainbow'></div>
        )
      }
     
      <h3 className="text-[1.5rem] leading-[1.5625rem] font-bold text-center w-full md:text-left xl:text-center">
        {plan.name}
      </h3>
      <p className="mt-[1.125rem] paragraph-md opacity-60 text-center md:text-left xl:text-center">
        {plan.description}
      </p>
      <p className="mt-10 w-full flex flex-col items-center text-center md:[grid-area:1/2/3/auto] 
      md:text-left md:items-end md:mt-0 md:self-start xl:[grid-area:auto] xl:items-center xl:mt-10">
        <strong className="text-[2.5rem] leading-[3rem] font-bold">
          ${" "}
          {period === "monthly"
            ? plan.price.monthly.toFixed(2)
            : plan.price.yearly.toFixed(2)}
        </strong>
        <span className="paragraph-md opacity-60">
          per {period === "monthly" ? "month" : "year"}
        </span>
      </p>
      <div className="mt-10 w-full">
        <Link
          to="/pricing"
          className={` w-full h-10 font-bold text-[0.75rem] leading-[1rem] tracking-[2px] grid place-items-center 
            hover:bg-neutral-500 hover:text-neutral-950
          ${
            plan.highlighted
              ? "bg-surface text-neutral-950"
              : "bg-neutral-950 text-surface"
          }`}
        >
          PICK PLAN
        </Link>
      </div>
    </article>
  );
};
