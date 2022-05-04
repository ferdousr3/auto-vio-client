import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Fragment } from "react";
import { Disclosure, Menu } from "@headlessui/react";
import {
  MenuIcon,
  XIcon,
  LogoutIcon,
  LoginIcon,
} from "@heroicons/react/outline";
import Logo from "../../../images/logo/logo.png";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";

export default function Example() {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <Disclosure
      as="nav"
      className="bg-main fixed  w-full border-b border-b-mains z-50 "
    >
      {({ open }) => (
        <>
          <div className="  mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative container mx-auto flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-second  focus:outline-none ">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center md:items-stretch lg:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <Link to="/">
                    <img className="w-24 block lg:hidden" src={Logo} alt="" />

                    <div className="hidden lg:flex items-center h-8 w-auto">
                      <img className="w-24" src={Logo} alt="" />
                    </div>
                  </Link>
                </div>
                <div className="hidden lg:block sm:ml-6  ">
                  <ul className="flex space-x-3 items-center ">
                    <li className="px-1 py-2 rounded-md text-sm font-semibold uppercase text-second">
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? " text-white " : "   hover:text-white "
                        }
                        to="/"
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="px-1 py-2 rounded-md text-sm font-semibold uppercase text-second">
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? " text-white " : "   hover:text-white "
                        }
                        to="/blogs"
                      >
                        Blogs
                      </NavLink>
                    </li>
                    <li
                      className={
                        user
                          ? "px-1 py-2 rounded-md text-sm font-semibold uppercase text-second"
                          : "hidden"
                      }
                    >
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? "text-white" : " hover:text-white "
                        }
                        to="/additems"
                      >
                        Add Items
                      </NavLink>
                    </li>
                    <li
                      className={
                        user
                          ? "px-1 py-2 rounded-md text-sm font-semibold uppercase text-second"
                          : "hidden"
                      }
                    >
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? "text-white" : " hover:text-white "
                        }
                        to="/manageitems"
                      >
                        Manage Items
                      </NavLink>
                    </li>
                    <li
                      className={
                        user
                          ? "px-1 py-2 rounded-md text-sm font-semibold uppercase text-second"
                          : "hidden"
                      }
                    >
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? "text-white" : " hover:text-white "
                        }
                        to="/myitems"
                      >
                        My Items
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                <Menu
                  as="div"
                  className={user?.photoURL ? "ml-3 relative" : "hidden"}
                >
                  <div>
                    <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src={user ? user?.photoURL : "hidden"}
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                </Menu>
                {user ? (
                  <button
                    onClick={handleSignOut}
                    className="flex ml-4 justify-center items-center md:bg-third lg:ml-5 py-1  md:px-3 text-white hover:text-second  focus:outline-none text-base font-semibold md:border md:border-mains "
                  >
                    <span className="mr-2 hidden md:block">Logout</span>
                    <LogoutIcon className="h-6 w-6 " aria-hidden="true" />
                  </button>
                ) : (
                  <NavLink
                    to="/login"
                    className="flex ml-4 justify-center items-center md:bg-third lg:ml-5 py-1  md:px-3 text-white hover:text-second  focus:outline-none text-base font-semibold md:border md:border-mains "
                  >
                    <span className="mr-2 hidden md:block">Login</span>
                    <LoginIcon className="h-6 w-6 " aria-hidden="true" />
                  </NavLink>
                )}
              </div>
            </div>
          </div>

          {/* mobile menu start */}

          <Disclosure.Panel className="lg:hidden ">
            <div className="px-4 pt-2 pb-1  text-center">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-white " : " hover:text-white   "
                }
                to="/"
              >
                <Disclosure.Button className="px-2 py-2 rounded-md text-sm font-semibold uppercase text-second">
                  Home
                </Disclosure.Button>
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-white" : " hover:text-white  "
                }
                to="/blogs"
              >
                <Disclosure.Button className="px-2 py-2 rounded-md text-sm font-semibold uppercase text-second  ">
                  Blogs
                </Disclosure.Button>
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-white" : " hover:text-white  "
                }
                to="/contact"
              >
                <Disclosure.Button className="px-2 py-2 rounded-md text-sm font-semibold uppercase text-second  ">
                  Contact
                </Disclosure.Button>
              </NavLink>
            </div>
            <div
         
              className={user ? "px-4 pt-1 pb-1  text-center " : "hidden"}
            >
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-white " : " hover:text-white   "
                }
                to="/additems"
              >
                <Disclosure.Button className="px-2 py-2 rounded-md text-sm font-semibold uppercase text-second">
                  Add Items
                </Disclosure.Button>
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-white" : " hover:text-white  "
                }
                to="/manageitems"
              >
                <Disclosure.Button className="px-2 py-2 rounded-md text-sm font-semibold uppercase text-second  ">
                  Manage Items
                </Disclosure.Button>
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-white" : " hover:text-white  "
                }
                to="/myitems"
              >
                <Disclosure.Button className="px-2 py-2 rounded-md text-sm font-semibold uppercase text-second  ">
                  My Items
                </Disclosure.Button>
              </NavLink>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
