import React from 'react';
import type { AchievementCardInfo } from '../../models/AchievementCardSection';
import './AchievementCard.css';

export default function AchievementCard({ cardInfo }: { cardInfo: AchievementCardInfo }) {
  function openUrlInNewTab(url: string) {
    const win = window.open(url, '_blank');
    if (win === null) return;
    win.focus();
  }

  return (
    <div className="certificate-card">
      <div className="certificate-image-div">
        <img src={cardInfo.image} alt="PWA" className="card-image" />
      </div>
      <div className="certificate-detail-div">
        <h5 className="card-title">{cardInfo.title}</h5>
        <p className="card-subtitle">{cardInfo.subtitle}</p>
      </div>
      <div className="certificate-card-footer">
        {cardInfo.footerLink.map((v, index) => (
          <span key={index} className="certificate-tag" onClick={() => openUrlInNewTab(v.url)}>
            {v.name}
          </span>
        ))}
      </div>
    </div>
  );
}
