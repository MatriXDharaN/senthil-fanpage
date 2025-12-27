import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/svb-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  /* Scroll effect */
  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        {/* Logo */}
        <div className="nav-logo">
          <NavLink to="/">
            <img src={logo} alt="Logo" className="logo" />
          </NavLink>
          <p>V Senthilbalaji Fans Club</p>
        </div>

        {/* Desktop Links */}
        <nav className={`nav-links ${isOpen ? "open" : ""}`}>
          <NavLink to="/" onClick={closeMenu}>Home</NavLink>
          <NavLink to="/recentposts" onClick={closeMenu}>Recent posts</NavLink>
          <NavLink to="/gallerypage" onClick={closeMenu}>Gallery</NavLink>
        </nav>

        {/* Hamburger */}
        <div
          className={`hamburger ${isOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
