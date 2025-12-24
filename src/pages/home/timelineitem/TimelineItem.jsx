import React from "react";
import "./TimelineItem.css";

const TimelineItem = ({ entry }) => {
  const isLeft = entry.side === "left";

  return (
    <div className="timeline-item group">
      {/* Marker */}
      <div className="timeline-marker-wrapper">
        <div className="timeline-marker">
          <div className="timeline-marker-dot"></div>
        </div>
      </div>

      {/* Horizontal connector (desktop left) */}
      <div
        className={`timeline-connector left ${!isLeft ? "hidden-desktop" : ""}`}
      />

      {/* Horizontal connector (desktop right + mobile) */}
      <div
        className={`timeline-connector right ${isLeft ? "hidden-desktop" : ""}`}
      />

      {/* Content layout */}
      <div
        className={`timeline-content-row ${isLeft ? "row-left" : "row-right"}`}
      >
        {/* Card */}
        <div className={`timeline-card ${isLeft ? "text-right" : "text-left"}`}>
          <div
            className={`timeline-phase ${
              isLeft ? "phase-right" : "phase-left"
            }`}
          >
            Phase {entry.id}
          </div>

          <h3 className="timeline-title">{entry.title}</h3>
          <p className="timeline-description">{entry.description}</p>

          {entry.image && (
            <div className="timeline-image-wrapper">
              <img src={entry.image} alt={entry.title} />
            </div>
          )}
        </div>

        {/* Empty spacer (desktop) */}
        <div className="timeline-spacer"></div>
      </div>
    </div>
  );
};

export default TimelineItem;
