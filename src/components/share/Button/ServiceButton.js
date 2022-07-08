import React from 'react';
import { Link } from "react-router-dom";
import "./ServiceButton.css";
const ServiceButton = ({path,text}) => {
  return (
    <>
      <>
        <Link  className=" my-btn" to={path}>
          <button className="w-full ">{text}</button>
        </Link>
      </>
    </>
  );
};

export default ServiceButton;