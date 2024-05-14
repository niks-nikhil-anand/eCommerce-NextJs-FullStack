"use client"
import React from 'react';
import { motion } from 'framer-motion';

const products = [
  {
    category: 'On Sale',
    items: [
      { image: '/path/to/image1.jpg', name: 'BenQ ENX2300U', price: '$1,999.26' },
      { image: '/path/to/image2.jpg', name: 'Samsung Odyssey', price: '$1,209.00' },
      { image: '/path/to/image3.jpg', name: 'Vizio OLED55', price: '$1,506.24' },
    ],
  },
  {
    category: 'Trending Products',
    items: [
      { image: '/path/to/image4.jpg', name: 'Xbox Series X', price: '$1,608.00' },
      { image: '/path/to/image5.jpg', name: 'Sony X90H', price: '$1,553.90' },
      { image: '/path/to/image6.jpg', name: 'HTC Vive Cosmos', price: '$2,700.50' },
    ],
  },
  {
    category: 'Top Rated',
    items: [
      { image: '/path/to/image7.jpg', name: 'Garmin Fenix 7X', price: '$1,911.00' },
      { image: '/path/to/image8.jpg', name: 'iPad Pro', price: '$2,499.00' },
      { image: '/path/to/image9.jpg', name: 'LG OLED C1', price: '$2,644.00' },
    ],
  },
];

const ProductCard = ({ image, name, price }) => (
  <motion.div
    className="flex flex-col items-center p-4 bg-white rounded-lg shadow-lg transform transition-transform duration-300"
    whileHover={{ scale: 1.02 }}
  >
    <img src={image} alt={name} className="w-full h-36 object-cover rounded-lg" />
    <h3 className="mt-4 text-lg font-semibold">{name}</h3>
    <p className="mt-2 text-blue-600 text-xl">{price}</p>
  </motion.div>
);

const ProductSection = ({ category, items }) => (
  <div className="mb-12">
    <h2 className="mb-6 text-2xl font-bold text-gray-700">{category}</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item, index) => (
        <ProductCard {...item} key={index} />
      ))}
    </div>
  </div>
);

const ProductGrid = () => (
  <div className="container mx-auto p-6">
    {products.map((section, index) => (
      <ProductSection {...section} key={index} />
    ))}
  </div>
);

export default ProductGrid;
