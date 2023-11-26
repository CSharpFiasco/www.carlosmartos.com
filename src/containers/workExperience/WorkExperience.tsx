import React from 'react';
import './WorkExperience.css';
import { Fade } from 'react-awesome-reveal';
import ExperienceCard from '../../components/experienceCard/ExperienceCard';
import { workExperiences } from '../../portfolio';

export default function WorkExperience() {
  if (workExperiences.viewExperiences) {
    return (
      <div id="experience">
        <Fade duration={1000}>
          <div className="experience-container" id="workExperience">
            <div>
              <h1 className="experience-heading">Experiences</h1>
              <div className="experience-cards-div">
                {workExperiences.experience.map((card, index) => (
                  <ExperienceCard
                    key={index}
                    company={card.company}
                    desc={card.desc}
                    date={card.date}
                    companyLogo={card.companyLogo}
                    role={card.role}
                    descBullets={card.descBullets}
                    backgroundColor={card.backgroundColor}
                  />
                ))}
              </div>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
  return null;
}
