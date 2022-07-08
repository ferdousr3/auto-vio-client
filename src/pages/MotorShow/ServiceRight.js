import React from 'react';
import ServiceButton from '../../components/share/Button/ServiceButton';

const ServiceRight = ({img,title,subTitle,description}) => {
  return (
    <>
      <div className="bg-main pt-40 pb-40">
        <div className=" mx-auto  ">
          <div className="grid grid-cols-1 lg:grid-cols-8 gap-8">
            <div className="col-span-1 lg:col-span-5  md:mr-10">
              <img
                className="h-auto  w-[100%] "
                src={img}
                alt="auto-vio award"
              />
            </div>
            <div className="col-span-1 lg:col-span-3 flex items-start md:mr-10 md:border-b border-six">
              <div className="px-3 sm:pr-10">
                <h1 className=" pb-6  text-five font-normal text-xl  uppercase sm:font-light">
                  {title}
                </h1>
                <h2 className="   text-white font-normal text-2xl sm:text-4xl uppercase sm:font-light">
                  {subTitle}
                </h2>
                <p className=" text-white  text-sm sm:text-base font-light  pt-3 sm:pr-10 ">
                  {description}
                </p>
                <div className="w-36 mt-8">
                  <ServiceButton text="View Event" path="/" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceRight;