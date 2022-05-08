import React from "react";
import useProducts from "../../hooks/useProducts";


const AllItems = () => {
  const [products] = useProducts([]);

  
  return (
    <>
      <div className="  min-h-full flex items-center justify-center pt-8 pb-20 px-4 sm:px-6 lg:px-8">
        <div className=" max-w-[32rem]  space-y-2">
          <div>
            <h2 className="mt-6  text-center text-3xl font-base text-main">
              All Items List
            </h2>
            <h3 className="mt-1 text-center text-base pb-3 font-base text-eight">
              Total Items: {products.length}
            </h3>
          </div>

          {/* items card */}
          {products.map((product) => (
            <div
              key={product._id}
              className=" px-2 sm:p-3 flex flex-row justify-around items-center md:justify-between bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <img
                className="sm:block w-24 h-10   sm:w-24 rounded-t-lg  sm:h-10 md:rounded-none md:rounded-l-lg"
                src={product.img}
                alt={product.name}
              />
              <div className="flex flex-col justify-between p-1 leading-normal">
                <h5 className="mb-1 text-sm uppercase font-bold tracking-tight text-mains dark:text-white">
                  {product?.name}
                </h5>
                <p className="mb-1 text-sm hidden sm:block  text-eight dark:text-gray-400 font-medium ">
                  Price: ${product.price}
                </p>
                <p className="mb-1  text-sm text-eight dark:text-gray-400 font-medium ">
                  Stock: {product.quantity}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AllItems;
