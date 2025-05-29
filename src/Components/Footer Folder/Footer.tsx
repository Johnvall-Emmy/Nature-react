import React from "react";
import logogreen from "./../../assets/logo-green.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <section>
        <div className="footer-now">
          <ul className="footer-link-display">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>

          <div className="footer-logo">
            <img src={logogreen} alt="" />
          </div>
          <h4>Love Nature by Tyler Moore</h4>
        </div>
      </section>
    </div>
  );
};

export default Footer;
