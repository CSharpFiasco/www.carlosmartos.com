/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import './Button.css';

type ButtonProps = {
  text: string;
  className: string | null;
  href: string;
  newTab: boolean;
};

function Button({ className, href, newTab, text }: ButtonProps) {
  let sanitizedClassName: string | undefined;
  if (className !== null) { sanitizedClassName = className; }

  return (
    <div className={sanitizedClassName}>
      <a
        className="main-button"
        href={href}
        rel={newTab ? 'noreferrer' : ''}
        target={newTab ? '_blank' : ''}
      >
        {text}
      </a>
    </div>
  );
}

export default Button;
