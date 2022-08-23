import React from "react";
import "./Footer.css";
import { Fade } from "react-awesome-reveal";

export default function Footer() {
  return (
    <Fade direction="bottom" duration={1000} distance="5px">
    <div className="footer-div">
      <p className="footer-text">Forked from: https://github.com/saadpasta/developerFolio</p>
      <p className="footer-text">Theme by <a href="https://github.com/saadpasta/developerFolio">developerFolio</a></p>
    </div>
    </Fade>
  );
}
