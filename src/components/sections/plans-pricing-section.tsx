import { useState, ChangeEventHandler } from "react";
import data from "@/data/pages/pricing.json";
import { PricingCard } from "../cards/pricing-card";

export const PlansPricingSection: React.FC = () => {
  const [period, setPeriod] = useState<string>("monthly");

  console.log(data.features);

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.currentTarget.checked) {
      setPeriod(e.currentTarget.value);
    }
  };

  return (
    <section className="container mt-16 relative md:mt-[7rem] xl:mt-[7.5rem]">
      <header className="sr-only">
        <h2>Plans</h2>
      </header>
      <div className="flex h-8 w-max items-center gap-3 mx-auto">
        <label className="flex w-max items-center gap-9 cursor-pointer heading-sm">
          <span className={period !== "monthly" ? "opacity-50" : ""}>
            Monthly
          </span>
          <input
            type="radio"
            name="period"
            value="monthly"
            className="appearance-none absolute"
            onChange={onChange}
            checked={period === "monthly"}
          />
          <span className="h-6 w-6"></span>
        </label>
        <button
          className="absolute h-8 w-16 bg-neutral-500 rounded-full mx-auto left-0 right-0"
          onClick={() => {
            setPeriod((prev) => (prev === "monthly" ? "yearly" : "monthly"));
          }}
        >
          <span
            className={`bg-neutral-950 w-6 h-6 rounded-full absolute top-1 transition-all ${
              period === "monthly" ? "left-1" : "left-9"
            }`}
          ></span>
        </button>
        <label className="flex w-max items-center gap-9 cursor-pointer heading-sm">
          <span className="h-6 w-6"></span>
          <input
            type="radio"
            name="period"
            value="yearly"
            className="appearance-none absolute"
            onChange={onChange}
            checked={period === "yearly"}
          />
          <span className={period !== "yearly" ? "opacity-50" : ""}>
            Yearly
          </span>
        </label>
      </div>
      <ul className="mt-10 grid grid-cols-1 gap-y-6 xl:grid-cols-3 gap-x-[1.875rem] xl:mt-12 items-center ">
        {Object.values(data.plans).map((plan, i) => (
          <li key={i}>
            <PricingCard plan={plan} period={period} />
          </li>
        ))}
      </ul>
    </section>
  );
};
