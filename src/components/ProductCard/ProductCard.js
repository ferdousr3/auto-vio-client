import React from "react";
import Button from "../share/Button/Button";

const ProductCard = ({ product }) => {
  const { name, img, quantity, supplier, description,price } = product;
  return (
    <>
      <div className="col-span-1 md:col-span-3 lg:col-span-2 xl:col-span-1">
        <div className="min-h-[290px] min-w-[257px] bg-third border border-third transition-colors duration-300 hover:border hover:border-eight hover:bg-ten text-second px-4 py-5">
          <h1 className="text-second uppercase font-semibold text-base">
            {name}
          </h1>
          <img className="px-2 py-4" src={img} alt={name} />
          <div className="div">
            <div className="flex justify-between">
              <h2 className="font-base text-base ">${price}</h2>
              <h5 className="font-base text-base ">
                Stock: {quantity}
              </h5>
            </div>
            <h6 className="font-base text-base py-2 ">
              Supplier: {supplier}
            </h6>
            <p className="font-normal text-[14px] ">{`${description.slice(
              0,
            70
            )}...`}</p>
          </div>
          <div className="flex justify-between mt-6">
            <div className="m-2 w-full">
              <Button
                path={`/manageitems/updateitem/${product._id}`}
                text="Restock"
              />
            </div>
            <div className="m-2 w-full">
              <Button
                path={`/manageitems/delivery/${product._id}`}
                text="Delivery"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
