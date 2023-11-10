"use client";
import React, { useState } from "react";
import Sidebar from "../Sidebar.js";
import MainContent from "../MainContent/index.js";

const Dashboard = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState(0);
  return (
    <div className="flex flex-col justify-center items-center mx-auto my-auto h-[100vh] w-full md:w-[50%] overflow-scroll">
      <div className="flex items-center bg-[#061E34] min-h-full md:min-h-[40%] w-full rounded-lg gap-2">
        <Sidebar
          setSelectedMenuItem={setSelectedMenuItem}
          selectedMenuItem={selectedMenuItem}
        />
        <MainContent selectedMenuItem={selectedMenuItem} />
      </div>
    </div>
  );
};

export default Dashboard;
