import React from 'react';

export default function DescriptionBullets({ descBullets }: { descBullets: readonly string[] }) {
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
