"use client"
// src/HoverCard.js
import React from 'react';
import { motion } from 'framer-motion';

const HoverCard = ({ image, title }) => {
  return (
    <motion.div
      className="relative w-full md:w-1/2 lg:w-1/3 p-4"
      whileHover={{ scale: 1.05 }}
    >
      <img src={image} alt={title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500">
        <h2 className="text-white text-xl font-semibold">{title}</h2>
      </div>
    </motion.div>
  );
};

export default HoverCard;
