import React, { useEffect, useRef } from "react";
import "./Projects.css";

function Projects() {
  const projectRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      },
      { threshold: 0.2 }
    );

    if (projectRef.current) observer.observe(projectRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container" ref={projectRef}>

        <div className="projects-header">
          <p>PROJECTS</p>
          <h2>Some Things I’ve Built</h2>
        </div>

        <div className="projects-grid">

        <div className="project-card">

  <div className="project-image">
    <img src="/prt.webp" alt="Project" />

    <div className="overlay">
      <h3>Portfolio Website</h3>

      <div className="overlay-links">
        <a
          href="https://github.com/yourusername/project"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>

        <a
          href="https://your-live-demo-link.com"
          target="_blank"
          rel="noreferrer"
          className="live"
        >
          Live Demo
        </a>
      </div>
    </div>
  </div>

  <p className="project-desc">
These projects reflect my journey in building responsive and user-friendly web applications.  </p>

</div>


<div className="project-card">

  <div className="project-image">
    <img src="/pht.jpg" alt="Project" />

    <div className="overlay">
      <h3>Photo Folio Website</h3>

      <div className="overlay-links">
        <a
          href="https://github.com/yourusername/project"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>

        <a
          href="https://your-live-demo-link.com"
          target="_blank"
          rel="noreferrer"
          className="live"
        >
          Live Demo
        </a>
      </div>
    </div>
  </div>

  <p className="project-desc">
A curated collection of photographs highlighting my visual perspective. </p>

</div>


<div className="project-card">

  <div className="project-image">
    <img src="/mntr.jpg" alt="Project" />

    <div className="overlay">
      <h3>Mentor Website</h3>

      <div className="overlay-links">
        <a
          href="https://github.com/yourusername/project"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>

        <a
          href="https://your-live-demo-link.com"
          target="_blank"
          rel="noreferrer"
          className="live"
        >
          Live Demo
        </a>
      </div>
    </div>
  </div>

  <p className="project-desc">
A mentor website project created to practice structured layouts and professional UI design.  </p>

</div>

<div className="project-card">

  <div className="project-image">
    <img src="/cnsult.jpg" alt="Project" />

    <div className="overlay">
      <h3>Consulting Website</h3>

      <div className="overlay-links">
        <a
          href="https://github.com/yourusername/project"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>

        <a
          href="https://your-live-demo-link.com"
          target="_blank"
          rel="noreferrer"
          className="live"
        >
          Live Demo
        </a>
      </div>
    </div>
  </div>

  <p className="project-desc">
A professional consulting platform showcasing services and business solutions.  </p>

</div>


<div className="project-card">

  <div className="project-image">
    <img src="/zaitoon.jpg" alt="Project" />

    <div className="overlay">
      <h3>Zaitoon Restaurant Website</h3>

      <div className="overlay-links">
        <a
          href="https://github.com/yourusername/project"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>

        <a
          href="https://your-live-demo-link.com"
          target="_blank"
          rel="noreferrer"
          className="live"
        >
          Live Demo
        </a>
      </div>
    </div>
  </div>

  <p className="project-desc">
A responsive restaurant website highlighting food, menu, and customer experience.  </p>

</div>


<div className="project-card">

  <div className="project-image">
    <img src="/perfume.avif" alt="Project" />

    <div className="overlay">
      <h3>Axeo Perume Website</h3>

      <div className="overlay-links">
        <a
          href="https://github.com/yourusername/project"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>

        <a
          href="https://your-live-demo-link.com"
          target="_blank"
          rel="noreferrer"
          className="live"
        >
          Live Demo
        </a>
      </div>
    </div>
  </div>

  <p className="project-desc">
A modern perfume product website showcasing fragrances with a premium look.  </p>

</div>



        </div>
      </div>
    </section>
  );
}

export default Projects;
