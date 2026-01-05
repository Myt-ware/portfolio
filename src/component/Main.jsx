import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Main.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from "./Hero";
import { Link } from "react-router-dom";


function Main() {
  const [active, setActive] = useState("home");

  return (
  <>
    <Navbar fixed="top" expand="lg" className="custom-navbar">
  <Container fluid className="px-5">

    <div>
      <Navbar.Brand href="#home" className="logo">
        <img
          src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/themes/2152935246/settings_images/f73a33a-70d5-c5bd-357-36217133de80_9e82ffee-3bc1-4c2f-8162-b2085233b3fc.png"
          alt="Logo"
          height="40"
        />
      </Navbar.Brand>
    </div>
<div>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto nav-right">
<Link style={{textDecoration:'none'}} to={"/"}>
      <Nav.Link
        href="#home"
        className={active === "home" ? "active-link" : ""}
        onClick={() => setActive("home")}
      >
        HOME
      </Nav.Link>
</Link>      
<Link style={{textDecoration:'none'}} to={"/About"}>
      <Nav.Link
        href="#About"
        className={active === "about" ? "active-link" : ""}
        onClick={() => setActive("about")}
      >
        ABOUT
      </Nav.Link>
</Link>
      <Nav.Link
        href="#engaging"
        className={active === "projects" ? "active-link" : ""}
        onClick={() => setActive("projects")}
      >
        PROJECTS
      </Nav.Link>

      <Nav.Link
        href="#mentoring"
        className={active === "contact" ? "active-link" : ""}
        onClick={() => setActive("contact")}
      >
        CONTACT
      </Nav.Link>
    </Nav>
    </Navbar.Collapse>
    </div>

  </Container>
</Navbar>

    </>
  );
}

export default Main ;
