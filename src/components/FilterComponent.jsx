import React from "react";

export default function FilterComponent({ onSort }) {
  // prevent the page from reload
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // Handle sorting when the user selects an option
  const handleSortChange = (e) => {
    const selectedOrder = e.target.value; // "A-Z" or "Z-A"
    if (onSort) {
      onSort(selectedOrder); // Call the onSort function passed from the parent
    }
  };

  return (
    <form className="mt-4 mx-4 flex justify-between" onSubmit={handleSubmit}>
      <div className="relative w-full ">
        <select
          id="filterLearningMaterials"
          name="filterLearningMaterials"
          className="text-sm focus:ring-custom-sky-blue focus:border-custom-sky-blue block w-full p-4 focus:outline-none text-gray-400 border-none rounded-xl bg-light-gray"
          onChange={handleSortChange} // Trigger sorting when the selection changes
        >
          <option hidden value="">
            Sort By
          </option>
          <optgroup label="Sort By">
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
          </optgroup>
        </select>
      </div>
    </form>
  );
}