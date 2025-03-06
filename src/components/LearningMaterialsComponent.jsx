import React, { useState } from "react";
import { Star } from "lucide-react"; // Import the Star icon
import FilterComponent from "./FilterComponent";
import { learningMaterials as initialLearningMaterials } from "../data/learningMaterials";

export default function LearningMaterialsComponent() {
  // Create state
  const [learningMaterials, setLearningMaterials] = useState([...initialLearningMaterials]);

  // Function to toggle favorite status
  const toggleFavorite = (id) => {
    const updatedMaterials = learningMaterials.map((item) =>
      item.id === id ? { ...item, isFavorite: !item.isFavorite } : item
    );
    setLearningMaterials(updatedMaterials);
  };

  // Function to handle sorting
  const handleSort = (order) => {
    const sortedMaterials = [...learningMaterials].sort((a, b) => {
      if (order === "A-Z") {
        return a.title.localeCompare(b.title); // A-Z
      } else if (order === "Z-A") {
        return b.title.localeCompare(a.title); // Z-A
      }
      return 0; // No sorting
    });
    setLearningMaterials(sortedMaterials);
  };

  return (
    <div className="bg-white drop-shadow-lg rounded-2xl overflow-auto h-[80vh]">
      {/* Pass handleSort as a prop to FilterComponent */}
      <FilterComponent onSort={handleSort} />

      {/* title */}
      <div className="p-4 flex justify-between items-center">
        <h2 className="text-xl font-semibold">Learning Materials</h2>
        <img src="/more.svg" alt="three dot" width={30} height={30} />
      </div>

      {/* materials list */}
      <div className="space-y-3">
        {learningMaterials.map((item) => (
          <div
            key={item.id}
            className="bg-light-gray px-4 py-2 flex gap-5 items-center"
          >
            <img
              src={item.image}
              alt={item.title}
              width={50}
              height={50}
              className="rounded-xl"
            />
            <div className="w-full">
              <div className="flex justify-between">
                <p className="text-base font-medium">{item.title}</p>
                {/* Display a filled or unfilled star based on favorite status */}
                <button
                  onClick={() => toggleFavorite(item.id)}
                  className="focus:outline-none"
                >
                  {item.isFavorite ? (
                    <Star size={20} color="gold" fill="gold" /> // Filled star
                  ) : (
                    <Star size={20} color="gray" /> // Unfilled star
                  )}
                </button>
              </div>
              <p className="text-gray-400 text-sm">Posted at: {item.postedAt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}