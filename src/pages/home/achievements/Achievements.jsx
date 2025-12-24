import React from "react";
import "./Achievements.css";

const achievementsData = [
  {
    title: "Cabinet Minister – Tamil Nadu",
    desc: "Served as a Cabinet Minister in the Tamil Nadu Government, contributing to policy formulation, governance, and state administration.",
    tag: "DMK Government",
    img: "/images/achieveImg2.jpg",
    alt: "Cabinet Minister",
  },
  {
    title: "Minister for Electricity",
    desc: "Led initiatives to improve power infrastructure, strengthen electricity distribution, and support long-term energy development across Tamil Nadu.",
    tag: "Energy Portfolio",
    img: "/images/achieveImg1.jpg",
    alt: "Electricity Minister",
  },
  {
    title: "Minister for Prohibition & Excise",
    desc: "Oversaw prohibition and excise administration, ensuring effective regulation, policy execution, and revenue management.",
    tag: "State Administration",
    img: "/images/achieveImg1.jpg",
    alt: "Prohibition & Excise",
  },
  {
    title: "Member of Legislative Assembly – Karur",
    desc: "Elected as MLA from Karur, representing the constituency and working towards regional development and public welfare.",
    tag: "Karur Constituency",
    img: "/images/achieveImg1.jpg",
    alt: "MLA Karur",
  },
  {
    title: "Regional Development Leader",
    desc: "Actively involved in promoting infrastructure, industrial growth, and welfare initiatives in Karur and surrounding regions.",
    tag: "Western Tamil Nadu",
    img: "/images/achieveImg1.jpg",
    alt: "Regional Development",
  },
  {
    title: "Administrative Experience",
    desc: "Brought extensive administrative and political experience to governance and effective implementation of government schemes.",
    tag: "State Governance",
    img: "/images/achieveImg1.jpg",
    alt: "Administration",
  },
];

const Achievements = () => {
  return (
    <section className="achievements section" id="achievements">
      <h2>Achievements</h2>

      <div className="achievement-grid">
        {achievementsData.map((item, index) => (
          <div className="achievement-row animate" key={index}>
            <div className="image-box">
              <img src={item.img} alt={item.alt} />
            </div>

            <div className="content-box">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <span>{item.tag}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
