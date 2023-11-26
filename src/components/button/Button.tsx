/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import './Button.css';

type ButtonProps = {
  id: string
  text: string;
  href: string;
  newTab: boolean;
};

function Button({ href, newTab, text, id }: ButtonProps) {
  return (
    <div>
      <a
        id={id}
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
