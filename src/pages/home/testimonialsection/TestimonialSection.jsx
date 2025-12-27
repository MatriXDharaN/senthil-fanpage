import React from "react";
import "./TestimonialSection.css";
import senthilWithStalin from "../../../assets/senthil-with-stalin.jpg";
import senthilWithUdhay from "../../../assets/senthil-with-udhay.jpg";

const TestimonialSection = () => {
  const leader = {
    name: "மு.க. ஸ்டாலின்",
    role: "மாண்புமிகு முதலமைச்சர்",
    testimonial:
      "எளிமை, அர்ப்பணிப்பு மற்றும் விடாமுயற்சி ஆகிய பண்புகளில் ஒளி வீசும் அவரது சேவைகள், மக்களிடையே பெரிதும் பாராட்டை பெற்றுள்ளவர்",
    imageUrl: senthilWithStalin,
  };

  const leader2 = {
    name: "உதயநிதி ஸ்டாலின்",
    role: "மாண்புமிகு துணை முதலமைச்சர்",
    testimonial:
      "ஒரு சாதாரண கூட்டம் நடத்த சொன்னால் மாநாடு போல நடத்துவதுதான் அண்ணன் செந்தில்பாலாஜி அவர்கள். ஒவ்வொரு முறையும் அழுத்தமாக நிரூபித்துக்கொண்டே இருக்கிறார்.",
    imageUrl: senthilWithUdhay,
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
          <h4 className="leader-name">{leader.name}</h4>

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
          <h4 className="leader-name">{leader2.name}</h4>

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
