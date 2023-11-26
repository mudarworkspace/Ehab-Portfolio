import React from "react";

const ProjectDemo = ({ video }) => {
  return (
    <div className="project-demo">
      <div className="title">Project Demo</div>
      <video controls src={video}></video>
    </div>
  );
};

export default ProjectDemo;
