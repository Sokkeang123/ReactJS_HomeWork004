import React from "react";
import CardComponent from "./CardComponent"; // Assuming CardComponent is used to render the project card

export default function AssignmentsComponent({ projects }) {
  return (
    <div>
      {/* <h2 className="text-xl font-semibold mb-5">Assignments</h2> */}
      {/* Grid layout with 3 cards per row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {projects.map((project) => (
          <div key={project.id}>
            <CardComponent project={project} />
          </div>
        ))}
      </div>
    </div>
  );
}

