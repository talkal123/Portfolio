import React from "react";
import talProfile from "../../../assets/tal_linkedin_profile.jpg";
import { FiArrowUpRight } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";

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
<div className="w-full flex mt-20 flex-col md:flex-row md:mt-50  ">
  
  <div className="flex justify-center p-5 order-1 md:order-2 flex-[2]">
    <img
      src={talProfile}
      className="rounded-full min-w-[200px] max-w-[200px] min-h-[200px] max-w-[200px] md:min-w-[300px] max-w-[300px] min-h-[300px] max-w-[300px]"
      alt="Profile"
    />
  </div>

  <div className="  p-5 order-2 md:order-1 flex-1">
    <div className="flex flex-col gap-5 p-5 items-center md:items-start">
      <h1 className="text-4xl font-bold md:text-2xl">Tal Calderon</h1>
      <h1 className="text-3xl font-bold md:text-xl">Fullstack developer</h1>
      <h3 className="text-gray-500 text-center md:text-start max-w-64 text-sm">
        Crafting seamless web experiences from database to UI.
        Specializing in building scalable, user-centric applications.
      </h3>
      
      <div className="bg-black text-white px-6 py-2 rounded-full flex items-center gap-2 cursor-pointer hover:opacity-80 transition">
        <span className="font-semibold">Let's Talk</span>
        <FiArrowUpRight className="w-4 h-4" />
      </div>
    </div>
  </div>

  {/* דיב 3: רשימת הכפתורים - תמיד אחרון */}
  <div className="  p-5 order-3 flex-1 md:flex items-center justify-center">
    <div className="flex flex-col gap-3">
      {arr.map((button, index) => (
        <div key={index} className="flex justify-center md:justify-start items-center"> 
            <a href={button.href}>
              <div className="border border-gray-300 p-2 rounded-full flex items-center gap-2 min-w-[140px]">
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
