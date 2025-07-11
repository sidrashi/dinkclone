import React from "react";

const SocialIconButton = ({ href, icon: Icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-[2.5rem] h-[2rem] md:w-[3.8rem] md:h-[3rem] border border-x-2 border-t-2 border-b-4 flex justify-center items-center bg-white border-darkbrown rounded-4xl text-darkbrown text-xl font-bold p-2 font-custom"
  >
    <Icon className="w-9 h-5 md:w-12 md:h-7" />
  </a>
);

export default SocialIconButton;
