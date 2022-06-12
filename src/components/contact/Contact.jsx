import React from "react";
import "./contact.css";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          {/* email */}
          <article className="contact__option">
            <HiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>andrewryu@outlook.com</h5>
            <a href="mailto:andrewryu@outlook.com" target="_blank">
              Send a message
            </a>
          </article>
          {/* phone */}
          <article className="contact__option">
            <FiPhoneCall className="contact__option-icon" />
            <h4>Phone</h4>
            <h5>206-612-8176</h5>
            <a href="tel:206-612-8176" target="_blank">
              Call Me
            </a>
          </article>
        </div>
        {/* <form action="">
          <input type="text" name="name" placholder="Your Full Name" required />
          <input type="email" name="name" placholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form> */}
      </div>
    </section>
  );
};

export default Contact;
