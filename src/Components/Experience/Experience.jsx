import React, { useState } from "react";
import "./Experience.css";
import { assets } from "../../assets/assets";
import { ArrowUpRight, Download, CheckCircle2, Milestone, GitFork, ArrowRight, Sparkles, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const roadmapNodes = [
  {
    id: "node-1",
    step: "01",
    phase: "PHASE 01 • AI FOUNDATIONS",
    role: "Artificial Intelligence Intern",
    company: "Edunet Foundation",
    type: "Internship",
    period: "Nov 2024 - Jan 2025",
    duration: "3 mos • Remote",
    location: "Remote",
    desc: "Worked on Python, Machine Learning concepts, and hands-on AI projects under guided mentorship.",
    skills: ["Python", "Machine Learning", "AI Pipeline", "Model Evaluation"],
    logo: assets.edunet,
    status: "Completed",
    certUrl: "/documents/edunet-certificate.pdf",
    offerUrl: "/documents/edunet-offer-letter.pdf",
    highlights: "Engineered predictive ML prototypes & completed guided AI sprint curriculum.",
  },
  {
    id: "node-2",
    step: "02",
    phase: "PHASE 02 • COMMUNITY MOBILIZATION",
    role: "Campus Ambassador",
    company: "Unstop",
    type: "Part-time",
    period: "Aug 2025 - Oct 2025",
    duration: "3 mos • Gautam Buddha Nagar, UP",
    location: "Gautam Buddha Nagar, UP",
    desc: "Promoted hackathons, competitions, and opportunities among students, increasing participation and visibility.",
    skills: ["Student Outreach", "Hackathon Mobilization", "Community Growth", "Strategic Comm"],
    logo: assets.unstop,
    status: "Completed",
    certUrl: "/documents/edunet-certificate.pdf",
    offerUrl: "/documents/edunet-offer-letter.pdf",
    highlights: "Accelerated university-wide hackathon signups and competitive programming engagement.",
  },
  {
    id: "node-3",
    step: "03",
    phase: "PHASE 03 • PREMIER INSTITUTION",
    role: "Campus Ambassador",
    company: "Indian Institute of Technology, Kanpur",
    type: "Part-time",
    period: "Aug 2025 - Nov 2025",
    duration: "4 mos • Remote",
    location: "Remote",
    desc: "Represented IIT Kanpur through student outreach, social media engagement, and leadership initiatives.",
    skills: ["Campus Leadership", "Social Media Engagement", "Strategic Representation", "Outreach"],
    logo: assets.iit,
    status: "Completed",
    certUrl: "/documents/edunet-certificate.pdf",
    offerUrl: "/documents/edunet-offer-letter.pdf",
    highlights: "Represented premier institution initiatives, leading collegiate communications across student networks.",
  },
  {
    id: "node-4",
    step: "04",
    phase: "CURRENT HORIZON • PRODUCTION READY",
    role: "Frontend Developer & UI Engineer",
    company: "Full-Time Roles & Opportunities",
    type: "Open to Work",
    period: "2026 - Present",
    duration: "Active Now",
    location: "Remote / Hybrid / On-site",
    desc: "Leveraging robust frontend architecture, React.js expertise, and AI integration to build scalable web products.",
    skills: ["React.js", "JavaScript ES6+", "UI Architecture", "Framer Motion", "Tailwind CSS"],
    logo: null,
    status: "Available",
    certUrl: null,
    offerUrl: null,
    highlights: "Ready to ship high-impact digital experiences for high-growth engineering teams.",
  },
];

const Experience = () => {
  const [activeNodeId, setActiveNodeId] = useState("node-1");

  const activeNode = roadmapNodes.find((n) => n.id === activeNodeId) || roadmapNodes[0];

  return (
    <section className="editorial-experience-section" id="experience">
      <div className="editorial-experience-container">
        {/* Section Header */}
        <div className="experience-header-row">
          <div>
            <div className="section-editorial-badge">[ 05 ] • CAREER ROADMAP</div>
            <h2 className="experience-editorial-heading">
              Experience <span className="serif-italic highlight-red">Flowchart</span>
            </h2>
          </div>
          <p className="experience-editorial-sub">
            Interactive journey map tracking engineering internships, campus leadership milestones,
            and career progression.
          </p>
        </div>

        {/* Flowchart Schematic Map Container */}
        <div className="flowchart-schematic-wrap">
          {/* Blueprint Grid Canvas */}
          <div className="flowchart-blueprint-grid" />

          {/* Flowchart Header / Legend Bar */}
          <div className="flowchart-legend-bar">
            <div className="legend-tag">
              <span className="legend-dot" />
              <span>FLOWCHART STATUS: CHRONOLOGICAL PROGRESSION</span>
            </div>
            <div className="legend-steps-hint">
              <span>CLICK ANY NODE TO INSPECT MILESTONE DETAILS</span>
            </div>
          </div>

          {/* Connected Flowchart Nodes Track */}
          <div className="flowchart-track">
            {roadmapNodes.map((node, index) => {
              const isActive = activeNodeId === node.id;
              const isLast = index === roadmapNodes.length - 1;

              return (
                <div key={node.id} className="flowchart-node-cell">
                  {/* Node Connector Line & Flow Arrow */}
                  {!isLast && (
                    <div className="flowchart-connector-line">
                      <div className="connector-pulse-dot" />
                      <div className="connector-arrow">
                        <ArrowRight size={14} />
                      </div>
                    </div>
                  )}

                  {/* Flowchart Interactive Node Card */}
                  <motion.div
                    className={`flowchart-node-card ${isActive ? "is-active" : ""} ${isLast ? "is-target" : ""}`}
                    onClick={() => setActiveNodeId(node.id)}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="node-card-top">
                      <span className="node-badge">STEP {node.step}</span>
                      <span className={`node-status-chip ${node.status.toLowerCase()}`}>
                        {node.status}
                      </span>
                    </div>

                    <div className="node-icon-header">
                      {node.logo ? (
                        <div className="node-logo-circle">
                          <img src={node.logo} alt={node.company} />
                        </div>
                      ) : (
                        <div className="node-logo-circle target-logo">
                          <Sparkles size={20} />
                        </div>
                      )}
                      <div className="node-title-group">
                        <h4 className="node-company">{node.company}</h4>
                        <span className="node-role">{node.role}</span>
                      </div>
                    </div>

                    <div className="node-period-badge">
                      <span>{node.period}</span>
                    </div>

                    <div className="node-view-trigger">
                      <span>{isActive ? "Viewing Node Data" : "Inspect Milestone"}</span>
                      <ArrowRight size={13} />
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>

          {/* Active Node Detailed Inspection Drawer */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeNode.id}
              className="flowchart-inspector-panel"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
            >
              <div className="inspector-top-meta">
                <div className="inspector-title-area">
                  <span className="inspector-phase">{activeNode.phase}</span>
                  <h3 className="inspector-heading">
                    {activeNode.role} <span className="at-sign">@</span> {activeNode.company}
                  </h3>
                  <div className="inspector-badges-row">
                    <span className="info-badge">
                      <MapPin size={13} /> {activeNode.location}
                    </span>
                    <span className="info-badge duration">
                      {activeNode.duration}
                    </span>
                    <span className="info-badge type">
                      {activeNode.type}
                    </span>
                  </div>
                </div>

                {/* Actions for credentials */}
                {activeNode.certUrl && (
                  <div className="inspector-actions">
                    <a
                      href={activeNode.certUrl}
                      download
                      className="inspector-action-btn primary"
                    >
                      <Download size={14} />
                      <span>Download Certificate</span>
                    </a>
                    <a
                      href={activeNode.offerUrl}
                      download
                      className="inspector-action-btn ghost"
                    >
                      <ArrowUpRight size={14} />
                      <span>Offer Letter</span>
                    </a>
                  </div>
                )}
              </div>

              {/* Description & Impact Summary */}
              <div className="inspector-body-grid">
                <div className="inspector-desc-box">
                  <span className="inspector-box-label">CORE RESPONSIBILITIES & SCOPE</span>
                  <p className="inspector-desc-text">{activeNode.desc}</p>
                  <p className="inspector-highlight-text">
                    <strong>Key Milestone:</strong> {activeNode.highlights}
                  </p>
                </div>

                <div className="inspector-skills-box">
                  <span className="inspector-box-label">COMPETENCIES & DOMAIN TOOLS</span>
                  <div className="inspector-tags-wrap">
                    {activeNode.skills.map((skill) => (
                      <span key={skill} className="inspector-skill-tag">
                        <CheckCircle2 size={13} />
                        <span>{skill}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Experience;
