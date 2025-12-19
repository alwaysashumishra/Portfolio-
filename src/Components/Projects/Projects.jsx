import React from "react";
import "./Projects.css";
import { motion } from "framer-motion";
import { assets } from "../../assets/assets";

const projects = [
  {
    title: "Kisan AI Platform",
    desc: "AI-driven agriculture platform helping farmers with smart tools, insights, and community support.",
    image: assets.Kisan,
    live: "https://kisanai.vercel.app",
    source: "https://github.com/alwaysashumishra/kisan-ai",
    tech: ["React", "Node.js", "MongoDB", "AI/ML"],
  },
  {
    title: "Rasoi.run",
    desc: "A modern food ordering platform enabling users to explore restaurants, browse menus, and place orders seamlessly.",
    image: assets.food,
    live: "https://rasoirun.vercel.app",
    source: "https://github.com/alwaysashumishra/Rasoi.Run",
    tech:  ["React", "CSS", "JavaScript", "UI/UX"],
  },
  {
    title: "Vedix",
    desc: "A conversational AI assistant designed to answer queries, assist users, and provide intelligent responses in real time.",
    image: assets.vedix,
    live: "http://cloneofi8.vercel.app",
    source: "https://github.com/alwaysashumishra/Lexi.Ai--Ai-Driven-Conversational-PLatform-",
    tech:  ["React", "JavaScript", "API", "AI"],
  },
];

const Projects = () => {
  return (
    <section className="projects-section">
       <motion.h2 className="projects-heading">
  Things I’ve built
  <span className="accent-line" />
</motion.h2>


      <div className="projects-grid">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            className="project-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            onClick={() => window.open(p.live, "_blank")}
          >
            <div className="project-image">
              <img src={p.image} alt={p.title} />
            </div>

            <div className="project-content">
              <h3>{p.title}</h3>
              <p>{p.desc}</p>

              <div className="tech-stack">
                {p.tech.map((t, idx) => (
                  <span key={idx}>{t}</span>
                ))}
              </div>

              <div className="project-actions">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(p.source, "_blank");
                  }}
                >
                  Source Code
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
