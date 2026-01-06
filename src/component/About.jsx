import React, { useEffect, useRef } from "react";
import "./About.css";
import Main from "./Main";



function About() {
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      },
      { threshold: 0.3 }
    );

    if (aboutRef.current) observer.observe(aboutRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <>
    <section className="about-section" id="about">
      <div className="about-container" ref={aboutRef}>

        {/* LEFT IMAGE */}
        <div className="about-image">
          <img
            src="src/public/yaseen.jpeg"
            alt="about"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="about-content">
          <p className="about-tag">ABOUT ME</p>

          <h2>
            Passionate <span>MERN Stack Developer</span> building
            modern, scalable web experiences
          </h2>

          <p>
            I’m <strong>محمد یاسین (Muhammed Yaseen)</strong>, a MERN Stack
            Developer focused on creating clean, efficient, and
            user-friendly web applications. I enjoy turning complex
            problems into elegant digital solutions.
          </p>

          <p>
            My expertise includes building responsive front-end
            interfaces using <strong>React</strong>, developing secure
            back-end systems with <strong>Node.js & Express</strong>,
            and managing databases using <strong>MongoDB</strong>.
          </p>

          <div className="about-stats">
            <div>
              <h3>10+</h3>
              <span>Projects</span>
            </div>
            <div>
              <h3>MERN</h3>
              <span>Tech Stack</span>
            </div>
            <div>
              <h3>Clean</h3>
              <span>Code Focus</span>
            </div>
          </div>
        </div>

      </div>
    </section>
    </>
  );
}

export default About;
