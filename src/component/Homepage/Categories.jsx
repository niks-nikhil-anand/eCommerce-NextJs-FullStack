"use client"
// CardComponent.jsx
import React from 'react';
import { motion } from 'framer-motion';
import 'tailwindcss/tailwind.css';

const products = [
  {
    icon: '/path/to/mobile-phone-icon.png', // Replace with actual path to icons
    title: 'Mobile Phone',
    count: '4 products',
  },
  {
    icon: '/path/to/cpu-heat-pipes-icon.png', // Replace with actual path to icons
    title: 'CPU Heat Pipes',
    count: '6 products',
  },
  {
    icon: '/path/to/headphones-icon.png', // Replace with actual path to icons
    title: 'Headphones',
    count: '6 products',
  },
  {
    icon: '/path/to/smart-watch-icon.png', // Replace with actual path to icons
    title: 'Smart Watch',
    count: '6 products',
  },
  {
    icon: '/path/to/bluetooth-icon.png', // Replace with actual path to icons
    title: 'With Bluetooth',
    count: '3 products',
  },
];

const CardComponent = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {products.map((product, index) => (
        <motion.div
          key={index}
          className="w-60 p-4 bg-white rounded-full shadow-lg text-center"
          whileHover={{ scale: 1.05 }}
        >
          <div className="w-32 h-32 mx-auto mb-3 bg-blue-50 rounded-full flex items-center justify-center">
            <img src={product.icon} alt={product.title} className="w-20 h-20 object-contain" />
          </div>
          <h3 className="text-lg font-semibold">{product.title}</h3>
          <p className="text-sm text-gray-500">{product.count}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default CardComponent;
