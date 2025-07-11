import React from "react";
import { FaFacebookF, FaWhatsapp, FaInstagram } from "react-icons/fa";
import bigDinkLogo from "../assets/bigDinkLogo.png";
import SocialIconButton from "./SocialIconButton";
import NavLinkItem from "./NavLinkItem";

function Footer() {
  return (
    <div className="bg-greenbg xl:w-full pt-32 md:px-20 px-5 flex flex-col">
      <div className="flex justify-center items-center lg:flex lg:justify-end lg:items-center font-custom text-lg md:text-2xl text-darkbrown font-bold pb-20">
        <div className="w-[50%] lg:w-[20%] md:w-[50%] border-1 border-darkbrown border-l-0 p-4">
          Follow along
        </div>
        <div className="flex justify-center items-center gap-4 w-[60%] lg:w-[30%] md:w-[50%] p-[0.87rem] md:p-[0.5rem] border-1 border-darkbrown border-x-0">
          <SocialIconButton
            href="https://chat.whatsapp.com/LgVA8n96AZDBDGvGwM7SBV"
            icon={FaWhatsapp}
          />
          <SocialIconButton
            href="https://www.facebook.com/people/Dink-Pickleball-Community/61563472317878/?mibextid=wwXIfr"
            icon={FaFacebookF}
          />
          <SocialIconButton
            href="https://www.instagram.com/dinkpickleballl/"
            icon={FaInstagram}
          />
        </div>
      </div>
      <div className="lg:flex lg:justify-center lg:items-center pb-20">
        <div className="hidden lg:block lg:w-[50%]">
          <img className="w-[90%] h-[90%]" src={bigDinkLogo} alt="Logo" />
        </div>
        <div className="block lg:hidden text-darkbrown">
          <h3 className="text-4xl font-bold font-custom">Join the fun!</h3>
          <p className="text-sm md:text-lg font-normal font-ptag my-10">
            Participate in a variety of pickleball events, from tournaments to
            social gatherings
          </p>
        </div>
        <div className="flex flex-col font-custom text-lg md:text-2xl text-darkbrown font-bold lg:w-[50%]">
          <NavLinkItem to="/location" label="Book" />
          <NavLinkItem to="/about-us" label="About Us" />
          <NavLinkItem to="/contact-us" label="Contact Us" />
          <NavLinkItem to="/privacy-policy" label="Privacy Policy" />
          <NavLinkItem to="/terms-conditions" label="Terms & Conditions" />
          <NavLinkItem
            to="/cancellation-refund-policy"
            label="Cancellation & Refund"
            isLast
          />
        </div> 
        <div className="block lg:hidden w-full mt-10">
          <img src={bigDinkLogo} alt="Logo" />
        </div>
      </div>
      <div className="border-2 border-darkbrown mb-10"></div>
      <div className="flex flex-col justify-center items-center text-center gap-5 text-darkbrown pb-10 font-ptag text-sm md:text-2xl">
        <p>© 2025 Dink Sport Venture Pvt Ltd</p>
        <div className="text-footer">
          Developed by{" "}
          <span className="font-bold cursor-pointer"> Sid Rashi </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
