import React from "react";

const ProjectRequirements = ({ requirements }) => {
  return (
    <div className="project-requirements animate__animated animate__lightSpeedInLeft">
      <div className="title">Project Requirements</div>
      <ul>
        {requirements?.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default ProjectRequirements;
