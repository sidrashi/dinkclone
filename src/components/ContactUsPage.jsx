import React from "react";
import { FiUsers } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { IoMdArrowRoundForward } from "react-icons/io";

function ContactUsPage() {
  return (
    <div className="pt-8 pb-4">
      <div className="px-2 py-5 text-center w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-5">
          <a
            href="https://chat.whatsapp.com/LgVA8n96AZDBDGvGwM7SBV"
            target="_blank"
            className="flex justify-center items-center border border-darkbrown rounded-2xl text-darkbrown font-medium gap-2 p-4 bg-lightorange font-custom transition-colors duration-300 ease-in-out hover:bg-white"
          >
            Join Community <FiUsers />
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=%2B918320090671&text&type=phone_number&app_absent=0&wame_ctl=1"
            target="_blank"
            className="flex justify-center items-center border border-darkbrown rounded-2xl text-darkbrown font-medium gap-2 p-4 bg-darkyellow font-custom transition-colors duration-300 ease-in-out hover:bg-white"
          >
            Chat with Us <FaWhatsapp />
          </a>
          <a
            href="https://www.instagram.com/dinkpickleballl/"
            target="_blank"
            className="flex justify-center items-center border border-darkbrown rounded-2xl text-darkbrown font-medium gap-2 p-4 bg-lightblue font-custom transition-colors duration-300 ease-in-out hover:bg-white"
          >
            Follow us <FaInstagram />
          </a>
        </div>
        <div className="flex flex-col gap-12 rounded-2xl overflow-hidden mt-10 lg:relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.2055089142177!2d72.774591!3d21.1839936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04de0beaaaf83%3A0xe51f060a681e7d91!2sDink%20Pickleball%2C%20Pal!5e0!3m2!1sen!2sin!4v1739790902613!5m2!1sen!2sin"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="rounded-2xl h-[70vh] w-full "
          ></iframe>
          <div className="text-left py-5 px-3 bg-white rounded-2xl lg:absolute lg:right-1 lg:top-10 xl:absolute xl:right-1 xl:top-50 2xl:top-155">
            <h6 className="font-ptag mb-4 text-darkbrown text-3xl font-semibold uppercase">
              Dink pickeball
            </h6>
            <p className="font-ptag uppercase font-light text-md mb-2">
              Dink Sports venture private limited
            </p>
            <p className="font-ptag font-light text-md leading-5 mb-2">
              <span className="flex items-center gap-1">
                <CiLocationOn />
                Dink Pickleball, PAL,
              </span>
              Park Avenue Road, PAL GAM. <br /> Surat, Gujarat, India - 395009
            </p>
            <div className="flex justify-start flex-col items-start gap-2">
              <a href="tel:+918320090671">
                <span className="flex items-center gap-1">
                  <IoCallOutline />
                  +91 8320090671
                </span>{" "}
              </a>
              <a href="mailto:salesdink@gmail.com">
                <span className="flex items-center gap-1">
                  <MdOutlineEmail />
                  salesdink@gmail.com
                </span>{" "}
              </a>
              <div className="w-[15.5rem] md:w-[20rem] h-[3rem] border border-x-2 border-t-2 border-b-4 border-darkbrown bg-white rounded-4xl text-darkbrown text-md md:text-xl font-bold px-2 py-2 font-ptag mt-10">
                <a
                  href="https://www.google.com/maps/place/Dink+Pickleball,+Pal/@21.1839936,72.774591,17z/data=!3m1!4b1!4m6!3m5!1s0x3be04de0beaaaf83:0xe51f060a681e7d91!8m2!3d21.1839936!4d72.774591!16s%2Fg%2F11w_k4v1ck?entry=tts&g_ep=EgoyMDI1MDIxMi4wIPu8ASoASAFQAw%3D%3D"
                  target="_blank"
                  className="uppercase flex items-center justify-center"
                >
                  View on google map
                  <IoMdArrowRoundForward className="w-[20px] h-[20px]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUsPage;
