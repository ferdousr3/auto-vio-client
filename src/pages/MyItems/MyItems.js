import { PencilAltIcon, TrashIcon } from "@heroicons/react/outline";
import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink, useNavigate } from "react-router-dom";
import axiosPrivate from "../../api/axiosPrivate";
import PageTitle from "../../components/share/PageTitle/PageTitle";
import auth from "../../firebase.init";

// import useProducts from "../../hooks/useProducts";

const MyItems = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProductPerUser = async () => {
      const email = user?.email;
      const url = `https://auto-vio.onrender.com/myproduct?email=${email}`;
      // const url = `http://localhost:5000/myproduct?email=${email}`;
      try {
        const { data } = await axiosPrivate.get(url);
        setProducts(data);
      } catch (error) {
        console.log(error.message);
        if (
          error.response.status === 401 ||
          error.response.status === 403 ||
          error.response.status === 404
        ) {
          signOut(auth);
          navigate("/login");
        }
      }
    };
    getProductPerUser();
  }, [user,navigate]);

  const handleProductDelete = (id) => {
    const proceed = window.confirm("Are you want to delete");
    if (proceed) {
      // const url = `http://localhost:5000/product/${id}`;
      const url = `https://auto-vio.onrender.com/product/${id}`;
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
    {/* PageTitle */}
    <PageTitle title='My Items' />
      <div className="  min-h-full flex items-center justify-center pt-8 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-sm w-full space-y-2">
          <div>
            <h2 className="mt-6 text-center text-3xl font-base text-main">
              My Items List
            </h2>
            <h3 className="mt-2 text-center text-base  font-base text-eight">
              {user.email}
            </h3>
            <h3 className="mt-1 text-center text-base pb-3 font-base text-eight">
              Total Items: {products.length}
            </h3>
          </div>
          {/* items card */}
          {products.map((product) => (
            <div
              key={product._id}
              className=" px-2 sm:p-3 flex flex-row justify-between items-center md:justify-between bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <img
                className="sm:block w-14 h-10   sm:w-24 rounded-t-lg  sm:h-14 md:rounded-none md:rounded-l-lg"
                src={product.img}
                alt={product.name}
              />
              <div className="flex flex-col justify-between p-1 leading-normal">
                <h5 className="mb-1 text-base uppercase font-bold tracking-tight text-mains dark:text-white">
                  {product?.name}
                </h5>
                <p className="mb-1 hidden sm:block  text-eight dark:text-gray-400 font-semibold">
                  Price: ${product.price}
                </p>
                <p className="mb-1  text-eight dark:text-gray-400 font-semibold">
                  Stock: {product.quantity}
                </p>
              </div>
              <div className="">
                <NavLink
                  to={`/manageitems/updateitem/${product._id}`}
                  className=" flex justify-center items-center bg-main hover:bg-mains text-white w-10 h-10 rounded-full text-base font-semibold  "
                >
                  <PencilAltIcon className="w-5 h-5" />
                </NavLink>
              </div>
              <div className="">
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
