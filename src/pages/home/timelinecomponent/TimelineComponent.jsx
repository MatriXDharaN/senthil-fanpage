import React from "react";
import "./Timelinecomp.css";
import { TIMELINE_DATA } from "../../../data/timelineData";

const TimelineCard = ({ phase, alignment }) => {
  return (
    <div className={`timeline-row ${alignment}`}>
      {/* Central Node */}
      <div className="timeline-node">
        <div className="node-glow"></div>
        <div className="node-core">
          <span>{phase.phaseNumber}</span>
          <div className="node-ring"></div>
        </div>
      </div>

      {/* Connector */}
      <div className={`timeline-connector ${alignment}`}>
        <span className={`arrow ${alignment}`}></span>
      </div>

      {/* Card */}
      <div className={`timeline-card-wrapper ${alignment}`}>
        <div className="timeline-card">
          <div className="card-top">
            <span className="phase-text">Phase {phase.phaseNumber}</span>
            <span className="year-pill">{phase.year}</span>
          </div>

          <h3 className="card-title">{phase.title}</h3>
          <p className="card-description">{phase.description}</p>

          <div className={`side-bar ${alignment}`}></div>
        </div>
      </div>
    </div>
  );
};

const TimelineComponent = () => {
  return (
    <section className="timeline-root">
      {/* Background blobs */}
      <div className="bg-decor blue"></div>
      <div className="bg-decor gold"></div>

      {/* Header */}
      <header className="timeline-header">
        <h1 className="timeline-title-main">
          The Unstoppable <span>Journey</span>
        </h1>

        <div className="tamil-badge">வெற்றிப் பயணம்</div>

        <div className="scroll-indicator"></div>
      </header>

      {/* Timeline */}
      <div className="timeline-container">
        <div className="timeline-spine">
          <div className="timeline-flow"></div>
        </div>

        {TIMELINE_DATA.map((phase, index) => (
          <TimelineCard
            key={phase.id}
            phase={phase}
            alignment={index % 2 === 0 ? "left" : "right"}
          />
        ))}
      </div>
    </section>
  );
};

export default TimelineComponent;
