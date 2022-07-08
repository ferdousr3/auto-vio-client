import React from 'react';

const BgSection = ({img,title,description}) => {
  return (
    <>
      <div className="relative pt-0 ">
        <img
          className=" h-auto lg:h-[540px] w-[100%]"
          src={img}
          alt="DIGITAL SERVICES"
        />
        <div className="container max-w-lg absolute top-[15%] sm:top-[30%] z-10 sm:ml-4 ">
          <h1 className=" text-white font-normal text-2xl sm:text-7xl uppercase sm:font-light">
            
            {title}
          </h1>
          <p className=" text-white uppercase text-sm sm:text-xl font-light pt-3 ">
            {description}

          </p>
        </div>
      </div>
    </>
  );
};

export default BgSection;