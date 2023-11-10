"use client";

import React from "react";

const Sidebar = ({ setSelectedMenuItem, selectedMenuItem }) => {
  const mainContent = ["Menu Item 1", "Menu Item 2", "Menu Item 3"];
  return (
    <div className="sidebar flex justify-center items-center flex-col h-full w-[30%] bg-[#142A43] rounded-lg">
      {mainContent.map((data, index) => {
        return (
          <span
            className={`text-white cursor-pointer px-4 py-2 text-lg ${
              index === selectedMenuItem ? "underline" : null
            }`}
            onClick={() => setSelectedMenuItem(index)}
            key={index}
          >
            {data}
          </span>
        );
      })}
    </div>
  );
};

export default Sidebar;
