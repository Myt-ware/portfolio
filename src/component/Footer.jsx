import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-name">Md Yaseen</p>
        <p className="footer-role">Front-End Developer</p>
        <div className="footer-social">
          <a
            href="https://www.linkedin.com/in/yaseen-md"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Myt-ware"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>

        <p className="footer-copy">
          © {new Date().getFullYear()} Md Yaseen. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
