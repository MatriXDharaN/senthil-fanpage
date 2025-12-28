import React from "react";
import logo from "../../../assets/svb-logo.png";
import "./Footer.css";

/* Icons */
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="footer-home">
      <div className="footer-container">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="footer-logo" />
        </div>

        <div className="footer-content">
          <p className="footer-name">மாண்புமிகு V&nbsp;செந்தில்பாலாஜி</p>
          <p className="footer-role">
            சட்டமன்ற உறுப்பினர், கரூர் மாவட்டச் செயலாளர்
          </p>

          {/* Social Media */}
          <div className="social-media-footer">
            <a
              href="https://www.facebook.com/vsenthilbalajifans/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://x.com/vsbfansclub"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaXTwitter />
            </a>

            <a
              href="https://www.instagram.com/vsenthilbalajifans/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <p className="footer-text">© {currentYear} copyrights</p>
    </footer>
  );
};

export default Footer;
