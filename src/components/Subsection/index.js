"use client";
import React, { memo, useState } from "react";

const Subsection = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-[#142A43] px-4 py-2 my-2 overflow-scroll">
      <div
        className="flex justify-between cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-white">{data}</h2>
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="white"
            className="cursor-pointer"
          >
            <path d="M12 9l6 6H6z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="cursor-pointer"
            fill="white"
          >
            <path d="M12 15l-6-6h12z" />
          </svg>
        )}
      </div>
      {isOpen ? (
        <div className="text-gray-400 text-sm">
          Lorem ipsum dolor sit amet, consectet null a, sed diam nonum vul tell
          tellus lore tellus lore Lorem ipsum dolor sit amet, consectet null a.
        </div>
      ) : null}
    </div>
  );
};

export default memo(Subsection);
