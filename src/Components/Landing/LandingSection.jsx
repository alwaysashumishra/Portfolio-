import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ExternalLink, Globe, Lock, Sparkles, Layers, Zap, CheckCircle2 } from "lucide-react";
import "./LandingSection.css";
import { assets } from "../../assets/assets";

const landingProjects = [
  {
    id: "premier",
    num: "01",
    badge: "AGENCY SHOWCASE",
    title: "Premier Agency",
    tagline: "Fashion, Model & Film Production Landing Experience",
    desc: "An avant-garde high-converting landing page built for modern creative agencies, modeling portfolios, and film studios. Engineered with fluid media headers, modular grid hierarchy, and editorial typography.",
    image: assets.landing1,
    url: "https://premier-theta.vercel.app/",
    domain: "premier-theta.vercel.app",
    role: "Frontend Architecture & UI Design",
    tech: ["React.js", "Modern CSS", "Framer Motion", "Vite", "Vercel"],
    highlights: [
      { label: "Performance", value: "98 Lighthouse Score" },
      { label: "Interaction", value: "Fluid Micro-motion" },
      { label: "Layout", value: "Modular Editorial Grid" },
      { label: "Optimization", value: "Fast First Contentful Paint" },
    ],
    accent: "rgba(226, 42, 42, 0.12)",
    accentText: "#e22a2a",
  },
  {
    id: "minimal",
    num: "02",
    badge: "STARTUP EDITORIAL",
    title: "Minimal Editorial Studio",
    tagline: "Monochrome Architectural Startup Conversion UI",
    desc: "A minimalist, content-first startup landing page designed around the philosophy 'Experiences Over Things Always'. Crafted with high-contrast typography, asymmetrical split-screen layouts, and clean conversion funnels.",
    image: assets.landing2,
    url: "https://remon-lyart.vercel.app/",
    domain: "remon-lyart.vercel.app",
    role: "Frontend Architecture & UI Design",
    tech: ["React.js", "Tailwind CSS", "JavaScript", "Responsive Design"],
    highlights: [
      { label: "Aesthetic", value: "Swiss High-Contrast" },
      { label: "Load Time", value: "< 0.6s Initial Paint" },
      { label: "Architecture", value: "Component-Driven" },
      { label: "Typography", value: "Editorial Display Pairing" },
    ],
    accent: "rgba(17, 17, 17, 0.1)",
    accentText: "#111111",
  },
];

const LandingSection = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const current = landingProjects[activeIdx];

  return (
    <section className="editorial-landing-section" id="landing">
      <div className="editorial-landing-container">
        {/* Section Header */}
        <div className="landing-header-row">
          <div>
            <div className="section-editorial-badge">[ 04 ] • SHOWCASE STAGE</div>
            <h2 className="landing-editorial-heading">
              Landing <span className="serif-italic highlight-red">Pages</span>
            </h2>
          </div>
          <div className="landing-header-right">
            <p className="landing-editorial-sub">
              Interactive high-conversion interfaces and bespoke brand web architectures engineered for modern startups and agencies.
            </p>

            {/* Quick Switcher Tabs */}
            <div className="landing-switcher-tabs" role="tablist">
              {landingProjects.map((p, idx) => (
                <button
                  key={p.id}
                  type="button"
                  role="tab"
                  aria-selected={activeIdx === idx}
                  className={`landing-tab-btn ${activeIdx === idx ? "is-active" : ""}`}
                  onClick={() => setActiveIdx(idx)}
                >
                  <span className="tab-num">{p.num}</span>
                  <span className="tab-name">{p.title}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Dynamic Showcase Stage */}
        <div className="landing-stage-wrapper">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              className="landing-stage-grid"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Left Column: Browser Mockup Viewport */}
              <div className="landing-mockup-column">
                <div
                  className="safari-browser-frame"
                  onClick={() => window.open(current.url, "_blank")}
                  role="button"
                  tabIndex={0}
                  title="Click to launch live site"
                >
                  {/* macOS Safari Header Bar */}
                  <div className="safari-header-bar">
                    <div className="safari-traffic-lights">
                      <span className="light light-close" />
                      <span className="light light-min" />
                      <span className="light light-max" />
                    </div>

                    <div className="safari-address-bar">
                      <Lock size={12} className="safari-lock-icon" />
                      <span className="safari-domain-text">https://{current.domain}</span>
                    </div>

                    <div className="safari-live-indicator">
                      <span className="live-dot" />
                      <span className="live-text">LIVE</span>
                    </div>
                  </div>

                  {/* Browser Screen Content */}
                  <div className="safari-screen-body">
                    <img
                      src={current.image}
                      alt={current.title}
                      className="safari-screen-image"
                      loading="lazy"
                    />

                    {/* Interactive Hover Overlay */}
                    <div className="safari-screen-overlay">
                      <div className="overlay-pill">
                        <span>Launch Live Website</span>
                        <ArrowUpRight size={16} />
                      </div>
                    </div>
                  </div>

                  {/* Browser Frame Bottom Bar */}
                  <div className="safari-footer-bar">
                    <span className="safari-footer-info">
                      <Layers size={13} /> {current.role}
                    </span>
                    <span className="safari-footer-cta">
                      Open Live Site <ExternalLink size={12} />
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Editorial Architectural Dossier */}
              <div className="landing-dossier-column">
                <div className="dossier-card">
                  {/* Category Badge & Index */}
                  <div className="dossier-header-meta">
                    <span className="dossier-badge">{current.badge}</span>
                    <span className="dossier-index">{current.num} / 02</span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="dossier-title">{current.title}</h3>
                  <p className="dossier-tagline">{current.tagline}</p>

                  <p className="dossier-desc">{current.desc}</p>

                  {/* Architectural Highlights Grid */}
                  <div className="dossier-specs-grid">
                    {current.highlights.map((h, i) => (
                      <div key={i} className="spec-item">
                        <span className="spec-label">{h.label}</span>
                        <span className="spec-val">
                          <CheckCircle2 size={13} className="spec-icon" />
                          {h.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="dossier-tech-row">
                    <span className="tech-heading">ENGINEERING STACK:</span>
                    <div className="tech-pills-list">
                      {current.tech.map((t) => (
                        <span key={t} className="tech-pill">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Row */}
                  <div className="dossier-action-row">
                    <a
                      href={current.url}
                      target="_blank"
                      rel="noreferrer"
                      className="dossier-primary-btn"
                    >
                      <span>Explore Live Deployment</span>
                      <ArrowUpRight size={18} />
                    </a>

                    <button
                      type="button"
                      className="dossier-switch-btn"
                      onClick={() => setActiveIdx((activeIdx + 1) % landingProjects.length)}
                    >
                      <span>Next Showcase →</span>
                    </button>
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

export default LandingSection;