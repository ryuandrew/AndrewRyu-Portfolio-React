import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";

function HeaderSocials() {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/ryuandrew/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/ryuandrew" target="_blank">
        <BsGithub />
      </a>
    </div>
  );
}

export default HeaderSocials;
