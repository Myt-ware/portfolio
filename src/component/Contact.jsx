import React, { useEffect, useRef } from "react";
import "./Contact.css";
import { FaWhatsapp } from "react-icons/fa";

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
    <>
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
            <textarea
              placeholder="Your Message"
              rows="5"
              required
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <a
  href="https://wa.me/919633607957?text=Hi%20Yaseen%20👋%0AI%20viewed%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project%20with%20you.%20🙂"
  className="whatsapp-float"
  target="_blank"
  rel="noreferrer"
>
  <FaWhatsapp size={29} />
</a>

    </>
  );
}

export default Contact;
