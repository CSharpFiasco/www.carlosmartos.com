import React, { useState, createRef } from "react";
import "./ExperienceCard.css";
import ColorThief, { RGBColor } from "colorthief";
import { ExperienceCardInfo } from "../../models/ExperienceCardInfo";

export default function ExperienceCard(cardInfo: ExperienceCardInfo) {
  const [colorArrays, setColorArrays] = useState<RGBColor>([0, 0, 0]);
  const imgRef = createRef<HTMLImageElement>();

  function getColorArrays() {
    const colorThief = new ColorThief();
    setColorArrays(colorThief.getColor(imgRef.current, 10));
  }

  function rgb(values?: RGBColor) {
    return typeof values === "undefined" ? null : "rgb(" + values.join(', ') + ")";
  }

  const GetDescBullets = ({descBullets}: {descBullets: string[]}) => {
    return <>{descBullets.map((item, index) => <li key={index} className="subTitle">{item}</li>)}</>;
  };

  return (
    <div className="experience-card">
      <div style={{background: rgb(colorArrays) ?? "" }} className="experience-banner">
        <div className="experience-blurred_div"></div>
        <div className="experience-div-company">
          <h5 className="experience-text-company">{cardInfo.company}</h5>
        </div>
        
        <img crossOrigin={"anonymous"} ref={imgRef} className="experience-roundedimg" src={cardInfo.companylogo} alt={cardInfo.company} onLoad={() => getColorArrays()}/>
      </div>
      <div className="experience-text-details">
        <h5 className="experience-text-role">{cardInfo.role}</h5>
        <h5 className="experience-text-date">{cardInfo.date}</h5>
        <p className="subTitle experience-text-desc">{cardInfo.desc}</p>
        <ul>
          <GetDescBullets descBullets={cardInfo.descBullets} />
        </ul>
      </div>
    </div>
  );
}
