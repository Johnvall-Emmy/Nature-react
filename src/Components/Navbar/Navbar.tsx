import React from "react";
import "./Navbar.css";
import logo from "./../../assets/logo.png";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar-section-div">
        <div>
          <img src={logo} />
        </div>
        <ul className="navbar-link-display">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
          <li>
            <button>202-555-0188</button>
          </li>
        </ul>
      </nav>
      <div className="menu">&#9776;</div>
    </div>
  );
};

export default Navbar;
