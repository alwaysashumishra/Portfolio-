import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Code2, Sparkles, Terminal } from "lucide-react";
import "./Header.css";

const Header = () => {
  const heroRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Parallax mouse interaction for the circular developer disc
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothY, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-8, 8]);
  const translateX = useTransform(smoothX, [-0.5, 0.5], [-14, 14]);
  const translateY = useTransform(smoothY, [-0.5, 0.5], [-14, 14]);

  const handleMouseMove = (e) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const scrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={heroRef}
      className="editorial-hero"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="editorial-hero-container">
        {/* Left Side: "VIEW THE BEST PORTFOLIO ->" */}
        <motion.div
          className="hero-side-callout"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          onClick={scrollToProjects}
          role="button"
          tabIndex={0}
        >
          <span className="callout-label">VIEW THE BEST</span>
          <span className="callout-action">
            PORTFOLIO <span className="callout-arrow">→</span>
          </span>
        </motion.div>

        {/* Central Composition: Typography & Overlapping Visual Disc */}
        <div className="hero-centerpiece">
          {/* Circular Visual Disc: Modern UI / Tech Geometry instead of art */}
          <motion.div
            className="hero-tech-disc-wrap"
            style={{
              x: translateX,
              y: translateY,
              rotateX,
              rotateY,
            }}
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className={`hero-tech-disc ${isHovered ? "is-hovered" : ""}`}>
              {/* Geometric Code / Tech Disc */}
              <div className="disc-tech-pattern">
                <div className="disc-glow-core" />
                <div className="disc-ring ring-1" />
                <div className="disc-ring ring-2" />
                <div className="disc-ring ring-3" />
                <div className="disc-crosshair cross-h" />
                <div className="disc-crosshair cross-v" />
                <div className="disc-code-chip">
                  <Code2 size={24} />
                  <span>&lt;react /&gt;</span>
                </div>
                <div className="disc-stats-badge">
                  <Terminal size={14} />
                  <span>UI ARCHITECT</span>
                </div>
              </div>
            </div>
            <div className="disc-ambient-halo" />
          </motion.div>

          {/* Real Content in Editorial Typography */}
          <div className="hero-typography-container">
            <motion.p
              className="hero-kicker-tag"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              FRONTEND DEVELOPER — UI ENGINEER
            </motion.p>

            <h1 className="hero-editorial-title">
              <motion.span
                className="title-row row-1"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                I Design
              </motion.span>

              <motion.span
                className="title-row row-2"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="text-normal">pure </span>
                <span className="text-highlight-serif">Interfaces</span>
              </motion.span>

              <motion.span
                className="title-row row-3"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.34, ease: [0.16, 1, 0.3, 1] }}
              >
                I Build
              </motion.span>

              <motion.span
                className="title-row row-4"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.46, ease: [0.16, 1, 0.3, 1] }}
              >
                Experiences
              </motion.span>
            </h1>

            {/* Original descriptions */}
            <motion.div
              className="hero-desc-block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.55 }}
            >
              <p className="hero-main-desc">
                Specialised in crafting modern, performant and visually refined web applications
                using React, JavaScript and component-driven design systems.
              </p>

              <p className="hero-quote-desc">
                “Great interfaces do not shout. They guide.”
              </p>

              <div className="hero-actions-group">
                <button
                  type="button"
                  className="hero-primary-btn"
                  onClick={scrollToProjects}
                >
                  <span>View My Work</span>
                  <ArrowRight size={16} />
                </button>
                <button
                  type="button"
                  className="hero-ghost-btn"
                  onClick={scrollToContact}
                >
                  <span>Book a Call</span>
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Right: Real Social Links */}
        <motion.div
          className="hero-social-stack"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <a
            href="https://leetcode.com/u/Ashutosh12mishra/"
            target="_blank"
            rel="noreferrer"
            className="social-stack-item"
          >
            <span className="social-label">LEETCODE</span>
            <span className="social-arrow">↗</span>
          </a>

          <a
            href="https://www.linkedin.com/in/ashutosh-mishra-am-108880282/"
            target="_blank"
            rel="noreferrer"
            className="social-stack-item"
          >
            <span className="social-label">LINKEDIN</span>
            <span className="social-arrow">↗</span>
          </a>

          <a
            href="https://github.com/alwaysashumishra"
            target="_blank"
            rel="noreferrer"
            className="social-stack-item"
          >
            <span className="social-label">GITHUB</span>
            <span className="social-arrow">↗</span>
          </a>

          <a
            href="mailto:ashutoshmmishra15@gmail.com"
            className="social-stack-item"
          >
            <span className="social-label">EMAIL ME</span>
            <span className="social-arrow">↗</span>
          </a>
        </motion.div>
      </div>

      {/* Editorial footer meta info */}
      <div className="hero-footer-meta">
        <span className="meta-index">ASHUTOSH MISHRA • PORTFOLIO</span>
        <span className="meta-desc">
          React.js • Next.js • Tailwind CSS • UI Systems • AI & ML
        </span>
        <span className="meta-location">GALGOTIAS UNIVERSITY</span>
      </div>
    </section>
  );
};

export default Header;
