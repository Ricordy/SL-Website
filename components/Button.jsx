import React from "react";

const Button = ({ children, className }) => {
  return (
    <button className="border-2 px-10 uppercase  font-semibold leading-none rounded-md border-white self-center py-2">
      {children}
    </button>
  );
};

export default Button;
