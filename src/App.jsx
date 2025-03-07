import React, { useState } from "react";
import "./App.css";
import DashboardComponent from './components/DashboardComponent';
import TopNavbarComponent from './components/TopNavbarComponent';
import SidebarComponent from './components/SidebarComponent';
import LearningMaterialsComponent from './components/LearningMaterialsComponent';

function App() {
  const [search, setSearch] = useState('');
  // This function will update the search (handle search)
  const handleSearch = (s) => {
    setSearch(s);
  };

  return (
    <>
      <div className="flex h-screen">
        <div className="w-1/4 bg-gray-800">
          <SidebarComponent />
        </div>
        <div className="flex-1 flex flex-col">
          <div className="flex-none">
            <TopNavbarComponent handleSearch={handleSearch} />
          </div>
          <div className="w-full flex-1 p-3">
            <div className="flex">
              <div className="flex-1">
                <DashboardComponent searchTerm={search} />
              </div>
              <div className="flex">
                <LearningMaterialsComponent />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
