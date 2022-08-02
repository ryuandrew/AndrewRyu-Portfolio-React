import React from "react";
import "./header.css";
import RESUME from "./RESUME";
import Pic from "../../assets/pic.JPG";
import HeaderSocial from "./HeaderSocials";

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h3>Hello I'm</h3>
                <h1>Andrew Ryu</h1>
                <h4 className="text-light">
                    Actively Looking For Full Stack Engineer Positions
                </h4>
                <RESUME />
                <HeaderSocial />

                <div className="me">
                    <img src={Pic} alt="profile pic" />
                </div>

                {/* <a href="#contact" className="scroll__down">
          Scroll Down
        </a> */}
            </div>
        </header>
    );
};

export default Header;
