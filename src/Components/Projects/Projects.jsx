import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, Github, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import "./Projects.css";

// Brand icon helpers for clean pill badges
const renderTechIcon = (iconName) => {
  switch (iconName) {
    case "react":
      return (
        <svg width="15" height="15" viewBox="-11.5 -10.23174 23 20.46348" fill="none">
          <circle cx="0" cy="0" r="2.05" fill="#00d8ff" />
          <g stroke="#00d8ff" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      );
    case "node":
      return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="#68a063">
          <path d="M12 2l9 5.2v10.4L12 23l-9-5.4V7.2L12 2zm0 2.3L4.8 8.5v7.2L12 20l7.2-4.3V8.5L12 4.3z" />
        </svg>
      );
    case "express":
      return <span className="tech-icon-express">ex</span>;
    case "mongo":
      return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="#13aa52">
          <path d="M12 1.5C10.5 4.5 7.5 9 7.5 13.5c0 4.2 3.1 7.2 4.5 8.5 1.4-1.3 4.5-4.3 4.5-8.5C16.5 9 13.5 4.5 12 1.5zm0 17c-.8-.9-2.5-2.8-2.5-5 0-2.8 1.8-6 2.5-7.5.7 1.5 2.5 4.7 2.5 7.5 0 2.2-1.7 4.1-2.5 5z" />
        </svg>
      );
    case "gemini":
      return (
        <svg width="15" height="15" viewBox="0 0 24 24">
          <path
            d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z"
            fill="url(#gemini-grad)"
          />
          <defs>
            <linearGradient id="gemini-grad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
              <stop stopColor="#4285F4" />
              <stop offset="0.5" stopColor="#9B72CF" />
              <stop offset="1" stopColor="#D96570" />
            </linearGradient>
          </defs>
        </svg>
      );
    case "tailwind":
      return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="#06b6d4">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
        </svg>
      );
    case "framer":
      return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="#f43f5e">
          <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" />
        </svg>
      );
    case "redux":
      return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="#764abc">
          <circle cx="12" cy="12" r="5" />
          <circle cx="6" cy="6" r="2.5" />
          <circle cx="18" cy="18" r="2.5" />
        </svg>
      );
    case "stripe":
      return <span className="tech-icon-stripe">S</span>;
    case "vite":
      return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="#bd34fe">
          <path d="M21.5 3.5L12.5 21 3 4l8.5 2.5L21.5 3.5z" />
        </svg>
      );
    case "js":
      return <span className="tech-icon-js">JS</span>;
    case "css":
      return <span className="tech-icon-css">CSS</span>;
    default:
      return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="#e22a2a">
          <circle cx="12" cy="12" r="6" />
        </svg>
      );
  }
};

const projectsData = [
  {
    id: "01",
    title: "Vedix",
    titleSuffix: ".Ai",
    tagline: "AI Productivity & Document Intelligence Platform",
    desc: "Vedix.Ai is an all-in-one AI platform that helps users chat with AI, analyze documents, explore live news, and boost productivity with intelligent tools and beautiful modern UI.",
    stageImage: "/projects/stage_1.png",
    live: "http://vercel-one.vercel.app",
    source: "https://github.com/alwaysashumishra/Lexi.Ai--Ai-Driven-Conversational-PLatform-",
    tech: [
      { name: "React", icon: "react" },
      { name: "Node.js", icon: "node" },
      { name: "Express", icon: "express" },
      { name: "MongoDB", icon: "mongo" },
      { name: "Gemini API", icon: "gemini" },
      { name: "Tailwind CSS", icon: "tailwind" },
    ],
    metrics: [
      { value: "5+", label: "Core Feature" },
      { value: "100+", label: "Active Users" },
      { value: "AI", label: "Powered Tools" },
      { value: "2026", label: "Built In" },
    ],
  },
  {
    id: "02",
    title: "Kisan",
    titleSuffix: ".Ai",
    tagline: "Smart Agriculture & Crop Advisory Intelligence",
    desc: "AI-driven agriculture platform empowering farmers with real-time crop disease diagnosis, local weather forecasts, yield estimation, and multilingual community support.",
    stageImage: "/projects/stage_2.png",
    live: "https://kisanai.vercel.app",
    source: "https://github.com/alwaysashumishra/kisan-ai",
    tech: [
      { name: "React", icon: "react" },
      { name: "Node.js", icon: "node" },
      { name: "Express", icon: "express" },
      { name: "MongoDB", icon: "mongo" },
      { name: "Gemini API", icon: "gemini" },
      { name: "Leaflet", icon: "map" },
    ],
    metrics: [
      { value: "4+", label: "Advisory Models" },
      { value: "250+", label: "Active Farmers" },
      { value: "98%", label: "Accuracy Rate" },
      { value: "2025", label: "Built In" },
    ],
  },
  {
    id: "03",
    title: "Rasoi",
    titleSuffix: ".run",
    tagline: "High-Speed Kitchen Ordering & Menu Flow",
    desc: "A lightning-fast food discovery and digital ordering ecosystem built for gourmet cloud kitchens with real-time cart checkout, table reservation, and live order tracking.",
    stageImage: "/projects/stage_3.png",
    live: "https://rasoirun.vercel.app",
    source: "https://github.com/alwaysashumishra/Rasoi.Run",
    tech: [
      { name: "React", icon: "react" },
      { name: "JavaScript", icon: "js" },
      { name: "Redux", icon: "redux" },
      { name: "CSS3", icon: "css" },
      { name: "Express", icon: "express" },
      { name: "Stripe", icon: "stripe" },
    ],
    metrics: [
      { value: "15+", label: "Kitchen Menus" },
      { value: "1.2k+", label: "Orders Delivered" },
      { value: "99.9%", label: "Checkout Uptime" },
      { value: "2025", label: "Built In" },
    ],
  },
  {
    id: "04",
    title: "Premier",
    titleSuffix: ".co",
    tagline: "Fashion, Model & Film Production Agency Showcase",
    desc: "An editorial-grade web experience featuring bespoke micro-interactions, smooth kinetic typography, and fluid portfolio reels crafted for luxury creative talent agencies.",
    stageImage: "/projects/stage_4.png",
    live: "https://premier-theta.vercel.app/",
    source: "https://github.com/alwaysashumishra",
    tech: [
      { name: "React", icon: "react" },
      { name: "Framer Motion", icon: "framer" },
      { name: "CSS3", icon: "css" },
      { name: "Vite", icon: "vite" },
      { name: "UI/UX", icon: "sparkles" },
      { name: "Tailwind CSS", icon: "tailwind" },
    ],
    metrics: [
      { value: "60FPS", label: "Fluid Physics" },
      { value: "100%", label: "Lighthouse Perf" },
      { value: "Awwwards", label: "UI Nominee" },
      { value: "2025", label: "Built In" },
    ],
  },
  {
    id: "05",
    title: "Remon",
    titleSuffix: ".ui",
    tagline: "Monochrome Swiss Startup Conversion Interface",
    desc: "Ultra-refined minimalist SaaS landing page embodying Swiss typography, brutalist geometric layouts, and high-conversion aesthetic tailored for modern tech startups.",
    stageImage: "/projects/stage_5.png",
    live: "https://premier-theta.vercel.app/",
    source: "https://github.com/alwaysashumishra",
    tech: [
      { name: "React", icon: "react" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "Framer Motion", icon: "framer" },
      { name: "Vite", icon: "vite" },
      { name: "CSS3", icon: "css" },
      { name: "Node.js", icon: "node" },
    ],
    metrics: [
      { value: "3.2x", label: "Higher Conversion" },
      { value: "12+", label: "Bespoke Sections" },
      { value: "Zero", label: "Render Latency" },
      { value: "2025", label: "Built In" },
    ],
  },
  {
    id: "06",
    title: "Edunet",
    titleSuffix: ".hub",
    tagline: "Student Learning & Campus Resource Network",
    desc: "Comprehensive academic collaboration network connecting university students, verified peer study groups, semester question banks, and mentor workshops.",
    stageImage: "/projects/stage_6.png",
    live: "https://github.com/alwaysashumishra/Edunet",
    source: "https://github.com/alwaysashumishra/Edunet",
    tech: [
      { name: "React", icon: "react" },
      { name: "Node.js", icon: "node" },
      { name: "MongoDB", icon: "mongo" },
      { name: "Express", icon: "express" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "CSS3", icon: "css" },
    ],
    metrics: [
      { value: "500+", label: "Active Students" },
      { value: "42+", label: "Study Circles" },
      { value: "Realtime", label: "Peer Chat" },
      { value: "2024", label: "Built In" },
    ],
  },
];

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const currentProject = projectsData[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + projectsData.length) % projectsData.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % projectsData.length);
  };

  const handleScrollDown = () => {
    const nextIdx = (activeIndex + 1) % projectsData.length;
    setActiveIndex(nextIdx);
  };

  return (
    <section className="proj-showcase-section" id="projects">
      {/* Top Header Bar */}
      <div className="proj-top-bar">
        <div className="proj-top-left">
          <span className="proj-top-bullet">●</span>
          <span className="proj-top-title">PROJECTS</span>
        </div>

        <div className="proj-top-counter">
          <span>{currentProject.id}</span>
          <span className="proj-counter-dash">—</span>
          <span>06</span>
        </div>

        <div className="proj-top-nav">
          <a href="#home" className="proj-nav-link">Home</a>
          <a href="#projects" className="proj-nav-link active">Work</a>
          <a href="#about" className="proj-nav-link">About</a>
          <a href="#contact" className="proj-nav-link">Contact</a>
        </div>
      </div>

      {/* Main Showcase Layout */}
      <div className="proj-main-grid">
        {/* Left Vertical Scroller Column */}
        <div className="proj-scroller-rail">
          <div className="proj-rail-numbers">
            {projectsData.map((p, idx) => (
              <button
                key={p.id}
                type="button"
                className={`proj-rail-btn ${idx === activeIndex ? "is-active" : ""}`}
                onClick={() => setActiveIndex(idx)}
                aria-label={`Jump to project ${p.id}`}
              >
                <span className="proj-rail-num">{p.id}</span>
                {idx === activeIndex && <span className="proj-rail-active-dot" />}
              </button>
            ))}
          </div>

          <div className="proj-rail-bottom" onClick={handleScrollDown} role="button" tabIndex={0}>
            <span className="proj-scroll-text">SCROLL</span>
            <div className="proj-scroll-circle" aria-label="Next Project">
              <ArrowDown size={14} />
            </div>
          </div>
        </div>

        {/* Center-Left Project Dossier Column */}
        <div className="proj-dossier-column">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProject.id}
              className="proj-dossier-content"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="proj-dossier-eyebrow">
                <span>FEATURED PROJECT</span>
                <span className="eyebrow-line" />
              </div>

              <h2 className="proj-dossier-title">
                {currentProject.title}
                <span className="proj-accent-red">{currentProject.titleSuffix}</span>
              </h2>

              <p className="proj-dossier-tagline">{currentProject.tagline}</p>

              <p className="proj-dossier-desc">{currentProject.desc}</p>

              {/* Tech Stack Pills */}
              <div className="proj-tech-pills">
                {currentProject.tech.map((t) => (
                  <div key={t.name} className="proj-tech-pill">
                    <span className="proj-tech-icon">{renderTechIcon(t.icon)}</span>
                    <span className="proj-tech-name">{t.name}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="proj-action-buttons">
                <a
                  href={currentProject.live}
                  target="_blank"
                  rel="noreferrer"
                  className="proj-btn-primary"
                >
                  <span>Live Demo</span>
                  <ArrowRight size={16} />
                </a>

                <a
                  href={currentProject.source}
                  target="_blank"
                  rel="noreferrer"
                  className="proj-btn-secondary"
                >
                  <Github size={16} />
                  <span>View Code</span>
                </a>
              </div>

              {/* Metrics Row */}
              <div className="proj-metrics-row">
                {currentProject.metrics.map((m, mIdx) => (
                  <div key={mIdx} className="proj-metric-item">
                    <span className="proj-metric-value">{m.value}</span>
                    <span className="proj-metric-label">{m.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right 3D Visual Stage Column */}
        <div className="proj-stage-column">
          <div className="proj-stage-canvas">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProject.id}
                className="proj-stage-media-wrap"
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              >
                <img
                  src={currentProject.stageImage}
                  alt={`${currentProject.title} 3D Showcase`}
                  className="proj-stage-img"
                  draggable={false}
                />
              </motion.div>
            </AnimatePresence>

            {/* Interactive Slider Navigation Overlay */}
            <div className="proj-slider-bar">
              <button
                type="button"
                className="proj-slider-arrow"
                onClick={handlePrev}
                aria-label="Previous Project"
              >
                <ChevronLeft size={16} />
              </button>

              <div className="proj-slider-tracks">
                {projectsData.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    type="button"
                    className={`proj-slider-track ${dotIdx === activeIndex ? "is-active" : ""}`}
                    onClick={() => setActiveIndex(dotIdx)}
                    aria-label={`Go to slide ${dotIdx + 1}`}
                  />
                ))}
              </div>

              <button
                type="button"
                className="proj-slider-arrow"
                onClick={handleNext}
                aria-label="Next Project"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
