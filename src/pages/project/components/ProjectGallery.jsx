import React, { useEffect, useState } from "react";
import { Image } from "primereact/image";
import SkeletonLoader from "../../../components/skelton/SkeletonLoader";

const ProjectGallery = ({ images, title }) => {
  const [imageLoaded, setImageLoaded] = useState([]);
  useEffect(() => {
    setImageLoaded(new Array(images?.length).fill(false));
  }, [images?.length]);

  const handleImageLoaded = (index) => {
    setImageLoaded((prevState) => {
      const updatedState = [...prevState];
      updatedState[index] = true;
      return updatedState;
    });
  };

  return (
    <div className="project-gallery">
      <div className="title">{title ? title : "Project Gallery"}</div>
      <div className="images-container">
        {images?.map((item, index) => {
          return (
            <React.Fragment key={index}>
              {!imageLoaded[index] && <SkeletonLoader />}
              <Image
                className="image"
                src={item}
                key={index}
                alt={`ehab-galleria-${index}`}
                loading="eager"
                preview
                downloadable
                children={document.querySelector(".project-gallery")}
                style={{ display: imageLoaded[index] ? "block" : "none" }}
                onLoadCapture={() => handleImageLoaded(index)}
              />
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectGallery;
