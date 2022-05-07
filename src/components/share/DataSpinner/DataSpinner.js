import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Spinner from "../Spinner/Spinner";

const DataSpinner = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return <Spinner />;
  }
  return children;
};

export default DataSpinner;
