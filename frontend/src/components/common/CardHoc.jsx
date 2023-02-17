import React from "react";

const CardHoc = (props) => {
  return (
    <div
      className={`bg-white hover:relative rounded-lg border-1 shadow-gray-600 shadow-lg border-solid border-gray-800 min-w-[280px] ${props.className}`}
    >
      {props.children}
    </div>
  );
};

export default CardHoc;
