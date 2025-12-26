import React, { useState, useEffect, useRef, useCallback } from "react";
import "./Recentposts.css";
import img1 from "../../../assets/images/img1.jpg";
import img2 from "../../../assets/images/img3.jpg";
import img3 from "../../../assets/images/img9.jpg";
import { NavLink } from "react-router-dom";

export default function Recentposts() {
  const [statsDone, setStatsDone] = useState({});
  const gridRef = useRef(null);
  const statsObserverRef = useRef(null);
  const cardWidth = 380;

  // Stats data
  const stats = [
    { number: "2L+", label: "இலவச விவசாய மின் இணைப்புகள்", target: "2L+" },
    { number: "50%", label: "புதுப்பிக்கத்தக்க ஆற்றல் இலக்கு", target: "50%" },
    { number: "24/7", label: "மின் நுகர்வோர் சேவை மையம்", target: "24/7" },
    {
      number: "77.5K+",
      label: "நெசவாளர்களுக்கு 1000 யூனிட் இலவச மின்சாரம்",
      target: "77.5K+",
    },
  ];

  // Cards data
  const cards = [
    {
      img: img1,
      tag: "கவுண்டம்பாளையம்",
      title: "கழக பணிகளுக்கான புதிய அலுவலகத்தை திறந்து வைத்தார்",
      desc: "கழகத் தலைவர், மாண்புமிகு தமிழ்நாடு முதலமைச்சர் தளபதி M. K. Stalin அவர்களின் நல்லாசியுடன்...",
    },
    {
      img: img2,
      tag: "கரூர்",
      title: "மத்திய அரசைக் கண்டித்து திமுக கூட்டணியினர் ஆர்ப்பாட்டம்",
      desc: "கரூர் வெண்ணைமலை ஊராட்சி ஒன்றிய அலுவலகம் முன் புதன்கிழமை நடைபெற்ற ஆர்ப்பாட்டத்தில்...",
    },
    {
      img: img3,
      tag: "கரூர்,தான்தோன்றிமலை",
      title: "கிறிஸ்துமஸ் ஆராதனை விழாவில் பங்கேற்பு",
      desc: "சமத்துவமும் சகோதரத்துவமும் பெருக திராவிட மாடல் நல்லாட்சி நடத்திடும் மாண்புமிகு தமிழ்நாடு முதலமைச்சர்...",
    },
    {
      img: "https://scontent.fmaa14-1.fna.fbcdn.net/v/t39.30808-6/600291656_1447474846740090_5859908690971670026_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=COplOQp7gBUQ7kNvwFIrv3a&_nc_oc=AdmSkh_Qq-BkfePxEFxj7n6dO_RZTZwwdenh0EfcSS1nbiSAvEptwApvjTDmiZQZkBz70X39cNtoLcsREP25jm-l&_nc_zt=23&_nc_ht=scontent.fmaa14-1.fna&_nc_gid=ZmE18srYl2ckXVSTk_pdhw&oh=00_AfmRewS5uuSkZil2JbBaXfeqg3f0hFMO9lm4Qlt94P3ffQ&oe=695407A5",
      tag: "கரூர்",
      title: "கரூர் மாவட்ட கழக நிர்வாகிகள் ஆலோசனைக் கூட்டம்",
      desc: "கழகத் தலைவர், மாண்புமிகு தமிழ்நாடு முதலமைச்சர் தளபதி M. K. Stalin அவர்களின் ஆணைக்கிணங்க...",
    },
    {
      img: "https://scontent.fmaa14-1.fna.fbcdn.net/v/t39.30808-6/600303559_1447667633387478_7423146965047535514_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=YzDKGsEDpK8Q7kNvwGm-rnX&_nc_oc=AdnyKRHlHIJ-TIh2DIGuhD5qyQfbXANtgphkTiHP51mXdZcuVT97kcBweUtu4QQVbJLtw11A89vgOCo1AMbXkGSx&_nc_zt=23&_nc_ht=scontent.fmaa14-1.fna&_nc_gid=QBDXMh4PH3Zegfdbtagagg&oh=00_AfmxBZHr_swFbzD0BA7i5Gk2WRPca2Ma9s6BWgi67mkd5Q&oe=69543BDD",
      tag: "கரூர்",
      title: "தமிழ்நாடு துணை முதலமைச்சர், 49வது பிறந்தநாள்",
      desc: "தமிழ்நாடு துணை முதலமைச்சர், 49வது பிறந்த நாளை முன்னிட்டு, கரூர் மாவட்ட கழகத்தின் சார்பாக,மாவட்ட அளவிலான...",
    },
    {
      img: "https://scontent.fmaa14-1.fna.fbcdn.net/v/t39.30808-6/600303559_1447667633387478_7423146965047535514_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=YzDKGsEDpK8Q7kNvwGm-rnX&_nc_oc=AdnyKRHlHIJ-TIh2DIGuhD5qyQfbXANtgphkTiHP51mXdZcuVT97kcBweUtu4QQVbJLtw11A89vgOCo1AMbXkGSx&_nc_zt=23&_nc_ht=scontent.fmaa14-1.fna&_nc_gid=QBDXMh4PH3Zegfdbtagagg&oh=00_AfmxBZHr_swFbzD0BA7i5Gk2WRPca2Ma9s6BWgi67mkd5Q&oe=69543BDD",
      tag: "பல்லடம்",
      title: "மகளிர் அணி மாநாட்டிற்கு பந்தல்கால் நடுவிழா",
      desc: "கழகத் தலைவர் மாண்புமிகு தமிழ்நாடு முதலமைச்சர் தளபதி M. K. Stalin அவர்களின் ஆணைக்கிணங்க, வருகின்ற...",
    },
  ];

  // Showcase slides
  const showcaseSlides = [
    {
      img: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=900&q=80",
      tag: "Farmers' Welfare",
      text: "By providing 1.5 Lakh Free Power Connections in record time, we have powered the dreams of every farming family in Tamil Nadu.",
      cite: "— TANGEDCO Record Achievement, 2024",
    },
    {
      img: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=900&q=80",
      tag: "Transport Service",
      text: "From introducing Small Buses to modernizing the state fleet, our goal is to make public transport accessible to every remote village.",
      cite: "— Enhancing State Connectivity Initiative",
    },
    {
      img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=900&q=80",
      tag: "Consumer Welfare",
      text: "The Minnagam (1912) Helpline ensures that every citizen's power complaint is resolved with just one phone call, day or night.",
      cite: "— 24/7 Grievance Redressal System",
    },
    {
      img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80",
      tag: "Health & Public Aid",
      text: "Organizing Mega Medical Camps in Karur and providing direct aid from the CM Relief Fund is our heartfelt commitment to the people.",
      cite: "— Grassroots Healthcare Initiative",
    },
    {
      img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80",
      tag: "Digital Infrastructure",
      text: "Implementing Smart Meters statewide ensures transparent billing and brings cutting-edge technology to every household's doorstep.",
      cite: "— TNEB Modernization Program",
    },
    {
      img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=900&q=80",
      tag: "Constituency Development",
      text: "From 1 Lakh Liter Water Tanks to paved roads in every panchayat, we are building a foundation of progress for Karur.",
      cite: "— Karur Modernization Projects",
    },
  ];

  // Counter animation
  const animateCounter = useCallback(
    (index, target) => {
      let start = 0;
      const element = document.querySelector(`[data-stat-index="${index}"]`);
      if (!element) return;

      const duration = 2000;
      const increment = target / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          start = target;
          clearInterval(timer);
        }

        if (target === 24) {
          element.textContent = "24/7";
        } else if (stats[index].target.includes("L")) {
          element.textContent = (start / 100000).toFixed(1) + "L+";
        } else if (stats[index].target.includes("K")) {
          element.textContent = (start / 1000).toFixed(1) + "K+";
        } else if (stats[index].target.includes("%")) {
          element.textContent = Math.floor(start) + "%";
        }
      }, 16);
    },
    [stats]
  );

  // Stats observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (
            entry.isIntersecting &&
            !statsDone[entry.target.dataset.statIndex]
          ) {
            const index = parseInt(entry.target.dataset.statIndex);
            setStatsDone((prev) => ({ ...prev, [index]: true }));

            const target = stats[index].target;
            if (target === "24/7") {
              animateCounter(index, 24);
            } else if (target.includes("L")) {
              animateCounter(index, 200000);
            } else if (target.includes("K")) {
              const num = parseFloat(target) * 1000;
              animateCounter(index, num);
            } else if (target.includes("%")) {
              animateCounter(index, parseInt(target));
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    statsObserverRef.current = observer;

    document.querySelectorAll("[data-stat-index]").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [statsDone, animateCounter, stats]);

  // Card slider functions
  const moveCards = useCallback(
    (direction) => {
      if (!gridRef.current) return;

      const currentScroll = gridRef.current.scrollLeft;

      if (direction === "right") {
        gridRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });

        if (currentScroll + cardWidth >= cardWidth * cards.length) {
          setTimeout(() => {
            gridRef.current.style.scrollBehavior = "auto";
            gridRef.current.scrollLeft = 0;
            gridRef.current.style.scrollBehavior = "smooth";
          }, 300);
        }
      } else {
        if (currentScroll <= 0) {
          gridRef.current.style.scrollBehavior = "auto";
          gridRef.current.scrollLeft = cardWidth * cards.length;
          gridRef.current.style.scrollBehavior = "smooth";
        }
        gridRef.current.scrollBy({ left: -cardWidth, behavior: "smooth" });
      }
    },
    [cardWidth, cards.length]
  );

  // Card auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      moveCards("right");
    }, 5000);
    return () => clearInterval(interval);
  }, [moveCards]);

  // Touch swipe support
  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    let touchStartX = 0;
    let touchEndX = 0;

    const handleTouchStart = (e) => {
      touchStartX = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = (e) => {
      touchEndX = e.changedTouches[0].screenX;
      if (touchStartX - touchEndX > 50) {
        moveCards("right");
      }
      if (touchEndX - touchStartX > 50) {
        moveCards("left");
      }
    };

    grid.addEventListener("touchstart", handleTouchStart);
    grid.addEventListener("touchend", handleTouchEnd);

    return () => {
      grid.removeEventListener("touchstart", handleTouchStart);
      grid.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return (
    <div>
      {/* Stats Overview */}
      <section className="stats-overview">
        <div className="stats-grid">
          {stats.map((stat, i) => (
            <div key={i} className="stat-box">
              <span className="stat-number" data-stat-index={i}>
                0
              </span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Card Slider Section */}
      <section className="card-slider-section">
        <div className="slider-header">
          <h2 className="slider-head">தற்போதைய தகவல்கள்</h2>
        </div>

        <div className="card-slider-container">
          <button
            className="card-btn prev-card"
            aria-label="Previous"
            onClick={() => moveCards("left")}
          >
            &#8249;
          </button>

          <div className="achievement-grid" id="infiniteGrid" ref={gridRef}>
            {[...cards, ...cards].map((card, i) => (
              <div key={i} className="stat-card">
                <img src={card.img} alt={card.title} />
                <div className="card-content">
                  <span className="card-tag">{card.tag}</span>
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>

                  <NavLink to="/recentposts" className="view-more-btn">
                    <p>View More</p>
                  </NavLink>
                </div>
              </div>
            ))}
          </div>

          <button
            className="card-btn next-card"
            aria-label="Next"
            onClick={() => moveCards("right")}
          >
            &#8250;
          </button>
        </div>
      </section>
    </div>
  );
}
