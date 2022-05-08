import React from "react";
import {
  useAuthState,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useLocation, Navigate, Link } from "react-router-dom";
import Loading from "../share/Loading/Loading";
import { toast } from "react-toastify";
import { BsEnvelope } from "react-icons/bs";

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


  if (user.providerData[0]?.providerId ==='password' && !user.emailVerified) {
    return (
      <>
        <div className="container">
          <div class="w-full container mt-20 mx-auto max-w-xs p-4 text-gray-500 bg-white rounded-lg border dark:bg-gray-800 dark:text-gray-400">
            <div class="flex">
              <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-blue-500 bg-blue-100 rounded-lg dark:text-blue-300 dark:bg-blue-900">
                <BsEnvelope />
              </div>
              <div class="ml-3 text-sm font-normal">
                <span class="mb-1 text-sm font-semibold text-main dark:text-white">
                  Your Email is not Verified
                </span>

                <div class="mb-2 text-sm font-normal text-mains">
                  Please verify your email
                </div>
                <div class="mb-2 text-sm font-normal text-mains">
                  Not Receive verify link sent again
                </div>
                <div class="grid grid-cols-2 gap-2">
                  <div>
                    <button
                      className="inline-flex justify-center w-full px-2 py-1.5 text-xs font-medium text-center text-white bg-main rounded-lg hover:bg-mains focus:outline-none  dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800l"
                      onClick={async () => {
                        await sendEmailVerification();
                        toast("Sent Verification Link");
                      }}
                    >
                      Sent again
                    </button>
                  </div>
                  <div>
                    <Link
                      to="/login"
                      class="inline-flex justify-center w-full px-2 py-1.5 text-xs font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-600 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                    >
                      Back to Login
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return children;
};

export default RequireAuth;
