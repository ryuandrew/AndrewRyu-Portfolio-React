import React from "react";
import "./about.css";
import Aboutme from "../../assets/about_me.jpg";
import { FaAward } from "react-icons/fa";
// import { VscFolderOpened } from "react-icons/vsc";

const About = () => {
    const aboutMe =
        "The best part about being an Actuarial Analyst is that it lets me use my critical thinking and problem-solving skills, and can allow me to have a positive impact on many lives. From my previous roles as an Actuarial Analyst, complex analyses and problem-solving skills were heavily used by me. These skills grant me greater confidence while expanding my knowledge in both tech and insurance industries. \n\n I had the opportunity to learn something new and I took to software engineering instantly. I was quickly inspired to pursue the subject with greater seriousness and commitment. I graduated from the University of Washington Coding Bootcamp and earned a Full Stack Web Development Certificate. Now, I’m ready to get back into the insurance industry and continue focusing on applying my skills to improve the healthcare system work better for everyone to live healthier lives. \n\n In previous roles, my work involved trend analysis, calculating renewing groups' premium increases for use in budgeting and outlook projections, and producing analytical reports that monitor claims utilization, membership, and revenue. I also worked with third-party companies to resolve any claim discrepancies related to Covid-19, which helped the company retrieve $2.7m. \n\n My strongest technical skills include Expert Level Excel, SQL, VBA, MySQL, JavaScript, HTML, CSS, NodeJS, ExpressJS, and ReactJS. I’m also great at Math. I’m known to be detail-oriented, accurate, an efficient communicator and networker, disciplined, and always up for a challenge. My positive mindset, adaptability, and collaboration skills allow me to be a helpful and contributing asset to any team. \n\n Outside of work, I enjoy singing, being a DJ, and indulging in sports like boxing, HIIT workout, and skiing.";

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
