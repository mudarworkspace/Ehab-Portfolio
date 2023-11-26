import React from "react";
import "./SkillCard.scss";

const SkillCard = ({ title, percentage }) => {
  const numericPercentage = parseFloat(percentage) / 100;

  return (
    <div className="skill-card animate__animated animate__fadeIn">
      <div className="header">
        <div className="title">{title}</div>
        <div className="percentage">{percentage}</div>
      </div>
      <div className="progress-bar">
        <progress value={numericPercentage}></progress>
      </div>
    </div>
  );
};

export default SkillCard;
