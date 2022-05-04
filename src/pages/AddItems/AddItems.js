import { LockClosedIcon, PlusSmIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const AddItems = () => {
  const [img, setImg] = useState("");
  const [carouselImg, setcarouselImg] = useState("");
  const [price, setPrice] = useState("");
  const [supplier, setSupplier] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleImgBlur = (event) => {
    setImg(event.target.value);
  };
  const handleCarouselImg = (event) => {
    setcarouselImg(event.target.value);
  };
  const handlePrice = (event) => {
    setPrice(event.target.value);
  };
  const handleSupplier = (event) => {
    setSupplier(event.target.value);
  };
  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleDescription = (event) => {
    setDescription(event.target.value);
  };

  const handleAddNewItem = (event) => {
    event.preventDefault();
    const product = { img, carouselImg, price, supplier, name, description };
    // send data to the server
    fetch("http://localhost:5000/product", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });

    event.target.reset();
    toast("Add Product Successfully");
  };

  return (
    <>
      <div className="  min-h-full flex items-center justify-center pt-8 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-sm w-full space-y-4">
          <div>
            <h2 className="mt-6 text-center text-3xl font-base text-main">
              Add New Product
            </h2>
          </div>
          {/* input from */}
          <form className="mt-8 space-y-4" onSubmit={handleAddNewItem}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="img" className="sr-only">
                  img
                </label>
                <input
                  onBlur={handleImgBlur}
                  id="img"
                  name="img"
                  type="text"
                  required
                  className="mb-2 appearance-none rounded-none relative block w-full px-3 py-2 border bg-transparent border-mains placeholder-four  text-four  focus:outline-none focus:ring-mains focus:border-mains focus:z-10 sm:text-sm"
                  placeholder="Image url"
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
                  required
                  className="mb-2 appearance-none rounded-none relative block w-full px-3 py-2 border bg-transparent border-mains placeholder-four  text-four  focus:outline-none focus:ring-mains focus:border-mains focus:z-10 sm:text-sm"
                  placeholder="Price"
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
                  required
                  className="mb-2 appearance-none rounded-none relative block w-full px-3 py-2 border bg-transparent border-mains placeholder-four  text-four  focus:outline-none focus:ring-mains focus:border-mains focus:z-10 sm:text-sm"
                  placeholder="Supplier name"
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
                  required
                  className="mb-2 appearance-none rounded-none relative block w-full px-3 py-2 border bg-transparent border-mains placeholder-four  text-four  focus:outline-none focus:ring-mains focus:border-mains focus:z-10 sm:text-sm"
                  placeholder="Name"
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
                  required
                  className="mb-2 appearance-none rounded-none relative block w-full px-3 py-2 border bg-transparent border-mains placeholder-four  text-four  focus:outline-none focus:ring-mains focus:border-mains focus:z-10 sm:text-sm"
                  placeholder="Description"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium  text-white bg-main hover:bg-mains focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-mains "
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <PlusSmIcon
                    className="h-5 w-5 text-white "
                    aria-hidden="true"
                  />
                </span>
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddItems;
