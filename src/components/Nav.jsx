import React, { useState, useEffect } from "react";
import dinklogo from "../assets/dink_logo.png";
import { Link, useNavigate } from "react-router-dom";
import { FaTableTennisPaddleBall } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { LuLogIn, LuUserRoundPen } from "react-icons/lu";
import { getDeviceId } from "../utils/deviceId";
import Loader from "./Loader";

function Nav() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const deviceId = getDeviceId();
    const token = localStorage.getItem("userToken");
    setIsLoggedIn(!!token); // convert to boolean
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handlePlay = () => {
    navigate("/location");
  };

  return (
    <>
      <div className="relative z-50 md:w-full md:h-[100px] h-[70px] bg-lightblue border-b border-darkbrown flex justify-between items-center md:px-20 px-5">
        <div>
          <Link to="/">
            <img
              src={dinklogo}
              alt="dinklogo"
              className="w-22 md:w-40 xl:w-40 h-auto"
            />
          </Link>
        </div>
        <div onClick={toggleMenu} className="md:hidden">
          {isOpen ? (
            <div className="w-[3.0rem] h-[2.8rem] border border-x-2 border-t-2 border-b-4 flex justify-center items-center gap-3 bg-white border-darkbrown rounded-4xl text-darkbrown text-md font-bold p-2 font-custom">
              <ImCross className="w-[15px] h-[15px]" />
            </div>
          ) : (
            <div className="w-[6.5rem] h-[2.8rem] border border-x-2 border-t-2 border-b-4 flex justify-center items-center gap-3 bg-white border-darkbrown rounded-4xl text-darkbrown text-md font-bold p-1 font-custom">
              <GiHamburgerMenu className="w-[20px] h-[20px]" />
              <p>Menu</p>
            </div>
          )}
        </div>
        <div className="hidden md:flex md:justify-center md:items-center gap-10">
          <div
            className="flex justify-center items-center gap-5 cursor-pointer"
            onClick={handlePlay}
          >
            <FaTableTennisPaddleBall className="w-8 h-8 text-darkbrown" />
            <span className="text-darkbrown text-xl font-medium font-custom">
              PLAY
            </span>
          </div>
          <div className="w-px h-10 bg-darkbrown"></div>
          {isLoggedIn ? (
            <Link
              to="/profile"
              className="flex justify-center items-center gap-5 cursor-pointer"
            >
              <LuUserRoundPen className="w-8 h-8 text-darkbrown" />
              <span className="text-darkbrown text-xl font-medium font-custom">
                Your Profile
              </span>
            </Link>
          ) : (
            <Link
              to="/login"
              className="flex justify-center items-center gap-5 cursor-pointer"
            >
              <LuLogIn className="w-8 h-8 text-darkbrown" />
              <span className="text-darkbrown text-xl font-medium font-custom">
                LOGIN
              </span>
            </Link>
          )}
        </div>
        <div
          className={`absolute top-[70px] left-0 z-50 w-full flex flex-col justify-center items-start px-5 py-5 bg-white/80 rounded-bl-2xl rounded-br-2xl backdrop-blur-xl shadow-md transition-all duration-500 ease-in-out md:hidden overflow-hidden transform ${
            isOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 translate-y-4 pointer-events-none"
          }`}
        >
          <div
            className="flex justify-center items-center gap-5 cursor-pointer"
            onClick={handlePlay}
          >
            <FaTableTennisPaddleBall className="w-8 h-8 text-darkbrown" />
            <span className="text-darkbrown text-xl font-medium font-custom">
              PLAY
            </span>
          </div>
          <div className="w-[100%] h-0.5 my-6 bg-darkbrown"></div>
          {isLoggedIn ? (
            <Link
              to="/profile"
              className="flex justify-center items-center gap-5 cursor-pointer"
            >
              <LuUserRoundPen className="w-8 h-8 text-darkbrown" />
              <span className="text-darkbrown text-xl font-medium font-custom">
                Your Profile
              </span>
            </Link>
          ) : (
            <Link
              to="/login"
              className="flex justify-center items-center gap-5 cursor-pointer"
            >
              <LuLogIn className="w-8 h-8 text-darkbrown" />
              <span className="text-darkbrown text-xl font-medium font-custom">
                LOGIN
              </span>
            </Link>
          )}
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 z-30 w-full h-full bg-black/30 backdrop-blur-lg transition-opacity duration-300 ease-in-out md:hidden ${
          isOpen
            ? "opacity-50 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />
    </>
  );
}

export default Nav;
