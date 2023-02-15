import React from "react";
import "./experience.css";
import { AiFillCheckCircle } from "react-icons/ai";

const Experience = () => {
    return (
        <section id="experience">
            <h5>What Skills I Have</h5>
            <h2>My Experience</h2>

            <div className="container experience__container">
                {/* frontend */}
                <div className="experience__frontend">
                    <h3>Actuarial Exams</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <AiFillCheckCircle className="experience__details-icon" />
                            <div>
                                <h4>P</h4>
                                <small className="text-light"></small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <AiFillCheckCircle className="experience__details-icon" />
                            <div>
                                <h4>VEE Economics</h4>
                                <small className="text-light"></small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <AiFillCheckCircle className="experience__details-icon" />
                            <div>
                                <h4>FM</h4>
                                <small className="text-light"></small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <AiFillCheckCircle className="experience__details-icon" />
                            <div>
                                <h4>VEE Mathematical Statistics</h4>
                                <small className="text-light"></small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <AiFillCheckCircle className="experience__details-icon" />
                            <div>
                                <h4>SRM</h4>
                                <small className="text-light"></small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <AiFillCheckCircle className="experience__details-icon" />
                            <div>
                                <h4>VEE Accounting and Finance</h4>
                                <small className="text-light"></small>
                            </div>
                        </article>
                    </div>
                </div>
                {/* frontend */}
                <div className="experience__frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <AiFillCheckCircle className="experience__details-icon" />
                            <div>
                                <h4>React JS</h4>
                                <small className="text-light"></small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <AiFillCheckCircle className="experience__details-icon" />
                            <div>
                                <h4>JavaScript</h4>
                                <small className="text-light"></small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <AiFillCheckCircle className="experience__details-icon" />
                            <div>
                                <h4>HTML</h4>
                                <small className="text-light"></small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <AiFillCheckCircle className="experience__details-icon" />
                            <div>
                                <h4>CSS</h4>
                                <small className="text-light"></small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <AiFillCheckCircle className="experience__details-icon" />
                            <div>
                                <h4>JQuery</h4>
                                <small className="text-light"></small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <AiFillCheckCircle className="experience__details-icon" />
                            <div>
                                <h4>Bootstrap</h4>
                                <small className="text-light"></small>
                            </div>
                        </article>
                    </div>
                </div>
                {/* backend */}
                <div className="experience__backend">
                    <h3>Backend Development</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <AiFillCheckCircle className="experience__details-icon" />
                            <h4>Node.js</h4>
                            <small className="text-light"></small>
                        </article>
                        <article className="experience__details">
                            <AiFillCheckCircle className="experience__details-icon" />
                            <h4>Express.js</h4>
                            <small className="text-light"></small>
                        </article>
                        <article className="experience__details">
                            <AiFillCheckCircle className="experience__details-icon" />
                            <h4>MySQL</h4>
                            <small className="text-light"></small>
                        </article>
                        <article className="experience__details">
                            <AiFillCheckCircle className="experience__details-icon" />
                            <h4>MongoDB</h4>
                            <small className="text-light"></small>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
