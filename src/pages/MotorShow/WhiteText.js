import React from 'react';

const WhiteText = ({title,img, description}) => {
  return (
    <>
      <div className="bg-main pt-40 pb-32">
        <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-6">
          <div className=" flex justify-center items-center md:col-span-2 ">
            <img className="w-44" src={img} alt="red Dot" />
          </div>
          <div className=" lg:border-l lg:border-l-six lg:pl-20 flex justify-center items-center md:col-span-4">
            <div className="">
              <h1 className="text-white font-light text-2xl md:text-4xl  uppercase sm:font-light">
                {title}
              </h1>
              <p className="text-white text-base font-light  pt-8 ">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhiteText;