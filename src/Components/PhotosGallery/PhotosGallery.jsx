import React, { useRef } from "react";
import CircularCarousel from "../CircularCarousel/CircularCarousel";
import { FaInstagram } from "react-icons/fa";
import { ArrowUpRight } from "lucide-react";
import "./PhotosGallery.css";

const instagramItems = [
  {
    src: "/photos/ashu_puppy.png",
    alt: "Ashutosh Mishra with puppy",
    title: "Weekend Moments",
    subtitle: "@alwaysashumishra",
    objectPosition: "center 35%",
  },
  {
    src: "/photos/ashu_monument.png",
    alt: "Ashutosh Mishra at Humayun's Tomb",
    title: "Heritage & Travels",
    subtitle: "New Delhi",
    objectPosition: "center 20%",
  },
  {
    src: "/photos/ashu_friends.png",
    alt: "Ashutosh Mishra with friends at Galgotias University",
    title: "Campus Crew",
    subtitle: "Galgotias University",
    objectPosition: "center 38%",
  },
  {
    src: "/photos/ashu_campus.png",
    alt: "Ashutosh Mishra at Galgotias University campus",
    title: "Campus Days",
    subtitle: "Galgotias University",
    objectPosition: "center 15%",
  },
  {
    src: "/photos/ashu_lotustemple.png",
    alt: "Ashutosh Mishra at Lotus Temple",
    title: "Lotus Temple Walk",
    subtitle: "Delhi Chronicles",
    objectPosition: "center 22%",
  },
  {
    src: "/photos/ashu_lake.png",
    alt: "Ashutosh Mishra outdoor portrait",
    title: "Lake Reflections",
    subtitle: "@alwaysashumishra",
    objectPosition: "center 25%",
  },
  {
    src: "/photos/ashutosh_1.png",
    alt: "Ashutosh Mishra - Frontend Engineer",
    title: "Ashutosh Mishra",
    subtitle: "UI Engineer & Creator",
    objectPosition: "center 20%",
  },
  {
    src: "/photos/clean_workspace.jpg",
    alt: "Developer Desk Setup",
    title: "Craft & Code",
    subtitle: "React Architecture",
    objectPosition: "center center",
  },
  {
    src: "/photos/hackathon_present.jpg",
    alt: "Hackathon Presentation & Keynote",
    title: "Tech Keynote",
    subtitle: "AI & Modern Web",
    objectPosition: "center 22%",
  },
];

const PhotosGallery = () => {
  const carouselRef = useRef(null);

  const handlePrev = () => {
    carouselRef.current?.stepLeft();
  };

  const handleNext = () => {
    carouselRef.current?.stepRight();
  };

  return (
    <section className="editorial-gallery-section" id="gallery">
      <div className="editorial-gallery-container">
        {/* Section Header */}
        <div className="gallery-header-row">
          <div>
            <div className="section-editorial-badge">[ 05 ] • VISUAL JOURNAL</div>
            <h2 className="gallery-editorial-heading">
              Snapshots & <span className="serif-italic highlight-red">Moments</span>
            </h2>
          </div>
          <div className="gallery-insta-link-wrap">
            <p className="gallery-editorial-sub">
              A 3D cylindrical circular reel capturing developer setups, campus moments, and life
              snapshots from my Instagram.
            </p>
            <a
              href="https://www.instagram.com/alwaysashumishra/"
              target="_blank"
              rel="noreferrer"
              className="gallery-insta-btn"
            >
              <FaInstagram size={16} />
              <span>@alwaysashumishra</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        {/* 3D Circular Carousel Stage with Orbital Trajectory & Artistic Brushes */}
        <div className="gallery-orbital-stage">
          {/* Background Artwork: Orbital Arcs, Marker Dots, Paint Splatters, Ambient Glow */}
          <img
            src="/photos/gallery_art_frame_clean.png"
            alt="Artistic orbital gallery background"
            className="gallery-orbital-art"
            draggable={false}
          />

          {/* Interactive Navigation Hotspots over Left (Amber) & Right (Crimson) Pods */}
          <button
            type="button"
            className="gallery-nav-hotspot prev"
            onClick={handlePrev}
            aria-label="Previous Photo"
          />

          <button
            type="button"
            className="gallery-nav-hotspot next"
            onClick={handleNext}
            aria-label="Next Photo"
          />

          {/* 3D Circular Reel */}
          <div className="carousel-stage-box">
            <CircularCarousel
              ref={carouselRef}
              items={instagramItems}
              preset="cylinder"
              intro="rise"
              cardWidth={215}
              aspectRatio={1}
              speed={14}
              captions={false}
              gap={26}
              tilt={-4}
              curve={1}
              perspective={2500}
              autoplay="drift"
              interval={3}
              direction="left"
              momentum={0.6}
              snap
              pauseOnHover
              focusOnClick
              draggable
              parallax={0.3}
              stretch={0.5}
              fadeColor="none"
              depthFade={0.55}
              innerShade={0.5}
              cornerRadius={14}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotosGallery;
