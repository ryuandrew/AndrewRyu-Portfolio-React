import React from "react";
import "./about.css";
import Aboutme from "../../assets/about_me.jpg";
import { FaAward } from "react-icons/fa";
// import { VscFolderOpened } from "react-icons/vsc";

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
                            <small>
                                University of Washington Full Stack Web
                                Development Certificate
                            </small>
                        </article>

                        {/* <article className="about__card">
                            <VscFolderOpened className="about__icon" />
                            <h5>Projects</h5>
                            <small>projects</small>
                        </article> */}
                    </div>
                    <p>
                        I'm a Full-Stack Web Developer specializing in Frontend
                        Development. Well-rounded and experienced in complex
                        analyses and problem solving in high pressure work
                        environments. Effective communicator with a strong
                        background in mathematics and statistics. With the
                        quantitative skills gained as an Actuarial Analyst, I'm
                        excited to contribute to my growth as a Web
                        Developer(JavaScript/React.js) and continue to learn new
                        programming languages and apply critical thinking
                        skills. Outside of work, I enjoy singing, dj'ing, and
                        playing sports, such as boxing, HIIT workout, and
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
