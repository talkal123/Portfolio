import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import LetsTalkButton from "@/helpers/LetsTalkButton";
const Footer = () => {
  const arr = [
    {
      icon: <FaLinkedin className="w-4 h-4" />,
      name: "Linkedin",
      href: "https://www.linkedin.com/in/tal-calderon/",
    },
    {
      icon: <FaGithub className="w-4 h-4" />,
      name: "Github",
      href: "https://github.com/talkal123",
    },
    {
      icon: <FaSquareInstagram className="w-4 h-4" />,
      name: "Instagram",
    },
  ];

  return (
    <div
      className="pt-20 pb-20 flex justify-center items-center w-full "
      style={{ backgroundColor: "#eeeff0" }}
    >
      <div className=" w-full flex flex-col gap-10 justify-center items-center">
        <div className="flex w-full justify-center ">
          <div className="flex items-center justify-center gap-2 shadow-xl bg-white z-30 pr-2 pl-2 p-1 rounded-r-full rounded-l-full">
            <div className="bg-green-400 w-2 h-2 rounded-full animate-pulse"></div>
            <span className="cursor-pointer font-semibold text-sm">
              Available for new project
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-10">
          <h2 className="text-4xl text-center font-semibold">
            HAVE A PROJECT IN MIND?
          </h2>
          <p className="text-center text-gray-500">
            Together, we can create something clear and impactful
            <br /> .Let's collaborate to bring our ideas to life in a way that
            resonates with everyone.
          </p>

          <LetsTalkButton />
        </div>
        <div>
          <div className="flex flex-col md:flex-row justify-between w-full gap-15">
            {arr.map((button, index) => (
              <div
                key={index}
                className="flex justify-center md:justify-start items-center"
              >
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
    </div>
  );
};

export default Footer;
