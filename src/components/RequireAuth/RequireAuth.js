import React from "react";
import {
  useAuthState,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useLocation, Navigate } from "react-router-dom";
import Loading from "../share/Loading/Loading";
import { toast } from "react-toastify";

const RequireAuth = ({ children }) => {
  const [sendEmailVerification] = useSendEmailVerification(auth);
  const location = useLocation();
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <Loading />;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
  console.log(user)

  if (user.providerData[0]?.providerId ==='password' && !user.emailVerified) {
    return (
      <>
        <div
          className="pt-
       mt-20 mx-auto max-w-md text-center shadow-7xl py-6 px-3 bg-six mb-8 "
        >
          <h1 className="text-lg font-bold text-second pt-0 mt-0">
            Your Email is not Verified
          </h1>
          <h2 className="text-lg font-bold text-second ">
            Please verify your email
          </h2>
          <div className="div">
            Not Receive verify link sent again{" "}
            <button
              className="text-sm font-xl  text-main hover:text-mains rounded-full mt-2"
              onClick={async () => {
                await sendEmailVerification();
                toast("Sent Verification Link");
              }}
            >
              Verify email
            </button>
          </div>
        </div>
      </>
    );
  }

  return children;
};

export default RequireAuth;
