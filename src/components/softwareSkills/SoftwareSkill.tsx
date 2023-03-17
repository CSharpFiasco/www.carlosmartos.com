import React from "react";
import "./SoftwareSkill.css";
import { skillsSection } from "../../portfolio";
import { SoftwareSkill } from "../../models/SoftwareSkill";

export default function SoftwareSkillComponent() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skills: SoftwareSkill) => {
            return (
              <li key={skills.skillName} className="software-skill-inline">
                <i className={skills.fontAwesomeClassname}></i>
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
