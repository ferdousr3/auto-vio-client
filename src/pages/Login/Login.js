import { LockClosedIcon } from "@heroicons/react/solid";
import React, { useEffect, useState } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
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

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };

  let errorMessages;
  if (error || customError) {
    errorMessages = <p className="text-sm text-red-900">{error?.message}</p>;
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
    if (email !== "") {
      console.log(email);
      await sendPasswordResetEmail(email);
      toast("Sent password Rest Link");
    } else if (email === "") {
      setCustomError("please input an Email");
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
                  onChange={handleEmailBlur}
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-four  text-four rounded-t-md focus:outline-none focus:ring-mains focus:border-mains focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  onBlur={handlePasswordBlur}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-four text-four rounded-b-md focus:outline-none focus:ring-main focus:border-main focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            {/* loading spinner */}
            <span className={loading || sending ? "my-1 w-48 mx-2" : "hidden"}>
              {(loading || sending) && <Loading />}
            </span>
            {/* error messages */}

            {errorMessages}
            <div>
              <button
                // disabled={handleEmailBlur && handlePasswordBlur}
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-main hover:bg-mains focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-mains"
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
              <p className="my-0 text-sm text-four ">
                New user please!
                <Link
                  to="/register"
                  className=" ml-1 font-medium text-main hover:text-mains"
                >
                  Sign up
                </Link>
              </p>
            </div>
            {/* forgot password */}
            <div className="text-sm">
              <button
                onClick={forgotPassword}
                className="font-medium text-main hover:text-mains"
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
