import React from 'react';

const WhiteText = ({title, description}) => {
  return (
    <>
      <div className="bg-main pt-40 pb-32">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-white font-light text-xl  uppercase sm:font-light">
            {title}
          </h1>
          <h2 className="text-white  text-xl sm:text-2xl lg:text-4xl font-normal lg:pr-24 pt-8 ">
            {description}
          </h2>
        </div>
      </div>
    </>
  );
};

export default WhiteText;