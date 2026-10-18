import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Code, Send, Terminal } from "lucide-react";
import "./About.css";

const PROFILE_IMAGE = "/photos/ashutosh_1.png";

const About = () => {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="editorial-about-section" id="about">
      <div className="editorial-about-container">
        {/* Section Tag */}
        <div className="section-editorial-badge">[ 01 ] • ABOUT ME</div>

        <div className="about-grid">
          {/* Left Column: Original Bio Content */}
          <div className="about-narrative-col">
            <h2 className="about-heading">
              About <span className="serif-italic highlight-red">Me</span>
            </h2>

            <p className="about-lead">
              Hi, I&apos;m <strong>Ashutosh Mishra</strong>, a passionate Frontend Developer
              currently pursuing B.Tech in Computer Science (AI & ML) from Galgotias University.
            </p>

            <p className="about-body">
              I build responsive, user-friendly web applications using React.js, Next.js, HTML, CSS,
              and JavaScript. My key projects, Lexi.AI and a Food Delivery Web App, showcase my
              creativity and technical precision.
            </p>

            <p className="about-body">
              I love crafting intuitive digital experiences and integrating APIs to make the web
              smarter and more engaging. As an Unstop Campus Ambassador, I also promote innovation
              and real-world learning among peers.
            </p>

            {/* Quick Metrics */}
            <div className="about-stats-grid">
              <div className="stat-card">
                <span className="stat-number">B.Tech</span>
                <span className="stat-label">CS (AI & ML) • Galgotias Univ</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">400+</span>
                <span className="stat-label">LeetCode Problems Solved</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">Unstop</span>
                <span className="stat-label">Campus Ambassador</span>
              </div>
            </div>

            {/* Actions */}
            <div className="about-actions-row">
              <button
                type="button"
                className="editorial-primary-btn"
                onClick={scrollToContact}
              >
                Contact Me <ArrowUpRight size={18} />
              </button>
              <a
                href="https://github.com/alwaysashumishra"
                target="_blank"
                rel="noreferrer"
                className="editorial-outline-btn"
              >
                View GitHub
              </a>
            </div>
          </div>

          {/* Right Column: Clean Profile Card */}
          <div className="about-visual-col">
            <div className="editorial-profile-frame">
              {/* Concentric Circular Badge Assembly */}
              <div className="profile-badge-cluster">
                {/* Rotating Circular Track & Text */}
                <svg className="rotating-text-svg" viewBox="0 0 260 260" aria-hidden="true">
                  {/* Inner outline circle (just outside photo) */}
                  <circle
                    cx="130"
                    cy="130"
                    r="88"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    className="badge-track-line inner"
                  />

                  {/* Outer outline circle */}
                  <circle
                    cx="130"
                    cy="130"
                    r="118"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    className="badge-track-line outer"
                  />

                  {/* Circular Path centered between inner and outer outlines (radius 103) */}
                  <path
                    id="circlePath"
                    d="M 130, 130 m -103, 0 a 103,103 0 1,1 206,0 a 103,103 0 1,1 -206,0"
                    fill="none"
                  />
                  <text
                    fill="currentColor"
                    fontSize="9.5"
                    fontWeight="700"
                    letterSpacing="2.8"
                    className="badge-rotating-text"
                  >
                    <textPath href="#circlePath" startOffset="0%">
                      • FRONTEND DEVELOPER • UI ENGINEER • ASHUTOSH MISHRA •
                    </textPath>
                  </text>
                </svg>

                {/* Concentric Center Portrait */}
                <div className="portrait-circle-wrap">
                  <img
                    src={PROFILE_IMAGE}
                    alt="Ashutosh Mishra"
                    className="portrait-image"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = "/photos/ashutosh_1.png";
                    }}
                  />
                  <div className="portrait-inner-shadow" />
                </div>
              </div>

              {/* Status Badge */}
              <div className="status-pill-badge">
                <span className="pulsing-green-dot" />
                <span className="status-text">Online • Available for Opportunities</span>
              </div>

              {/* Profile Details from old website */}
              <div className="profile-meta-card">
                <div className="meta-left">
                  <span className="meta-handle">@alwaysashumishra</span>
                  <span className="meta-sub">Galgotias University</span>
                </div>
                <div className="meta-right">
                  <button
                    type="button"
                    className="quick-contact-btn"
                    onClick={scrollToContact}
                  >
                    Contact Me
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
