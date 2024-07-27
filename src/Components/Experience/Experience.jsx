import React from "react";
import { experienceData } from "../../constants/ExpData";
import "./Experience.css";
import { useInView } from "react-intersection-observer";

export const Experience = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  return (
    <div className="exp">
      <h4 className="section-title">Experience</h4>
      <div ref={ref} className="exp-container">
        {experienceData.map((exp) => (
          <div key={exp.id} className="exp-card">
            <div className={`exp-duration ${inView ? "left" : ""}`}>
              {exp.duration}
            </div>
            <div className={`exp-details-container ${inView ? "right" : ""}`}>
              <p className="exp-role">
                {exp.role} - {exp.company}
              </p>
              <p className="exp-desc">{exp.description}</p>
              <div className="tech-stack">
                {exp.techStack.map((tech, index) => (
                  <span key={index}>{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
