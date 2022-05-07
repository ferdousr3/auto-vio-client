import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import './Delivery.css'


const DeliveryItem = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  

 
  // data load from api by id
  useEffect(() => {
    const url = `http://localhost:5000/product/${id}`;
    // const url = `https://auto-vio.herokuapp.com/product/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);
  // data update to api
  const handleUpdateItem = (event) => {
    const { quantity, ...rest } = product;
    if(quantity > 0){
      const newQuantity = parseFloat(product.quantity) - 1;
      const updateQuantity = { quantity: parseFloat(newQuantity), ...rest };
      
      // send data to the server
      // const url = `http://localhost:5000/product/${id}`;
      const url = `https://auto-vio.herokuapp.com/product/${id}`;
      fetch(url, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updateQuantity),
      });
       setProduct(updateQuantity);
      toast(`update Quantity successfully`);
    }
    else{
      toast(`Quantity is 0 `);
      return
    }
   
  
  };

  const { name, img, quantity, supplier, description, price } = product;

  return (
    <>
      <div className="  min-h-full flex items-center justify-center pt-8 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-sm w-full space-y-4">
          <div>
            <h2 className="mt-6 text-center text-3xl font-base text-main">
              Delivery Item for
              <span className="uppercase text-3xl pl-2 font-normal ">
                {product.name}
              </span>
            </h2>
          </div>

          {/* card */}
          <div className="col-span-1 md:col-span-3 lg:col-span-2 xl:col-span-1">
            <div className="min-h-[290px] min-w-[257px] bg-third border border-third transition-colors duration-300 hover:border hover:border-eight hover:bg-ten text-second px-4 py-5">
              <h1 className="text-second uppercase font-semibold text-base">
                {name}
              </h1>
              <img className="px-2 py-4" src={img} alt={name} />
              <div className="div">
                <div className="flex justify-between">
                  <h2 className="font-base text-base ">${price}</h2>
                  <h5 className="font-base text-base ">Stock: {quantity}</h5>
                </div>
                <h6 className="font-base text-base py-2 ">
                  Supplier: {supplier}
                </h6>
                <p className="font-normal text-[14px] ">{`${description?.slice(
                  0,
                  70
                )}...`}</p>
              </div>
              <div className="flex justify-between mt-6">
                <div className="m-2 w-full">
                  <button className="my-btn-full" onClick={handleUpdateItem}>
                    Delivery
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeliveryItem;
