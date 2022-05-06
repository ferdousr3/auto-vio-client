import React from 'react';

const SectionTitle = ({title,subTitle,textColor}) => {
  return (
    <>
      <h1
        className={`text-center  text-4xl uppercase font-light ${textColor}`}
      >
        {title}
      </h1>
      <p className="text-center text-second text-base font-normal pt-3 ">
        {subTitle}
      </p>
    </>
  );
};

export default SectionTitle;