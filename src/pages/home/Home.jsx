import React, { useState, useEffect } from "react";
import "./Home.css";
import Heropage from "./heropage/Heropage";
import Footer from "../../components/footer/Footer";
import InstagramEmbed from "./../../components/InstagramEmbed/InstagramEmbed";
import FacebookEmbed from "../../components/FacebookEmbed/FacebookEmbed";
import XEmbed from "../../components/XEmbed/XEmbed";
import TestimonialSection from "./testimonialsection/TestimonialSection";
import TimelineComponent from "./timelinecomponent/TimelineComponent";
import Recentposts from "./Recentposts/Recentposts";

import { loadTwitter, loadInstagram, loadFacebook } from "../../utils/loadSocialSDKs"

const Home = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [embedsReady, setEmbedsReady] = useState(false);

useEffect(() => {
  Promise.all([
    loadTwitter(),
    loadInstagram(),
    loadFacebook(),
  ]).then(() => {
    setEmbedsReady(true);
  });
}, []);
  return (
    <div>
      <Heropage />
      <TestimonialSection />
      <TimelineComponent />
      <Recentposts />

      <div className="social-grid-container">
        {/* Fans Club Heading */}
        <h1
          className="head-anim social-head"
          style={{
            marginTop: "5rem",
            textAlign: "center",
            fontSize: isMobile ? "1.1rem" : "3rem",
            lineHeight: isMobile ? "2.4rem" : "3.6rem",
          }}
        >
          மாண்புமிகு{" "}
          <span style={{ whiteSpace: "nowrap" }}>வி செந்தில்பாலாஜி</span> ரசிகர்
          மன்ற சமூக ஊடகப் பக்கங்கள்
        </h1>

        {embedsReady ? (
          <div className="social-grid">
            <XEmbed tweetUrl="https://twitter.com/vsbfansclub/status/1691275908559278080" />
            <FacebookEmbed pageUrl="https://www.facebook.com/vsenthilbalajifans/" />
            <InstagramEmbed permalink="https://www.instagram.com/p/Cv8tNgpSKp6/" />
          </div>
        ) : (
          <div className="social-grid skeleton">
            <div className="embed-skeleton" />
            <div className="embed-skeleton" />
            <div className="embed-skeleton" />
          </div>
        )}

        {/* Official Pages Heading */}
        <h1
          className="head-anim"
          style={{
            marginTop: "5rem",
            textAlign: "center",
            marginBottom: "3rem",
            fontSize: isMobile ? "1.6rem" : "2.2rem",
            lineHeight: isMobile ? "2.2rem" : "3rem",
          }}
        >
          மாண்புமிகு{" "}
          <span style={{ whiteSpace: "nowrap" }}>வி செந்தில்பாலாஜி</span>{" "}
          அவர்களின் சமூக ஊடகப் பக்கங்கள்
        </h1>

        {embedsReady ? (
          <div className="social-grid">
            <XEmbed tweetUrl="https://twitter.com/V_Senthilbalaji/status/1839681578538311927" />
            <FacebookEmbed pageUrl="https://www.facebook.com/officialsenthilbalaji/" />
            <InstagramEmbed permalink="https://www.instagram.com/p/DSq3PK0kSPI/" />
          </div>
        ) : (
          <div className="social-grid skeleton">
            <div className="embed-skeleton" />
            <div className="embed-skeleton" />
            <div className="embed-skeleton" />
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Home;
