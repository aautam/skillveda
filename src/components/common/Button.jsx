import React from "react";
import "../../style/Button.css"; // Adjust the path as necessary

export const Button = ({
  label = "Click Me",
  type = "button",
  onClick,
  variant = "primary", // primary, secondary, outline
  fullWidth = false,
  disabled = false,
 
}) => {
  return (  
    <button
      className={`btn ${variant} ${fullWidth ? "full-width" : ""}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
      
    >
      {label}
    </button>
  );
};
