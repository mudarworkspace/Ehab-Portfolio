import React, { useEffect, useState } from "react";
import ProjectDescription from "./components/ProjectDescription";
import ProjectTitle from "./components/ProjectTitle";
import ProjectTechnologies from "./components/ProjectTechnologies";
import ProjectGallery from "./components/ProjectGallery";
import ProjectDemo from "./components/ProjectDemo";
import { useParams } from "react-router-dom";
import "./Project.scss";
import ProjectRequirements from "./components/ProjectRequirements";
import { projects } from "../../data";
const Project = () => {
  const { projectId } = useParams();
  const [data, setData] = useState();
  useEffect(() => {
    for (let i = 0; i < projects.length; i++) {
      if (i === parseInt(projectId)) setData(projects[i]);
    }
    return () => {
      setData(undefined);
    };
  }, [projectId, data]);
  return (
    <div className="project">
      <ProjectTitle title={data?.title} />
      <ProjectDescription desc={data?.desc} />
      <div className="sections">
        <ProjectTechnologies technologies={data?.technologies} />
        <ProjectRequirements requirements={data?.requirements} />
      </div>
      <ProjectGallery images={data?.gallery} />
      {data?.demo && <ProjectDemo video={data?.demo} />}
    </div>
  );
};

export default Project;
