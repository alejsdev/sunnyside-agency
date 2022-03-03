import React from "react";
import NavBar from "./NavBar";

const FirstSection = () => {
  return (
    <header>
      <NavBar />
      <h1>WE ARE CREATIVES</h1>
      <div className="container-arrow">
        <svg
          className="arrow-down"
          width="36"
          height="114"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            stroke="#FFF"
            stroke-width="6"
            fill="none"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M18 3v100M3 95.484l15 15 15-15" />
          </g>
        </svg>
      </div>
    </header>
  );
};

export default FirstSection;
