import React from "react";
import { Link } from "react-router-dom";
import useProducts from "../../hooks/useProducts";

const Product = () => {
  const [products] = useProducts([]);

  return (
    <>
      <div className="bg-main py-20">
        <div className="container mx-auto">
          <div className=" gap-8 grid grid-cols-1 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-4">
            {products.map((product) => (
              <div className="col-span-1 md:col-span-3 lg:col-span-2 xl:col-span-1">
                <div className="min-h-[290px] min-w-[257px] bg-third border border-third hover:border hover:border-eight hover:bg-ten text-second px-4 py-6">
                  <h1 className="text-second uppercase font-semibold text-base">
                    {product.name}
                  </h1>

                  <img
                    className="px-2 py-4"
                    src={product.img}
                    alt={product.name}
                  />
                  <div className="div">
                    <div className="flex justify-between">
                      <h2 className="font-base text-base ">${product.price}</h2>
                      <h5 className="font-base text-base ">
                        Stock: {product.quantity}
                      </h5>
                    </div>

                    <h6 className="font-base text-base py-1 ">
                      Supplier: {product.supplier}
                    </h6>
                    <p className="font-normal text-[14px] ">{`${product.description.slice(
                      0,
                      60
                    )}...`}</p>
                  </div>
                  <div className="mt-4">
                    <Link
                      className="  bg-[#111] text-white px-4 py-2 border border-white"
                      to={`/manageitems/updateitem/${product._id}`}
                    >
                      update
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
