import React from 'react';

export default function DescriptionBullets({ descBullets }: { descBullets: string[] }) {
  return (
    <>
      {descBullets.map((item, index) => (
        <li key={index} className="subTitle">
          {item}
        </li>
      ))}
    </>
  );
}
