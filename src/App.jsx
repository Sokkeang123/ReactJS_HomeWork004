import { Sidebar } from "lucide-react";
import "./App.css";
import DashboardComponent from './components/DashboardComponent'
import TopNavbarComponent from './components/TopNavbarComponent'
import SidebarComponent from './components/SidebarComponent'
import LearningMaterialsComponent from './components/LearningMaterialsComponent'

function App() {
  return (
    <>
      {/* <DashboardComponent/> */}
      <div className="flex h-screen">
      {/* Sidebar on the left */}
      <div className="w-1/4 bg-gray-800">
        <SidebarComponent />
      </div>
      {/* Main content on the right */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <div className="flex-none">
          <TopNavbarComponent />
        </div>
        {/* Main content area */}
        <div className="w-full flex-1 p-3">
            <div className="flex">
              <div className="flex-1">
                <DashboardComponent />
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