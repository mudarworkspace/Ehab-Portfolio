import React from "react";
import "./Footer.scss"; // You can create a separate SCSS file for your footer styles

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">Ehab Abo Fakher</div>
        <div className="footer-social">
          <a
            href="https://www.facebook.com/profile.php?id=100011431630295&mibextid=LQQJ4d"
            className="social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-facebook"></i>
          </a>
          <a href="mailto:ehabooo72@gmail.com" className="social-icon">
            <i className="fa fa-envelope"></i>
          </a>
          {/* <a
            href="https://www.linkedin.com/in/mudar-af-883875262"
            className="social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-linkedin"></i>
          </a> */}
          {/* <a
            href="https://github.com/mudar99"
            className="social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-github"></i>
          </a> */}
          {/* <a
            href="https://gitlab.com/Mudar_99"
            className="social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-gitlab"></i>
          </a> */}
          <a
            href="https://instagram.com/ehab_963?igshid=NGVhN2U2NjQ0Yg%3D%3D&utm_source=qr"
            className="social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-instagram"></i>
          </a>
          {/* <a
            href="https://twitter.com/mudar_scorpion"
            className="social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-twitter"></i>
          </a> */}
        </div>
      </div>
      <div className="footer-text">
        &copy; 2023 Ehab Abo Fakher. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
