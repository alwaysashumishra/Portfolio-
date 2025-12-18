import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h3>Ashutosh Mishra</h3>
        <p>
          Building clean, scalable web experiences with modern technologies.
        </p>
      </div>

      <div className="footer-socials">
        <a
          href="https://github.com/alwaysashumishra"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/ashutosh-mishra-am-108880282/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>

        <a
          href="mailto:ashutoshmmishra15@gmail.com"
          aria-label="Email"
        >
          <FaEnvelope />
        </a>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Ashutosh Mishra</span>
      </div>
    </footer>
  );
};

export default Footer;
