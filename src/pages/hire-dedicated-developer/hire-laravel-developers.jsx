import React from "react";
import { HireLaravelData } from "../../data/hireDedicated/laravel";
import { HireReviewData } from "../../data/hireDedicated/review";
import { HireCaseStudiesData } from "../../data/hireDedicated/caseStudies";
import HeadMeta from "../../component/Navigation/HeadMeta";
import TopBanner from "../../component/HireDedicated/TopBanner/TopBanner";
import Expertise from "../../component/HireDedicated/Expertise/Expertise";
import WhyTech from "../../component/HireDedicated/WhyTech/WhyTech";
import ReviewSlider from "../../component/HireDedicated/ReviewSlider/ReviewSlider";
import CaseStudies from "../../component/CaseStudies/CaseStudies";
import Faq from "../../component/HireDedicated/Faq/Faq";
import Contact from "../../component/HireDedicated/Contact/Contact";
const HireDedicatedLaravel = () => {
  return (
    <>
      <HeadMeta allMeta={HireLaravelData} />
      <TopBanner allData={HireLaravelData} />
      <Expertise expertiseData={HireLaravelData} />
      <WhyTech whyTechData={HireLaravelData} />
      <ReviewSlider ReviewSliderData={HireReviewData} />
      <CaseStudies CaseStudyData={HireCaseStudiesData} />
      <Faq faqsData={HireLaravelData} />
      <Contact />
    </>
  );
};

export default HireDedicatedLaravel;
