import React from "react";

const ProjectDescription = ({ desc }) => {
  return (
    <div className="project-description animate__animated animate__pulse">
      <div className="title">Project Description</div>
      <p>{desc}</p>
    </div>
  );
};

export default ProjectDescription;
