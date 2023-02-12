import React from "react";
export const Button = (props) => {
  return (
    <button
      className={`border rounded bg-white px-4 py-2 mt-4 ${props.className}`}
      type={props.type || "button"}
      onClick={props?.handler}
      disabled={props?.disabled}
    >
      {props.icon}
      {props.text}
    </button>
  );
};

export default Button;
