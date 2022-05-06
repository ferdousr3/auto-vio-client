import React from "react";
import About1 from "../../images/about/about.jpg";
import About3 from "../../images/about/about3.jpg";

const About = () => {
  return (
    <>
      {/*!-----> first section -------> */}
      <div className="relative pt-0 ">
        <img
          className=" h-auto lg:h-[560px] w-[100%]"
          src={About1}
          alt="auto-vio award"
        />
        <div className="container max-w-lg absolute top-[15%] sm:top-[30%] z-10 sm:ml-4 ">
          <h1 className=" text-white font-normal text-2xl sm:text-7xl uppercase sm:font-light">
            Auto-vio
          </h1>
          <p className=" text-white uppercase text-sm sm:text-xl font-light pt-3 ">
            As our name implies, Auto-vio embraces creation. We believe that
            every drive deserves to be a discovery.
          </p>
        </div>
      </div>
      {/*!-----> second section -------> */}

      <div className="bg-main pt-14 pb-32">
        <div className="container mx-auto  ">
          <h1 className=" text-center text-white font-normal text-2xl sm:text-5xl lg:px-[21%] uppercase sm:font-light">
            A sophisticated oasis – the place where we share our inspirations at
            the heart of New York City
          </h1>
          <p className=" text-white  text-sm sm:text-lg text-center font-light pt-8 lg:px-[2%]">
            Poised to be an iconic destination in the Meatpacking District,
            Genesis House celebrates elevated living through rich surroundings
            and intellectual nourishment. Visitors will find an intriguing
            sanctuary with plenty to explore, from artful installations and
            haute cuisine to luminary engagements and the impressive collection
            of Genesis luxury vehicles.
          </p>
        </div>
      </div>
      {/*!-----> third section -------> */}

      <div className="bg-main pb-20">
        <div className=" mx-auto  ">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="col-span-1 lg:col-span-3">
              <img className="h-auto " src={About3} alt="auto-vio award" />
            </div>
            <div className="col-span-1 lg:col-span-2 flex items-center">
              <div className="px-3 sm:pr-10">
                <h1 className=" pb-6  text-five font-normal text-xl  uppercase sm:font-light">
                  VISION
                </h1>
                <h2 className="   text-white font-normal text-2xl sm:text-4xl uppercase sm:font-light">
                  INCREASING INTERACTION WITH OUR CUSTOMERS
                </h2>
                <p className=" text-white  text-sm sm:text-lg font-light  pt-3 ">
                  Unique three-spoke steering wheel, garnishes in real carbon,
                  and quilting details inset in Nappa leather seats—all
                  exclusive design elements that create a more dynamic driving
                  experience in the G80 Sport.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
