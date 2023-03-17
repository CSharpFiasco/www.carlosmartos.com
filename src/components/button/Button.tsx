import React from "react";
import "./Button.css";

type ButtonProps = { text: string, className?: string, href: string, newTab: boolean };

export default function Button(buttonParam: ButtonProps) {
  return (
    <div className={buttonParam.className}>
      <a className="main-button" href={buttonParam.href} rel={buttonParam.newTab ? "noreferrer" : ""} target={buttonParam.newTab ? "_blank" : ""}>
        {buttonParam.text}
      </a>
    </div>
  );
}
