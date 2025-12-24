import React from "react";
import "./Home.css";
import Heropage from "./heropage/Heropage";
import Gallery from "./gallery/Gallery";
import Footer from "../../components/footer/Footer";
import InstagramEmbed from "./../../components/InstagramEmbed/InstagramEmbed";
import FacebookEmbed from "../../components/FacebookEmbed/FacebookEmbed";
import XEmbed from "../../components/XEmbed/XEmbed";
import Timeline from "./Timeline/Timeline";
import { TIMELINE_DATA } from "../../data/timelineData";

const Home = () => {
  return (
    <div>
      <Heropage />
      <Gallery />
      <div className="social-grid-container">
      <h1 style={{ marginTop: "3rem", textAlign: "center" }}>Social Media</h1>
        <div className="social-grid">
          <XEmbed />
          <FacebookEmbed />
          <InstagramEmbed />
        </div>
      </div>
      <Timeline data={TIMELINE_DATA} />

      <Footer />
    </div>
  );
};

export default Home;
