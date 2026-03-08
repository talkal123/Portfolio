import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FiArrowUpRight } from "react-icons/fi";
import LetsTalk from "@/tmp_components/LetsTalk/LetsTalk.jsx";
import LetsTalkButton from "@/helpers/LetsTalkButton";
import ChangeButton from "@/helpers/ChangeButton";

const Nav = () => {
  const buttons = [
    {
      name: "Work",
    },
    {
      name: "Service",
    },
    {
      name: "Experience",
    },
    {
      name: "Contact",
    },
  ];

  const [isDisplay, setIsDisplay] = useState(false);
  const [nameOfButton,setNameOfButton] = useState("")


  const onClick = (name) => {
    setNameOfButton(name)
    document.getElementById(name)?.scrollIntoView({behavior:"smooth"})
    setNameOfButton("")
  }

  console.log(nameOfButton);
  

  const displayNav = () => {
    setTimeout(() => {
      setIsDisplay((prev) => !prev);
    }, 300);
  };

  return (
    <div className="">
      <div className="block md:hidden">
        <div className="flex justify-end">
          <RxHamburgerMenu
            onClick={displayNav}
            className="w-8 h-8 cursor-pointer"
          />
        </div>
        {isDisplay === true ? (
          <div className="flex flex-col">
            <div className="bg-gray-400/10 backdrop-blur-md border border-white/20 rounded-xl p-5 flex flex-col">
              <div className="pr-2 pl-2 -1 rounded-r-full rounded-l-full flex flex-col gap-10 items-center ">
                <div className="flex gap-2 items-center">
                <div className="bg-green-400 w-2 h-2 rounded-full animate-pulse"></div>
                <span className="cursor-pointer font-semibold ">Available for new project</span>
                </div>
                {buttons.map((button, index) => (
                  <div
                    style={nameOfButton === button.name ? {border:"1px solid gray",color:"gray",boxShadow:"0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)"} : {}}
                    onClick={() => {onClick(button.name)}}
                    key={index}
                    className=" pr-2 pl-2 -1 rounded-r-full rounded-l-full flex items-center justify-center"
                  >
                    <span className="cursor-pointer font-semibold">{button.name}</span>
                  </div>
                ))}
                <div>
                  <LetsTalk />
                </div>
                {/* <div>
                  <ChangeButton />
                </div> */}
              </div>
              
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
      
      <div className="hidden md:block w-full text-sm">
        <div className="p-2 flex w-full">
          <div className="p-2 flex flex-row justify-between w-full items-center gap-1 rounded-r-full rounded-l-full">
            <div className="flex items-center justify-center gap-2">
            <div className="bg-green-400 w-2 h-2 rounded-full animate-pulse"></div>
            <span className="cursor-pointer font-semibold">Available for new project</span>
            </div>
            {buttons.map((button,index) => (
              <div key={index} onClick={() => {onClick(button.name)}} style={nameOfButton === button.name ? {border:"1px solid gray",boxShadow:"0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)"} : {} } className="p-2 flex flex-row items-center gap-1 rounded-r-full rounded-l-full">
                <span className="cursor-pointer font-semibold">{button.name}</span>
                </div>
            ))}
          <LetsTalkButton />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
