import React from "react";
import Banner from "./Banner";
import BrandOfTheWeek from "./BrandOfTheWeek";
import JustLanded from "./JustLanded";
import Step1 from "./Step1";
import Test from "./Test";

const Home = () => {
  return (
    <div>
      {/* <Test /> */}
      <Banner />
      <Step1 />
      <BrandOfTheWeek />
      <JustLanded />
    </div>
  );
};

export default Home;
