import React, { useEffect, useState } from "react";
import "./Gallery2.css";

const slides = [
  {
    image: "https://scontent.fixm4-1.fna.fbcdn.net/v/t39.30808-6/600285315_1446964916791083_982665991333935329_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=O4l-xGUr4ZIQ7kNvwHf9OrK&_nc_oc=AdkZ4w_TMjHtLc27CounTkFZsS-g07hY-9kie-f00sNiVtnpk8jrO58Xv8NxIDRAwAqCbIwL8l6bqcNlywbeUtun&_nc_zt=23&_nc_ht=scontent.fixm4-1.fna&_nc_gid=t4JspkgNMBkANZ3INCJbyg&oh=00_AfloWQa923PiBKLJHVXG5C8kI1RI6Xn8lTm7TE1UGP4UDA&oe=69506454",
    title: "தளபதி தலைமையில் இணைவு",
    desc: "",
  },
  {
    image: "https://scontent.fixm4-3.fna.fbcdn.net/v/t39.30808-6/602363788_1448972509923657_7381813997448573954_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=nlV9L6UhCt0Q7kNvwFgLdqQ&_nc_oc=AdlCkZaC2u0w0hlbyeYz4-nxbYfPZIte9OSuNbijF6ycTlWf6zfsmbC57hSwkSaEZfrH43Wp32UWJq4fX_0LQlkc&_nc_zt=23&_nc_ht=scontent.fixm4-3.fna&_nc_gid=sBIDoccx5qXWgh4Z5z50uw&oh=00_AfkE-N2R0IFv8G6iKk69pdxKyy4hjqMsX8D_Zq4D5Uk4qQ&oe=6950642F",
    title: "வெல்லும் தமிழ்ப் பெண்கள் மாநாடு ஏற்பாடுகள்",
    desc: "",
  },
  {
    image: "https://scontent.fcjb2-1.fna.fbcdn.net/v/t39.30808-6/597286406_1445108853643356_9016222330489812661_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=OAZCy0RHXBEQ7kNvwFoeRQu&_nc_oc=Adn2MXQWon_4iiawEKNOngCpywlNwn5E1zbU0EqI0jrWVF87XCAYsPMKBI0U3DkquoXdn3BpYfsbhmLniJW-ro6b&_nc_zt=23&_nc_ht=scontent.fcjb2-1.fna&_nc_gid=WhkMH2Ypw-2zpSDCmQnafQ&oh=00_Afnt0Lnyu6U5x4SVvJfOw5wHEcAWPZUpR1vF_yTm0J80jg&oe=69529E3E",
    title: "ரூ.17 லட்சம் மதிப்பில் சுற்றுச் சுவர் பணிகள் துவக்கம்",
    desc: "",
  },
  {
    image: "https://scontent.fixm4-1.fna.fbcdn.net/v/t39.30808-6/603897969_1447666326720942_4162124258089240635_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=9D8-GYVZrrYQ7kNvwEGDsPk&_nc_oc=AdkE9yEMCNDVt5Jpz4JHFkpCY6GFq5dPdDwI3drz3BdGiw74R-2dOZAwgwPzxDiI9s4rI4VFAhK9Wx_vCG1YDhW0&_nc_zt=23&_nc_ht=scontent.fixm4-1.fna&_nc_gid=L0ObseD9FJMM3i2K79VjtA&oh=00_AfndgNhDhCDyBYoPhmE-H2v20-IQJcfiS-vkX9EP8RbU1g&oe=69505D4F",
    title: "கரூர் மாவட்ட கிரிக்கெட்",
    desc: "",
  },
  {
    image: "https://scontent.fixm4-2.fna.fbcdn.net/v/t39.30808-6/600291656_1447474846740090_5859908690971670026_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=b96pFdam17UQ7kNvwFSBXEJ&_nc_oc=AdnH9OUugfGLCGKsgHDg2dOY_pTo0KGk4euJommjc4Vi6Nlpe1lF7QSujfAr5hNtqzZKLjEGBVfGY6HuAjZGiwA_&_nc_zt=23&_nc_ht=scontent.fixm4-2.fna&_nc_gid=0NtU7zREcbnNxnJijFwKcw&oh=00_Afm0ZZTUnJUmhqP0nOiNSNmL5GCbVbQ2kzfc4OjjD_61Fw&oe=69504B65",
    title: "வெல்லும் தமிழ் பெண்கள்",
    desc: "",
  },
  {
    image: "https://scontent.fixm4-1.fna.fbcdn.net/v/t39.30808-6/601403350_1447464356741139_8674172703875420462_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=k9yupKzddwQQ7kNvwGVXkOe&_nc_oc=AdmNHcsMgGn6qt-6ymFdMaY3Hqhr1qwI-3Xk62GNojUyrzWZ2OYn3-Kwr52_LBkGo7I_jiDW4-jwB3bfxq1ewNlr&_nc_zt=23&_nc_ht=scontent.fixm4-1.fna&_nc_gid=AtYlOiCyaCTLSgvthTXqFQ&oh=00_Afk5xn3VIRZDcWqeAI9RKscSMixXBPS9EnJBIyNhgAEbvw&oe=69506F05",
    title: "கிறிஸ்துமஸ் ஆராதனை",
    desc: "",
  },
  {
    image: "https://scontent.fixm4-1.fna.fbcdn.net/v/t39.30808-6/601363130_1447448923409349_6980767618375826796_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=67ZyOP3bTQMQ7kNvwHCjxuQ&_nc_oc=Adm_OzpC4jhaQX_Fxk9K_6Iyr3AoH9CPI3C-mBDj9_XgwbtkyCQb3NzpPlz59MsJHKPVKG2KFp0KPsmCPwTVGyx_&_nc_zt=23&_nc_ht=scontent.fixm4-1.fna&_nc_gid=-2f8jhWI_AiRkQ2ojTzglA&oh=00_AflNGVQr4_CgCqQHV3prXYVyVz_YMK8QcBNCS6WgunyyaA&oe=69505FC3",
    title: "ஜவுளி இயந்திர கண்காட்சி",
    desc: "",
  },
   {
    image: "https://scontent.fixm4-3.fna.fbcdn.net/v/t39.30808-6/600273891_1446948383459403_5498331862966810494_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=QZNRAYCtI5AQ7kNvwFmYMKI&_nc_oc=AdnNWUTznGuZkNY1UBJS6snZkNTwonFkVrKqxRrmMIqcN--76tWTKXsx86uG_KukQJU60yoD2_RAWhGsGVrCbISF&_nc_zt=23&_nc_ht=scontent.fixm4-3.fna&_nc_gid=_wNjh2zXSu675SxNMj82lA&oh=00_Afmt1zf9QKmAfBfY7BJ-0CzvHzn7fxvt9CDAUeoyWvkzjQ&oe=6950603F",
    title: "நலத்திட்ட விழா கூட்டம்",
    desc: "",
  },
  {
   image: "https://scontent.fixm4-1.fna.fbcdn.net/v/t39.30808-6/600313650_1445303873623854_6744709080586453021_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=JiJKKEgU_HgQ7kNvwFiKYe7&_nc_oc=AdlUSVx8t3gSP_dgt06FKkDK9XUgXaZ4LYsRozKsv5Yw-7G1cL-edwKJaLBUpxtaPKnoqoTeVs0Jg1oPvqomZxgb&_nc_zt=23&_nc_ht=scontent.fixm4-1.fna&_nc_gid=7jlYntBmxzCNgAYQuI1aTQ&oh=00_Afl3S5WmO5uhyPnHwuZFmbHEyS2uFOA0UnoZHb2tC6eyxg&oe=6950756C",
    title: "நலத்திட்ட உதவிகள் வழங்கல்",
    desc: "",
  },
   {
    image: "https://scontent.fixm4-3.fna.fbcdn.net/v/t39.30808-6/599954331_1447702833383958_2882067946175991392_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=OyKZpLIOYfIQ7kNvwFZdkVk&_nc_oc=AdmP-5_9x-djNF2oYVjS_tKewfHHXbOe1S9ZdJ11etMhv2XSYODQaWbDGGe-MRRnGBR9TvhBpKFByUWOwOtA2dMP&_nc_zt=23&_nc_ht=scontent.fixm4-3.fna&_nc_gid=JvVjbke2l2N3uwP47erohw&oh=00_Afk-L38Cm57VR3oi6WIgG-0vl9ritJENUV5IoE1SlP0AYA&oe=69505539",
    title: "BNI கரூர் வணிக விழா",
    desc: "",
  },
   {
    image: "https://scontent.fixm4-1.fna.fbcdn.net/v/t39.30808-6/600122695_1445128410308067_1409277641185335640_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=g3M-Y9tS8JgQ7kNvwFYMdjp&_nc_oc=AdlGHgPkTWRyQuM_MUkVJXUd-17OMKlKHKKiLVagBs3d8vh4CL8qaK2jlCWhbeDYD-shgXKzLN8njfKxUJ6SeJel&_nc_zt=23&_nc_ht=scontent.fixm4-1.fna&_nc_gid=meI_qdbdt-W6mdh-lKWieA&oh=00_Afkj8oWxiaGL5uYeucgoTr-2Igu2YQ4t1UO7GFA7XsrvGw&oe=6950698C",
    title: "புதிய வகுப்பறைகள் திறப்பு",
    desc: "",
  }
];

const Gallery2 = () => {
  const [index, setIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPrevIndex(index);
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [index]);

  const nextSlide = () => {
    setPrevIndex(index);
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setPrevIndex(index);
    setIndex((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  return (
    <div className="carousel-fullscreen">

     {/* PREVIOUS IMAGE — MOVES OUT */}
<div
  key={prevIndex}
  className="slide-img slide-out"
  style={{ backgroundImage: `url(${slides[prevIndex].image})` }}
/>

{/* CURRENT IMAGE — COMES IN */}
<div
  key={index}
  className="slide-img slide-in"
  style={{ backgroundImage: `url(${slides[index].image})` }}
/>


      {/* UI – FIXED (NEVER MOVES) */}
      <div className="ui-layer">
        <div className="caption">
          <h3>{slides[index].title}</h3>
          {slides[index].desc && <p>{slides[index].desc}</p>}
        </div>

        <button className="nav left" onClick={prevSlide}>❮</button>
        <button className="nav right" onClick={nextSlide}>❯</button>

        <div className="dots">
          {slides.map((_, i) => (
            <span
              key={i}
              className={`dot ${i === index ? "active" : ""}`}
              onClick={() => {
                setPrevIndex(index);
                setIndex(i);
              }}
            />
          ))}
        </div>
      </div>

    </div>
  );
};

export default Gallery2;
// gallery.jsx