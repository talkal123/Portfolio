import React from "react";

const experience = [
 
  {
    title: "Freelance",
    subtitle: "Full-Stack Developer",
    time: "Nov 2026 - Present", 
  },
  {
    title: "Internship",
    subtitle: "Front-End Developer",
    time: "Jul 2025 - Oct 2025",
  },
  {
    title: "IITC College",
    subtitle: "Full-Stack Development Studies", 
    time: "Jul 2024 - Feb 2025",
  }

];

const Experience = () => {
  return (
    <div className="p-10 pb-20 pt-10 w-full text-white" style={{backgroundColor:"#2e3035"}}>
      <div className=" w-full flex flex-col gap-10 p-5">
        <div className=" w-full flex flex-col items-center gap-5 justify-between md:flex-row">
          <h1 className="text-3xl">/EXPERIENCE</h1>
          <span>9+ years of experience</span>
        </div>
        <div className="">
          {experience.map((exp, index) => (
            <div key={index} className="flex justify-between border-b-2">
              <div className="flex flex-col gap-5 p-5">
                <h3>{exp.title}</h3>
                <h3 className="text-gray-400">{exp.subtitle}</h3>
              </div>
              <div className="flex items-center p-5">
                <span className="text-gray-400">{exp.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
