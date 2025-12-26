import React, { useEffect, useRef } from "react";
import "./Achievements.css";

import image1 from "../../assets/img1.jpeg";
import image2 from "../../assets/img2.jpeg";
import image3 from "../../assets/img3.jpeg";
import image4 from "../../assets/img4.jpeg";
import image5 from "../../assets/img5.jpeg";
import image6 from "../../assets/img6.jpeg";

const Achievements = () => {
  const gridRef = useRef(null);
  const autoSlideRef = useRef(null);

  /* ========================================
     Counter Animation on Scroll
  ======================================== */
  useEffect(() => {
    const animateCounter = (element, target, duration, formatter) => {
      let start = 0;
      const increment = target / (duration / 16);

      const timer = setInterval(() => {
        start += increment;

        if (start >= target) {
          start = target;
          clearInterval(timer);
        }

        element.textContent = formatter(start);
      }, 16);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || entry.target.dataset.done) return;

          entry.target.dataset.done = "true";
          const value = entry.target.dataset.target;

          if (value.includes("L")) {
            animateCounter(entry.target, 200000, 2000, (v) =>
              (v / 100000).toFixed(1) + "L+"
            );
          } else if (value.includes("K")) {
            const number = parseFloat(value) * 1000;
            animateCounter(entry.target, number, 2000, (v) =>
              (v / 1000).toFixed(1) + "K+"
            );
          } else if (value.includes("%")) {
            animateCounter(entry.target, parseInt(value), 2000, (v) =>
              Math.floor(v) + "%"
            );
          } else if (value === "24/7") {
            entry.target.textContent = "24/7";
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll(".stat-number").forEach((el) => {
      el.dataset.target = el.textContent.trim();
      el.textContent = "0";
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  /* ========================================
     Card Slider Logic
  ======================================== */
  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const cards = Array.from(grid.children);
    const cardWidth = 430;

    // Clone cards for infinite effect
    cards.forEach((card) => {
      grid.appendChild(card.cloneNode(true));
    });

    const moveCards = (direction) => {
      const currentScroll = grid.scrollLeft;

      if (direction === "right") {
        grid.scrollBy({ left: cardWidth, behavior: "smooth" });

        if (currentScroll + cardWidth >= cardWidth * cards.length) {
          setTimeout(() => {
            grid.style.scrollBehavior = "auto";
            grid.scrollLeft = 0;
            grid.style.scrollBehavior = "smooth";
          }, 300);
        }
      } else {
        if (currentScroll <= 0) {
          grid.style.scrollBehavior = "auto";
          grid.scrollLeft = cardWidth * cards.length;
          grid.style.scrollBehavior = "smooth";
        }
        grid.scrollBy({ left: -cardWidth, behavior: "smooth" });
      }
    };

    // Auto slide
    autoSlideRef.current = setInterval(() => moveCards("right"), 5000);

    const resetAutoSlide = () => {
      clearInterval(autoSlideRef.current);
      autoSlideRef.current = setInterval(() => moveCards("right"), 5000);
    };

    // Button handlers
    document
      .querySelector(".next-card")
      ?.addEventListener("click", () => {
        moveCards("right");
        resetAutoSlide();
      });

    document
      .querySelector(".prev-card")
      ?.addEventListener("click", () => {
        moveCards("left");
        resetAutoSlide();
      });

    // Touch support
    let startX = 0;
    let endX = 0;

    grid.addEventListener("touchstart", (e) => {
      startX = e.changedTouches[0].screenX;
    });

    grid.addEventListener("touchend", (e) => {
      endX = e.changedTouches[0].screenX;
      if (startX - endX > 50) {
        moveCards("right");
        resetAutoSlide();
      }
      if (endX - startX > 50) {
        moveCards("left");
        resetAutoSlide();
      }
    });

    return () => clearInterval(autoSlideRef.current);
  }, []);

  return (
    <div  className="achievements-page">
      {/* Header */}
      <div className="section-header">
        <h1>Achievements</h1>
        <p className="section-subtitle">
          Transforming Tamil Nadu Through Dedicated Service & Innovation
        </p>
      </div>

      {/* Stats */}
      <section className="stats-overview">
        <div className="stats-grid">
          <div className="stat-box">
            <span className="stat-number">2L+</span>
            <span className="stat-label">இலவச விவசாய மின் இணைப்புகள்</span>
          </div>

          <div className="stat-box">
            <span className="stat-number">24/7</span>
            <span className="stat-label">மின் நுகர்வோர் சேவை மையம்</span>
          </div>

          <div className="stat-box">
            <span className="stat-number">77.5K+</span>
            <span className="stat-label">
              நெசவாளர்களுக்கு 1000 யூனிட் இலவச மின்சாரம்
            </span>
          </div>

          <div className="stat-box">
            <span className="stat-number">50%</span>
            <span className="stat-label">புதுப்பிக்கத்தக்க ஆற்றல் இலக்கு</span>
          </div>
        </div>
      </section>

      {/* Slider */}
      <section className="card-slider-section">
        <div className="slider-header">
          <h2>Key Initiatives & Projects</h2>
          <p>Driving progress across multiple sectors</p>
        </div>

        <div className="card-slider-container">
          <button className="card-btn prev-card">&#8249;</button>

          <div className="achievement-grid" ref={gridRef}>
            {[image1, image2, image3, image4, image5, image6].map(
              (img, i) => (
                <div className="stat-card" key={i}>
                  <img src={img} alt={`Achievement ${i + 1}`} />
                </div>
              )
            )}
          </div>

          <button className="card-btn next-card">&#8250;</button>
        </div>
      </section>
    </div>
  );
};

export default Achievements;
