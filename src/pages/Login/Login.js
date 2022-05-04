import { LockClosedIcon } from "@heroicons/react/solid";
import React, { useEffect, useState } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  error,
} from "react-firebase-hooks/auth";
import { Link, useNavigate, useLocation } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../../components/share/Loading/Loading";
import { toast } from "react-toastify";
import SocialLogin from "../../components/share/SocialLogin/SocialLogin";
import PageTitle from "../../components/share/PageTitle/PageTitle";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [customError, setCustomError] = useState("");
  const [passwordResetError, setpasswordResetError] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/home";

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // let errorMessages;
  // if (error || customError) {
  //   errorMessages = <p className="text-sm text-red-900">{error?.message}</p>;
  // }
  let errorMessages;
  if (customError || error) {
    errorMessages = (
      <p className="text-sm text-red-900">{customError?.message}</p>
    );
  }
  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  });
  const handleSingIn = (event) => {
    event.preventDefault();
    if (password.length < 6) {
      setCustomError("password must be 6 characters");
      return;
    }
    signInWithEmailAndPassword(email, password);
  };

  const forgotPassword = async () => {
    setCustomError("");
    setPassword("");
    if (email !== "") {
      console.log(email);
      await sendPasswordResetEmail(email);
      toast("Sent password Rest Link");
    } else if (email === "") {
      setpasswordResetError("please input an Email");
      return;
    }
  };

  return (
    <>
      {/* <PageTitle title="Login" /> */}
      <div className="min-h-full flex items-center justify-center pt-12 pb-40 px-4 sm:px-6 lg:px-5">
        <div className="max-w-sm w-full space-y-4">
          <div>
            <h2 className="mt-6 text-center text-3xl font-base text-main">
              Sign in to your account
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
          <form className="mt-8 space-y-4" onSubmit={handleSingIn}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  onChange={handleEmailChange}
                  id="email-address"
                  name="email"
                  type="email"
                  required
                  className=" mb-2 appearance-none rounded-none relative block w-full px-3 py-2 border bg-transparent border-mains placeholder-four  text-four  focus:outline-none focus:ring-mains focus:border-mains focus:z-10 sm:text-sm"
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
              <div className="mt-4">
                <p className={customError ? "mt-2 text-xs text-red" : "hidden"}>
                  {customError}
                </p>
              </div>
            </div>

            {/* loading spinner */}
            <span className={loading || sending ? "my-1 w-48 mx-2" : "hidden"}>
              {(loading || sending) && <Loading />}
            </span>
            {/* error messages */}
            <p className="text-sm text-red-900">{error?.message}</p>

            {errorMessages}
            <div>
              <button
                // disabled={handleEmailBlur && handlePasswordBlur}
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium  text-white bg-main hover:bg-mains focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-mains"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-white "
                    aria-hidden="true"
                  />
                </span>
                Sign in
              </button>
            </div>
          </form>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <p className="my-0 text-sm text-eight font-semibold ">
                New user please!
                <Link
                  to="/register"
                  className=" ml-1  text-main hover:text-mains font-bold"
                >
                  Sign up
                </Link>
              </p>
            </div>
            {/* forgot password */}
            <div className="text-sm">
              <button
                onClick={forgotPassword}
                className="font-bold text-main hover:text-mains"
              >
                Forgot password?
              </button>
            </div>
          </div>
          {/* google signup */}
          <SocialLogin />
        </div>
      </div>
    </>
  );
};

export default Login;
