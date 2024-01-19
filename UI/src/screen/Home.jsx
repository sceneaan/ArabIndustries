import React from "react";

import MainMenu from "../components/MainMenu";
import Pagination from "../components/Pagination";
import SideBar from "../components/SideBar";

const Home = () => {
  return (
    <>
      <div className="flex h-screen bg-[#e8edff]">
        <SideBar />
        <MainMenu />
        <Pagination />
      </div>
    </>
  );
};

export default Home;
