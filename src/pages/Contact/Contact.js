import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <div className="container mx-auto py-16 md:py-24 ">
        <div className="">
          <div className="border-b border-b-black pb-10">
            <h1 className=" text-3xl sm:text-5xl uppercase text-black font-light ">
              Contact Us
            </h1>
            <p className="text-eight pt-2 text-lg ">
              Contact us with your inquiry and we'll help you find the solution.
            </p>
          </div>
          <div className="mt-14">
            <form className="max-w-4xl">
              <div className=" md:flex">
                <div className="mb-6">
                  <label
                    htmlFor="name"
                    className="block required  text-base mb-2  font-medium text-eight dark:text-gray-300"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className=" text-lg bg-transparent border-b border-b-[#e5e5e5] text-main rounded-sm focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 placeholder-lg placeholder-[#afafaf] dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:-light"
                    required
                    placeholder="Your Name"
                  />
                </div>
                <div className="mb-6 md:ml-10">
                  <label
                    htmlFor="email"
                    className="block required  text-base mb-2  font-medium text-eight dark:text-gray-300"
                  >
                    Your E-mail address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className=" text-lg bg-transparent border-b border-b-[#e5e5e5] text-main rounded-sm focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 placeholder-lg placeholder-[#afafaf] dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:-light"
                    required
                    placeholder="exmp@mail.com"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="title"
                  className="block required  text-base mb-2  font-medium text-eight dark:text-gray-300"
                >
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  className=" text-lg bg-transparent border-b border-b-[#e5e5e5] text-main rounded-sm focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 placeholder-lg placeholder-[#afafaf] dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:-light"
                  required
                  placeholder="Title"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block required  text-base mb-2  font-medium text-eight dark:text-gray-300"
                >
                  Message
                </label>
                <textarea
                  type="text"
                  id="message"
                  className=" text-lg bg-transparent border border-[#e5e5e5] text-main rounded-sm focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 placeholder-lg placeholder-[#afafaf] dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:-light"
                  required
                  placeholder="Message (1000 characters or less) "
                />
              </div>

              <div className="flex items-start sm:items-center mb-6">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    type="checkbox"
                    value=""
                    className=" mt-2 sm:mt-0 indeterminate:bg-gray-300 w-5 h-5 border border-[#e5e5e5]  checked:bg-main check  "
                    required
                  />
                </div>
                <label
                  htmlFor="terms"
                  className="ml-2 text-lg font-normal  text-eight dark:text-gray-300"
                >
                  I confirm and agree to the collection and use of personal
                  information.
                </label>
              </div>
              <div className="mt-5">
                <button
                  type="submit"
                  className=" mx-auto flex justify-center text-center my-contact-btn"
                >
                  submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/*!-----> second section -------> */}

      <div className="bg-main pb-20 pt-20">
        <div className="container mx-auto  ">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="col-span-1 lg:col-span-2">
              <h1 className=" text-white font-normal text-2xl sm:text-4xl uppercase sm:font-light">
                GENESIS HOUSE <br /> GENERAL INFORMATION
              </h1>
            </div>
            <div className="col-span-1 lg:col-span-3">
              <p className=" text-white capitalize text-base font-light  ">
                Address : 40/b 10th Ave, New York, New York 10014
                <br />
                Operating Hours :
                <br />
                Closed Mondays
                <br />
                Tuesday – Wednesday 11 AM - 10 PM
                <br />
                Thursday - Saturday 11 AM - 11 PM
                <br />
                Sunday 11 AM - 10 PM
                <br /> Contact: info@auto-viohouseNYC.com
                <br />
                1-212-855-444-0811
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
