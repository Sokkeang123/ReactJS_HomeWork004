import React, { useState } from "react";
import { dashboard } from "../data/dashboard";
import AddNewProjectComponent from "./AddNewProjectComponent";
import AssignmentsComponent from "./AssignmentsComponent";

export default function DashboardComponent({ searchTerm }) {
  const [projects, setProjects] = useState([]);
  const handleCreateProject = (newProject) => {
    setProjects((prevProjects) => [...prevProjects, newProject]);
  };
  const filteredProjects = projects.filter((project) =>
    project.projectName.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div>
      <h2 className="text-xl font-semibold mb-5">Dashboard</h2>
      <div className="flex gap-5 position-absolute flex-wrap">
        {dashboard.map((item) => (
          <div key={item.id} className="flex bg-white gap-5 py-3.5 px-4 rounded-xl w-auto">
            <div className={`p-3 rounded-xl ${item.color}`}>
              <img src={item.icon} alt={item.label} />
            </div>
            <div>
              <p className="text-xl font-semibold">{item.totalTasks}</p>
              <p className="text-gray-400">{item.label}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-between items-center">
        <h2 className="text-xl font-semibold mb-5">Assignments</h2>
        <AddNewProjectComponent onCreateProject={handleCreateProject} />
      </div>

      <div className="mt-10">
        <AssignmentsComponent projects={filteredProjects} search={searchTerm} />
      </div>
    </div>
  );
}
