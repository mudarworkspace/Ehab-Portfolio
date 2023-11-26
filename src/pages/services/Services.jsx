import React from "react";
import ServiceCard from "../../components/service-card/ServiceCard";
import { servicesData } from "./data";
import "./Services.scss";

const Services = () => {
  return (
    <div className="services">
      {servicesData.map((item, index) => {
        return (
          <ServiceCard
            key={index}
            title={item.title}
            desc={item.desc}
            props={item.props}
          />
        );
      })}
    </div>
  );
};

export default Services;
