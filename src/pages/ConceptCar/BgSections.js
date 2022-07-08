import React from 'react';


const BgSections = ({title,subtitle,description,img}) => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${img})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
       
      >
        <div className="container max-w-4xl   sm:ml-4  py-10 md:py-44 ">
          <h1 className=" text-white  text-2xl uppercase font-thin">{title}</h1>
          <h1 className=" text-white pt-2 pb-4 font-light text-4xl md:text-5xl md:font-light  ">
            {subtitle}
          </h1>
          <p className=" text-white text-base font-light  ">{description}</p>
        </div>
      </div>
    </>
  );
};

export default BgSections;