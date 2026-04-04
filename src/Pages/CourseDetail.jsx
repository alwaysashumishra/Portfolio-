import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { courses } from "../Data/Course";
import Roadmap from "../Components/CourseRoadmap/Roadmap";
import DoubtInfo from "../Components/DoubtInfo/DoubtInfo";
import "./CourseDetail.css";

const CourseDetail = () => {
  const { slug } = useParams();
  const course = courses.find((c) => c.slug === slug);

  if (!course) {
    return (
      <section className="cd-page">
        <h2>Course not found</h2>
      </section>
    );
  }

  return (
    <section className="cd-page">

      {/* HERO */}
      <motion.div
        className="cd-hero"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="cd-label">COURSE DOCUMENTATION</span>
        <h1>{course.title}</h1>
        <p>{course.description}</p>
      </motion.div>

      {/* PRICE STRIP */}
      <motion.div
        className="cd-price-strip"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <span className="cd-price">{course.price}</span>
        <button className="notes-btn">Enroll Now</button>
      </motion.div>

      {/* CONTENT */}
      <div className="cd-content">

        {/* LEARN */}
        <section className="cd-section">
          <h3>What you will learn</h3>

          <div className="cd-list">
            {course.modules.map((item, i) => (
              <motion.div
                key={i}
                className="cd-list-item"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <span>{i + 1}</span>
                <p>{item}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ROADMAP */}
        <section className="cd-section">
          <h3>Learning Flow</h3>
          <Roadmap steps={course.roadmap} />
        </section>

        {/* DOUBT */}
        <section className="cd-section">
          <DoubtInfo />
        </section>

      </div>

      {/* FINAL CTA */}
      <motion.div
        className="cd-final-cta"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <h3>Ready to start?</h3>
        <p>Lifetime access · Documentation · Doubt support</p>
        <button className="notes-btn">
          Enroll for {course.price}
        </button>
      </motion.div>

    </section>
  );
};

export default CourseDetail;
