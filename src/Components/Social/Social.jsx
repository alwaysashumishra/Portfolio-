import React from "react";
import "./Social.css";
import { motion } from "framer-motion";
import { assets } from "../../assets/assets";

const socials = [
  {
    name: "LeetCode",
    link: "https://leetcode.com/u/Ashutosh12mishra/",
    img: assets.leetcode,
  },
  {
    name: "GitHub",
    link: "https://github.com/alwaysashumishra",
    img: assets.github,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/ashutosh-mishra-am-108880282/",
    img: assets.linkedin,
  },
];

const Social = () => {
  return (
    <section className="social-wrap">
     <motion.h2 className="connect-heading">
  Let’s connect
  <span className="connect-line" />
</motion.h2>

      <div className="social-panels">
        {socials.map((item, i) => (
          <motion.div
            key={i}
            className="social-panel"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            whileHover={{ y: -12 }}
            onClick={() => window.open(item.link, "_blank")}
          >
            <img src={item.img} alt={item.name} />
            <div className="panel-overlay">
              <span>{item.name}</span>
              <small>View Profile →</small>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Social;
