import React from "react";

const ServiceLeft = ({ img, title, subTitle, description }) => {
  return (
    <>
      <div className="bg-main  pb-40">
        <div className=" mx-auto   ">
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
            <div className="col-span-1 lg:col-span-2 flex items-start md:border-b border-six md:ml-20">
              <div className="px-3 ">
                <h1 className=" pb-6  text-five font-normal text-xl  uppercase sm:font-light">
                  {title}
                </h1>
                <h2 className="   text-white font-normal text-2xl sm:text-4xl uppercase sm:font-light">
                  {subTitle}
                </h2>
                <p className=" text-white  text-sm sm:text-base font-light  pt-3 sm:pr-10 ">
                  {description}
                </p>
              </div>
            </div>
            <div className="col-span-1 lg:col-span-4 md:ml-10">
              <img
                className="h-auto w-[100%] "
                src={img}
                alt="auto-vio award"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceLeft;
