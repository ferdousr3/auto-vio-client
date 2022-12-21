import { UploadIcon } from "@heroicons/react/outline";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import PageTitle from "../../components/share/PageTitle/PageTitle";

const UpdateItem = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  
  const handleEmail = (event) => {
    const { email, ...rest } = product;
    const newEmail = event.target.value;
    const updateEmail = { img: newEmail, ...rest };
    setProduct(updateEmail);
  };
  const handleImg = (event) => {
    const { img, ...rest } = product;
    const newImg = event.target.value;
    const updateImg = { img: newImg, ...rest };
    setProduct(updateImg);
  };
  const handleCarouselImg = (event) => {
    const { carouselImg, ...rest } = product;
    const newCarouselImg = event.target.value;
    const updateCarouselImg = { carouselImg: newCarouselImg, ...rest };
    setProduct(updateCarouselImg);

    
  };
  const handlePrice = (event) => {
    const { price, ...rest } = product;
    const newPrice = event.target.value;
    const updatePrice = { price: newPrice, ...rest };
    setProduct(updatePrice);

    
  };
  const handleQuantity = (event) => {
    const { quantity, ...rest } = product;
    const newQuantity = event.target.value;
    const updateQuantity = { quantity: newQuantity, ...rest };
    setProduct(updateQuantity);

    
  };
  const handleSupplier = (event) => {
    const { supplier, ...rest } = product;
    const newSupplier = event.target.value;
    const updateSupplier = { quantity: newSupplier, ...rest };
    setProduct(updateSupplier);

    
  };
  const handleName = (event) => {
    const { name, ...rest } = product;
    const newName = event.target.value;
    const updateName = { name: newName, ...rest };
    setProduct(updateName);

    
  };
  const handleDescription = (event) => {
    const { description, ...rest } = product;
    const newDescription = event.target.value;
    const updateDescription = { description: newDescription, ...rest };
    setProduct(updateDescription);
    
    
  };

  // data load from api by id
  useEffect(() => {
    // const url = `http://localhost:5000/product/${id}`;
    const url = `https://auto-vio.onrender.com/product/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);
  // data update to api
  const handleUpdateItem = (event) => {
    event.preventDefault();
    // send data to the server
    // const url = `http://localhost:5000/product/${id}`;
    const url = `https://auto-vio.onrender.com/product/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        
      });
      event.target.reset();
      setProduct('');
    toast(`update Product successfully`);
  };

  

  return (
    <>
      {/* page title */}
      <PageTitle  title="Update Item" />
      {/* main parts of the page */}
      <div className="  min-h-full flex items-center justify-center pt-8 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-sm w-full space-y-4">
          <div>
            <h2 className="mt-6 text-center text-3xl font-base text-main">
              Update Item for
              <span className="uppercase text-3xl pl-2 font-normal ">
                {product.name}
              </span>
            </h2>
          </div>
          {/* input from */}
          <form className="mt-8 space-y-4" onSubmit={handleUpdateItem}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  onChange={handleEmail}
                  id="email"
                  name="email"
                  type="email"
                  className="mb-2 appearance-none rounded-none relative block w-full px-3 py-2 border bg-transparent border-mains placeholder-four  text-four  focus:outline-none focus:ring-mains focus:border-mains focus:z-10 sm:text-sm"
                  placeholder="email"
                  value={product.email || ""}
                  disabled
                />
              </div>
              <div>
                <label htmlFor="img" className="sr-only">
                  img
                </label>
                <input
                  onChange={handleImg}
                  id="img"
                  name="img"
                  type="text"
                  className="mb-2 appearance-none rounded-none relative block w-full px-3 py-2 border bg-transparent border-mains placeholder-four  text-four  focus:outline-none focus:ring-mains focus:border-mains focus:z-10 sm:text-sm"
                  placeholder="Image url"
                  value={product.img || ""}
                  disabled
                />
              </div>
              <div>
                <label htmlFor="carouselImg" className="sr-only">
                  Carousel Img
                </label>
                <input
                  onChange={handleCarouselImg}
                  id="carouselmg"
                  name="carouselimg"
                  type="text"
                  className="mb-2 appearance-none rounded-none relative block w-full px-3 py-2 border bg-transparent border-mains placeholder-four  text-four  focus:outline-none focus:ring-mains focus:border-mains focus:z-10 sm:text-sm"
                  placeholder="Carousel img url (optional)"
                  value={product.carouselImg || ""}
                  disabled
                />
              </div>
              <div>
                <label htmlFor="price" className="sr-only">
                  Price
                </label>
                <input
                  onChange={handlePrice}
                  id="price"
                  name="price"
                  type="number"
                  className="mb-2 appearance-none rounded-none relative block w-full px-3 py-2 border bg-transparent border-mains placeholder-four  text-four  focus:outline-none focus:ring-mains focus:border-mains focus:z-10 sm:text-sm"
                  placeholder="Price"
                  value={product.price || ""}
                  disabled
                />
              </div>
              <div>
                <label htmlFor="quantity" className="sr-only">
                  Quantity
                </label>
                <input
                  onChange={handleQuantity}
                  id="quantity"
                  name="quantity"
                  type="number"
                  className="mb-2 appearance-none rounded-none relative block w-full px-3 py-2 border bg-transparent border-mains placeholder-four  text-four  focus:outline-none focus:ring-mains focus:border-mains focus:z-10 sm:text-sm"
                  placeholder="Quantity"
                  value={product.quantity || ""}
                />
              </div>
              <div>
                <label htmlFor="supplier" className="sr-only">
                  supplier
                </label>
                <input
                  onChange={handleSupplier}
                  id="supplier"
                  name="supplier"
                  type="text"
                  className="mb-2 appearance-none rounded-none relative block w-full px-3 py-2 border bg-transparent border-mains placeholder-four  text-four  focus:outline-none focus:ring-mains focus:border-mains focus:z-10 sm:text-sm"
                  placeholder="Supplier name"
                  value={product.supplier || ""}
                  disabled
                />
              </div>
              <div>
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <input
                  onChange={handleName}
                  id="name"
                  name="name"
                  type="text"
                  className="mb-2 appearance-none rounded-none relative block w-full px-3 py-2 border bg-transparent border-mains placeholder-four  text-four  focus:outline-none focus:ring-mains focus:border-mains focus:z-10 sm:text-sm"
                  placeholder="Name"
                  value={product.name || ""}
                  disabled
                />
              </div>
              <div>
                <label htmlFor="description" className="sr-only">
                  Description
                </label>
                <textarea
                  onChange={handleDescription}
                  id="description"
                  name="description"
                  type="text"
                  className="mb-2 appearance-none rounded-none relative block w-full px-3 py-2 border bg-transparent border-mains placeholder-four  text-four  focus:outline-none focus:ring-mains focus:border-mains focus:z-10 sm:text-sm"
                  placeholder="Description"
                  rows="4"
                  cols="50"
                  value={product.description || ""}
                  disabled
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium  text-white bg-main hover:bg-mains focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-mains "
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <UploadIcon
                    className="h-5 w-5 text-white "
                    aria-hidden="true"
                  />
                </span>
                Update Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateItem;
