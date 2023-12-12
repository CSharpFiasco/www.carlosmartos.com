import React from 'react';
import './Skills.css';
import { Fade } from 'react-awesome-reveal';
import SoftwareSkillComponent from '../../components/softwareSkills/SoftwareSkill';
import { skillsSection } from '../../portfolio';
import svg from '../../assets/images/programmer.svg';

export default function Skills() {
  return (
    <div className="main" id="skills">
      <div className="skills-main-div">
        <Fade direction="left" duration={1000}>
          <div className="skills-image-div">
            <img alt="Developer Working" src={svg} />
          </div>
        </Fade>
        <Fade direction="right" duration={1000}>
          <div className="skills-text-div">
            <h1 className="skills-heading">{skillsSection.title}</h1>
            <p className="subTitle skills-text-subtitle">{skillsSection.subTitle}</p>
            <SoftwareSkillComponent />
            <div>
              {skillsSection.skills.map((skills) => (
                <p key={skills.key} className="subTitle skills-text">
                  {skills}
                </p>
              ))}
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
