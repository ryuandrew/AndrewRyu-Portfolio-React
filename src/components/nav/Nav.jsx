import React from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { BiUser, BiBook } from "react-icons/bi";
import { RiMessage2Line } from "react-icons/ri";

const Nav = () => {
  return (
    <nav>
      <a href="#">
        <AiOutlineHome />
      </a>
      <a href="#about">
        <BiUser />
      </a>
      <a href="#experience">
        <BiBook />
      </a>
      <a href="#contact">
        <RiMessage2Line />
      </a>
      {/* <a href="#footer"><AiOutlineHome /></a> */}
    </nav>
  );
};

export default Nav;
