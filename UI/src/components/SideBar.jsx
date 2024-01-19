import React, { useState } from "react";
import SidebarButton from "./SideBarButtons";
import { useSelector, useDispatch } from "react-redux";
import { setSideBar } from "../store/slices/dashboardSlice";
const SideBar = () => {
  const { sidebarOpen } = useSelector((state) => state.dashboardSlice);

  const [activeButton, setActiveButton] = useState("Dashboard");

  const dispatch = useDispatch();

  const handleButtonClick = (text) => {
    setActiveButton(text);
    dispatch(setSideBar(!sidebarOpen));
  };

  return (
    <>
      {/* Sidebar */}
      <div
        className={` inset-0 bg-gray-900  lg:flex lg:w-64 ${
          sidebarOpen ? "bg-gray-900 z-20 fixed" : "hidden"
        } p-4 flex flex-col justify-between h-screen`}
      >
        <div className="flex flex-col items-center mb-5 mt-5">
          <img
            className="h-16 w-16 object-cover mb-2 rounded-full"
            src="/src/assets/Briefcase.png"
            alt="Logo"
          />
          <h2 className={`text-white text-sm font-bold`}>STATEBOARD</h2>
        </div>

        {/* Sidebar Buttons */}
        <div className="flex flex-col-reverse">
          <SidebarButton
            text="Help"
            logoSrc="/src/assets/Help.png"
            isActive={activeButton === "Help"}
            onClick={() => handleButtonClick("Help")}
          />
          <SidebarButton
            text="Plugins"
            logoSrc="/src/assets/Puzzle.png"
            isActive={activeButton === "Plugins"}
            onClick={() => handleButtonClick("Plugins")}
          />
          <SidebarButton
            text="Support"
            logoSrc="/src/assets/Support.png"
            isActive={activeButton === "Support"}
            onClick={() => handleButtonClick("Support")}
          />
          <SidebarButton
            text="Dashboard"
            logoSrc="/src/assets/Circled Menu.png"
            isActive={activeButton === "Dashboard"}
            onClick={() => handleButtonClick("Dashboard")}
          />
        </div>

        {/* Logout Button */}
        <button
          className={`w-full h-10 ${
            sidebarOpen ? "bg-gray-200" : "bg-white"
          } py-2 px-4 text-orange-500 hover:bg-gray-100 flex items-center justify-center rounded`}
          onClick={() => {
            handleButtonClick("Logout");
          }}
        >
          Logout
          <img
            className="h-4 w-4 object-cover ml-2 rounded-full"
            src="/src/assets/Shutdown.png"
            alt="Logout Icon"
          />
        </button>
      </div>
    </>
  );
};

export default SideBar;
