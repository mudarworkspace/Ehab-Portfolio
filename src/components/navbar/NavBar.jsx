import React, { useContext, useEffect, useState } from "react";
import "./NavBar.scss";
import { Link, useLocation } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeProvider";
const NavBar = () => {
  const location = useLocation();
  const { toggle, mode } = useContext(ThemeContext);
  const [place, setPlace] = useState("");

  useEffect(() => {
    const place = location.pathname.slice(1);
    localStorage.setItem("tab", place);
    if (place === "") {
      setPlace("home");
    } else {
      setPlace(place);
    }
  }, [location]);

  return (
    <nav className="navbar animate__animated animate__slideInDown">
      <div className="brand">
        <img src={"/logo.png"} alt="ehab-logo"></img>
      </div>
      <ul className={`items animate__animated  animate__bounceInDown `}>
        <li className="item" onClick={toggle}>
          <i className="fa">{mode === "light" ? "🌙" : "🔆"}</i>
        </li>
        <Link to="home" onClick={() => setPlace("home")}>
          <li className={`item ${place === "home" ? "visited" : ""}`}>Home</li>
        </Link>
        <Link to="about" onClick={() => setPlace("about")}>
          <li className={`item ${place === "about" ? "visited" : ""}`}>
            About
          </li>
        </Link>
        <Link to="services" onClick={() => setPlace("services")}>
          <li className={`item ${place === "services" ? "visited" : ""}`}>
            Services
          </li>
        </Link>
        <Link to="skills" onClick={() => setPlace("skills")}>
          <li className={`item ${place === "skills" ? "visited" : ""}`}>
            Skills
          </li>
        </Link>
        <Link to="projects" onClick={() => setPlace("projects")}>
          <li className={`item ${place === "projects" ? "visited" : ""}`}>
            Projects
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
