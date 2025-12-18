import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import "./Header.css";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.18 }
  }
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { ease: "easeOut", duration: 0.7 } }
};

const Header = () => {
  return (
    <header className="cinema-hero">
      {/* ambient glows */}
      <div className="glow g1" />
      <div className="glow g2" />
      <div className="glow g3" />

      <motion.div
        className="cinema-content"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.p className="hero-tag" variants={item}>
          FRONTEND DEVELOPER • UI ENGINEER
        </motion.p>

        <motion.h1 className="hero-title" variants={item}>
          I design <span>interfaces</span>
          <br />
          I build <span>experiences</span>
          <br />
          I ship <span>impact</span>
        </motion.h1>

        <motion.p className="hero-desc" variants={item}>
          Specialised in crafting modern, performant and visually
          refined web applications using React, JavaScript and
          component-driven design systems.
        </motion.p>

        <motion.p className="hero-desc muted" variants={item}>
          From clean UI architecture to seamless user journeys —
          I focus on details that make products feel effortless.
        </motion.p>

        <motion.div className="hero-actions" variants={item}>
          <button className="hero-btn">
            View My Work <ArrowRight size={18} />
          </button>
        </motion.div>

        <motion.p className="hero-quote" variants={item}>
          “Great interfaces don’t shout — they guide.”
        </motion.p>
      </motion.div>
    </header>
  );
};

export default Header;
