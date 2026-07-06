import React, { useRef, useState } from "react";
import "./About.css";

const PROFILE_IMAGE = "https://assets.leetcode.com/users/Ashutosh12mishra/avatar_1773464365.png";

const About = () => {
  const woodRef = useRef(null);
  const [isLit, setIsLit] = useState(false);
  const [torchPosition, setTorchPosition] = useState({ x: 0, y: 0 });
  const [isDraggingTorch, setIsDraggingTorch] = useState(false);

  const checkIgnition = (clientX, clientY) => {
    const woodBox = woodRef.current?.getBoundingClientRect();

    if (!woodBox) {
      return;
    }

    const touchedWood =
      clientX >= woodBox.left &&
      clientX <= woodBox.right &&
      clientY >= woodBox.top &&
      clientY <= woodBox.bottom;

    if (touchedWood) {
      setIsLit(true);
      setIsDraggingTorch(false);
      setTorchPosition({ x: 0, y: 0 });
    }
  };

  const handleTorchMove = (event) => {
    if (!isDraggingTorch || isLit) {
      return;
    }

    const containerBox = event.currentTarget.getBoundingClientRect();
    const nextX = event.clientX - containerBox.right + 70;
    const nextY = event.clientY - containerBox.top - 270;

    setTorchPosition({ x: nextX, y: nextY });
    checkIgnition(event.clientX, event.clientY);
  };

  const stopTorchDrag = (event) => {
    if (!isDraggingTorch || isLit) {
      return;
    }

    checkIgnition(event.clientX, event.clientY);
    setIsDraggingTorch(false);
    setTorchPosition({ x: 0, y: 0 });
  };

  const igniteWithClick = () => setIsLit(true);

  return (
    <div className="about-container">
      <div className="left">
        <h1>ABOUT ME</h1>
        <p className="text-lg leading-relaxed text-transparent bg-clip-text bg-gradient-to-r from-white via-pink-400 to-purple-200">
          Hi, I&apos;m Ashutosh Mishra, a passionate Frontend Developer currently pursuing B.Tech in Computer Science (AI & ML) from Galgotias University.
          <br />
          <br />
          I build responsive, user-friendly web applications using React.js, Next.js, HTML, CSS, and JavaScript. My key projects, Lexi.AI and a Food Delivery Web App, showcase my creativity and technical precision.
          <br />
          <br />
          I love crafting intuitive digital experiences and integrating APIs to make the web smarter and more engaging. As an Unstop Campus Ambassador, I also promote innovation and real-world learning among peers.
        </p>
      </div>

      <div className="right">
        <div
          className={`campfire-profile ${isLit ? "is-lit" : ""} ${isDraggingTorch ? "is-dragging" : ""}`}
          onPointerMove={handleTorchMove}
          onPointerUp={stopTorchDrag}
          onPointerCancel={stopTorchDrag}
        >
          <div className="ember-sky" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>

          <div className="profile-reveal-card">
            <img src={PROFILE_IMAGE} alt="Ashutosh Mishra profile" />
            <div className="profile-detail reveal-detail">
              <div className="circle-img"></div>
              <div className="info">
                <h3>@alwayashumishra</h3>
                <h4>Online</h4>
              </div>
              <button type="button">Contact Me</button>
            </div>
          </div>

          <button
            type="button"
            className="torch-stick"
            style={{ transform: `translate(${torchPosition.x}px, ${torchPosition.y}px) rotate(-28deg)` }}
            onPointerDown={(event) => {
              if (isLit) {
                return;
              }

              event.currentTarget.setPointerCapture(event.pointerId);
              setIsDraggingTorch(true);
            }}
            onClick={igniteWithClick}
            aria-label="Touch the burning torch to the dry wood"
          >
            <span className="torch-flame" />
            <span className="torch-head" />
            <span className="torch-handle" />
          </button>

          <div className="wood-stage" ref={woodRef} aria-hidden="true">
            <div className="ground-plane" />
            <div className="fire-aura" />
            <div className="flame flame-one" />
            <div className="flame flame-two" />
            <div className="flame flame-three" />
            <div className="flame flame-four" />
            <div className="log log-one" />
            <div className="log log-two" />
            <div className="log log-three" />
            <div className="log log-four" />
            <div className="ash-bed" />
          </div>

          {!isLit && <p className="ignite-hint">Drag the torch to the dry wood</p>}
        </div>
      </div>
    </div>
  );
};

export default About;



