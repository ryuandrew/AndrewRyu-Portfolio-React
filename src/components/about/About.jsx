import React from "react";
import "./about.css";
import Aboutme from "../../assets/about_me.jpg";
import { FaAward } from "react-icons/fa";
// import { VscFolderOpened } from "react-icons/vsc";

const About = () => {
    const aboutMe =
        "The best part about being a Software Engineer is that it lets me use my critical thinking and problem-solving skills, and can allow me to have a positive impact on many lives. Even as an Actuarial Analyst, complex analyses and problem-solving skills were heavily used by me. These transferable skills grant me greater confidence while making this career switch. \n\n I took to software engineering instantly and was quickly inspired to pursue the subject with greater seriousness and commitment. I graduated from the University of Washington Full Stack Coding Bootcamp. Right now, I'd be happy with a role that lets me get my foot in the door and grow as a Developer. Later down the line, I'd love to find stability and recognition in the field. \n\n In previous roles, my work involved calculating renewing groups' premium increases for use in budgeting and outlook projections. I also worked with third-party companies to resolve any claim discrepancies related to Covid-19, which helped the company retrieve $2.7m. While I was good at my job, I wasn't passionate about the work, and talking about my job never excited me. \n\n My strongest technical skills include HTML, CSS, JS, NodeJS, ExpressJS, MySQL, and SQL. I'm also great at Math. I'm known to be detail-oriented, accurate, an efficient communicator and networker, disciplined, and always up for a challenge. My positive mindset, adaptability, and collaboration skills allow me to be a helpful and contributing asset to any team. Outside of work, I enjoy singing, being a DJ, and indulging in sports like boxing, HIIT workout, and skiing.";

    function replaceWithBr() {
        return aboutMe.replace(/\n/g, "<br />");
    }
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
                    <p dangerouslySetInnerHTML={{ __html: replaceWithBr() }} />

                    <a href="#contact" className="btn btn-primary">
                        Let's Talk
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;
