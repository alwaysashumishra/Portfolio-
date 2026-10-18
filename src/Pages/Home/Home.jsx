import React from "react";
import Header from "../../Components/Header/Header";
import About from "../../Components/About/About";
import Skill from "../../Components/Skill/Skill";
import Social from "../../Components/Social/Social";
import Projects from "../../Components/Projects/Projects";
import Contact from "../../Components/Contact/Contact";
import Footer from "../../Components/Footer/Footer";
import LandingSection from "../../Components/Landing/LandingSection";
import PhotosGallery from "../../Components/PhotosGallery/PhotosGallery";
import "./Home.css";

const Home = () => {
  return (
    <main className="home-main">
      <section id="home">
        <Header />
      </section>

      <About />
      <Projects />
      <Skill />
      <LandingSection />
      <PhotosGallery />
      <Social />
      <Contact />
      <Footer />
    </main>
  );
};

export default Home;
