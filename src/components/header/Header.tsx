import React from 'react';
import Headroom from 'react-headroom';
import './Header.css';
import { greeting, workExperiences, educationInfo } from '../../portfolio';

function Header() {
  const exp = workExperiences.viewExperiences;
  const education = educationInfo.display;
  return (
    <Headroom>
      <header className="header">
        <a href="https://www.carlosmartos.com" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" aria-label="Menu button" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>
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
      </header>
    </Headroom>
  );
}
export default Header;
