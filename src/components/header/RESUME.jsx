import React from "react";
import AR_RESUME from "../../assets/ar_resume.pdf";

const RESUME = () => {
  return (
    <div className="resume">
      <a href={AR_RESUME} download className="btn">
        Download Resume
      </a>
      <a href="#contact" className="btn btn-primary">
        Contact me
      </a>
    </div>
  );
};

export default RESUME;
