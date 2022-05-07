import React from "react";
import Service from "../../images/service/service.jpg";
import Member from "../../images/service/member.jpg";
import Partner from '../../images/service/partner.jpg'

const DigitalService = () => {
  return (
    <>
      {/*!-----> first section -------> */}
      <div className="relative pt-0 ">
        <img
          className=" h-auto lg:h-[540px] w-[100%]"
          src={Service}
          alt="DIGITAL SERVICES"
        />
        <div className="container max-w-lg absolute top-[15%] sm:top-[30%] z-10 sm:ml-4 ">
          <h1 className=" text-white font-normal text-2xl sm:text-7xl uppercase sm:font-light">
            DIGITAL SERVICES
          </h1>
          <p className=" text-white uppercase text-sm sm:text-xl font-light pt-3 ">
            We have mindfully chosen the technology that adds more convenience
            and safety to our customers' daily lives.
          </p>
        </div>
      </div>
      {/*!-----> second section -------> */}
      <div className="bg-main pt-40 pb-40">
        <div className=" mx-auto  ">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="col-span-1 lg:col-span-3 md:mr-10">
              <img
                className="h-auto  w-[100%] "
                src={Member}
                alt="auto-vio award"
              />
            </div>
            <div className="col-span-1 lg:col-span-2 flex items-start md:border-b border-six md:mr-10">
              <div className="px-3 sm:pr-10">
                <h1 className=" pb-6  text-five font-normal text-xl  uppercase sm:font-light">
                  MEMBERSHIP
                </h1>
                <h2 className="   text-white font-normal text-2xl sm:text-4xl uppercase sm:font-light">
                  MEMBERSHIP
                </h2>
                <p className=" text-white  text-sm sm:text-base font-light  pt-3 sm:pr-10 ">
                  Meet the membership program that goes with your daily life. We
                  provide various benefits from vehicle care to lifestyle care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*!-----> third section -------> */}
      <div className="bg-main  pb-40">
        <div className=" mx-auto   ">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="col-span-1 lg:col-span-2 flex items-start md:border-b border-six md:ml-20">
              <div className="px-3 ">
                <h1 className=" pb-6  text-five font-normal text-xl  uppercase sm:font-light">
                  PARTNERSHIP
                </h1>
                <h2 className="   text-white font-normal text-2xl sm:text-4xl uppercase sm:font-light">
                  PARTNERSHIP
                </h2>
                <p className=" text-white  text-sm sm:text-base font-light  pt-3 sm:pr-10 ">
                  Meet various partners with Genesis. We introduce a variety of
                  programs that share our philosophy and direction.
                </p>
              </div>
            </div>
            <div className="col-span-1 lg:col-span-3 md:ml-10">
              <img
                className="h-auto w-[100%] "
                src={Partner}
                alt="auto-vio award"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DigitalService;
