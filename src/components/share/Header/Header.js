import React from "react";
import { NavLink } from "react-router-dom";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { LockClosedIcon, MenuIcon, XIcon } from "@heroicons/react/outline";

import Logo from "../../../images/logo/logo.png";

const navigation = [
  { name: "Home", pathName: "home" },
  { name: "About", pathName: "about" },
  { name: "Contact", pathName: "contact" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <Disclosure
      as="nav"
      className="bg-main fixed  w-full border-b border-b-mains "
    >
      {({ open }) => (
        <>
          <div className=" border-b border-b-mains  mx-auto px-2 sm:px-6 lg:px-8">
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
                  <img className="w-24 block lg:hidden" src={Logo} alt="" />

                  <div className="hidden lg:flex items-center h-8 w-auto">
                    <img className="w-24" src={Logo} alt="" />
                  </div>
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

                    <li className="px-1 py-2 rounded-md text-sm font-semibold uppercase text-second">
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? "text-white" : " hover:text-white "
                        }
                        to="/contact"
                      >
                        Contact
                      </NavLink>
                    </li>
                    <li className="px-1 py-2 rounded-md text-sm font-semibold uppercase text-second">
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? "text-white" : " hover:text-white "
                        }
                        to="/additems"
                      >
                        Add Items
                      </NavLink>
                    </li>
                    <li className="px-1 py-2 rounded-md text-sm font-semibold uppercase text-second">
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? "text-white" : " hover:text-white "
                        }
                        to="/manageitems"
                      >
                        Manage Items
                      </NavLink>
                    </li>
                    <li className="px-1 py-2 rounded-md text-sm font-semibold uppercase text-second">
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
                <Menu as="div" className="ml-3 relative">
                  <div>
                    <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <NavLink
                            to="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Your Profile
                          </NavLink>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <NavLink
                            to="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Settings
                          </NavLink>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <NavLink
                            to="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Sign out
                          </NavLink>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
                <button
                  type="button"
                  className="flex ml-4 justify-center items-center md:bg-third lg:ml-5 py-1  md:px-3 text-white hover:text-second  focus:outline-none text-base font-semibold md:border md:border-mains "
                >
                  <span className="mr-2 hidden md:block ">Login</span>
                  <LockClosedIcon
                    className="h-6 w-6 md:hidden  "
                    aria-hidden="true"
                  />
                </button>
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
            <div className="px-4 pt-1 pb-1  text-center">
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
