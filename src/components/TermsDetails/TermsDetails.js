import React from "react";

const TermsDetails = ({ title, firstSub, secondSub, thirdSub }) => {
  return (
    <>
      <div className=" pb-20 ">
        <h1 className=" mb-6 text-3xl sm:text-3xl uppercase text-black font-light border-b border-b-[#e5e5e5] pb-4 ">
       
          {title}
        </h1>
        <p className="text-eight text-base  pb-6  font-normal ">{firstSub}</p>
        <p className="text-eight text-base pb-6  font-normal ">{secondSub}</p>
        <p className="text-eight text-base pb-6 font-normal ">{thirdSub}</p>
      </div>
    </>
  );
};

export default TermsDetails;
