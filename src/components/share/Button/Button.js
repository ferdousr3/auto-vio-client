import React from 'react';
import {Link} from 'react-router-dom'
import './Button.css'

const Button = ({path,text}) => {
  return (
    <>
      <Link
        className=" my-btn"
        to={path}
      >
        <button className="w-full ">{text}</button>
      </Link>
    </>
  );
};

export default Button;