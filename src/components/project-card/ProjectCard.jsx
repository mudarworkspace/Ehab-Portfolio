import React, { useState } from "react";
import "./ProjectCard.scss";
import SkeletonLoader from "../skelton/SkeletonLoader";

const ProjectCard = ({ title, src, desc }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoaded = () => {
    setImageLoaded(true);
  };
  return (
    <div className="project-card animate__animated animate__fadeIn">
      <div className="image">
        {!imageLoaded && (
          <SkeletonLoader />
        )}
        <img
          src={src}
          alt={title}
          loading="eager"
          style={{ display: imageLoaded ? "block" : "none" }}
          onLoad={handleImageLoaded}
        />
        <div className="title">{title}</div>
      </div>
      <div className="desc">{desc}</div>
    </div>
  );
};

export default ProjectCard;
