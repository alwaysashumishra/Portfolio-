import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./NotesCourse.css";
import { courses } from "../../Data/Course";


const NotesCourse = () => {
  return (
    <section className="course-dark-section" id="notes">
      <div className="course-header">
        <h2>Premium Courses</h2>
        <p>Documentation based courses with roadmap & doubt support</p>
      </div>

      <div className="course-grid">
        {courses.map((c, i) => (
          <motion.div
            key={i}
            className="course-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            whileHover={{ y: -10 }}
          >
            {/* Thumbnail */}
            <div className="course-thumb">
              <span>&lt;/&gt;</span>
            </div>

            {/* Tags */}
            <div className="course-tags">
              {c.tags.map((t, idx) => (
                <span key={idx}>{t}</span>
              ))}
            </div>

            <h3>{c.title}</h3>

            {/* Price */}
            <div className="course-price">
              <span className="new">{c.price}</span>
              <span className="old">{c.oldPrice}</span>
              <span className="off">{c.off}</span>
            </div>

            <Link to={`/course/${c.slug}`}>
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="course-btn"
  >
    Check Course →
  </motion.button>
</Link>

          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default NotesCourse;
