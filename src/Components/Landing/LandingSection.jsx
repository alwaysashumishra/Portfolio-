import React from "react";
import { motion } from "framer-motion";
import "./LandingSection.css";
import { assets } from "../../assets/assets";

const landingPages = [
  {
    title: "Premier Landing",
    desc: "Modern high-converting landing page with smooth animations and clean UI design.",
    image: assets.landing1,
    link: "https://premier-theta.vercel.app/",
  },
  {
    title: "Startup Landing UI",
    desc: "Minimal and elegant startup landing page focused on conversion and performance.",
    image: assets.landing2,
    link: "https://remon-lyart.vercel.app/",
  }
];

const LandingSection = () => {
  return (
    <section className="landing-section">
      <motion.h2
        className="landing-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        Landing Pages
        <span className="accent-line" />
      </motion.h2>

      <div className="landing-grid">
        {landingPages.map((item, i) => (
          <motion.div
            key={i}
            className="landing-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            onClick={() => window.open(item.link, "_blank")}
          >
            <div className="landing-img">
              <img src={item.image} alt={item.title} />
            </div>

            <div className="landing-content">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <button>View Project</button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default LandingSection;