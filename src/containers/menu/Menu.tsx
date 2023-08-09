import React from 'react';
import { workExperiences, educationInfo } from '../../portfolio';

function Menu() {
  const exp = workExperiences.viewExperiences;
  const education = educationInfo.display;
  return (
    <ul className="menu">
      <li>
        <a href="#skills">Skills</a>
      </li>
      {education === true && (
        <li>
          <a href="#education">Education</a>
        </li>
      )}
      {exp === true && (
        <li>
          <a href="#experience">Work Experiences</a>
        </li>
      )}
      <li>
        <a href="#achievements">Achievements</a>
      </li>
    </ul>
  );
}

export default Menu;
