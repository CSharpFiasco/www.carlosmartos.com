import React from "react";
import "./AchievementCard.css";

export default function AchievementCard({ cardInfo }) {
  function openUrlInNewTab(url) {
    const win = window.open(url, "_blank");
    win.focus();
  }

  return (
      <div className="certificate-card">
        <div className="certificate-image-div">
          <img src={cardInfo.image} alt="PWA" className="card-image"></img>
        </div>
        <div className="certificate-detail-div">
          <h5 className="card-title">{cardInfo.title}</h5>
          <p className="card-subtitle">{cardInfo.description}</p>
        </div>
        <div className="certificate-card-footer">
          {cardInfo.footer.map((v, index) => {
            return <span key={index} className="certificate-tag" onClick={() => openUrlInNewTab(v.url)}>{v.name}</span>;
          })}
        </div>
      </div>
  );
}