import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  Code2,
  Cpu,
  Bug,
  ExternalLink,
  Download,
  X,
  CheckCircle2,
  MapPin,
  Briefcase,
  Sparkles,
  FileText,
  ShieldCheck,
  Building2,
  ArrowRight,
} from "lucide-react";
import "./Internship.css";

// Brand Icon Helpers
const TechIcon = ({ type }) => {
  switch (type) {
    case "node":
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="#68a063">
          <path d="M12 2l9 5.2v10.4L12 23l-9-5.4V7.2L12 2zm0 2.3L4.8 8.5v7.2L12 20l7.2-4.3V8.5L12 4.3z" />
        </svg>
      );
    case "express":
      return <span className="intern-pill-ex">ex</span>;
    case "mongo":
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="#13aa52">
          <path d="M12 1.5C10.5 4.5 7.5 9 7.5 13.5c0 4.2 3.1 7.2 4.5 8.5 1.4-1.3 4.5-4.3 4.5-8.5C16.5 9 13.5 4.5 12 1.5zm0 17c-.8-.9-2.5-2.8-2.5-5 0-2.8 1.8-6 2.5-7.5.7 1.5 2.5 4.7 2.5 7.5 0 2.2-1.7 4.1-2.5 5z" />
        </svg>
      );
    case "js":
      return <span className="intern-pill-js">JS</span>;
    case "api":
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="#0080ff">
          <path d="M4 6h16v12H4z" fill="none" stroke="#0080ff" strokeWidth="2" rx="3" />
          <path d="M7 14V10h2.5a1.5 1.5 0 0 1 0 3H7zm6 0V10h2a1.5 1.5 0 0 1 0 3h-2v1zm4-4v4" stroke="#0080ff" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case "postman":
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="#ff6c37">
          <circle cx="12" cy="12" r="10" fill="#ff6c37" />
          <path d="M8 12l8-5-3 5 3 2-8 3 1-5z" fill="#ffffff" />
        </svg>
      );
    default:
      return <Cpu size={16} color="#e22a2a" />;
  }
};

const techStack = [
  { name: "Node.js", icon: "node" },
  { name: "Express.js", icon: "express" },
  { name: "MongoDB", icon: "mongo" },
  { name: "JavaScript", icon: "js" },
  { name: "REST API", icon: "api" },
  { name: "Postman", icon: "postman" },
];

const metrics = [
  {
    icon: Calendar,
    title: "3 Months",
    subtitle: "Duration",
  },
  {
    icon: Code2,
    title: "Backend",
    subtitle: "Development",
  },
  {
    icon: Cpu,
    title: "API",
    subtitle: "Development",
  },
  {
    icon: Bug,
    title: "Debugging",
    subtitle: "& Testing",
  },
];

const keyContributions = [
  "Backend Development",
  "API Development",
  "Debugging & Testing",
  "Worked on Real-world Project",
];

const Internship = () => {
  const [modalMode, setModalMode] = useState(null); // 'report' | 'certificate' | null

  const handleOpenCertificate = () => setModalMode("certificate");
  const handleOpenReport = () => setModalMode("report");
  const handleCloseModal = () => setModalMode(null);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="internship-showcase-section" id="internship">
      {/* Top Section Header Bar */}
      <div className="intern-top-bar">
        <div className="intern-top-brand" onClick={() => scrollToSection("home")} role="button" tabIndex={0}>
          <div className="intern-eclipse-icon">
            <svg viewBox="0 0 36 36" fill="none">
              <circle cx="18" cy="18" r="16" stroke="currentColor" strokeWidth="2.2" />
              <circle cx="19" cy="18" r="11" fill="currentColor" />
              <path d="M7 18 C7 11.92 11.92 7 18 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
            </svg>
          </div>
          <span className="intern-top-title">I N T E R N S H I P</span>
        </div>

        <div className="intern-top-counter">
          <span>02</span>
          <span className="intern-counter-dash">——</span>
          <span>06</span>
        </div>

        <div className="intern-top-nav-right">
          <nav className="intern-top-nav">
            <a href="#home" className="intern-nav-link">Home</a>
            <a href="#internship" className="intern-nav-link active">Work</a>
            <a href="#about" className="intern-nav-link">About</a>
            <a href="#contact" className="intern-nav-link">Contact</a>
          </nav>

          <button
            type="button"
            className="intern-top-cert-pill"
            onClick={handleOpenCertificate}
            aria-label="View Internship Certificate"
          >
            <div className="cert-pill-icon-wrap">
              <FileText size={16} />
            </div>
            <span className="cert-pill-text">Internship Certificate</span>
            <div className="cert-pill-arrow">
              <ArrowRight size={13} />
            </div>
          </button>
        </div>
      </div>

      {/* Main Grid Content */}
      <div className="intern-main-grid">
        {/* Left Dossier Column */}
        <motion.div
          className="intern-dossier-column"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Eyebrow */}
          <div className="intern-eyebrow-row">
            <span className="intern-eyebrow-dot" />
            <span className="intern-eyebrow-text">INTERNSHIP EXPERIENCE</span>
            <span className="intern-eyebrow-line" />
          </div>

          {/* Company Title */}
          <h2 className="intern-company-heading">
            RS Orange <span className="highlight-red">Tech Pvt. Ltd.</span>
          </h2>

          {/* Role & Platform */}
          <div className="intern-role-group">
            <h3 className="intern-role-title">Full Stack Developer Intern</h3>
            <p className="intern-platform-subtitle">JyotiPilot Web Platform</p>
          </div>

          {/* Description */}
          <p className="intern-desc-body">
            Worked as a Full Stack Developer Intern for 3 months at RS Orange Tech Pvt. Ltd. on the
            JyotiPilot web platform, a Vedic astrology and Janam Kundli based application.
            Contributed to backend development, API development, debugging and testing using
            Node.js, Express.js and MongoDB.
          </p>

          {/* Tech Badges */}
          <div className="intern-tech-pills-wrap">
            {techStack.map((tech) => (
              <div key={tech.name} className="intern-tech-pill">
                <TechIcon type={tech.icon} />
                <span className="intern-tech-label">{tech.name}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="intern-cta-row">
            <button
              type="button"
              className="intern-btn-primary"
              onClick={handleOpenReport}
            >
              <span>View Report</span>
              <ExternalLink size={15} />
            </button>

            <button
              type="button"
              className="intern-btn-secondary"
              onClick={handleOpenCertificate}
            >
              <span>View Certificate</span>
              <ExternalLink size={15} />
            </button>
          </div>

          {/* Bottom Metrics Bar */}
          <div className="intern-metrics-grid">
            {metrics.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={idx} className="intern-metric-card">
                  <div className="metric-icon-wrap">
                    <IconComp size={18} />
                  </div>
                  <div className="metric-text-wrap">
                    <span className="metric-title">{item.title}</span>
                    <span className="metric-subtitle">{item.subtitle}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Right Visual 3D Stage Column */}
        <motion.div
          className="intern-stage-column"
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="intern-stage-canvas">
            {/* The Main High-Resolution 3D Stage Visual */}
            <div className="intern-stage-media-wrap">
              <img
                src="/internship/rs_orange_stage_transparent.png"
                alt="RS Orange Tech Pvt. Ltd. - JyotiPilot 3D Showcase"
                className="intern-stage-img"
                draggable={false}
              />

              {/* Interactive Hotspot for Certificate */}
              <button
                type="button"
                className="stage-hotspot cert-hotspot"
                onClick={handleOpenCertificate}
                title="Inspect Internship Certificate"
                aria-label="Inspect Internship Certificate"
              />

              {/* Interactive Hotspot for Company Card */}
              <button
                type="button"
                className="stage-hotspot company-hotspot"
                onClick={handleOpenReport}
                title="Inspect Internship Experience Details"
                aria-label="Inspect Internship Experience Details"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Interactive Modal for Certificate & Report */}
      <AnimatePresence>
        {modalMode && (
          <motion.div
            className="intern-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseModal}
          >
            <motion.div
              className="intern-modal-card"
              initial={{ opacity: 0, scale: 0.92, y: 25 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 25 }}
              transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="modal-header">
                <div className="modal-header-brand">
                  <div className="modal-badge-icon">
                    <ShieldCheck size={20} className="text-red" />
                  </div>
                  <div>
                    <span className="modal-category">VERIFIED CREDENTIAL</span>
                    <h3 className="modal-title">
                      {modalMode === "certificate"
                        ? "Internship Certificate Dossier"
                        : "Technical Experience & Internship Report"}
                    </h3>
                  </div>
                </div>
                <button
                  type="button"
                  className="modal-close-btn"
                  onClick={handleCloseModal}
                  aria-label="Close modal"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Modal Body */}
              <div className="modal-body">
                {/* Company Overview Block */}
                <div className="modal-entity-card">
                  <div className="entity-logo-circle">
                    <span className="entity-rs">RS</span>
                  </div>
                  <div className="entity-info">
                    <h4>RS Orange Tech Pvt. Ltd.</h4>
                    <p>Greater Noida, Uttar Pradesh, India</p>
                  </div>
                  <span className="entity-badge">Verified Organization</span>
                </div>

                {/* Key Metadata Grid */}
                <div className="modal-meta-grid">
                  <div className="modal-meta-item">
                    <span className="meta-label">ROLE</span>
                    <span className="meta-value">Full Stack Developer Intern</span>
                  </div>
                  <div className="modal-meta-item">
                    <span className="meta-label">PROJECT PLATFORM</span>
                    <span className="meta-value">JyotiPilot Web Platform</span>
                  </div>
                  <div className="modal-meta-item">
                    <span className="meta-label">DURATION & TIMELINE</span>
                    <span className="meta-value">3 August 2026 – 30 October 2026</span>
                  </div>
                  <div className="modal-meta-item">
                    <span className="meta-label">STATUS</span>
                    <span className="meta-value text-green">Completed & Verified</span>
                  </div>
                </div>

                {/* Core Responsibilities & Impact */}
                <div className="modal-section-block">
                  <h5 className="modal-block-heading">Core Contributions & Technical Scope</h5>
                  <ul className="modal-contributions-list">
                    {keyContributions.map((item, i) => (
                      <li key={i}>
                        <CheckCircle2 size={16} className="item-check-icon" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="modal-expanded-desc">
                    Engineered robust server-side routing, RESTful APIs, and database models using
                    Node.js, Express.js and MongoDB. Conducted extensive debugging, performance testing,
                    and API validation with Postman for the JyotiPilot astrology and Janam Kundli computation engine.
                  </p>
                </div>

                {/* Tech Stack Pills in Modal */}
                <div className="modal-section-block">
                  <h5 className="modal-block-heading">Technologies & Frameworks Utilized</h5>
                  <div className="modal-pills-row">
                    {techStack.map((tech) => (
                      <span key={tech.name} className="modal-tech-tag">
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer Actions */}
              <div className="modal-footer">
                <button
                  type="button"
                  className="modal-btn-download"
                  onClick={() => {
                    alert("Internship Certificate verification: Verified by RS Orange Tech Pvt. Ltd.");
                  }}
                >
                  <Download size={15} />
                  <span>Download Verified Record</span>
                </button>
                <button
                  type="button"
                  className="modal-btn-close"
                  onClick={handleCloseModal}
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Internship;
