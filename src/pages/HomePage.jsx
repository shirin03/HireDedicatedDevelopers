import React from "react";
import Head from "next/head";
import { HomePageData } from "../data/homePage";
import HeadMeta from "../component/Navigation/HeadMeta";
import HomeBanner from "../component/HomeBanner/HomeBanner";
const HireDedicatedReact = () => {
  return (
    <>
    <Head>
      <HeadMeta allMeta={HomePageData} />
      <HomeBanner allData={HomePageData} />
      </Head>
    </>
  );
};

export default HireDedicatedReact;
