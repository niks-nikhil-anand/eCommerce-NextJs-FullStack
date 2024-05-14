"use client"
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar1 = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img className="h-8 w-8" src="/logo.png" alt="TailGrids" />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#" className="px-3 py-2 rounded-md text-sm font-medium">Language: English</a>
                <a href="#" className="px-3 py-2 rounded-md text-sm font-medium">Currency: USD</a>
              </div>
            </div>
          </div>
          <div className="hidden md:flex flex-1 items-center justify-center">
            <div className="relative">
              <select className="appearance-none h-full py-2 pl-3 pr-8 border-transparent bg-white text-black rounded-l-md leading-5 focus:outline-none focus:ring-0 focus:border-gray-300 sm:text-sm">
                <option>All categories</option>
                <option>Mens</option>
                <option>Womens</option>
                <option>Accessories</option>
                <option>Kids</option>
                <option>More Items</option>
              </select>
              <input
                type="text"
                className="h-full py-2 px-4 border-transparent bg-white text-black rounded-r-md leading-5 focus:outline-none focus:ring-0 focus:border-gray-300 sm:text-sm"
                placeholder="I'm shopping for..."
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m-2.41-1.44A6.5 6.5 0 1011 17.5 6.5 6.5 0 0014.24 4.7l.12-.11z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <button className="p-1 rounded-full text-white hover:text-gray-300">
                <span className="sr-only">View wishlist</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 8a5 5 0 0110 0v3.09a1.5 1.5 0 00.44 1.06l2.22 2.22a1.5 1.5 0 01-2.12 2.12l-2.22-2.22a1.5 1.5 0 00-1.06-.44H8a1.5 1.5 0 00-1.5 1.5v2.22a1.5 1.5 0 01-2.12 2.12L2.94 16a1.5 1.5 0 01.44-2.12l2.22-2.22a1.5 1.5 0 001.06-.44H6a1.5 1.5 0 011.5-1.5h2.22a1.5 1.5 0 011.06-.44V8a5 5 0 01-5-5 5 5 0 01-5 5zm8 3.09V8a3 3 0 10-6 0v3.09a1.5 1.5 0 00.44 1.06l2.22 2.22a1.5 1.5 0 002.12-2.12L8.44 12a1.5 1.5 0 00-.44-1.06H8z" />
                </svg>
              </button>
              <button className="ml-3 p-1 rounded-full text-white hover:text-gray-300">
                <span className="sr-only">View account</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 0a10 10 0 0110 10 10 10 0 01-10 10A10 10 0 010 10 10 10 0 0110 0zm0 2a8 8 0 100 16 8 8 0 000-16zm0 10a4 4 0 110-8 4 4 0 010 8zm0 2a6 6 0 00-6 6h12a6 6 0 00-6-6z" />
                </svg>
              </button>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-blue-600 inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-300 hover:bg-blue-700"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0 }}
        className={`md:hidden overflow-hidden`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white">Language: English</a>
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white">Currency: USD</a>
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white">About Us</a>
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white">Order Tracking</a>
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white">Contact Us</a>
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white">FAQs</a>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar1;
