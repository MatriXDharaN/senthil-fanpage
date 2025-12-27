import React from "react";
import "./Home.css";
import Heropage from "./heropage/Heropage";
import Footer from "../../components/footer/Footer";
import InstagramEmbed from "./../../components/InstagramEmbed/InstagramEmbed";
import FacebookEmbed from "../../components/FacebookEmbed/FacebookEmbed";
import XEmbed from "../../components/XEmbed/XEmbed";
import TestimonialSection from "./testimonialsection/TestimonialSection";
import TimelineComponent from "./timelinecomponent/TimelineComponent";
import Recentposts from './Recentposts/Recentposts';

const Home = () => {
  return (
    <div>
      <Heropage />
      <TestimonialSection />
      <TimelineComponent />
      <Recentposts />
      <div className="social-grid-container">
        <h1 className="head-anim" style={{ marginTop: "5rem", textAlign: "center", marginBottom: "3rem" }}>Honourable V. Senthilbalaji Fansclub Social Media Pages</h1>
        <div className="social-grid">
          <XEmbed tweetUrl="https://twitter.com/vsbfansclub/status/1691275908559278080" />
          <FacebookEmbed pageUrl="https://www.facebook.com/vsenthilbalajifans/" />
          <InstagramEmbed permalink="https://www.instagram.com/p/Cv8tNgpSKp6/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" />
        </div>
        <h1 className="head-anim" style={{ marginTop: "5rem", textAlign: "center", marginBottom: "6rem" }}>மாண்புமிகு வி. செந்தில் பாலாஜி அவர்களின் சமூக ஊடகப் பக்கங்கள்</h1>
        <div className="social-grid">
          <XEmbed tweetUrl="https://twitter.com/V_Senthilbalaji/status/1839681578538311927" />
          <FacebookEmbed pageUrl="https://www.facebook.com/officialsenthilbalaji/" />
          <InstagramEmbed permalink="https://www.instagram.com/p/DSq3PK0kSPI/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
