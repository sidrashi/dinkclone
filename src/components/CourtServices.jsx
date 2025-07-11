import React from "react";
import orangeBall from "../assets/orangeBall.svg";
import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.png";
import { IoMdArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
import ActionLinkButton from "./ActionLinkButton";

function CourtServices() {
  return (
    <div className=" flex-col justify-center items-center my-6 px-4 md:px-9 lg:px-15 xl:px-15 2xl:px-20">
      <div className="flex justify-center items-center gap-4 text-darkbrown font-bold font-custom text-lg md:text-2xl mb-10">
        <h6 className="">Start</h6>
        <img src={orangeBall} alt="icon" />
        <h6>Playing</h6>
      </div>
      <div className="flex justify-center items-center text-darkbrown font-bold font-custom text-5xl md:text-6xl">
        <div className="flex-col justify-center items-center text-center">
          <h2>Hit the court,</h2>
          <h2>Make the mark</h2>
        </div>
      </div>
      <div className="flex flex-col lg:grid lg:grid-cols-3 lg:gap-1 xl:gap-2 2xl:gap-2 md:gap-10 gap-10 my-20">
        <div className="bg-lightorange m-5 h-fit rounded-3xl flex gap-10 lg:gap-2 xl:gap-9 2xl:gap-9 flex-col overflow-visible">
          <div className="-mt-10 -mr-5 -ml-5">
            <img src={service1} alt="service1" className="w-full h-auto" />
          </div>
          <div className="flex flex-col gap-5 md:gap-10 p-6 xl:p-8 lg:p-6 md:p-8 text-darkbrown">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold font-custom">
                Start playing
              </h3>
              <p className="text-md md:text-lg font-normal font-ptag">
                across 2 locations in Surat
              </p>
            </div>
            <ActionLinkButton
              to="/location"
              label="Play Now"
              animate={false}
              className="xl:w-[20rem] lg:w-[13rem] w-4xs h-[3rem] flex justify-between items-center p-2"
            />
          </div>
        </div>
        <div className="bg-darkyellow m-5 h-fit rounded-3xl flex gap-17 2xl:gap-49 xl:gap-24 lg:gap-19.5 md:gap-12 flex-col overflow-visible">
          <div className="-mt-10 -mr-5 -ml-5">
            <img src={service2} alt="service2" className="w-full h-auto" />
          </div>
          <div className="flex flex-col gap-10 p-6 xl:p-8 lg:p-6 md:p-8 text-darkbrown">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold font-custom">
                Coaching
              </h3>
              <p className="text-md md:text-lg font-normal font-ptag">
                Professional coaching for Beginners, Intermediate and Advance
                Players
              </p>
            </div>
            <ActionLinkButton
              to="https://chat.whatsapp.com/JyR1dSpbVIm3iw9EW6ODwG"
              label="Contact Us"
              animate={false}
              className="xl:w-[20rem] lg:w-[13rem] h-[3rem] flex justify-between items-center p-2"
            />
          </div>
        </div>
        <div className="bg-lightblue m-5 h-fit rounded-3xl flex gap-12 xl:gap-17 lg:gap-25.5 md:gap-12 flex-col overflow-visible">
          <div className="-mt-10 -mr-5 -ml-5">
            <img src={service3} alt="service3" className="w-full h-auto" />
          </div>
          <div className="flex flex-col gap-10 p-6 xl:p-8 lg:p-6 md:p-8 text-darkbrown">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold font-custom">
                Membership
              </h3>
            </div>
            <ActionLinkButton
              to=""
              label="Coming Soon"
              animate={false}
              className="xl:w-[20rem] lg:w-[13rem] h-[3rem] flex justify-between items-center p-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourtServices;
