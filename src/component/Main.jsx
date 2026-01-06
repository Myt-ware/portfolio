import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Main() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 } // 60% visible
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar fixed="top" expand="lg" className="custom-navbar">
        <Container fluid className="px-5">
          <Navbar.Brand href="#home" className="logo">
            <img
              src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/themes/2152935246/settings_images/f73a33a-70d5-c5bd-357-36217133de80_9e82ffee-3bc1-4c2f-8162-b2085233b3fc.png"
              alt="Logo"
              height="40"
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto nav-right">
              <Nav.Link
                href="#home"
                className={active === "home" ? "active-link" : ""}
              >
                HOME
              </Nav.Link>

              <Nav.Link
                href="#about"
                className={active === "about" ? "active-link" : ""}
              >
                ABOUT
              </Nav.Link>

              <Nav.Link
                href="#projects"
                className={active === "projects" ? "active-link" : ""}
              >
                PROJECTS
              </Nav.Link>

              <Nav.Link
                href="#contact"
                className={active === "contact" ? "active-link" : ""}
              >
                CONTACT
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Main;
