import React from "react";

function AboutUsPage() {
  return (
    <div className="pt-8 pb-4">
      <div className="p-7 text-center w-full">
        <h2 className="text-[#333] text-3xl font-custom font-bold mb-2.5">
          About Dink Sports venture
        </h2>
        <p className="font-ptag text-[#555] text-lg mb-10 leading-6">
          Dink is the ultimate destination for all things pickleball. Whether
          you’re stepping onto the court for the first time or competing at a
          high level, we provide a space where passion meets play.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 gap-5">
          <div className="flex flex-col justify-start items-start border rounded-3xl bg-white cursor-pointer px-6 py-8 transform transition duration-300 ease-in-out hover:shadow-lg hover:scale-105 ">
            <h3 className="text-darkbrown font-custom text-lg font-bold mb-1">
              World-Class Facilities
            </h3>
            <p className="text-darkbrown font-ptag text-md leading-5 text-left">
              State-of-the-art courts designed to provide top-tier playing
              conditions for all levels.
            </p>
          </div>
          <div className="flex flex-col justify-start items-start border rounded-3xl bg-white cursor-pointer px-6 py-8 transition duration-300 ease-in-out hover:shadow-lg hover:scale-105 ">
            <h3 className="text-darkbrown font-custom text-lg font-bold mb-1">
              Professional Coaching
            </h3>
            <p className="text-darkbrown font-ptag text-md leading-5 text-left">
              Expert coaches tailor training programs for beginners,
              intermediate players, and competitive athletes.
            </p>
          </div>
          <div className="flex flex-col justify-start items-start border rounded-3xl bg-white cursor-pointer px-6 py-8 transition duration-300 ease-in-out hover:shadow-lg hover:scale-105 ">
            <h3 className="text-darkbrown font-custom text-lg font-bold mb-1">
              Vibrant Community
            </h3>
            <p className="text-darkbrown font-ptag text-md leading-5 text-left">
              More than just a club, Dink is a thriving community of pickleball
              enthusiasts fostering friendships.
            </p>
          </div>
          <div className="flex flex-col justify-start items-start border rounded-3xl bg-white cursor-pointer px-6 py-8 transition duration-300 ease-in-out hover:shadow-lg hover:scale-105 ">
            <h3 className="text-darkbrown font-custom text-lg font-bold mb-1">
              Exciting Tournaments & Events
            </h3>
            <p className="text-darkbrown font-ptag text-md leading-5 text-left">
              From high-energy leagues to social mixers, we host tournaments and
              events that keep the spirit alive.
            </p>
          </div>
          <div className="flex flex-col justify-start items-start border rounded-3xl bg-white cursor-pointer px-6 py-8 transition duration-300 ease-in-out hover:shadow-lg hover:scale-105 ">
            <h3 className="text-darkbrown font-custom text-lg font-bold mb-1">
              Quality Equipments & Gear
            </h3>
            <p className="text-darkbrown font-ptag text-md leading-5 text-left">
              Access premium paddles, balls, and pickleball essentials to
              enhance your game.
            </p>
          </div>
        </div>
        <p className="font-ptag text-[#555] text-lg my-10 leading-6">
          Dink is where fitness, competition, and camaraderie come together.
          Whether you're here to train, compete, or just have fun, there's a
          place for you on our courts
        </p>
      </div>
    </div>
  );
}

export default AboutUsPage;
