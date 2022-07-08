import React from "react";
import { NavLink, Outlet,Link } from "react-router-dom";
import {ReplyIcon} from '@heroicons/react/outline'

const ManageItems = () => {

  
  return (
    <>
      <div className="container mx-auto">
        <div className=" max-w-4xl mx-auto grid grid-cols-1 gap-4  lg:grid-cols-6 lg:gap-10">
          <div className="col-span-1  lg:col-span-2 pt-10 lg:pt-14">
            <div className="mb-4 ml-2">
              <Link className="mb-8" to="/">
                <ReplyIcon className="w-6 text-mains" />
              </Link>
            </div>
            <ul className="w-48 text-sm mx-auto sm:mx-0 font-medium text-mains bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
              <li className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? " text-main font-bold " : "   hover:text-mains "
                  }
                  to="/manageitems"
                >
                  All Items
                </NavLink>
              </li>
              <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? " text-main font-bold " : "   hover:text-mains "
                  }
                  to="additems"
                >
                  Add Item
                </NavLink>
              </li>
              <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? " text-main font-bold " : "   hover:text-mains "
                  }
                  to="myitems"
                >
                  My Items
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="col-span-1  lg:col-span-4">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageItems;
