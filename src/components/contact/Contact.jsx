import React, { useRef } from "react";
import "./contact.css";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                "service_c73h7r6",
                "template_xrbnrdn",
                form.current,
                "IHUzE_KwGrBZtMi7h"
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
        e.target.reset();
    };
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
                        <a
                            href="mailto:andrewryu@outlook.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Send a message
                        </a>
                    </article>
                    {/* phone */}
                    <article className="contact__option">
                        <FiPhoneCall className="contact__option-icon" />
                        <h4>Phone</h4>
                        <h5>206-612-8176</h5>
                        <a
                            href="tel:206-612-8176"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Call Me
                        </a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Full Name"
                        required
                    />
                    <input
                        type="email"
                        name="name"
                        placeholder="Your Email"
                        required
                    />
                    <textarea
                        name="message"
                        rows="7"
                        placeholder="Your Message"
                        required
                    ></textarea>
                    <button type="submit" className="btn btn-primary">
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
