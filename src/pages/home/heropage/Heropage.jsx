import React from "react";
import "./Heropage.css";
import heroVideo from '../../../assets/bg-video.mp4'; // <-- add your video here
import titlePng from '../../../assets/text cover.png';

const Heropage = () => {
  return (
    <section className="heropage">
      {/* Background Video */}
      <video
        className="hero-video"
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Optional dark overlay */}
      <div className="hero-overlay">
        <div className="hero-content">
          <img className="hero-title-img" src={titlePng} alt="title" />
        </div>
      </div>
    </section>
  );
};

export default Heropage;
