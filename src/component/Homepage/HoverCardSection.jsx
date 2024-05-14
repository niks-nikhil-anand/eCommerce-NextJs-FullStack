"use client"
// src/App.js
import React from 'react';
import HoverCard from '../shared/HoverCard';

const HoverCardSection = () => {
  return (
    <div className="flex flex-wrap justify-center">
      <HoverCard
        image="https://via.placeholder.com/300x200"
        title="Apple Book"
      />
      <HoverCard
        image="https://via.placeholder.com/300x200"
        title="Smart Watch"
      />
      <HoverCard
        image="https://via.placeholder.com/300x200"
        title="Apple Book"
      />
      
      
    </div>
  );
};

export default HoverCardSection;
