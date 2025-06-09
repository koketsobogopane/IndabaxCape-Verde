import React, { useEffect, useRef } from 'react';

const SponsorComponent = ({ sponsors }) => {
  return (
    <div className="flex flex-row gap-3 justify-center">
      {sponsors.map((sponsor, index) => (
        <span key={index}>{sponsor.name} logo</span>
      ))}
    </div>
  );
};

export default SponsorComponent;
