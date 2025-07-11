import React from "react";
import { Link } from "react-router-dom";

const NavLinkItem = ({ to, label, isLast = false }) => {

  return (
    <Link
      to={to}
      onClick={window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`flex justify-between items-center p-4 border-t-1 border-darkbrown ${
        isLast ? "border-b-1" : ""
      }`}
    >
      {label}
      <span className="font-extrabold">+</span>
    </Link>
  );
};

export default NavLinkItem;
