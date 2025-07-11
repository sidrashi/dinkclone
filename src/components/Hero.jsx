import React, { useEffect, useState } from "react";
import { IoMdArrowRoundForward } from "react-icons/io";
import { FaAngleDoubleDown, FaRegStar, FaRegHeart } from "react-icons/fa";
import { RiTreeLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import ActionLinkButton from "./ActionLinkButton";

function Hero() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("userToken");
    setIsLoggedIn(!!token); // convert to boolean
  }, []);

  return (
    <div className="flex-col justify-start align-start p-5 pt-10 md:p-20 overflow-x-hidden">
      <div className="text-darkbrown xl:text-9xl lg:text-8xl md:text-7xl text-5xl font-custom font-bold">
        <h1 className="mb-3">Pickleball,</h1>
        <h1 className="mb-8">Your Way</h1>
      </div>
      <p className="text-black xl:text-xl lg:text-lg md:text-sm md:w-[70%] font-ptag font-medium max-w-xl pb-4">
        Dink is more than just a place to play; it's a community. We're
        committed to fostering a welcoming and supportive environment for all
        pickleball enthusiasts.
      </p>
      <ActionLinkButton
        to={isLoggedIn ? "/location" : "/join"}
        label={isLoggedIn ? "BOOK A COURT NOW" : "REGISTER NOW TO BOOK"}
        className="flex justify-around items-center gap-20 md:gap-5 w-[17.5rem] md:w-[20rem] h-[3rem] p-2"
      />
      <div className="hidden md:block w-[20rem] h-[3rem] mt-30 mx-auto border border-x-2 border-t-2 border-b-4 border-darkbrown rounded-4xl text-darkbrown bg-white text-xl font-bold p-2 font-custom">
        <a className="flex justify-around items-center gap-2">
          Scroll to discover{" "}
          <FaAngleDoubleDown className="w-[25px] h-[25px] animate-bounce z-0" />
        </a>
      </div>
      <div className=" mt-12 md:mt-20 relative inline-flex justify-center items-center bg-darkbrown h-[3.5rem] lg:h-[4.5rem] text-white animate-marquee">
        <div className="flex flex-nowrap whitespace-nowrap space-x-8 px-4">
          <div className="flex justify-center items-center gap-3 font-custom text-2xl lg:text-3xl font-semibold">
            <FaRegStar /> Dink it up
          </div>
          <div className="flex justify-center items-center gap-3 font-custom text-2xl lg:text-3xl font-semibold">
            <RiTreeLine />
            Join the fun
          </div>
          <div className="flex justify-center items-center gap-3 font-custom text-2xl lg:text-3xl font-semibold">
            <FaRegHeart /> Smashing good times
          </div>
        </div>
        <div className="flex flex-nowrap whitespace-nowrap space-x-8 px-4">
          <div className="flex justify-center items-center gap-3 font-custom text-2xl lg:text-3xl font-semibold">
            <FaRegStar /> Dink it up
          </div>
          <div className="flex justify-center items-center gap-3 font-custom text-2xl lg:text-3xl font-semibold">
            <RiTreeLine />
            Join the fun
          </div>
          <div className="flex justify-center items-center gap-3 font-custom text-2xl lg:text-3xl font-semibold">
            <FaRegHeart /> Smashing good times
          </div>
        </div>
        <div className="flex flex-nowrap whitespace-nowrap space-x-8 px-4">
          <div className="flex justify-center items-center gap-3 font-custom text-2xl lg:text-3xl font-semibold">
            <FaRegStar /> Dink it up
          </div>
          <div className="flex justify-center items-center gap-3 font-custom text-2xl lg:text-3xl font-semibold">
            <RiTreeLine />
            Join the fun
          </div>
          <div className="flex justify-center items-center gap-3 font-custom text-2xl lg:text-3xl font-semibold">
            <FaRegHeart /> Smashing good times
          </div>
        </div>
        <div className="flex flex-nowrap whitespace-nowrap space-x-8 px-4">
          <div className="flex justify-center items-center gap-3 font-custom text-2xl lg:text-3xl font-semibold">
            <FaRegStar /> Dink it up
          </div>
          <div className="flex justify-center items-center gap-3 font-custom text-2xl lg:text-3xl font-semibold">
            <RiTreeLine />
            Join the fun
          </div>
          <div className="flex justify-center items-center gap-3 font-custom text-2xl lg:text-3xl font-semibold">
            <FaRegHeart /> Smashing good times
          </div>
        </div>
        <div className="flex flex-nowrap whitespace-nowrap space-x-8 px-4">
          <div className="flex justify-center items-center gap-3 font-custom text-2xl lg:text-3xl font-semibold">
            <FaRegStar /> Dink it up
          </div>
          <div className="flex justify-center items-center gap-3 font-custom text-2xl lg:text-3xl font-semibold">
            <RiTreeLine />
            Join the fun
          </div>
          <div className="flex justify-center items-center gap-3 font-custom text-2xl lg:text-3xl font-semibold">
            <FaRegHeart /> Smashing good times
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
