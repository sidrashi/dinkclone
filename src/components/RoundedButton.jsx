import React from "react";

const RoundedButton = ({
  onClick,
  type = "button",
  children,
  icon = null,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`flex justify-center items-center bg-white border border-x-2 border-t-2 border-b-4 border-darkbrown rounded-4xl text-darkbrown font-custom font-bold cursor-pointer ${className}`}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};

export default RoundedButton;
