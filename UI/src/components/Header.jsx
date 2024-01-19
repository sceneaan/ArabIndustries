import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSideBar } from "../store/slices/dashboardSlice";

const Header = () => {
  const dispatch = useDispatch();
  const { sidebarOpen } = useSelector((state) => state.dashboardSlice);
  const toggleSidebar = () => {
    console.log("sidebarOpen", sidebarOpen);
    dispatch(setSideBar(!sidebarOpen));
  };
  return (
    <div className="flex justify-between items-center mb-4   ">
      {/* Hamburger Button for Small Screens */}
      <button
        className="lg:hidden fixed z-30 top-4 left-4 text-gray-600"
        onClick={toggleSidebar}
      >
        {sidebarOpen ? "X" : "☰"}
      </button>
      <div className="fixed top-0 z-10 bg-white md:bg-transparent left-0 md:static md:relative flex justify-between items-center w-full ">
        {/* Left side  */}
        <div className="flex ml-12 md:ml-0  items-center">
          <p className="text-lg font-semibold mr-2">Good Morning !</p>
          <img
            className="h-6 w-6 object-cover rounded-full"
            src="/src/assets/sun.png"
            alt="Sun Logo"
          />
        </div>

        {/* Right side  */}
        <div className="flex items-center bg-white p-3 rounded-lg">
          <div className="mr-4">
            <h3 className="text-md  font-semibold">john doe</h3>
            <p className="text-xs text-right ">John@doe.com</p>
          </div>
          <img
            className="h-8 w-8 object-cover "
            src="/src/assets/Rectangle 10.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
