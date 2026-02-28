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
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { Button } from "../ui/button";
import { BsGlobe } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";


const SelectedWorks = () => {
  const [buttonName, setButtonName] = useState("All");

  const projects = Projects;


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
    <div className="p-5 md:mt-15" style={{ backgroundColor: "#eeeff0" }}>
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
          <Carousel className="w-full max-w-[280px] sm:max-w-xs">
            <CarouselContent>
              {projects
                .filter((p) =>
                  buttonName === "All" ? true : p.subtitle === buttonName,
                )
                .map((project, index) => (
                  <CarouselItem key={project.id}>
                    <div className="p-1">
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <div>
                            <Card project={project} />
                          </div>
                        </AlertDialogTrigger>
                        <AlertDialogContent className="bg-white flex flex-col gap-5">
                          <AlertDialogHeader>
                            <AlertDialogTitle className="pb-5">
                              {project.title}
                            </AlertDialogTitle>
                            <div className="grid grid-cols-6 gap-4 pb-2">
                              {project.images.map((image,index) => (
                                <div key={index} className={index < 2 ? "col-span-3 h-40" : "col-span-2 h-40"}>
                                  <img src={`/ProjectsPhotos/${image}`} className="w-full h-full object-cover" alt="" />
                                </div>
                              ))}
                            </div>
                            <AlertDialogDescription>
                              {project.description}
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <div className="flex flex-col gap-5 justify-center items-center w-full"> 
                            <div className="flex items-center justify-center gap-3">
                              <div className="border border-gray-400 p-1 rounded-full"><a href={project.links.Frontend}><FaGithub className="w-5 h-5"/></a> </div>
                              <div className="border border-gray-400 p-1 rounded-full"> <a href={project.links.demo}><BsGlobe className="w-5 h-5"/></a></div>
                            </div>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                            </div>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
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
            {projects
              .filter((p) =>
                buttonName === "All" ? true : p.subtitle === buttonName,
              )
              .map((project, index) => (
                <div key={index} className="p-1">
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <div>
                            <Card project={project} />
                          </div>
                        </AlertDialogTrigger>
                        <AlertDialogContent className="bg-white flex flex-col gap-5">
                          <AlertDialogHeader>
                            <AlertDialogTitle className="pb-5">
                              {project.title}
                            </AlertDialogTitle>
                            <div className="grid grid-cols-6 gap-4 pb-2">
                              {project.images.map((image,index) => (
                                <div key={index} className={index < 2 ? "col-span-3 h-40" : "col-span-2 h-40"}>
                                  <img src={`/ProjectsPhotos/${image}`} className="w-full h-full object-cover" alt="" />
                                </div>
                              ))}
                            </div>
                            <AlertDialogDescription>
                              {project.description}
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <div className="flex flex-col gap-5 justify-center items-center w-full"> 
                            <div className="flex items-center justify-center gap-3">
                              <div className="border border-gray-400 p-1 rounded-full"><a href={project.links.Frontend}><FaGithub className="w-5 h-5"/></a> </div>
                              <div className="border border-gray-400 p-1 rounded-full"> <a href={project.links.demo}><BsGlobe className="w-5 h-5"/></a></div>
                            </div>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                            </div>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedWorks;
