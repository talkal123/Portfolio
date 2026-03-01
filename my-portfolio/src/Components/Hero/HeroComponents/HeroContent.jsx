import React from "react";
import talProfile from "../../../assets/tal_linkedin_profile.jpg";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import LetsTalkButton from "@/Helpers/LetsTalkButton";

const HeroContent = () => {
  const arr = [
     {
      icon: <FaLinkedin className="w-4 h-4"/>,
      name:"Linkedin",
      href:"https://www.linkedin.com/in/tal-calderon/"
    },
     {
      icon:<FaGithub className="w-4 h-4"/>,
      name:"Github",
      href:"https://github.com/talkal123"
    },
     {
      icon:<FaSquareInstagram className="w-4 h-4"/>,
      name:"Instagram"
    },
  ]
  return (
<div className="w-full flex mt-20 flex-col md:flex-row md:mt-50 pt-10 pb-10">
  
  <div className="flex justify-center p-5 order-1 md:order-2 flex-[2]">
    <img
    src={talProfile}
    className="w-[200px] h-auto md:w-[300px] object-cover rounded-full shadow-lg"
    alt="Profile"
  />
  </div>

  <div className="  p-5 order-2 md:order-1 flex-1">
    <div className="flex flex-col gap-5 p-5 items-center md:items-start">
      <h1 className="text-4xl font-bold md:text-4xl">Tal Calderon</h1>
      <h1 className="text-3xl font-bold md:text-3xl">Fullstack developer</h1>
      <h3 className="text-gray-500 text-center md:text-start max-w-64 text-sm">
        Crafting seamless web experiences from database to UI.
        Specializing in building scalable, user-centric applications.
      </h3>
      
      <LetsTalkButton />
    </div>
  </div>

  <div className=" p-5 order-3 flex-1 md:flex items-center justify-center">
    <div className="flex flex-col gap-3">
      {arr.map((button, index) => (
        <div key={index} className="flex justify-center md:justify-start items-center"> 
            <a href={button.href}>
              <div className="border border-gray-300 p-2 rounded-full flex items-center gap-2 min-w-[100px]">
              <span>{button.icon}</span>
              <span className="text-sm">{button.name}</span>
              </div>
            </a>
          </div>
      ))}
    </div>
  </div>

</div>
  );
};

export default HeroContent;
