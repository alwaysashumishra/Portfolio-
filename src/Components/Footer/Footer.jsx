import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="editorial-footer">
      <div className="editorial-footer-container">
        {/* Top Section */}
        <div className="footer-top-row">
          {/* Brand Info */}
          <div className="footer-brand">
            <div
              className="footer-logo-title"
              onClick={scrollToTop}
              role="button"
              tabIndex={0}
              aria-label="Back to top"
            >
              <svg className="footer-eclipse-icon" viewBox="0 0 36 36" fill="none">
                <circle cx="18" cy="18" r="16" stroke="currentColor" strokeWidth="2.2" />
                <circle cx="19" cy="18" r="11" fill="currentColor" />
                <path
                  d="M7 18 C7 11.92 11.92 7 18 7"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                />
              </svg>
              <span className="footer-name">
                Ashutosh <strong>Mishra</strong>
              </span>
            </div>
            <p className="footer-bio">
              Building clean, scalable web experiences with modern technologies.
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="footer-nav">
            <span className="footer-label">NAVIGATION</span>
            <ul className="footer-nav-links">
              <li>
                <button type="button" onClick={() => scrollToSection("home")}>
                  Home
                </button>
              </li>
              <li>
                <button type="button" onClick={() => scrollToSection("about")}>
                  About
                </button>
              </li>
              <li>
                <button type="button" onClick={() => scrollToSection("projects")}>
                  Projects
                </button>
              </li>
              <li>
                <button type="button" onClick={() => scrollToSection("skill")}>
                  Skills
                </button>
              </li>
              <li>
                <button type="button" onClick={() => scrollToSection("gallery")}>
                  Gallery
                </button>
              </li>
              <li>
                <button type="button" onClick={() => scrollToSection("contact")}>
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Connect & Back to Top */}
          <div className="footer-connect">
            <span className="footer-label">CONNECT</span>
            <div className="footer-social-pills">
              <a
                href="https://github.com/alwaysashumishra"
                target="_blank"
                rel="noreferrer"
                className="social-pill"
                aria-label="GitHub Profile"
              >
                <FaGithub size={16} /> <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/ashutosh-mishra-am-108880282/"
                target="_blank"
                rel="noreferrer"
                className="social-pill"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin size={16} /> <span>LinkedIn</span>
              </a>
              <a
                href="https://www.instagram.com/alwaysashumishra/"
                target="_blank"
                rel="noreferrer"
                className="social-pill"
                aria-label="Instagram Profile"
              >
                <FaInstagram size={15} /> <span>Instagram</span>
              </a>
              <a
                href="mailto:ashutoshmmishra15@gmail.com"
                className="social-pill"
                aria-label="Email Address"
              >
                <FaEnvelope size={15} /> <span>Email</span>
              </a>
            </div>

            <button
              type="button"
              className="footer-back-to-top"
              onClick={scrollToTop}
            >
              <span>Back to Top</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>

        {/* Bottom Colophon Bar */}
        <div className="footer-bottom-bar">
          <span className="footer-copy">
            © {new Date().getFullYear()} Ashutosh Mishra. All rights reserved.
          </span>
          <span className="footer-credit">
            FRONTEND DEVELOPER & UI ENGINEER
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
