import React, { useEffect, useRef, useState } from "react";
import "./Hero.css";
import Main from "./Main";
import About from "./About";
import Projects from "./Projects";


function Hero() {
  const heroRef = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
        }
      },
      { threshold: 0.3 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
    <section className="hero-section" ref={heroRef}>
      <div className="hero-container">

        {/* LEFT */}
        <div className={`hero-left ${show ? "show" : ""}`}>
          <p className="hero-hi">Hi there!</p>

          <h1 className="hero-title">
            I’m <span>MUHAMMED YASEEN</span> <br />
            Mern Stack <br />
            Web Developer
          </h1>

          <p className="hero-desc">
            I am a MERN Stack Developer passionate about building scalable, high-performance web applications with clean user interfaces and robust backend systems..
          </p>

          <button className="hero-btn">MORE ABOUT ME</button>
        </div>

        {/* RIGHT */}
        <div className={`hero-right ${show ? "show" : ""}`}>
          <img className="primage"
            src="src/assets/Untitled design.png"
            alt="profile"
          />
        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <span></span>
      </div>
    </section>

    <About/>
    <Projects/>
    

    </>
  );
}

export default Hero;
