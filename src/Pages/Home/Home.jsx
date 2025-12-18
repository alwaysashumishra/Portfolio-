import React from "react";
import Header from "../../Components/Header/Header";
import About from "../../Components/About/About";
import Skill from "../../Components/Skill/Skill";
import Social from "../../Components/Social/Social";
import Projects from "../../Components/Projects/Projects";
import Experience from "../../Components/Experience/Experience";
import Contact from "../../Components/Contact/Contact";
import Footer from "../../Components/Footer/Footer";
import "./Home.css";

const Home = () => {
  return (
    <>
      <section id="home">
        <Header />
      </section>

      <section id="about">
        <About />
      </section>
      <section id="skill">
        <Skill />
      </section>
      <Social />
      <section id="projects">
        <Projects />
      </section>
      <section id="experience">
        <Experience />
      </section>
     
  <section id="contact">
    <Contact />
  </section>
      <Footer />
    </>
  );
};

export default Home;
