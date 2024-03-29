import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,
  FaPaperPlane,
} from "react-icons/fa";
import Logo from "../../../images/logo/logo.png";
import useProducts from "../../../hooks/useProducts";

const socials = [
  { name: "facebook", pathName: "home", icon: <FaFacebookF /> },
  { name: "youtube", pathName: "about", icon: <FaYoutube /> },
  { name: "linkedin", pathName: "contact", icon: <FaLinkedinIn /> },
  { name: "instagram", pathName: "contact", icon: <FaInstagram /> },
];

const Footer = () => {
  const [products] = useProducts([]);
  const date = new Date();
  const year = date.getFullYear();

    const handleSubscribeSubmit = (event) => {
      event.preventDefault();
      
    };
  return (
    <>
      <footer className="p-4 bg-main text-second">
        <div className="container mx-auto pt-8">
          <div className=" grid grid-cols-2 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-4   ">
            <div className="mb-6 md:mb-0 col-span-1 md:col-span-3 lg:col-span-3 xl:col-span-1 ">
              <h2 className="mb-6 text-base font-semibold text-white uppercase dark:text-white pt-4">
                Models
              </h2>
              <ul className="text-second dark:text-gray-400 font-medium text-sm py-3">
                {products.map((product) => (
                  <li key={product._id} className="mb-4">
                    <Link to="#" className="hover:underline uppercase">
                      {product.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-1 md:col-span-3 lg:col-span-3 xl:col-span-1">
              <h2 className="mb-6 text-base font-semibold text-white uppercase dark:text-white pt-4">
                Members
              </h2>
              <ul className="text-second dark:text-gray-400 font-medium text-sm py-3">
                <li className="mb-4">
                  <Link to="digitalservice" className="hover:underline">
                    Digital Services
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-span-1 md:col-span-3 lg:col-span-3 xl:col-span-1">
              <h2 className="mb-6 text-base font-semibold text-white uppercase dark:text-white pt-4">
                Support
              </h2>
              <ul className="text-second font-medium text-sm dark:text-gray-400 py-3">
                <li className="mb-4">
                  <Link to="/contact" className="hover:underline ">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:underline">
                    About
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-span-1 md:col-span-3 lg:col-span-3 xl:col-span-1">
              <h2 className="mb-6 text-base font-semibold text-white uppercase dark:text-white pt-4">
                Legal
              </h2>
              <ul className="text-second font-medium text-sm dark:text-gray-400 py-3">
                <li className="mb-4">
                  <Link to="/privacy" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="hover:underline">
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-6 py-6 lg:px-5 border-t border-mains mt-8  ">
            <div className="col-span-1 md:col-span-3 pt-4">
              <form
                className="relative max-w-xs "
                onSubmit={handleSubscribeSubmit}
              >
                <div className="flex absolute inset-y-0 right-0 items-center pr-4 ">
                  <button
                    type="submit"
                    className="hover:text-white text-second text-sm cursor-pointer "
                  >
                    <FaPaperPlane />
                  </button>
                </div>
                <input
                  type="text"
                  id="input-group-1"
                  className="bg-transparent border  border-six  placeholder:text-sm  text-sm focus:outline-none  text-second  focus:border-eight block w-full pl-4 pr-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="exmp@mail.com"
                />
              </form>
            </div>
            <div className="col-span-1 md:col-span-3  pt-6">
              <div className="flex lg:justify-end  ">
                {socials.map((social) => (
                  <a
                    target="_blank"
                    rel="noreferrer"
                    className=" pl-8 text-2xl text-second hover:text-white "
                    key={social.name}
                    href={social.pathName}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-4 pt-8 pb-10  text-center px-10 border-t border-mains">
            <div className="flex justify-center w-full pb-2 pt-2">
              <img className="block pb-4" src={Logo} alt="auto-vio " />
            </div>
            <p className="text-sm text-second sm:text-center dark:text-gray-400">
              © Copyright
              <span> {year} </span>
              <Link to="/" className="hover:underline">
                Auto-vio™
              </Link>
              Company.
              <br /> All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
