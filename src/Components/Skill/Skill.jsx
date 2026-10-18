import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import "./Skill.css";

const skillsList = [
  {
    id: "react",
    name: "React.js",
    sub: "Build interactive and dynamic UIs",
    orbImg: "/skills/orb_react.png",
    glow: "rgba(0, 216, 255, 0.4)",
    pos: { top: "8%", left: "22%" },
    mobileOrder: 1,
  },
  {
    id: "next",
    name: "Next.js",
    sub: "Full-stack React framework",
    orbImg: "/skills/orb_next.png",
    glow: "rgba(17, 17, 17, 0.3)",
    pos: { top: "18%", left: "68%" },
    mobileOrder: 2,
  },
  {
    id: "node",
    name: "Node.js",
    sub: "Runtime for scalable apps",
    orbImg: "/skills/orb_node.png",
    glow: "rgba(104, 160, 99, 0.4)",
    pos: { top: "31%", left: "7%" },
    mobileOrder: 3,
  },
  {
    id: "express",
    name: "Express.js",
    sub: "Fast and minimal backend framework",
    orbImg: "/skills/orb_express.png",
    glow: "rgba(17, 17, 17, 0.3)",
    pos: { top: "41%", left: "49%" },
    mobileOrder: 4,
  },
  {
    id: "mongo",
    name: "MongoDB",
    sub: "Flexible NoSQL database",
    orbImg: "/skills/orb_mongo.png",
    glow: "rgba(19, 170, 82, 0.4)",
    pos: { top: "53%", left: "19%" },
    mobileOrder: 5,
  },
  {
    id: "sql",
    name: "SQL",
    sub: "Structured and reliable data",
    orbImg: "/skills/orb_sql.png",
    glow: "rgba(51, 103, 145, 0.4)",
    pos: { top: "63%", left: "64%" },
    mobileOrder: 6,
  },
  {
    id: "ai_agent",
    name: "AI Agent",
    sub: "Intelligent agents for real-world tasks",
    orbImg: "/skills/orb_ai_agent.png",
    glow: "rgba(226, 42, 42, 0.4)",
    pos: { top: "73%", left: "0%" },
    mobileOrder: 7,
  },
  {
    id: "ai_auto",
    name: "AI Automation",
    sub: "Automate workflows and boost productivity",
    orbImg: "/skills/orb_ai_auto.png",
    glow: "rgba(245, 158, 11, 0.4)",
    pos: { top: "83%", left: "40%" },
    mobileOrder: 8,
  },
];

const Skill = () => {
  const [activeSkill, setActiveSkill] = useState(null);

  const scrollToProjects = (e) => {
    e.preventDefault();
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="constellation-skills-section" id="skill">
      <div className="constellation-container">
        {/* Top Minimal Editorial Bar */}
        <div className="constellation-top-bar">
          <div className="constellation-tag-left">
            <span className="editorial-circle-glyph" />
            <span className="editorial-tag-text">S K I L L S</span>
          </div>

          <div className="constellation-counter-center">
            <span>02</span>
            <span className="counter-dash">—</span>
            <span>05</span>
          </div>

          <a
            href="#projects"
            onClick={scrollToProjects}
            className="constellation-link-right"
          >
            <span>BUILDING IDEAS WITH CODE</span>
            <ArrowRight size={14} className="bar-arrow-icon" />
          </a>
        </div>

        {/* Main Stage Grid */}
        <div className="constellation-stage-grid">
          {/* Left Column: Bold Editorial Heading & Painted Disc Backdrop */}
          <div className="constellation-hero-col">
            {/* The Big Circular Oil Paint Backdrop */}
            <div className="hero-painted-disc-wrapper">
              <img
                src="/skills/disc_painting_clean.png"
                alt="Artistic Painted Disc"
                className="hero-painted-disc-img"
              />
              <div className="painted-disc-ambient-glow" />
            </div>

            {/* Heading Content */}
            <div className="hero-text-content">
              <span className="hero-my-label">M Y</span>
              <h2 className="hero-main-heading">
                <span className="heading-line line-skills">Skills</span>
                <span className="heading-line line-ideas">
                  Turn <span className="highlight-ideas">Ideas</span>
                </span>
                <span className="heading-line line-reality">into Reality</span>
              </h2>

              <p className="hero-desc-para">
                A modern stack for building scalable, intelligent and beautiful digital experiences.
              </p>

              <a
                href="#projects"
                onClick={scrollToProjects}
                className="explore-work-btn"
              >
                <span>EXPLORE MY WORK</span>
                <ArrowRight size={15} className="explore-arrow-icon" />
              </a>
            </div>
          </div>

          {/* Right Column: 3D Marbled Ceramic Spheres with Orbital Connectors */}
          <div className="constellation-orbs-col">
            {/* SVG Orbital Trajectory Lines & Accents */}
            <svg
              className="orbital-paths-svg"
              viewBox="0 0 760 740"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Curve 1: Upper Orbit (React -> Next) */}
              <path
                d="M 160 145 C 300 65, 460 110, 560 205"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeDasharray="4 4"
                className="orbit-path path-1"
              />
              {/* Curve 2: Mid-Upper Orbit (Node -> Express -> Next) */}
              <path
                d="M 80 295 C 180 230, 360 260, 560 270"
                stroke="currentColor"
                strokeWidth="1.2"
                className="orbit-path path-2"
              />
              {/* Curve 3: Central Winding Orbit (Mongo -> Express -> SQL) */}
              <path
                d="M 160 440 C 260 330, 420 420, 540 500"
                stroke="currentColor"
                strokeWidth="1.2"
                className="orbit-path path-3"
              />
              {/* Curve 4: Lower Orbit (AI Agent -> AI Automation -> SQL) */}
              <path
                d="M 60 585 C 180 655, 380 675, 540 560"
                stroke="currentColor"
                strokeWidth="1.2"
                className="orbit-path path-4"
              />
              {/* Connecting Arc to Far Right */}
              <path
                d="M 560 205 C 640 285, 680 435, 660 520"
                stroke="currentColor"
                strokeWidth="1.2"
                className="orbit-path path-5"
              />

              {/* Accent Nodal Dots (Red & Black) */}
              <circle cx="210" cy="95" r="4.5" fill="#e22a2a" />
              <circle cx="490" cy="140" r="4.5" fill="#e22a2a" />
              <circle cx="150" cy="300" r="4" fill="#e22a2a" />
              <circle cx="455" cy="495" r="4.5" fill="#f59e0b" />
              <circle cx="350" cy="675" r="4.5" fill="#e22a2a" />

              {/* Black accent dots */}
              <circle cx="650" cy="380" r="4" fill="#111111" className="orbit-dark-dot" />
              <circle cx="115" cy="415" r="3.5" fill="#111111" className="orbit-dark-dot" />
            </svg>

            {/* Spheres and Text Group */}
            <div className="constellation-nodes-container">
              {skillsList.map((skill) => (
                <div
                  key={skill.id}
                  className={`skill-orbital-node ${activeSkill === skill.id ? "is-active" : ""}`}
                  style={{
                    "--node-top": skill.pos.top,
                    "--node-left": skill.pos.left,
                    "--node-glow": skill.glow,
                  }}
                  onMouseEnter={() => setActiveSkill(skill.id)}
                  onMouseLeave={() => setActiveSkill(null)}
                >
                  {/* 3D Ceramic Painted Sphere */}
                  <div className="node-orb-wrapper">
                    <img
                      src={skill.orbImg}
                      alt={skill.name}
                      className="node-orb-img"
                      loading="lazy"
                    />
                    <div className="node-orb-shadow" />
                  </div>

                  {/* Text Information & Action Arrow */}
                  <div className="node-info-block">
                    <h3 className="node-skill-title">{skill.name}</h3>
                    <p className="node-skill-sub">{skill.sub}</p>
                    <button
                      type="button"
                      className="node-action-btn"
                      aria-label={`Inspect ${skill.name}`}
                      onClick={() => setActiveSkill(skill.id)}
                    >
                      <ArrowRight size={11} className="action-arrow" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
