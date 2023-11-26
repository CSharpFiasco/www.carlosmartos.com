import React from 'react';
import './Greeting.css';
import { Fade } from 'react-awesome-reveal';
import emoji from 'react-easy-emoji';
import SocialMedia from '../../components/socialMedia/SocialMedia';
import Button from '../../components/button/Button';
import { greeting } from '../../portfolio';
import svg from '../../assets/images/manOnTable.svg';

export default function Greeting() {
  return (
    <Fade duration={750}>
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text">
                {greeting.title}
                <span className="wave-emoji">{emoji('👋')}</span>
              </h1>
              <p className="greeting-text-p subTitle">{greeting.subTitle}</p>
              <SocialMedia />
              <div className="button-greeting-div">
                <Button text="See my resume" newTab href={greeting.resumeLink} className={null} />
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <img alt="Developer sitting on table" src={svg} />
          </div>
        </div>
      </div>
    </Fade>
  );
}
