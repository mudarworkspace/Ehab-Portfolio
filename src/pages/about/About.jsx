import React from "react";
import "./About.scss";
import CVButtom from "../../components/cv-buttom/CVButtom";
const About = () => {
  return (
    <div className="about">
      <div className="image animate__animated animate__slideInLeft">
        <img src={"/images/home-image.png"} alt="ehab-about" loading="eager"/>
      </div>
      <div className="information animate__animated animate__slideInRight">
        <div className="title">
          <h2>About Me</h2>
          <p>
            Highly motivated and skilled architect with a passion for designing
            sustainable and innovative structures. Seeking a challenging
            position that allows me to utilize my creativity and technical
            expertise to contribute to architectural projects that positively
            impact communities.
          </p>
        </div>
        <ul>
          <li>
            <span className="left">Name:</span>
            <span className="right">Ehab Abo Fakher</span>
          </li>
          <li>
            <span className="left">Date of birth:</span>
            <span className="right">27/07/1999</span>
          </li>
          <li>
            <span className="left">Address:</span>
            <span className="right">Abu Dhabi, United Arab Emirates</span>
          </li>
          <li>
            <span className="left">Email:</span>
            <span className="right">ehabooo72@gmail.com</span>
          </li>
          <li>
            <span className="left">Phone:</span>
            <span className="right">+971 54 241 2649</span>
          </li>
          <li>
            <span className="left">Study:</span>
            <span className="right">
              Bachelor Degree of Architecture International University for
              Science and Technology (IUST)
              <br />
              <b>Graduation Date: 2023</b>
            </span>
          </li>
          <li>
            <CVButtom />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
