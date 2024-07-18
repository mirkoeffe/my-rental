// components/Button.jsx
import React from "react";
import "../../App.css";

const Button = ({ onClick, children }) => {
  return (
    <button className="items-buttons" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
