import React from "react";
import "./about.css";
import Aboutme from "../../assets/about_me.jpg";
import { FaAward } from "react-icons/fa";
import { VscFolderOpened } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Aboutme} alt="about img" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>UW Coding Bootcamp</small>
            </article>

            <article className="about__card">
              <VscFolderOpened className="about__icon" />
              <h5>Projects</h5>
              <small>projects</small>
            </article>
          </div>
          <p>
            Andrew Ryu is an entry level web developer who is well-rounded and
            experienced in complex analyses and problem solving in high pressure
            work environments. He is an effective communicator and has a solid
            background in mathematics and statistics. He is excited to apply the
            quantitative skills he learned from working as an actuarial analyst
            and continue to learn new programming languages to do more critical
            thinking and problem solving as a web developer. Outside of work, he
            enjoys singing and playing sports, such as boxing, HIIT workout, and
            skiing.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
