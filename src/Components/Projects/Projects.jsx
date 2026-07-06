import React, { useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./Projects.css";
import { assets } from "../../assets/assets";

const projects = [
  {
    title: "Kisan AI Platform",
    desc: "AI-driven agriculture platform helping farmers with smart tools, insights, and community support.",
    image: assets.Kisan,
    live: "https://kisanai.vercel.app",
    source: "https://github.com/alwaysashumishra/kisan-ai",
    tech: ["React", "Node.js", "MongoDB", "AI/ML"],
    accent: "Smart farming companion",
  },
  {
    title: "Rasoi.run",
    desc: "A modern food ordering platform enabling users to explore restaurants, browse menus, and place orders seamlessly.",
    image: assets.food,
    live: "https://rasoirun.vercel.app",
    source: "https://github.com/alwaysashumishra/Rasoi.Run",
    tech: ["React", "CSS", "JavaScript", "UI/UX"],
    accent: "Fast food ordering flow",
  },
  {
    title: "Vedix",
    desc: "A conversational AI assistant designed to answer queries, assist users, and provide intelligent responses in real time.",
    image: assets.vedix,
    live: "http://vercel-one.vercel.app",
    source: "https://github.com/alwaysashumishra/Lexi.Ai--Ai-Driven-Conversational-PLatform-",
    tech: ["React", "JavaScript", "API", "AI"],
    accent: "Chat-first AI experience",
  },
  {
    title: "Premium Landing Page",
    desc: "A modern animated landing page with smooth UI, premium card design, and responsive layout built for high-conversion products.",
    image: assets.landing1,
    live: "https://your-landing-page-link.vercel.app",
    source: "https://github.com/your-username/landing-page",
    tech: ["React", "Framer Motion", "CSS", "UI/UX"],
    accent: "High-conversion storytelling",
  },
];

const pageVariants = {
  enter: (direction) => ({
    opacity: 0,
    rotateY: direction > 0 ? -16 : 16,
    x: direction > 0 ? 36 : -36,
  }),
  center: {
    opacity: 1,
    rotateY: 0,
    x: 0,
  },
  exit: (direction) => ({
    opacity: 0,
    rotateY: direction > 0 ? 16 : -16,
    x: direction > 0 ? -36 : 36,
  }),
};

const Projects = () => {
  const [bookOpen, setBookOpen] = useState(false);
  const [activePage, setActivePage] = useState(-1);
  const [direction, setDirection] = useState(1);
  const [pencilHeld, setPencilHeld] = useState(false);
  const bookShellRef = useRef(null);

  const isIndexPage = activePage === -1;
  const currentProject = isIndexPage ? null : projects[activePage];
  const progressLabel = useMemo(
    () => `${String(activePage + 1).padStart(2, "0")} / ${String(projects.length).padStart(2, "0")}`,
    [activePage]
  );

  const toggleBook = () => {
    setBookOpen((current) => {
      if (current) {
        return false;
      }

      setActivePage(-1);
      return true;
    });
  };

  const goToPage = (nextPage) => {
    if (nextPage === activePage || nextPage < -1 || nextPage >= projects.length) {
      return;
    }

    setDirection(nextPage > activePage ? 1 : -1);
    setActivePage(nextPage);
    setBookOpen(true);
  };

  const goNext = () => goToPage(activePage + 1);
  const goPrev = () => goToPage(activePage - 1);

  return (
    <section className="projects-section">
      <motion.div
        className="projects-copy"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="projects-kicker">Portfolio chapter</p>
        <h2 className="projects-heading">
          Open the project book and flip through what I have built.
          <span className="accent-line" />
        </h2>
        <p className="projects-intro">
          The cover opens into an index first, then every title opens its own project page.
        </p>
      </motion.div>

      <motion.div
        ref={bookShellRef}
        className={`projects-book-shell ${bookOpen ? "is-open" : ""} ${pencilHeld ? "is-pencil-held" : ""}`}
        initial={{ opacity: 0, y: 48 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="book-glow" aria-hidden="true" />

        <motion.button
          type="button"
          className="book-pencil"
          aria-label="Pick up pencil"
          drag
          dragConstraints={bookShellRef}
          dragElastic={0.2}
          dragMomentum={false}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 1.08, rotate: -6 }}
          onDragStart={() => setPencilHeld(true)}
          onDragEnd={() => setPencilHeld(false)}
          onPointerDown={() => setPencilHeld(true)}
          onPointerUp={() => setPencilHeld(false)}
        >
          <span className="pencil-light" aria-hidden="true" />
          <span className="pencil-eraser" />
          <span className="pencil-band" />
          <span className="pencil-body" />
          <span className="pencil-tip" />
          <span className="pencil-lead" />
        </motion.button>

        <div className="book-stage">
          <motion.button
            type="button"
            className="book-cover"
            onClick={toggleBook}
            animate={{ rotateY: bookOpen ? -164 : 0 }}
            transition={{ duration: 1.05, ease: [0.16, 1, 0.3, 1] }}
            whileHover={!bookOpen ? { rotateY: -12 } : undefined}
          >
            <span className="cover-shine" aria-hidden="true" />
            <span className="cover-label">Projects</span>
            <span className="cover-title">Selected Work</span>
            <span className="cover-subtitle">{bookOpen ? "Click to close the book" : "Click to open the book"}</span>
          </motion.button>

          <div className="book-pages">
            <div className="book-spine" aria-hidden="true" />

            <AnimatePresence mode="wait" custom={direction}>
              {isIndexPage ? (
                <motion.article
                  key="project-index"
                  className="book-spread index-spread"
                  custom={direction}
                  variants={pageVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="book-page index-page index-copy-page">
                    <p className="page-number">Index</p>
                    <p className="page-accent">Project directory</p>
                    <h3>Project Index</h3>
                    <p className="page-description">
                      Choose any title from the next page to open its full project story inside this book.
                    </p>
                  </div>

                  <div className="book-page index-page index-list-page">
                    <div className="project-index-list">
                      {projects.map((project, index) => (
                        <button key={project.title} type="button" onClick={() => goToPage(index)}>
                          <span>{String(index + 1).padStart(2, "0")}</span>
                          <strong>{project.title}</strong>
                          <small>{project.accent}</small>
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ) : (
                <motion.article
                  key={currentProject.title}
                  className="book-spread"
                  custom={direction}
                  variants={pageVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="book-page left-page">
                    <p className="page-number">{progressLabel}</p>
                    <p className="page-accent">{currentProject.accent}</p>
                    <h3>{currentProject.title}</h3>
                    <p className="page-description">{currentProject.desc}</p>

                    <div className="tech-stack">
                      {currentProject.tech.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>

                    <div className="project-actions">
                      <button type="button" onClick={() => window.open(currentProject.live, "_blank")}>Live Preview</button>
                      <button
                        type="button"
                        className="ghost-btn"
                        onClick={() => window.open(currentProject.source, "_blank")}
                      >
                        Source Code
                      </button>
                    </div>
                  </div>

                  <div className="book-page right-page">
                    <div className="project-visual">
                      <img src={currentProject.image} alt={currentProject.title} />
                    </div>
                    <p className="page-note">Flip the page arrows to explore the next build in the collection.</p>
                  </div>
                </motion.article>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="book-controls">
          <button type="button" onClick={goPrev} disabled={!bookOpen || activePage === -1}>
            Previous page
          </button>
          <div className="book-progress-dots" aria-label="Project pages">
            <button
              type="button"
              className={isIndexPage ? "is-active" : ""}
              aria-label="Open project index"
              onClick={() => goToPage(-1)}
              disabled={!bookOpen}
            />
            {projects.map((project, index) => (
              <button
                key={project.title}
                type="button"
                className={index === activePage ? "is-active" : ""}
                aria-label={`Open ${project.title}`}
                onClick={() => goToPage(index)}
                disabled={!bookOpen}
              />
            ))}
          </div>
          <button type="button" onClick={toggleBook}>
            {bookOpen ? "Close book" : "Open book"}
          </button>
          <button type="button" onClick={goNext} disabled={!bookOpen || activePage === projects.length - 1}>
            Next page
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
