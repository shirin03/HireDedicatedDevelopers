import React from "react";

import { HirePhpData } from "../../data/hireDedicated/HirePhpData";
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
const HireDedicatedPhp = () => {
  return (
    <>
      <HeadMeta allMeta={HirePhpData} />
      <TopBanner allData={HirePhpData} />
      <Expertise expertiseData={HirePhpData} />
      <WhyTech whyTechData={HirePhpData} />
      <ReviewSlider ReviewSliderData={HireReviewData} />
      <CaseStudies CaseStudyData={HireCaseStudiesData} />
      <Faq faqsData={HirePhpData} />
      <Contact />
    </>
  );
};

export default HireDedicatedPhp;
