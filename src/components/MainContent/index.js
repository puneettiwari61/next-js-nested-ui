"use client";

import React from "react";
import Subsection from "../Subsection";

const MainContent = ({ selectedMenuItem }) => {
  const randomId = () =>
    Math.random().toString(36).substring(2, 10) +
    Math.random().toString(36).substring(2, 10);
  const mainContent = {
    0: [
      { subsection: "Subsection 1", id: randomId() },
      { subsection: "Subsection 2", id: randomId() },
      { subsection: "Subsection 3", id: randomId() },
    ],
    1: [
      { subsection: "Subsection 1", id: randomId() },
      { subsection: "Subsection 2", id: randomId() },
      { subsection: "Subsection 3", id: randomId() },
    ],
    2: [
      { subsection: "Subsection 1", id: randomId() },
      { subsection: "Subsection 2", id: randomId() },
      { subsection: "Subsection 3", id: randomId() },
    ],
  };
  return (
    <div className="w-[65%]">
      <div className="w-full">
        <h1 className="text-white font-bold capitalize">
          Menu Item {selectedMenuItem + 1}
        </h1>
        {mainContent[selectedMenuItem].map((data, index) => {
          return (
            <Subsection
              key={data.id}
              data={data?.subsection}
              selectedMenuItem={selectedMenuItem}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MainContent;
