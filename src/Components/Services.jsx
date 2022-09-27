import React from "react";
import ServiceData from "./ServiceData";
import "./Services.css";
const Services = () => {
  return (
    <>
      <div className="services_container">
        <h2>Our Services</h2>
        <div className="service_info_container">
          {ServiceData.map((e, index) => (
            <div className="service_info" key={index}>
              <h2 className="service__title">{e.title}</h2>
              <p className="service_detail_info">{e.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
