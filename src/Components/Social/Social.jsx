import React from "react";
import "./Social.css";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const socials = [
  {
    name: "LeetCode",
    handle: "@Ashutosh12mishra",
    desc: "400+ Algorithmic & Data Structure problems solved with optimal time-space complexity.",
    link: "https://leetcode.com/u/Ashutosh12mishra/",
    icon: <SiLeetcode />,
  },
  {
    name: "GitHub",
    handle: "@alwaysashumishra",
    desc: "Open source contributions, frontend component systems, AI models, and repositories.",
    link: "https://github.com/alwaysashumishra",
    icon: <FaGithub />,
  },
  {
    name: "LinkedIn",
    handle: "Ashutosh Mishra",
    desc: "Professional career updates, campus ambassador milestones, and engineering notes.",
    link: "https://www.linkedin.com/in/ashutosh-mishra-am-108880282/",
    icon: <FaLinkedin />,
  },
];

const Social = () => {
  return (
    <section className="editorial-social-section" id="social">
      <div className="editorial-social-container">
        {/* Header */}
        <div className="social-header-row">
          <div>
            <div className="section-editorial-badge">[ 06 ] • CONNECT</div>
            <h2 className="social-editorial-heading">
              Let&apos;s <span className="serif-italic highlight-red">Connect</span>
            </h2>
          </div>
          <p className="social-editorial-sub">
            Find me on competitive programming, open source code repositories, and professional networks.
          </p>
        </div>

        {/* Panels */}
        <div className="social-cards-grid">
          {socials.map((item, i) => (
            <motion.div
              key={item.name}
              className="social-editorial-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              onClick={() => window.open(item.link, "_blank")}
            >
              <div className="card-top-meta">
                <span className="card-icon">{item.icon}</span>
              </div>

              <div className="card-body-meta">
                <h3 className="card-platform">{item.name}</h3>
                <span className="card-handle">{item.handle}</span>
                <p className="card-desc">{item.desc}</p>
              </div>

              <div className="card-footer-action">
                <span>View Profile</span>
                <ArrowUpRight size={16} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Social;
