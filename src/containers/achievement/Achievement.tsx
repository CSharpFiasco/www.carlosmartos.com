import React from "react";
import "./Achievement.css";
import AchievementCard from "../../components/achievementCard/AchievementCard";
import { achievementSection } from "../../portfolio";
import { Fade } from "react-awesome-reveal";

export default function Achievement() {
  return (
    <Fade duration={1000}>
    <div className="main" id="achievements">
      <div className="achievement-main-div">
        <div className="achievement-header">
          <h1 className="heading achievement-heading">{achievementSection.title}</h1>
          <p className="subTitle achievement-subtitle">{achievementSection.subtitle}</p>
        </div>
        <div className="achievement-cards-div">
          {achievementSection.achievementsCards.map((card, index) => {
            return (
              <AchievementCard
                key={index}
                cardInfo={{
                  title: card.title,
                  subtitle: card.subtitle,
                  image: card.image,
                  footerLink: card.footerLink
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
    </Fade>
  );
}
