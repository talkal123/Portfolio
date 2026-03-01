import React from "react";

const Card = ({ project }) => {
  return (
    <div className="w-[300px] h-[400px] bg-white border-2 border-gray-100 flex flex-col shadow-lg rounded-xl overflow-hidden">
    <div className="relative">
      <div className="max-h-[255px] min-h-[255px] bg-gray-200 border-b flex items-center justify-center ">
        {project.images.slice(0, 1).map((imageName, index) => (
          <img
            key={index}
            src={`/ProjectsPhotos/${imageName}`}
            className="max-h-[255px] min-h-[255px] w-full object-cover"
            alt={project.title}
          />
        ))}
      </div>
      <div>
          <div
            className="border border-gray-300 bg-white px-2 py-1 rounded-full absolute top-5 left-3"
          >
            <span className="text-xs font-medium">{project.subtitle}</span>
          </div>
      </div>
    </div>

      <div className="p-4 bg-white">
        <h1 className="text-lg font-bold text-black line-clamp-1">
          {project.title}
        </h1>
      </div>

      <div className="flex p-3 gap-2 ">
        {project.category.slice(0, 2).map((cat, index) => (
          <div
            key={index}
            className="border border-gray-300 px-2 py-1 rounded-full"
          >
            <span className="text-xs font-medium">{cat}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
