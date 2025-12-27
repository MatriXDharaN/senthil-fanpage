import React from "react";
import "./TestimonialSection.css";

const TestimonialSection = () => {
  const leader = {
    name: "மு.க. ஸ்டாலின்",
    role: "மாண்புமிகு தமிழ்நாடு முதலமைச்சர்",
    testimonial:
      "எளிமை, அர்ப்பணிப்பு மற்றும் விடாமுயற்சி ஆகிய பண்புகளில் ஒளி வீசும் அவரது சேவைகள், மக்களிடையே பெரிதும் பாராட்டை பெற்றுள்ளவர்",
    imageUrl: "https://scontent.fcjb2-1.fna.fbcdn.net/v/t39.30808-6/589193019_1428350188652556_248347122337184624_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=9ML0PySjXuoQ7kNvwFIE0fp&_nc_oc=AdnsBNPx-5-SQMXSvFrefe9BykircnEdfJGGbgArIwxqjR91MCq3QDzmfOIol3xyIoKf2v4FLT-QfdRboJr1vVEK&_nc_zt=23&_nc_ht=scontent.fcjb2-1.fna&_nc_gid=1Lk-5jbg22RmrL8vyxIq7w&oh=00_AfkBNeh4z2GwP-sPRq45zT2zR2dH-23PS6z-0--McIG7Og&oe=6955ECA0",
  };

  const leader2 = {
    name: "உதயநிதி ஸ்டாலின்",
    role: "மாண்புமிகு தமிழ்நாடு துணை முதலமைச்சர்",
    testimonial:
      "ஒரு சாதாரண கூட்டம் நடத்த சொன்னால் மாநாடு போல நடத்துவதுதான் அண்ணன் செந்தில்பாலாஜி அவர்கள். ஒவ்வொரு முறையும் அழுத்தமாக நிரூபித்துக்கொண்டே இருக்கிறார்.",
    imageUrl: "https://scontent.fmaa12-2.fna.fbcdn.net/v/t39.30808-6/590403242_1429917201829188_2182697746154035073_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=YJ8JfJXu_rgQ7kNvwFA5bFf&_nc_oc=AdkAwdmNhXaIwWsYhlbMVrlocsTO6tTfX9xq5n-UpZqPs64GWBm4kKYZFi9B47u8SeeqD-3_1_m6F7a1MHkvK9rf&_nc_zt=23&_nc_ht=scontent.fmaa12-2.fna&_nc_gid=gYAkK7bQEpU592whwaeX_A&oh=00_Afk-3PNUAT490J8VlJuFeXCebHfTWFk0UWnjc7Q-I7T_gg&oe=6955D382",
  };

  return (
    <div className="testimonial">
      <div className="testimonial-card horizontal">
        {/* LEFT : IMAGE */}
        <div className="avatar-wrapper large">
          <div className="avatar-glow"></div>
          <img src={leader.imageUrl} alt={leader.name} className="avatar-img" />
        </div>

        {/* RIGHT : CONTENT */}
        <div className="testimonial-right">
          <div className="testimonial-content">
            <span className="quote-start">“</span>
            <p className="testimonial-text">{leader.testimonial}</p>
            <p className="leader-role">- {leader.role}</p>
            <span className="quote-end">”</span>
          </div>
        </div>
      </div>
      <div className="testimonial-card horizontal">
        {/* LEFT : IMAGE */}
        <div className="avatar-wrapper large">
          <div className="avatar-glow"></div>
          <img
            src={leader2.imageUrl}
            alt={leader2.name}
            className="avatar-img"
          />
        </div>

        {/* RIGHT : CONTENT */}
        <div className="testimonial-right">

          <div className="testimonial-content">
            <span className="quote-start">“</span>
            <p className="testimonial-text">{leader2.testimonial}</p>
            <p className="leader-role">- {leader2.role}</p>
            <span className="quote-end">”</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
