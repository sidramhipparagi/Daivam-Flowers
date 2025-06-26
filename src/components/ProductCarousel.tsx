
import React, { useState, useEffect } from 'react';

const ProductCarousel = () => {
  const [translateX, setTranslateX] = useState(0);

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
      setTranslateX(prev => {
        // Move left by 280px (card width + gap), reset when we've moved past all cards
        const newTranslateX = prev - 280;
        const maxTranslate = -280 * products.length;
        return newTranslateX <= maxTranslate ? 0 : newTranslateX;
      });
    }, 3000); // Move every 3 seconds

    return () => clearInterval(interval);
  }, [products.length]);

  // Create extended array for seamless loop
  const extendedProducts = [...products, ...products];

  return (
    <div className="relative w-full h-96 overflow-hidden rounded-2xl shadow-2xl bg-white">
      <div className="flex items-center justify-center h-full relative">
        {/* Sliding container */}
        <div 
          className="flex items-center space-x-8 transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(${translateX}px)` }}
        >
          {extendedProducts.map((product, index) => {
            const isCenter = Math.floor((Math.abs(translateX) + 400) / 280) === index;
            
            return (
              <div
                key={`${product.id}-${index}`}
                className={`flex-shrink-0 transition-all duration-500 ${
                  isCenter 
                    ? 'scale-110 z-20 opacity-100' 
                    : 'scale-90 z-10 opacity-70'
                }`}
              >
                <div className="w-64 h-80 bg-white rounded-xl shadow-2xl overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-52 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                    <p className="text-xs text-gray-600 mt-1">{product.description}</p>
                    <p className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-orange-500 mt-2">
                      {product.price}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Carousel indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {products.map((_, index) => {
          const currentIndex = Math.floor(Math.abs(translateX) / 280) % products.length;
          return (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-gradient-to-r from-pink-600 to-orange-500' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          );
        })}
      </div>

      {/* Background decoration */}
      <div className="absolute -top-4 -left-4 w-32 h-32 bg-gradient-to-br from-pink-200 to-orange-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-orange-200 to-pink-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
    </div>
  );
};

export default ProductCarousel;
