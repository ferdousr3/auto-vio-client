import { PencilAltIcon, TrashIcon } from "@heroicons/react/outline";
import React from "react";
import {  NavLink } from "react-router-dom";

import useProducts from "../../hooks/useProducts";
// import Modal from "../../components/Modal/Modal";

const MyItems = () => {

  const [products, setProducts] = useProducts([]);

  const handleProductDelete = (id) => {
    const proceed = window.confirm("Are you want to delete");
    if (proceed) {
      
      // const url = `http://localhost:5000/product/${id}`;
      const url = `https://auto-vio.herokuapp.com/product/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
    
            const remaining = products.filter((product) => product._id !== id);
            setProducts(remaining);
          }
        });
    }
  };
  return (
    <>
      <div className="  min-h-full flex items-center justify-center pt-8 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-sm w-full space-y-2">
          <div>
            <h2 className="mt-6 text-center text-3xl font-base text-main">
              All Items List
            </h2>
          </div>
          {/* items card */}
          {products.map((product) => (
            <div
              key={product._id}
              className="p-3 flex flex-col items-center md:justify-between bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <img
                className=" w-24 rounded-t-lg  h-14 md:rounded-none md:rounded-l-lg"
                src={product.img}
                alt={product.name}
              />
              <div className="flex flex-col justify-between p-1 leading-normal">
                <h5 className="mb-1 text-base uppercase font-bold tracking-tight text-mains dark:text-white">
                  {product?.name}
                </h5>
                <p className="mb-1  text-eight dark:text-gray-400 font-semibold">
                  Price: ${product.price}
                </p>
                <p className="mb-1  text-eight dark:text-gray-400 font-semibold">
                  Stock: {product.quantity}
                </p>
              </div>
              <div className="btn">
                <NavLink
                  to={`/manageitems/updateitem/${product._id}`}
                  className="flex justify-center items-center bg-main hover:bg-mains text-white w-10 h-10 rounded-full text-base font-semibold  "
                >
                  <PencilAltIcon className="w-5 h-5" />
                </NavLink>
              </div>
              <div className="btn">
                <button
                  onClick={() => handleProductDelete(product._id)}
                  className="flex justify-center items-center bg-red-500 hover:bg-red-400 text-main w-10 h-10 rounded-full text-base font-semibold  "
                >
                  <TrashIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MyItems;
