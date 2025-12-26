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
      "மக்கள் சேவையே என் வாழ்க்கையின் அடிப்படை. நம்பிக்கையுடன் மக்களின் தேவைகளை நிறைவேற்றுவதுதான் என் கடமை.",
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
