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
    // Get the last segment of the pathname
    const segments = url.split("/").filter(Boolean); // Split the URL by '/' and remove empty segments
    const lastSegment = segments[segments.length - 1];

    // Check if the last segment is a number
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
        // Accessing 'subProjects' array inside each 'item'
        const subProjectsArray = item?.subProjects || []; // Handling cases where 'subProjects' might be undefined

        return (
          <div key={index}>
            <h1>{item?.title}</h1>
            {/* Looping through 'subProjects' array */}
            {subProjectsArray.map((subProject, subIndex) => (
              <div key={subIndex}>
                <h2>{subProject?.title}</h2>
                {/* Accessing 'images' array within each 'subProject' */}
                {subProject?.images &&
                  subProject?.images?.map((image, imageIndex) => (
                    <img
                      style={{ maxWidth: "200px" }}
                      key={imageIndex}
                      src={image}
                      alt={`Image ${imageIndex}`}
                    />
                  ))}
              </div>
            ))}
          </div>
        );
      })}

      {/* {shopDrawing.projectCards[lastPart].projects.map((item, index) => {
        return <h1>{console.log(item)}</h1>;
      })} */}
    </div>
  );
};

export default Project;
