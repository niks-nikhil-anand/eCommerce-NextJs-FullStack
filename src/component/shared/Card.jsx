"use client"
import React from 'react';
import { motion } from 'framer-motion';
import 'tailwindcss/tailwind.css';

const NewArrivalsCard = ({ item }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ease-in-out"
    >
      <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{item.title}</div>
        <p className="text-gray-700 text-base">{item.description}</p>
      </div>
      <div className="px-6 pt-4 pb-2 flex justify-between items-center">
        <span className="text-xl font-bold">${item.price}</span>
        <button className={`py-1 px-4 rounded ${item.isOnSale ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-900'}`}>
          {item.isOnSale ? 'Sale' : 'Add to Cart'}
        </button>
      </div>
    </motion.div>
  );
};

export default NewArrivalsCard;
