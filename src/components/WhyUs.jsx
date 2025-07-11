import React from "react";
import love from "../assets/love.svg";
import star from "../assets/star.svg";
import tree from "../assets/tree.svg";
import hand from "../assets/hand.svg";
import FeatureCard from "./FeatureCard";

function WhyUs() {
  return (
    <div className="bg-lightyellow md:flex md:flex-col md:justify-center justify-start md:items-center px-5 md:px-20 pt-20">
      <div className="text-5xl md:text-6xl font-bold font-custom text-darkbrown">
        <h2>Why Dink?</h2>
      </div>
      <div className="grid xl:grid-cols-4 lg:grid-cols-2 gap-10 py-20">
        <FeatureCard
          icon={love}
          title="Community driven"
          description="Be part of a growing community of pickleball players"
        />
        <FeatureCard
          icon={star}
          title="top notch facilities"
          description="Enjoy state-of-the-art pickleball courts and amenities"
        />
        <FeatureCard
          icon={tree}
          title="exciting events"
          description="Participate in a variety of pickleball events, from tournaments to
              social gatherings"
        />
        <FeatureCard
          icon={hand}
          title="world class coaching"
          description="Learn from experienced coaches & improve your skills"
        />
      </div>
    </div>
  );
}

export default WhyUs;
