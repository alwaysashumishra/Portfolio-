import React from "react";
import "./Experience.css";
import { assets } from "../../assets/assets";

const Experience = () => {
  return (
    <section className="timeline-section">
      <h2 className="timeline-heading">Experience
          <span className="accent-line" />
      </h2>

      <div className="timeline">

        {/* IIT Kanpur */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>

          <div className="timeline-card">
            <img src={assets.iit} alt="IIT Kanpur" className="timeline-logo" />

            <div className="timeline-content">
              <h3>Campus Ambassador</h3>
              <p className="company">
                Indian Institute of Technology, Kanpur · Part-time
              </p>
              <span className="duration">
                Aug 2025 – Nov 2025 · 4 mos · Remote
              </span>

              <p className="desc">
                Represented IIT Kanpur through student outreach, social media
                engagement, and leadership initiatives.
              </p>
                <div className="timeline-actions">
                <a
                  href="/documents/edunet-certificate.pdf"
                  download
                  className="timeline-btn"
                >
                  Certificate
                </a>
                <a
                  href="/documents/edunet-offer-letter.pdf"
                  download
                  className="timeline-btn"
                >
                  Offer Letter
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Unstop */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>

          <div className="timeline-card">
            <img src={assets.unstop} alt="Unstop" className="timeline-logo" />

            <div className="timeline-content">
              <h3>Campus Ambassador</h3>
              <p className="company">Unstop · Part-time</p>
              <span className="duration">
                Aug 2025 – Oct 2025 · 3 mos · Gautam Buddha Nagar, UP
              </span>

              <p className="desc">
                Promoted hackathons, competitions, and opportunities among
                students, increasing participation and visibility.
              </p>
                <div className="timeline-actions">
                <a
                  href="/documents/edunet-certificate.pdf"
                  download
                  className="timeline-btn"
                >
                  Certificate
                </a>
                <a
                  href="/documents/edunet-offer-letter.pdf"
                  download
                  className="timeline-btn"
                >
                  Offer Letter
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Edunet */}
        <div className="timeline-item">
          <div className="timeline-dot highlight"></div>

          <div className="timeline-card">
            <img src={assets.edunet} alt="Edunet Foundation" className="timeline-logo" />

            <div className="timeline-content">
              <h3>Artificial Intelligence Intern</h3>
              <p className="company">Edunet Foundation · Internship</p>
              <span className="duration">
                Nov 2024 – Jan 2025 · 3 mos · Remote
              </span>

              <p className="desc">
                Worked on Python, Machine Learning concepts, and hands-on AI
                projects under guided mentorship.
              </p>

              <div className="timeline-actions">
                <a
                  href="/documents/edunet-certificate.pdf"
                  download
                  className="timeline-btn"
                >
                  Certificate
                </a>
                <a
                  href="/documents/edunet-offer-letter.pdf"
                  download
                  className="timeline-btn"
                >
                  Offer Letter
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
