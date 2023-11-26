import React from "react";
import "./Home.scss";
import CVButtom from "../../components/cv-buttom/CVButtom";

const Home = () => {
  return (
    <div className="home">
      <div className="bio animate__animated animate__slideInLeft">
        <div className="title">
          <p className="hello">Hello!</p>
          <div className="name">I'm Ehab Abo Fakher</div>
        </div>
        <p className="desc">
          Experienced and dedicated architect with a strong passion for
          architectural design. <br />
          two years of experience in designing, planning, and renovating
          buildings, I am committed to sustainable design principles. In
          addition to my architectural work, I also have experience teaching
          engineering programs and specialize in Revit and Lumion software. I am
          confident that my expertise and communication skills make me a
          valuable asset to any team or institution.
        </p>
        <CVButtom />
      </div>
      <div className="image animate__animated animate__slideInRight">
        <img src="/images/about-image.png" alt="ehab-home"></img>
      </div>
    </div>
  );
};

export default Home;
