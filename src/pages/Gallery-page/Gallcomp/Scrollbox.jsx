import React from "react";

const ScrollBox = ({ data, onImageClick }) => {
  return (
    <div className="gallery-grid">
      {data.map((item, index) => (
        <div
          key={index}
          className="gallery-card"
          onClick={() => onImageClick(item.img)}
        >
          <img src={item.img} alt="gallery" />
        </div>
      ))}
    </div>
  );
};

export default ScrollBox;
//scrollbar.jsx