import React from "react";
import "./Education.css";
import EducationCard from "../../components/educationCard/EducationCard";
import { educationInfo } from "../../portfolio";
import { Fade } from "react-reveal";

export default function Education() {
  if (educationInfo.display) {
    return (
      <div className="main" id="education">
        <div className="education-main-div">
          <Fade left duration={1000}>
            <div className="education-section education-text-div" id="education">
              <h1 className="education-heading">Education</h1>
              <div className="education-card-container">
                {educationInfo.schools.map((school, index) => (
                  <EducationCard key={index} school={school} />
                ))}
              </div>
            </div>
          </Fade>
          <Fade right duration={1000}>
            <div className="skills-image-div">
              <img alt="Developer Working" src={require("../../assets/images/developerActivity.svg")}></img>
            </div>
          </Fade>
        </div>
      </div>
    );
  }
  return null;
}
