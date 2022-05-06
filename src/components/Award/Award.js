import React from "react";
import award from "../../images/award/award.jpg";

const Award = () => {
  return (
    <>
      <div className="relative pt-14 ">
        <img
          className=" lg:h-[560px] w-[100%]"
          src={award}
          alt="auto-vio award"
        />
        <div className="container max-w-lg absolute top-[15%] sm:top-[30%] z-10 sm:ml-4 ">
          <h1 className=" text-white font-normal sm:text-xl uppercase sm:font-normal pb-3">
            2022 red dots Awards
          </h1>
          <h2 className=" text-white font-normal text-base sm:text-4xl uppercase sm:font-light">
            GV60 WINS 2022 RED DOT AWARD FOR PRODUCT DESIGN
          </h2>
          <p className=" text-second text-xs sm:text-base font-normal pt-3 ">
            The Genesis GV60, the brand’s first model powered by dedicated EV
            platform, won a prestigious honor at this year’s Red Dot Award:
            Product Design 2022 in the cars and motorcycles category, hosted by
            Design Zentrum Nordrhein Westfalen in Germany.
          </p>
        </div>
      </div>
    </>
  );
};

export default Award;
