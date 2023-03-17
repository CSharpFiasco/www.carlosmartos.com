import React from "react";
import "./Education.css";
import EducationCard from "../../components/educationCard/EducationCard";
import { educationInfo } from "../../portfolio";
import { Fade } from "react-awesome-reveal";
import svg from "../../assets/images/developerActivity.svg"

export default function Education() {
  if (educationInfo.display) {
    console.log('education render');

    return (
      <div className="main" id="education">
        <div className="education-main-div">
          <Fade direction="left" duration={1000}>
            <div className="education-section education-text-div" id="education">
              <h1 className="education-heading">Education</h1>
              <div className="education-card-container">
                {
                educationInfo.schools.map((school) => (
                  <EducationCard key={school.schoolName} school={school} />
                ))}
              </div>
            </div>
          </Fade>
          <Fade direction="right" duration={1000}>
            <div className="skills-image-div">
              <img alt="Developer Working" src={svg}></img>
            </div>
          </Fade>
        </div>
      </div>
    );
  }
  return null;
}
