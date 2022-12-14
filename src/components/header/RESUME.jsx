import React from "react";
import AR_RESUME from "../../assets/Andrew Ryu Resume.pdf";

const RESUME = () => {
    return (
        <div className="resume">
            <a href={AR_RESUME} download className="btn">
                Download Resume
            </a>
            <a href="#contact" className="btn">
                Contact me
            </a>
        </div>
    );
};

export default RESUME;
