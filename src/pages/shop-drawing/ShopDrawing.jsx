import React from "react";
import ProjectTitle from "../project/components/ProjectTitle";
import ProjectDescription from "../project/components/ProjectDescription";
import ProjectTechnologies from "../project/components/ProjectTechnologies";
import ProjectRequirements from "../project/components/ProjectRequirements";
import ProjectGallery from "../project/components/ProjectGallery";
import ProjectDemo from "../project/components/ProjectDemo";
import { shopDrawing } from "../../data";
import ProjectCard from "../../components/project-card/ProjectCard";
import { Link } from "react-router-dom";
import "./ShopDrawing.scss";

const ShopDrawing = () => {
  return (
    <div className="shop-drawing">
      <div className="project">
        <ProjectTitle title={shopDrawing?.mainTitle} />
        {shopDrawing?.desc && <ProjectDescription desc={shopDrawing?.desc} />}
        <div className="sections">
          {shopDrawing?.technologies && (
            <ProjectTechnologies technologies={shopDrawing?.technologies} />
          )}
          {shopDrawing?.requirements && (
            <ProjectRequirements requirements={shopDrawing?.requirements} />
          )}
        </div>
        <div className="shop-drawing-card">
          {shopDrawing.projectCards.map((item, index) => {
            return (
              <Link
                to={"/projects/" + item.cardTitle + "_" + index}
                key={index}
              >
                <ProjectCard
                  desc={item.summary}
                  src={item.cardCover}
                  title={item.cardTitle}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ShopDrawing;
