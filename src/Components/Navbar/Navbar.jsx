import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        <div className={`bar ${menuOpen ? "open" : ""}`}></div>
      </div>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li><a onClick={() => scrollToSection("home")}>Home</a></li>
        <li><a onClick={() => scrollToSection("about")}>About</a></li>
        <li><a onClick={() => scrollToSection("experience")}>Experience</a></li>
        <li><a onClick={() => scrollToSection("projects")}>Projects</a></li>
        <li><a onClick={() => scrollToSection("skill")}>Skill</a></li>
        <li>
          <a
            className="book-call"
            onClick={() => scrollToSection("contact")}
          >
            Book a Call
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
