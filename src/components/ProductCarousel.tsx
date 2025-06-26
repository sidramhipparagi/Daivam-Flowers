
import React, { useState, useEffect } from 'react';

const ProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const products = [
    {
      id: 1,
      name: "Red Roses",
      price: "₹50/dozen",
      image: "/images/image1.png",
      description: "Fresh red roses perfect for special occasions"
    },
    {
      id: 2,
      name: "White Lilies",
      price: "₹40/bunch",
      image: "/images/image2.png",
      description: "Pure white lilies for elegant arrangements"
    },
    {
      id: 3,
      name: "Yellow Marigolds",
      price: "₹30/kg",
      image: "/images/image1.png",
      description: "Bright yellow marigolds for festivals"
    },
    {
      id: 4,
      name: "Pink Carnations",
      price: "₹45/bunch",
      image: "/images/image2.png",
      description: "Soft pink carnations for gentle occasions"
    },
    {
      id: 5,
      name: "Orange Gerberas",
      price: "₹35/bunch",
      image: "/images/image1.png",
      description: "Vibrant orange gerberas for cheerful moments"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % products.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [products.length]);

  const getVisibleProducts = () => {
    const prevIndex = (currentIndex - 1 + products.length) % products.length;
    const nextIndex = (currentIndex + 1) % products.length;
    
    return {
      left: products[prevIndex],
      center: products[currentIndex],
      right: products[nextIndex]
    };
  };

  const { left, center, right } = getVisibleProducts();

  return (
    <div className="relative w-full h-96 overflow-hidden rounded-2xl shadow-2xl bg-white">
      <div className="flex items-center justify-center h-full relative">
        {/* Left product (partially visible) */}
        <div className="absolute left-4 z-10 opacity-50 scale-75 transition-all duration-500">
          <div className="w-48 h-72 bg-white rounded-xl shadow-lg overflow-hidden">
            <img 
              src={left.image} 
              alt={left.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-3">
              <h3 className="text-sm font-semibold text-gray-800">{left.name}</h3>
              <p className="text-xs text-gray-600 mt-1">{left.description}</p>
              <p className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-orange-500 mt-1">
                {left.price}
              </p>
            </div>
          </div>
        </div>

        {/* Center product (main focus) */}
        <div className="z-20 scale-100 transition-all duration-500">
          <div className="w-64 h-80 bg-white rounded-xl shadow-2xl overflow-hidden">
            <img 
              src={center.image} 
              alt={center.name}
              className="w-full h-52 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">{center.name}</h3>
              <p className="text-xs text-gray-600 mt-1">{center.description}</p>
              <p className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-orange-500 mt-2">
                {center.price}
              </p>
            </div>
          </div>
        </div>

        {/* Right product (partially visible) */}
        <div className="absolute right-4 z-10 opacity-50 scale-75 transition-all duration-500">
          <div className="w-48 h-72 bg-white rounded-xl shadow-lg overflow-hidden">
            <img 
              src={right.image} 
              alt={right.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-3">
              <h3 className="text-sm font-semibold text-gray-800">{right.name}</h3>
              <p className="text-xs text-gray-600 mt-1">{right.description}</p>
              <p className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-orange-500 mt-1">
                {right.price}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {products.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-gradient-to-r from-pink-600 to-orange-500' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>

      {/* Background decoration */}
      <div className="absolute -top-4 -left-4 w-32 h-32 bg-gradient-to-br from-pink-200 to-orange-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-orange-200 to-pink-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
    </div>
  );
};

export default ProductCarousel;
