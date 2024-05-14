"use client"
// Footer.js
import React from 'react';
import { motion } from 'framer-motion';

const sections = [
  {
    title: 'Health & Beauty',
    links: ['New Arrivals', 'Best Sellers', 'Top Brands', 'Computers & Laptops', 'Mobile Phones'],
  },
  {
    title: 'Electronics',
    links: ['Featured', 'New', 'Best Selling', 'Computers & Laptops', 'Mobile Phones'],
  },
  {
    title: 'Sweet Treats',
    links: ['Headphones', 'Wireless Headphones', 'Laptops', 'Mobile Phones'],
  },
  {
    title: 'Fashion',
    links: ['New Arrivals', 'Top Designers', 'Top Brands', 'Computers & Laptops', 'Mobile Phones'],
  },
];

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700">
      <div className="container mx-auto py-8 flex flex-col lg:flex-row justify-between">
        {/* Logo and Description */}
        <div className="flex-1">
          <img src="https://via.placeholder.com/50" alt="Logo" className="mb-2" />
          <p>
            Shoffy is a powerful eCommerce-based script for ordering professional
            and visually appealing online store.
          </p>
        </div>
        {/* Sections */}
        <div className="flex-1 flex flex-wrap">
          <div className="lg:w-1/4 w-full">
            <h2 className="font-semibold mb-2">My Account</h2>
            <ul>
              <li>Track Orders</li>
              <li>Shipping</li>
              <li>Wishlist</li>
              <li>My Account</li>
              <li>Order History</li>
              <li>Returns</li>
            </ul>
          </div>
          <div className="lg:w-1/4 w-full">
            <h2 className="font-semibold mb-2">Information</h2>
            <ul>
              <li>Our Story</li>
              <li>Careers</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Contact Us</li>
            </ul>
          </div>
          {/* Dynamic Sections */}
          {sections.map((section, idx) => (
            <div key={idx} className="lg:w-1/4 w-full">
              <h2 className="font-semibold mb-2">{section.title}</h2>
              <ul>
                {section.links.map((link, index) => (
                  <li key={index} className="mb-1">
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* Contact Card */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="lg:w-1/4 w-full p-4 bg-gray-100 rounded-lg mt-4 lg:mt-0"
        >
          <h2 className="font-semibold mb-2">Talk To Us</h2>
          <p>Get Questions? Call us 24/7</p>
          <p className="font-bold text-lg mb-1">+670 413 390 762</p>
          <p className="mb-1">support@shoffy.com</p>
          <p>59 Street, Melbourne, Jamaica, New York, 1232</p>
        </motion.div>
      </div>
      {/* Payment Methods */}
      <div className="container mx-auto py-4 flex justify-between items-center border-t mt-4">
        <p>© 2024. All Rights Reserved.</p>
        <div className="flex space-x-4">
          <img src="https://via.placeholder.com/40" alt="Paypal" />
          <img src="https://via.placeholder.com/40" alt="Visa" />
          <img src="https://via.placeholder.com/40" alt="Stripe" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
