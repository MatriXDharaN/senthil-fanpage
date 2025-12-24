import React, { useState } from "react";
import "./Achievements.css"; // keep your existing CSS

const statCards = [
  {
    img: "images/achieveImg1.jpg",
    alt: "Power",
    title: "1.5 Lakh Free Power Connections",
    desc: "Providing free electricity to farmers to boost state agriculture.",
  },
  {
    img: "images/achieveImg1.jpg",
    alt: "Helpline",
    title: "Minnagam Helpline (1912)",
    desc: "24/7 consumer grievance cell for instant electricity issues resolution.",
  },
  {
    img: "images/achieveImg1.jpg",
    alt: "Bus",
    title: "Bus Modernization Statewide",
    desc: "Bus Modernization",
  },
  {
    img: "images/achieveImg1.jpg",
    alt: "Water",
    title: "1 Lakh Liter Water Tanks",
    desc: "Water Tanks",
  },
  {
    img: "images/achieveImg1.jpg",
    alt: "Billing",
    title: "Modernizing TNEB Billing",
    desc: "Modernizing TNEB Billing",
  },
];

const slides = [
  {
    tag: "Farmers' Welfare",
    img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80",
    quote:
      "By providing 1.5 Lakh Free Power Connections in just one year, we have powered the dreams of every farming family in Tamil Nadu.",
    cite: "— TANGEDCO Record Achievement",
  },
  {
    tag: "Transport Service",
    img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80",
    quote:
      "From introducing Small Buses to modernizing the state fleet, our goal is to make public transport accessible to every remote village.",
    cite: "— Enhancing State Connectivity",
  },
  {
    tag: "Consumer Welfare",
    img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80",
    quote:
      "The Minnagam (1912) Helpline ensures that a citizen's power complaint is solved with just one phone call, day or night.",
    cite: "— 24/7 Grievance Redressal",
  },
  {
    tag: "Health & Public Aid",
    img: "https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=800",
    quote:
      "Organizing Mega Medical Camps in Karur and providing direct aid from the CM Relief Fund is my heartfelt duty to the people.",
    cite: "— Grassroots People's Service",
  },
  {
    tag: "Digital Infrastructure",
    img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80",
    quote:
      "Implementing Smart Meters statewide ensures transparent billing and brings modern technology to every household's doorstep.",
    cite: "— Modernizing TNEB Billing",
  },
  {
    tag: "Constituency Development",
    img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80",
    quote:
      "From 1 Lakh Liter Water Tanks to paved roads in every panchayat, we are building a foundation of progress for Karur.",
    cite: "— Karur Modernization Projects",
  },
];

const Achievements = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  return (
    <section id="achievements" className="achievement-section">
      {/* Title */}
      <div className="section-title">
        <h1>Achievement</h1>
      </div>

      {/* Stat Cards */}
      <div className="card-slider-container">
        <button className="card-btn prev-card">&#8249;</button>

        <div className="achievement-grid" id="infiniteGrid">
          {statCards.map((card, index) => (
            <div className="stat-card" key={index}>
              <img src={card.img} alt={card.alt} />
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>

        <button className="card-btn next-card">&#8250;</button>
      </div>

      {/* Main Slider */}
      <div className="achievement-slider">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`achieve-slide ${
              index === activeIndex ? "active" : ""
            }`}
          >
            <div className="achieve-image">
              <img src={slide.img} alt={slide.tag} />
            </div>
            <div className="achieve-content">
              <span className="tag">{slide.tag}</span>
              <blockquote className="testimonial-typo">
                “{slide.quote}”
              </blockquote>
              <p className="cite">{slide.cite}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="nav-controls">
        <button className="nav-btn prev" onClick={prevSlide}>
          &#10094;
        </button>
        <button className="nav-btn next" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
    </section>
  );
};

export default Achievements;
