import React from "react";
import "./style.scss";

const Button = ({ onClick, title='', img='', className='' }) => {
  return (
    <button className={className} onClick={onClick}>
      {title}
      {img}
    </button>
  );
};

export default Button;
