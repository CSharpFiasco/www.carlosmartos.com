import React from 'react';
import './SocialMedia.css';
import { socialMediaLinks } from '../../portfolio';

export default function socialMedia() {
  return (
    <div className="social-media-div">
      {socialMediaLinks.github ? (
        <a
          href={socialMediaLinks.github}
          className="icon-button github"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github profile"
        >
          <i className="fab fa-github" />
          <span />
        </a>
      ) : null}

      {socialMediaLinks.linkedin ? (
        <a
          href={socialMediaLinks.linkedin}
          className="icon-button linkedin"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile"
        >
          <i className="fab fa-linkedin-in" />
          <span />
        </a>
      ) : null}

      {socialMediaLinks.gmail ? (
        <a
          href={`mailto:${socialMediaLinks.gmail}`}
          className="icon-button google"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Gmail"
        >
          <i className="fab fa-google" />
          <span />
        </a>
      ) : null}

      {socialMediaLinks.stackoverflow ? (
        <a
          href={socialMediaLinks.stackoverflow}
          className="icon-button stack-overflow"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Stack overflow profile"
        >
          <i className="fab fa-stack-overflow" />
          <span />
        </a>
      ) : null}
    </div>
  );
}
