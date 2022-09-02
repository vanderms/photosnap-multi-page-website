import data from "@/data/pages/pricing.json";

export const PlansComparisonSection: React.FC = () => {
  return (
    <section className="my-16 container md:my-[7rem] xl:my-[10rem]">
      <div className="max-w-[19.875rem]  md:max-w-[45.6875rem] mx-auto">
        <header className="sr-only md:not-sr-only heading-xl text-neutral-800 text-center">
          <h2>Compare</h2>
        </header>
        <table className="md:mt-16">
          <thead>
            <tr className="pricing-table-row border-b border-neutral-950 pb-6">
              <th scope="col" className="text-th">
                THE FEATURES
              </th>
              {Object.keys(data.plans).map((plan, i) => (
                <th scope="col" key={i} className="text-th sr-only md:not-sr-only md:justify-self-center">
                  {plan}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.features.map((feature, i) => (
              <tr key={i} className="pricing-table-row">
                <th scope="row" className="text-th">
                  {feature}
                </th>
                {Object.values(data.plans).map((plan, j) => (
                  <td key={j}>
                    <div className="td-inner-container">
                      <p className="text-td md:hidden">{plan.name}</p>
                      <div>
                        {plan.features[i] && (
                          <img
                            src="/assets/pricing/desktop/check.svg"
                            alt="The plans has this feature"
                          />
                        )}
                      </div>
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};
