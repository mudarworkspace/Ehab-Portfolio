import React from "react";
import "./ProjectCard.scss";

const ProjectCard = ({ title, src, desc }) => {
  return (
    <div className="project-card animate__animated animate__fadeIn">
      <div className="image">
        <img src={src} alt={title} loading="lazy" />
        <div className="title">{title}</div>
      </div>
      <div className="desc">{desc}</div>
    </div>
  );
};

export default ProjectCard;
