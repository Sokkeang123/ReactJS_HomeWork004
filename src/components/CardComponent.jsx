import React from "react";

export default function CardComponent({ project }) {
  // Determine the progress color based on the project's progress
  let progressColor = "bg-pink-200"; // Default color for upcoming projects

  if (project.progress === "100") {
    progressColor = "bg-cyan-400"; // Completed projects
  } else if (project.progress >= "50") {
    progressColor = "bg-yellow-200"; // In progress projects
  } else if (project.progress <= "25") {
    progressColor = "bg-yellow-500"; // Upcoming projects
  }
  // const filterData = projects.filter((data) => data.projectName.toLowerCase().includes(search.toLowerCase()))


  return (
    <div className="max-w-sm p-6 bg-white rounded-2xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <div className="flex justify-between mb-5">
        <p className="text-custom-sky-blue font-medium">{project.dueDate}</p>
      </div>

      <h5 className="capitalize mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
        {project.projectName}
      </h5>
      <p className="line-clamp-2 mb-3 font-normal text-justify text-gray-400 dark:text-gray-400">
        {project.description}
      </p>

      <div className="w-full flex justify-between font-medium mb-1">
        <p>Progress</p>
        <p>{project.progress}%</p>
      </div>

      <div className="relative mb-5 w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div
          className={`${progressColor} h-2.5 rounded-full`}
          style={{ width: `${project.progress}%` }}
        ></div>
      </div>

      <div className="flex justify-end">
        <p className="font-medium bg-light-gray py-1.5 px-4 rounded-lg max-w-28 text-center">
          {project.progress === "100"
            ? "Completed"
            : `${project.progress}% Left`}
        </p>
      </div>
    </div>
  );
}
