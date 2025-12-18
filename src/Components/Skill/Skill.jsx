import React from "react";
import "./Skill.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaDatabase,
} from "react-icons/fa";
import { SiTailwindcss, SiSpringboot, SiExpress } from "react-icons/si";

const Skill = () => {
  const frontend = [
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "JavaScript", icon: <span className="js">JS</span> },
    { name: "React", icon: <FaReact /> },
  ];

  const backend = [
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express", icon: <SiExpress /> },
    { name: "Spring Boot", icon: <SiSpringboot /> },
    { name: "SQL / Database", icon: <FaDatabase /> },
  ];

  return (
    <section className="skills">
      <div className="skills-head">
        <h2>What I’m good at</h2>
        <p>Technologies I use to craft clean and scalable products.</p>
      </div>

      <div className="skills-groups">
        <div className="skills-col">
          <h3>Frontend</h3>
          <div className="skills-grid">
            {frontend.map((s, i) => (
              <div className="skill-card sexy" key={i}>
                <div className="icon">{s.icon}</div>
                <span>{s.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-col">
          <h3>Backend</h3>
          <div className="skills-grid">
            {backend.map((s, i) => (
              <div className="skill-card sexy" key={i}>
                <div className="icon">{s.icon}</div>
                <span>{s.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
