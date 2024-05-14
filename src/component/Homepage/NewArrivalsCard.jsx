
import React from 'react';
import NewArrivalsCard from '../shared/Card';
import { Container } from 'postcss';

const items = [
  {
    image: "https://www.example.com/image1.jpg",
    title: "GoPro HERO9 Black Action Camera",
    description: "Heroes9",
    price: 381.60,
    isOnSale: false
  },
  {
    image: "https://www.example.com/image2.jpg",
    title: "Amazon Echo Show 10",
    description: "3rd Gen",
    price: 242.00,
    isOnSale: false
  },
  {
    image: "https://www.example.com/image3.jpg",
    title: "Samsung QN90A Neo QLED 4K Smart TV",
    description: "Up to 11 TB",
    price: 1090,
    isOnSale: true
  },
  {
    image: "https://www.example.com/image4.jpg",
    title: "Alienware m15 R6 Gaming Laptop",
    description: "17 Reviews",
    price: 1432.00,
    isOnSale: false
  }
];

const NewArrivals = () => {
  return (
   
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">New Arrivals</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((item, index) => (
          <NewArrivalsCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;
