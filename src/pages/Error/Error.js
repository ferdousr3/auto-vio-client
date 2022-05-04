import React from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  return (
    <div className="container pt-24 pb-5 max-w-3xl lg:max-w-5xl mx-auto">
      <div className=" bg-[url('/src/images/bg/bg-images.png')] bg-no-repeat grid grid-cols-1 sm:grid-cols-2 md:grid-cols-7 mx-auto justify-center w-full ">
        <div className="col-span-2">
          <h1 className="text-5xl font-extrabold text-mains lg:text-9xl ">
            404
          </h1>
        </div>
        <div className="col-span-5 border-l md:border-l-main md:pl-5">
          <h1 className=" text-3xl lg:text-5xl  font-extrabold  text-mains ">
            Page not Found
          </h1>
          <p className="pt-1  text-eight text-md font-semibold">
            Please check the URL in the address bar and try again
          </p>
          <div className="mt-3">
            <button
              className="bg-main hover:bg-mains text-second py-3 px-8 rounded-3xl uppercase text-[14px] font-semibold transition-all duration-500  "
              onClick={() => navigate("/")}
            >
              Go back home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
