import React, { useEffect, useState } from "react";
import ProjectDescription from "./components/ProjectDescription";
import ProjectTitle from "./components/ProjectTitle";
import ProjectTechnologies from "./components/ProjectTechnologies";
import ProjectGallery from "./components/ProjectGallery";
import ProjectDemo from "./components/ProjectDemo";
import { useParams } from "react-router-dom";
import "./Project.scss";
import ProjectRequirements from "./components/ProjectRequirements";
import { projects, shopDrawing } from "../../data";
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
  console.log(typeof projectId);

  const isNumber = (url) => {
    const segments = url.split("/").filter(Boolean);
    const lastSegment = segments[segments.length - 1];
    return !isNaN(lastSegment);
  };
  const parts = projectId.split("_");
  const lastPart = parts[parts.length - 1];

  return isNumber(projectId) ? (
    <div className="project">
      <ProjectTitle title={data?.title} />
      {data?.desc && <ProjectDescription desc={data?.desc} />}
      <div className="sections">
        {data?.technologies && (
          <ProjectTechnologies technologies={data?.technologies} />
        )}
        {data?.requirements && (
          <ProjectRequirements requirements={data?.requirements} />
        )}
      </div>
      <ProjectGallery images={data?.gallery} />
      {data?.demo && <ProjectDemo video={data?.demo} />}
    </div>
  ) : (
    <div className="project">
      {shopDrawing.projectCards[lastPart].projects.map((item, index) => {
        const subProjectsArray = item?.subProjects || [];

        return (
          <div key={index}>
            <ProjectTitle title={item?.title} />
            {subProjectsArray.map((subProject, subIndex) => (
              <div key={subIndex}>
                {subProject?.images &&
                  <ProjectGallery title={subProject?.title} images={subProject?.images} />
                }
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default Project;
