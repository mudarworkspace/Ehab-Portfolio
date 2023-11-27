import React from "react";
import "./Projects.scss";
import { projects, shopDrawing } from "../../data";
import { Link } from "react-router-dom";
import ProjectCard from "../../components/project-card/ProjectCard";

const Projects = () => {
  return (
    <div className="projects">
      <div className="projects-container">
        {projects.map((item, index) => {
          return (
            <Link to={"/projects/" + index} key={index}>
              <ProjectCard
                desc={item.summary}
                src={item.cover}
                title={item.title}
              />
            </Link>
          );
        })}
        <Link to={"/shop-drawing"}>
          <ProjectCard src={shopDrawing.cover} title={shopDrawing.mainTitle} />
        </Link>
      </div>
    </div>
  );
};

export default Projects;
