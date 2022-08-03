import React from "react";
import { hireDedicated } from "../../data/hireDedicated/hireDedicated";
import {HirePhpData} from "../../data/hireDedicated/HirePhpData";
import {HireLaraveData} from "../../data/hireDedicated/laravel";
import HeadMeta from "../../component/Navigation/HeadMeta";
import TopBanner from "../../component/HireDedicated/TopBanner/TopBanner";

const Dedicated = () => {
  return (
    <>
      <HeadMeta allMeta={hireDedicated} />
      <TopBanner allData={hireDedicated} />
      <HeadMeta allMeta={HirePhpData} />
      <TopBanner allData={HirePhpData} />
      <HeadMeta allMeta={HireLaraveData} />
      <TopBanner allData={HireLaraveData} />

    </>
  );
};

export default Dedicated;
