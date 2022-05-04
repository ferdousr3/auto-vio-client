import React from "react";

import { NavLink, Outlet } from "react-router-dom";


const ManageItems = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5">
          <div className="col-span-1 md:col-span-2 lg:col-span-2 pt-12">
            <ul>
              <li>
                <NavLink to="myitems">All Items</NavLink>
              </li>
              <li>
                <NavLink to="additems">additems</NavLink>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1 md:col-span-3 lg:col-span-3">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageItems;
