
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
      setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [products.length]);

  const getProductAtIndex = (index: number) => {
    return products[index % products.length];
  };

  const leftProduct = getProductAtIndex(currentIndex - 1 + products.length);
  const centerProduct = getProductAtIndex(currentIndex);
  const rightProduct = getProductAtIndex(currentIndex + 1);

  return (
    <div className="relative w-full h-96 overflow-hidden rounded-2xl shadow-2xl bg-white">
      <div className="flex items-center justify-center h-full relative">
        {/* Left product (partially visible) */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/4 opacity-50 transition-all duration-500 ease-in-out z-10">
          <div className="w-48 h-64 bg-white rounded-xl shadow-lg overflow-hidden">
            <img 
              src={leftProduct.image} 
              alt={leftProduct.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-3">
              <h3 className="text-sm font-semibold text-gray-800 truncate">{leftProduct.name}</h3>
              <p className="text-xs text-pink-600 font-medium">{leftProduct.price}</p>
            </div>
          </div>
        </div>

        {/* Center product (main focus) */}
        <div className="z-20 transition-all duration-500 ease-in-out transform hover:scale-105">
          <div className="w-64 h-80 bg-white rounded-xl shadow-2xl overflow-hidden">
            <img 
              src={centerProduct.image} 
              alt={centerProduct.name}
              className="w-full h-52 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">{centerProduct.name}</h3>
              <p className="text-xs text-gray-600 mt-1">{centerProduct.description}</p>
              <p className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-orange-500 mt-2">
                {centerProduct.price}
              </p>
            </div>
          </div>
        </div>

        {/* Right product (partially visible) */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/4 opacity-50 transition-all duration-500 ease-in-out z-10">
          <div className="w-48 h-64 bg-white rounded-xl shadow-lg overflow-hidden">
            <img 
              src={rightProduct.image} 
              alt={rightProduct.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-3">
              <h3 className="text-sm font-semibold text-gray-800 truncate">{rightProduct.name}</h3>
              <p className="text-xs text-pink-600 font-medium">{rightProduct.price}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {products.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
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
