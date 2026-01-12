import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "" }) => (
  <img 
    src="https://i.ibb.co/1GNcPZrW/NWE-Final-Logo-Horizontal-blue-and-white.png" 
    alt="Nationwide Erectors" 
    className={`h-14 w-auto object-contain ${className}`}
  />
);