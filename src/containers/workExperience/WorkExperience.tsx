import React from "react";
import "./WorkExperience.css";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import { workExperiences } from "../../portfolio";
import { Fade } from "react-awesome-reveal";

export default function WorkExperience() {
    if (workExperiences.viewExperiences) {
        return (
            <div id="experience">
                <Fade duration={1000}>
                    <div className="experience-container" id="workExperience">
                        <div>
                            <h1 className="experience-heading">Experiences</h1>
                            <div className="experience-cards-div">
                                {workExperiences.experience.map((card, index) => {
                                    return (
                                        <ExperienceCard
                                            key={index}
                                            company={card.company}
                                            desc={card.desc}
                                            date={card.date}
                                            companylogo={card.companylogo}
                                            role={card.role}
                                            descBullets={card.descBullets}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </Fade>
            </div>
        );
    }
    return null;
}