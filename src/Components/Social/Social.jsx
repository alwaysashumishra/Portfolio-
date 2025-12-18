import React from "react";
import "./Social.css";
import { motion } from "framer-motion";
import { assets } from "../../assets/assets";

const socials = [
  {
    name: "LeetCode",
    link: "https://leetcode.com/u/Ashutosh12mishra/",
    img: "https://miro.medium.com/0*xJCLQQRZv3XFMUd1",
  },
  {
    name: "GitHub",
    link: "https://github.com/alwaysashumishra",
    img: "https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/ashutosh-mishra-am-108880282/",
    img: "https://blog.boon.so/wp-content/uploads/2024/03/LinkedIn-Logo-2-1024x768.jpg",
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
