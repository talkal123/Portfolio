import React from "react";
import Nav from "../Hero/HeroComponents/Nav";
import HeroContent from "../Hero/HeroComponents/HeroContent";

const Hero = () => {
  return (
    <div className="w-full relative">
      <div className="absolute top-0 w-full p-2">
        <Nav />
      </div>
      <div>
        <HeroContent />
      </div>
    </div>
  );
};

export default Hero;
