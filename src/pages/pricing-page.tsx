import { BannerSection } from "@/components/sections/banner-section";
import { CallToActionSection } from "@/components/sections/call-to-action-section";
import { PlansComparisonSection } from "@/components/sections/plans-comparison-section";
import { PlansPricingSection } from "@/components/sections/plans-pricing-section";
import data from "@/data/pages/pricing.json";

export const PricingPage: React.FC = () => {
  return (
    <>
      <BannerSection {...data.banner} />
      <PlansPricingSection/>
      <PlansComparisonSection/>

      <CallToActionSection />
    </>
  );
};
