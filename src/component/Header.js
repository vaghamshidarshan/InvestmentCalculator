import React from "react";
import "./Header.css";
import LogoImage from "../assets/investment-calculator-logo.png";

export default function Header() {
  return (
    <>
      <header className="header">
        <img className="imagelogo" src={LogoImage} alt="logoImages" />
        <h2 className="header_hading">Investment Calculator</h2>
      </header>
    </>
  );
}
