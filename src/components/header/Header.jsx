import React from "react";
import "./header.css";
import RESUME from "./RESUME";
import Pic from "../../assets/pic.JPG";
import HeaderSocial from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h2>Hello I'm</h2>
        <h1>Andrew Ryu</h1>
        <h3 className="text-light">Frontend Developer</h3>
        <RESUME />
        <HeaderSocial />

        <div className="me">
          <img src={Pic} alt="profile pic" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
