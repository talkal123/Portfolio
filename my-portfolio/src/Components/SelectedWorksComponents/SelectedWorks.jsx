import React, { useState } from "react";
import Card from "./Card";
import Projects from "../../../projects.json";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { CardContent } from "../ui/card";

const SelectedWorks = () => {
  const [buttonName, setButtonName] = useState("All");
  console.log(buttonName);
  
  const projects = Projects;

  console.log(projects);

  const buttons = [
    {
      name: "All",
    },
    {
      name: "Commercial",
    },
    {
      name: "Exploration",
    },
  ];


  
  return (
    <div className="mt-15 p-5">
      <div className="flex flex-col gap-10">
        <div className="flex justify-center">
          <h1 className="text-3xl font-semibold">/SELECTED WORK</h1>
        </div>
        <div>
          <div>
            <ul className="flex gap-2 justify-center">
              {buttons.map((button, index) => (
                <div key={index}>
                  <li
                    onClick={() => setButtonName(button.name)}
                    className={`text-sm cursor-pointer transition-all ${
                      button.name === buttonName
                        ? "text-black underline font-semibold"
                        : ""
                    }`}
                  >
                    {button.name}
                  </li>
                </div>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center md:hidden">
          <Carousel className="w-full max-w-[310px] sm:max-w-xs">
            <CarouselContent>
              {projects.filter((p) => buttonName === "All" ? true : p.subtitle === buttonName).map((project, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card project={project} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <div className="hidden md:flex justify-center">
          <div className="grid grid-cols-2 justify-center items-center gap-20 ">
              {projects.filter((p) => buttonName === "All" ? true : p.subtitle === buttonName).map((project, index) => (
                  <div className="p-1">
                    <Card project={project} />
                  </div>
              ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedWorks;
