import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = ({ theme, toggleTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ["home", "about", "projects", "skill", "landing", "gallery", "social", "contact"];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setActiveSection(id);
    setMenuOpen(false);
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skill", label: "Skills" },
    { id: "gallery", label: "Gallery" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className={`editorial-nav-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="editorial-nav-inner">
        {/* Left: Brand Group with Eclipse Logo + Author Name */}
        <div
          className="nav-brand-group"
          onClick={() => scrollToSection("home")}
          role="button"
          tabIndex={0}
          aria-label="Ashutosh Mishra - Home"
        >
          <div className="nav-brand-mark">
            <svg className="eclipse-icon" viewBox="0 0 36 36" fill="none">
              <circle cx="18" cy="18" r="16" stroke="currentColor" strokeWidth="2.2" />
              <circle cx="19" cy="18" r="11" fill="currentColor" />
              <path
                d="M7 18 C7 11.92 11.92 7 18 7"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div className="nav-brand-title">
            <span className="brand-light">Ashutosh</span>
            <span className="brand-bold">Mishra</span>
          </div>
        </div>

        {/* Right: Clean menu with organic hand-drawn oval active loop */}
        <nav className="nav-menu-desktop">
          <ul className="nav-links-list">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id} className="nav-item">
                  <button
                    type="button"
                    className={`nav-link-btn ${isActive ? "is-active" : ""}`}
                    onClick={() => scrollToSection(item.id)}
                  >
                    <span className="nav-text">{item.label}</span>
                    {isActive && (
                      <svg
                        className="nav-oval-loop"
                        viewBox="0 0 100 46"
                        fill="none"
                        preserveAspectRatio="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M14 23 C12 11, 35 4, 62 4 C86 4, 97 12, 95 24 C93 37, 72 43, 40 43 C15 43, 4 33, 5 22 C6 14, 25 6, 52 5"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </button>
                </li>
              );
            })}

            {/* Book a Call */}
            <li className="nav-item">
              <button
                type="button"
                className="nav-book-btn"
                onClick={() => scrollToSection("contact")}
              >
                Book a Call
              </button>
            </li>

            {/* Theme Toggle Button */}
            <li className="nav-item theme-item">
              <button
                type="button"
                className="editorial-theme-btn"
                onClick={toggleTheme}
                aria-label="Toggle theme mode"
                title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              >
                {theme === "dark" ? "☀" : "☾"}
              </button>
            </li>
          </ul>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          className={`nav-mobile-toggle ${menuOpen ? "is-open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle mobile menu"
        >
          <span className="toggle-line" />
          <span className="toggle-line" />
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`nav-mobile-drawer ${menuOpen ? "is-open" : ""}`}>
        <ul className="mobile-links-list">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                className={`mobile-link-btn ${activeSection === item.id ? "is-active" : ""}`}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
          <li>
            <button
              type="button"
              className="mobile-book-btn"
              onClick={() => scrollToSection("contact")}
            >
              Book a Call
            </button>
          </li>
          <li className="mobile-theme-row">
            <span>Theme Mode</span>
            <button
              type="button"
              className="editorial-theme-btn"
              onClick={toggleTheme}
            >
              {theme === "dark" ? "☀ Light" : "☾ Dark"}
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;