import React, { useEffect, useRef } from "react";
import "./Contact.css";

function Contact() {
  const contactRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      },
      { threshold: 0.2 }
    );

    if (contactRef.current) observer.observe(contactRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="contact-section" id="contact">
            <div className="contact-container" ref={contactRef}>
      <h2 className="contact-title">Contact Me</h2>
      <p className="contact-subtitle">
        Let’s connect and build something meaningful together.
      </p>

      <div className="contact-box">
        <div className="contact-item">
          <span>Email</span>
          <p>yaseenvlkr@gmail.com</p>
        </div>

        <div className="contact-item">
          <span>Phone</span>
          <p>+91 9633607957</p>
        </div>

        <div className="contact-item">
          <span>Location</span>
          <p>India</p>
        </div>
      </div>

      <div className="linkedin-box">
        <a
          href="https://www.linkedin.com/in/yaseen-md"
          target="_blank"
          rel="noreferrer"
        >
          Connect on LinkedIn
        </a>
      </div>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>
      </div>
    </section>
  );
}

export default Contact;
