import React from "react";
import { Link } from "react-router-dom";
import { IoMdArrowRoundForward } from "react-icons/io";

const ActionLinkButton = ({ to, label, className = "", animate = true }) => (
  <Link
    to={to}
    className={`border border-x-2 border-t-2 border-b-4 border-darkbrown bg-white rounded-4xl text-darkbrown text-md md:text-xl font-bold font-custom ${className}`}
  >
    {label}
    <IoMdArrowRoundForward
      className={`w-[20px] h-[20px] md:w-[25px] md:h-[25px] ${animate ? "animate-wiggle" : ""}`}
    />
  </Link>
);

export default ActionLinkButton;
