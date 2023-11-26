import React from "react";
import "./ServiceCard.scss";
const ServiceCard = ({ title, desc, props }) => {
  return (
    <div className="service-card animate__animated animate__fadeIn">
      <div className="title">{title}</div>
      <div className="desc">
        {desc?.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </div>
      <div>
        {props?.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </div>
    </div>
  );
};

export default ServiceCard;
