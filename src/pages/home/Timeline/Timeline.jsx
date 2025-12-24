import React from "react";
import "./Timeline.css";
import TimelineItem from "./../timelineitem/TimelineItem";

const Timeline = ({ data }) => {
  return (
    <div className="timeline-section">
    <h1 className="timeline-head">THE UNSTOPPABLE JOURNEY <br />
வெற்றிப் பயணம்</h1>
      <div className="timeline-container">
        {/* Main Vertical Spine */}
        <div className="timeline-spine">
          {/* Animated accent gradient */}
          <div className="timeline-spine-accent"></div>
        </div>

        <div className="timeline-items">
          {data.map((entry) => (
            <TimelineItem key={entry.id} entry={entry} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
