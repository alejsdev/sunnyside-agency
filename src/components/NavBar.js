import React from "react";

const NavBar = () => {
  return (
    <nav>
        <img className="logo"
          src="https://res.cloudinary.com/dtkdsolsz/image/upload/v1646106940/frontend%20mentor%20challenge/logo_sbsbug.svg"
          alt=""
        />
      <ul>
        <li>About</li>
        <li>Services</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default NavBar;
