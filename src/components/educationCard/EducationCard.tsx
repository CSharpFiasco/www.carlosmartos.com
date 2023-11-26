import React, { createRef } from 'react';
import type { School } from '../../models/EducationInfo';
import './EducationCard.css';
import DescriptionBullets from '../descriptionBullets/descriptionBullets';

export default function EducationCard({ school }: { school: School }) {
  const imgRef = createRef<HTMLImageElement>();
  if (!school.logo) console.error(`Image of ${school.schoolName} is missing in education section`);
  return (
    <div>
      <div className="education-card">
        <div className="education-card-left">
          <img
            crossOrigin="anonymous"
            ref={imgRef}
            className="education-roundedimg"
            src={school.logo}
            alt={school.schoolName}
          />
        </div>
        <div className="education-card-right">
          <h5 className="education-text-school">{school.schoolName}</h5>

          <div className="education-text-details">
            <h5 className="education-text-subHeader">{school.subHeader}</h5>
            <p className="education-text-duration">{school.duration}</p>
            <p className="education-text-desc">{school.desc}</p>
            <div className="education-text-bullets">
              <ul>
                <DescriptionBullets descBullets={school.descBullets} />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
