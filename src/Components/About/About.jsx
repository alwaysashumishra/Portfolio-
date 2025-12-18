import React from "react";
import "./About.css";
const About = () => {
  return (
    <div className="about-container">
      <div className="left">
        <h1>ABOUT ME</h1>
        <p className="text-lg leading-relaxed text-transparent bg-clip-text bg-gradient-to-r from-white via-pink-400 to-purple-200">
          Hi, I’m Ashutosh Mishra, a passionate Frontend Developer currently pursuing B.Tech in Computer Science (AI & ML) from Galgotias University.
          <br />
          <br />
        I build responsive, user-friendly web applications using React.js, Next.js, HTML, CSS, and JavaScript. My key projects — Lexi.AI, an AI chatbot like Gemini, and a Food Delivery Web App — showcase my creativity and technical skills.
          technical precision.
          <br />
          <br />
         I love crafting intuitive digital experiences and integrating APIs to make the web smarter and more engaging. As an Unstop Campus Ambassador, I also promote innovation and real-world learning among peers.
        
        </p>
      </div>
      <div className="right">
        <div className="profile-card">
            
            <div className="profile-detail">
               <div className="circle-img"></div>
               <div className="info">
                 <h3>@alwayashumishra</h3>
                 <h4>Online</h4>
               </div>
              <button> Contact Me</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
