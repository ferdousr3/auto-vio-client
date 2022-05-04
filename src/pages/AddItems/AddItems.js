import { LockClosedIcon, PlusSmIcon } from '@heroicons/react/outline';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddItems = () => {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");
const [customError, setCustomError] = useState("");

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
    console.log(email);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleCreateUser = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setCustomError("Two password dont match");
      return;
    }
    if (password.length < 6) {
      setCustomError("password must be 6 characters");
      return;
    }
    
    toast("Thank You for Registration");
  };


  return (
    <>
      <div className="  min-h-full flex items-center justify-center pt-12 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-sm w-full space-y-4">
          <div>
            <h2 className="mt-6 text-center text-3xl font-base text-main">
            Add New Product
            </h2>
            <p className="mt-2 text-center text-sm text-four">
              Or
              <Link
                to="/"
                className="font-medium text-main hover:text-mains pl-2 "
              >
                visit our store
              </Link>
            </p>
          </div>
          {/* input from */}
          <form className="mt-8 space-y-4" onSubmit={handleCreateUser}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  onBlur={handleEmailBlur}
                  id="email-address"
                  name="email"
                  type="email"
                  required
                  className="mb-2 appearance-none rounded-none relative block w-full px-3 py-2 border bg-transparent border-mains placeholder-four  text-four  focus:outline-none focus:ring-mains focus:border-mains focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  onChange={handlePasswordChange}
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="mb-2 appearance-none rounded-none relative block w-full px-3 py-2 border bg-transparent border-mains placeholder-four  text-four  focus:outline-none focus:ring-mains focus:border-mains focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
              <div>
                <label htmlFor="confirmpassword" className="sr-only">
                  Confirm Password
                </label>
                <input
                  onChange={handleConfirmPasswordChange}
                  id="confirmpassword"
                  name="confirmpassword"
                  type="password"
                  required
                  className="mb-2 appearance-none rounded-none relative block w-full px-3 py-2 border bg-transparent border-mains placeholder-four  text-four  focus:outline-none focus:ring-mains focus:border-mains focus:z-10 sm:text-sm"
                  placeholder="Confirm Password"
                />
              </div>
            </div>

            
            <div>
              <button
                onClick={handleCreateUser}
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