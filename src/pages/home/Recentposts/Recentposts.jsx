import React, { useState, useEffect, useCallback } from "react";
import "./Recentposts.css";
import img1 from "../../../assets/images/img1.jpg";
import img2 from "../../../assets/images/img3.jpg";
import img3 from "../../../assets/images/img9.jpg";
import { NavLink } from "react-router-dom";

/* Swiper */
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

/* Swiper styles */
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Recentposts() {
  const [statsDone, setStatsDone] = useState({});

  /* ---------------- Stats ---------------- */
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

  /* ---------------- Cards ---------------- */
  const cards = [
    {
      id: 1,
      img: img1,
      tag: "கவுண்டம்பாளையம்",
      title: "கழக பணிகளுக்கான புதிய அலுவலகத்தை திறந்து வைத்தார்",
      desc: "கழகத் தலைவர், மாண்புமிகு தமிழ்நாடு முதலமைச்சர் தளபதி M.\u00A0K.\u00A0Stalin அவர்களின் நல்லாசியுடன்...",
    },
    {
      id: 2,
      img: img2,
      tag: "கரூர்",
      title: "மத்திய அரசைக் கண்டித்து திமுக கூட்டணியினர் ஆர்ப்பாட்டம்",
      desc: "கரூர் வெண்ணைமலை ஊராட்சி ஒன்றிய அலுவலகம் முன் புதன்கிழமை நடைபெற்ற ஆர்ப்பாட்டத்தில்...",
    },
    {
      id: 3,
      img: img3,
      tag: "கரூர்,தான்தோன்றிமலை",
      title: "கிறிஸ்துமஸ் ஆராதனை விழாவில் பங்கேற்பு",
      desc: "சமத்துவமும் சகோதரத்துவமும் பெருக திராவிட மாடல் நல்லாட்சி நடத்திடும் மாண்புமிகு தமிழ்நாடு முதலமைச்சர்...",
    },
    {
      id: 4,
      img: "https://scontent.fmaa14-1.fna.fbcdn.net/v/t39.30808-6/600291656_1447474846740090_5859908690971670026_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=COplOQp7gBUQ7kNvwFIrv3a&_nc_oc=AdmSkh_Qq-BkfePxEFxj7n6dO_RZTZwwdenh0EfcSS1nbiSAvEptwApvjTDmiZQZkBz70X39cNtoLcsREP25jm-l&_nc_zt=23&_nc_ht=scontent.fmaa14-1.fna&_nc_gid=ZmE18srYl2ckXVSTk_pdhw&oh=00_AfmRewS5uuSkZil2JbBaXfeqg3f0hFMO9lm4Qlt94P3ffQ&oe=695407A5",
      tag: "கரூர்",
      title: "கரூர் மாவட்ட கழக நிர்வாகிகள் ஆலோசனைக் கூட்டம்",
      desc: "கழகத் தலைவர்,  மாண்புமிகு தமிழ்நாடு முதலமைச்சர் தளபதி M.\u00A0K.\u00A0Stalin அவர்களின் ஆணைக்கிணங்க...",
    },
    {
      id: 5,
      img: "https://scontent.fmaa14-1.fna.fbcdn.net/v/t39.30808-6/600303559_1447667633387478_7423146965047535514_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=YzDKGsEDpK8Q7kNvwGm-rnX&_nc_oc=AdnyKRHlHIJ-TIh2DIGuhD5qyQfbXANtgphkTiHP51mXdZcuVT97kcBweUtu4QQVbJLtw11A89vgOCo1AMbXkGSx&_nc_zt=23&_nc_ht=scontent.fmaa14-1.fna&_nc_gid=QBDXMh4PH3Zegfdbtagagg&oh=00_AfmxBZHr_swFbzD0BA7i5Gk2WRPca2Ma9s6BWgi67mkd5Q&oe=69543BDD",
      tag: "கரூர்",
      title: "தமிழ்நாடு துணை முதலமைச்சர், 49வது பிறந்தநாள்",
      desc: "தமிழ்நாடு துணை முதலமைச்சர், 49வது பிறந்த நாளை முன்னிட்டு, கரூர் மாவட்ட கழகத்தின் சார்பாக,மாவட்ட அளவிலான...",
    },
    {
      id: 6 ,
      img: "https://scontent.fmaa14-1.fna.fbcdn.net/v/t39.30808-6/601847906_1448081093346132_4650418602970348357_n.jpg?stp=dst-jpg_p180x540_tt6&_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=RkMXCye98sQQ7kNvwGLBgOb&_nc_oc=AdmIGZ1esXlGfyY_NbO5npccwo7QkImw7lPNg9kUYEsevvhfn2tLpr5TPJSrb0ekULnY-e4iVjmE3Bfzgb3IRWVE&_nc_zt=23&_nc_ht=scontent.fmaa14-1.fna&_nc_gid=jZNKlK8tuciS8L0_xaUhTA&oh=00_AflOhLRGZ-A4tKQfCFYTqfokFIrgQqVMYVqN2dfNNMPesA&oe=69555BD7",
      tag: "பல்லடம்",
      title: "மகளிர் அணி மாநாட்டிற்கு பந்தல்கால் நடுவிழா",
      desc: "கழகத் தலைவர் மாண்புமிகு தமிழ்நாடு முதலமைச்சர் தளபதி M.\u00A0K.\u00A0Stalin அவர்களின் ஆணைக்கிணங்க, வருகின்ற...",
    },
  ];

  /* ---------------- Counter animation (unchanged) ---------------- */
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

        if (target === 24) element.textContent = "24/7";
        else if (stats[index].target.includes("L"))
          element.textContent = (start / 100000).toFixed(1) + "L+";
        else if (stats[index].target.includes("K"))
          element.textContent = (start / 1000).toFixed(1) + "K+";
        else element.textContent = Math.floor(start) + "%";
      }, 16);
    },
    [stats]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const i = entry.target.dataset.statIndex;
          if (entry.isIntersecting && !statsDone[i]) {
            setStatsDone((p) => ({ ...p, [i]: true }));
            const t = stats[i].target;
            if (t === "24/7") animateCounter(i, 24);
            else if (t.includes("L")) animateCounter(i, 200000);
            else if (t.includes("K")) animateCounter(i, parseFloat(t) * 1000);
            else animateCounter(i, parseInt(t));
          }
        });
      },
      { threshold: 0.5 }
    );

    document
      .querySelectorAll("[data-stat-index]")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [animateCounter, stats, statsDone]);

  return (
    <div>
      {/* -------- Stats -------- */}
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

      {/* -------- Swiper Card Slider -------- */}
      <section className="card-slider-section">
        <div className="slider-header">
          <h2 className="slider-head head-anim">தற்போதைய தகவல்கள்</h2>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          loop
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          spaceBetween={30}
          centeredSlides={false}
          breakpoints={{
            0: {
              slidesPerView: 1, // mobile
            },
            768: {
              slidesPerView: 2, // tablet
            },
            1024: {
              slidesPerView: 3, // desktop
            },
          }}
          className="recentposts-swiper"
        >
          {cards.map((card) => (
            <SwiperSlide key={card.id}>
              <div className="stat-card">
                <img src={card.img} alt={card.title} />
                <div className="card-content">
                  <span className="card-tag">{card.tag}</span>
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>

                  <NavLink
                    to={`/recentposts?id=${card.id}`}
                    className="view-more-btn"
                  >
                    View More
                  </NavLink>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
}
