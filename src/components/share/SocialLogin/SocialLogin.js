import React, { useEffect } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { FaGoogle } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import auth from "../../../firebase.init";
import useToken from "../../../hooks/useToken";
import Loading from "../Loading/Loading";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const [token] = useToken(user);
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  });

  let errorMessages;
  if (error) {
    errorMessages = (
      <p className="text-sm text-center text-red-800">{error?.message}</p>
    );
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <div className="flex items-center justify-center">
        <span className="h-[1px] md:w-40 w-32 block  bg-gray-300 mr-2"></span>
        <p className="font-semibold">or</p>
        <span className="h-[1px] md:w-40 w-32 block bg-gray-300 ml-2"></span>
      </div>
      <div className="py-2">{errorMessages}</div>
      <div className="mx-auto pt-5">
        <button
          onClick={() => signInWithGoogle()}
          className=" mx-auto flex w-full justify-around max-w-[270px] items-center border-2 border-main hover:border-2 hover:border-eight transition duration-200 py-2 px-10 rounded-full "
        >
          <FaGoogle className="text-2xl text-main mr-2  " />
          <p className="font-semibold">Sign Up with Google</p>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
