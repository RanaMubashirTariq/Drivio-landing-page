import React from "react";
import { CustomerTestimonialsSection } from "./sections/CustomerTestimonialsSection";
import { FAQSection } from "./sections/FAQSection";
import { HeroBannerSection } from "./sections/HeroBannerSection";
import { ServiceFeaturesCardsSection } from "./sections/ServiceFeaturesCardsSection";
import { ServiceFeaturesSection } from "./sections/ServiceFeaturesSection/ServiceFeaturesSection";
import { SiteFooterSection } from "./sections/SiteFooterSection";

export const OnlineTaxiLanding = (): JSX.Element => {
  return (
    <div className="bg-[#f3f3f3] flex flex-col items-center w-full">
      <div className="bg-[#f3f3f3] w-full max-w-[1440px] relative">
        <HeroBannerSection />
        <ServiceFeaturesCardsSection />
        <ServiceFeaturesSection />
        <CustomerTestimonialsSection />
        <FAQSection />
        <SiteFooterSection />
      </div>
    </div>
  );
};
