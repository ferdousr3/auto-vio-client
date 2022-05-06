import React from "react";

const Blog = ({ques, ans}) => {
  return (
    <>
      <div className=" py-3">
        <div className="container mx-auto  ">
          <div className="border border-third transition-colors duration-300 hover:border hover:border-eight hover:bg-ten py-8 px-6 max-w-3xl mx-auto ">
            <h1 className="  text-white font-normal text-2xl sm:text-3xl sm:font-light">
              <span className="text-five">Q:</span> {ques} ?
            </h1>
            <p className=" text-white  text-sm sm:text-lg font-light pt-8 ">
              <span className="text-five font-medium">A:</span> {ans}.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
