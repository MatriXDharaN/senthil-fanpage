import React, { useEffect, useMemo, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import img1 from "../../assets/images/img1.jpg";
import img2 from "../../assets/images/img2.jpg";
import "./Recentpostpage.css";

export default function Recentpostpage() {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");

  /* =========================
     DATA
  ========================= */
  const achievementData = useMemo(() => ({
    "கழக பணிகளுக்கான புதிய அலுவலகத்தை திறந்து வைத்தார்": {
      category: "கவுண்டம்பாளையம்",
      images: [
        { src: img1, caption: "புதிய அலுவலகம் திறப்பு" },
        { src: img2, caption: "புதிய அலுவலகம் திறப்பு" }
      ],
      content: `
        <h2>கழக பணிகளுக்கான புதிய அலுவலகத்தை திறந்து வைத்தார்</h2>
        <p>கழகத் தலைவர், மாண்புமிகு தமிழ்நாடு முதலமைச்சர் தளபதி M. K. Stalin அவர்களின் நல்லாசியுடன்,
        கவுண்டம்பாளையத்தில் புதிய அலுவலகம் திறந்து வைத்தார்.</p>
      `
    }
  }), []);

  const data = title ? achievementData[title] : null;

  /* =========================
     SLIDER STATE
  ========================= */
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!data) return;
    const interval = setInterval(() => {
      setCurrentSlide((p) => (p + 1) % data.images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [data]);

  if (!data) {
    return (
      <div className="details-container">
        <h1>Not Found</h1>
        <p>Requested achievement not available.</p>
        <Link to="/" className="back-btn">Back</Link>
      </div>
    );
  }

  /* =========================
     JSX
  ========================= */
  return (
    <>
      <div className="section-header">
        <h1>தற்போதைய தகவல்கள்</h1>
      </div>

      <div className="details-container">
        <Link to="/" className="back-btn">Back</Link>

        <div className="details-header">
          <span className="details-tag">{data.category}</span>
          <h1>{title}</h1>
        </div>

        {/* IMAGE SLIDER */}
        <div className="image-slider">
          <div className="slider-container">
            <button
              className="slider-arrow prev"
              onClick={() =>
                setCurrentSlide(
                  (currentSlide - 1 + data.images.length) %
                    data.images.length
                )
              }
            >
              ❮
            </button>

            <button
              className="slider-arrow next"
              onClick={() =>
                setCurrentSlide((currentSlide + 1) % data.images.length)
              }
            >
              ❯
            </button>

            {data.images.map((img, i) => (
              <div
                key={i}
                className={`slide ${i === currentSlide ? "active" : ""}`}
              >
                <img src={img.src} alt={img.caption} />
                <div className="slide-caption">
                  <p>{img.caption}</p>
                </div>
              </div>
            ))}

            <div className="slider-nav">
              {data.images.map((_, i) => (
                <div
                  key={i}
                  className={`slider-dot ${
                    i === currentSlide ? "active" : ""
                  }`}
                  onClick={() => setCurrentSlide(i)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div
          className="details-content"
          dangerouslySetInnerHTML={{ __html: data.content }}
        />
      </div>

      <footer>
        <p>
          © 2025 Minister Fan Page | Not an Official Government Website | For
          Information Purposes Only
        </p>
      </footer>
    </>
  );
}
