import React from "react";

const FeatureCard = ({ icon, title, description }) => (
  <div className="md:border-1 rounded-2xl md:bg-white md:p-7 flex md:flex-col gap-5 lg:gap-37 md:gap-20">
    <img
      src={icon}
      alt={title}
      className="w-[60px] h-[60px] md:w-[100px] md:h-[100px]"
    />
    <div className="text-darkbrown flex flex-col gap-1 md:gap-5"> 
      <h4 className="font-custom text-lg md:text-4xl font-bold">{title}</h4>
      <p className="font-ptag font-normal text-md md:text-lg leading-6">
        {description}
      </p>
    </div>
  </div>
);

export default FeatureCard;
