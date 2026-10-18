import React, { useRef, useState, useEffect, useCallback, forwardRef, useImperativeHandle } from "react";
import "./CircularCarousel.css";

const CircularCarousel = forwardRef(({
  items = [],
  preset = "cylinder",
  intro = "rise",
  cardWidth = 220,
  aspectRatio = 1,
  speed = 14,
  captions = false,
  gap = 25,
  tilt = -5,
  curve = 1,
  perspective = 2500,
  autoplay = "drift",
  interval = 3,
  direction = "left",
  momentum = 0.6,
  snap = false,
  pauseOnHover = true,
  focusOnClick = true,
  draggable = true,
  parallax = 0.3,
  stretch = 0.5,
  fadeColor = "rgba(0,0,0,0)",
  depthFade = 0.55,
  innerShade = 0.6,
  cornerRadius = 12,
}, ref) => {
  const containerRef = useRef(null);
  const animFrameRef = useRef(null);
  const [rotation, setRotation] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);

  const rotationRef = useRef(0);
  const velocityRef = useRef(0);
  const dragStartXRef = useRef(0);
  const lastXRef = useRef(0);
  const dragDistanceRef = useRef(0);
  const targetRotationRef = useRef(null);

  const N = Math.max(items.length, 1);
  const theta = 360 / N;

  // Expose imperative methods for prev/next button navigation
  useImperativeHandle(ref, () => ({
    stepLeft: () => {
      const current = targetRotationRef.current !== null ? targetRotationRef.current : rotationRef.current;
      targetRotationRef.current = current + theta;
    },
    stepRight: () => {
      const current = targetRotationRef.current !== null ? targetRotationRef.current : rotationRef.current;
      targetRotationRef.current = current - theta;
    },
    rotateTo: (deg) => {
      targetRotationRef.current = deg;
    },
  }));
  const cardHeight = cardWidth / (aspectRatio || 1);

  // Cylinder radius calculation
  const chord = cardWidth + gap;
  const baseRadius = Math.max((chord / (2 * Math.sin(Math.PI / N))) * curve, 260);

  useEffect(() => {
    // Intro rise animation trigger
    const timer = setTimeout(() => setHasEntered(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Sync ref with state
  useEffect(() => {
    rotationRef.current = rotation;
  }, [rotation]);

  // Main animation / physics loop
  useEffect(() => {
    let lastTime = performance.now();

    const loop = (currentTime) => {
      const dt = Math.min((currentTime - lastTime) / 1000, 0.1);
      lastTime = currentTime;

      if (!isDragging) {
        // If focusing on a clicked card
        if (targetRotationRef.current !== null) {
          const diff = targetRotationRef.current - rotationRef.current;
          if (Math.abs(diff) < 0.2) {
            rotationRef.current = targetRotationRef.current;
            targetRotationRef.current = null;
          } else {
            rotationRef.current += diff * Math.min(dt * 8, 0.3);
          }
          setRotation(rotationRef.current);
        } else if (Math.abs(velocityRef.current) > 0.05) {
          // Inertia deceleration
          rotationRef.current += velocityRef.current;
          velocityRef.current *= Math.pow(momentum, dt * 60);

          if (snap && Math.abs(velocityRef.current) <= 0.05) {
            // Snap to nearest item
            const nearestIndex = Math.round(-rotationRef.current / theta);
            targetRotationRef.current = -nearestIndex * theta;
            velocityRef.current = 0;
          }
          setRotation(rotationRef.current);
        } else if (autoplay === "drift" && (!pauseOnHover || !isHovered)) {
          // Continuous drift rotation
          const dirMultiplier = direction === "left" ? -1 : 1;
          const driftStep = dirMultiplier * (speed * 0.02) * (dt * 60);
          rotationRef.current += driftStep;
          setRotation(rotationRef.current);
        }
      }

      animFrameRef.current = requestAnimationFrame(loop);
    };

    animFrameRef.current = requestAnimationFrame(loop);
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [isDragging, isHovered, autoplay, pauseOnHover, direction, speed, momentum, snap, theta]);

  // Pointer drag handlers
  const handlePointerDown = (e) => {
    if (!draggable) return;
    setIsDragging(true);
    targetRotationRef.current = null;
    velocityRef.current = 0;
    dragStartXRef.current = e.clientX;
    lastXRef.current = e.clientX;
    dragDistanceRef.current = 0;

    if (e.currentTarget.setPointerCapture) {
      e.currentTarget.setPointerCapture(e.pointerId);
    }
  };

  const handlePointerMove = (e) => {
    if (!isDragging) return;
    const deltaX = e.clientX - lastXRef.current;
    lastXRef.current = e.clientX;
    dragDistanceRef.current += Math.abs(deltaX);

    const rotDelta = (deltaX / cardWidth) * theta * 0.75;
    rotationRef.current += rotDelta;
    velocityRef.current = rotDelta;
    setRotation(rotationRef.current);
  };

  const handlePointerUp = (e) => {
    if (!isDragging) return;
    setIsDragging(false);

    if (e.currentTarget.releasePointerCapture) {
      try {
        e.currentTarget.releasePointerCapture(e.pointerId);
      } catch (_) {}
    }
  };

  const handleCardClick = (index) => {
    // If was dragging significantly, ignore click
    if (dragDistanceRef.current > 6) return;

    if (focusOnClick) {
      const target = -index * theta;
      // Find shortest angular path
      let diff = (target - (rotationRef.current % 360)) % 360;
      if (diff > 180) diff -= 360;
      if (diff < -180) diff += 360;
      targetRotationRef.current = rotationRef.current + diff;
    }
  };

  return (
    <div
      ref={containerRef}
      className={`circular-carousel-wrapper ${isDragging ? "is-dragging" : ""} ${
        hasEntered ? "is-entered" : ""
      } intro-${intro}`}
      style={{
        perspective: `${perspective}px`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        if (isDragging) setIsDragging(false);
      }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
    >
      {/* 3D Cylindrical Ring */}
      <div
        className="circular-carousel-ring"
        style={{
          transform: `rotateX(${tilt}deg) rotateY(${rotation}deg)`,
        }}
      >
        {items.map((item, index) => {
          const itemAngle = index * theta;

          // Calculate apparent relative angle to camera for depth shading
          let relAngle = (itemAngle + (rotation % 360)) % 360;
          if (relAngle > 180) relAngle -= 360;
          if (relAngle < -180) relAngle += 360;

          const rad = (relAngle * Math.PI) / 180;
          const zNorm = Math.cos(rad); // 1 = facing front, -1 = facing back
          const opacity = Math.max(1 - (depthFade * (1 - zNorm)) / 2, 0.15);
          const shadeOpacity = Math.max((innerShade * (1 - zNorm)) / 2, 0);

          return (
            <div
              key={index}
              className="circular-carousel-item"
              style={{
                width: `${cardWidth}px`,
                height: `${cardHeight}px`,
                borderRadius: `${cornerRadius}px`,
                transform: `rotateY(${itemAngle}deg) translateZ(${baseRadius}px)`,
                opacity: opacity,
              }}
              onClick={() => handleCardClick(index)}
            >
              <div
                className="carousel-card-inner"
                style={{
                  borderRadius: `${cornerRadius}px`,
                }}
              >
                <img
                  src={item.src}
                  alt={item.alt || item.title || `Snapshot ${index + 1}`}
                  className="carousel-card-image"
                  style={{ objectPosition: item.objectPosition || "center 20%" }}
                  draggable={false}
                  loading="lazy"
                />

                {/* Inner Shade Overlay for 3D cylinder depth */}
                <div
                  className="carousel-card-shade"
                  style={{
                    backgroundColor: "#000000",
                    opacity: shadeOpacity,
                  }}
                />

                {/* Optional Captions (honors captions prop) */}
                {captions && (item.title || item.subtitle) && (
                  <div className="carousel-card-caption">
                    {item.title && <h5 className="caption-title">{item.title}</h5>}
                    {item.subtitle && <p className="caption-subtitle">{item.subtitle}</p>}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Vignette Edge Fade Gradients */}
      {fadeColor && fadeColor !== "none" && fadeColor !== "rgba(0,0,0,0)" && fadeColor !== "transparent" && (
        <>
          <div
            className="carousel-vignette left"
            style={{
              background: `linear-gradient(to right, var(--carousel-fade-color, ${fadeColor}) 0%, transparent 100%)`,
            }}
          />
          <div
            className="carousel-vignette right"
            style={{
              background: `linear-gradient(to left, var(--carousel-fade-color, ${fadeColor}) 0%, transparent 100%)`,
            }}
          />
        </>
      )}
    </div>
  );
});

export default CircularCarousel;
