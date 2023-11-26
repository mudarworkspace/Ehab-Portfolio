import React from "react";
import { Image } from "primereact/image";

const ProjectGallery = ({ images }) => {
  return (
    <div className="project-gallery">
      <div className="title">Project Gallery</div>
      <div className="images-container">
        {images?.map((item, index) => {
          return (
            <Image
              className="image"
              src={item}
              key={index}
              alt={`ehab-galleria-${index}`}
              loading="lazy"
              preview
              downloadable
              children={document.querySelector(".project-gallery")}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectGallery;
