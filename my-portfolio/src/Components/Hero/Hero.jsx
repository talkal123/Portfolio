import React from "react";
import Nav from "../Hero/HeroComponents/Nav";
import HeroContent from "../Hero/HeroComponents/HeroContent";

const Hero = () => {
  return (
    <div className="w-full relative">
      <div className="absolute w-full">
        <Nav />
      </div>
      <div>
        <HeroContent />
      </div>
    </div>
  );
};

export default Hero;
