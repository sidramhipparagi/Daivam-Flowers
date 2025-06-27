
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

const ProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const products = [
    {
      id: 1,
      name: "Mallige Dindu",
      price: "₹60/piece",
      image: "/images/Products/Mallige-Dindu.png"
    },
    {
      id: 2,
      name: "Sevanthige Maale",
      price: "₹50/mola",
      image: "/images/Products/classic.png"
    },
    {
      id: 3,
      name: "Roses",
      price: "₹30/250gm",
      image: "/images/Products/Rose-loose.png"
    },
    {
      id: 4,
      name: "Sevanthige",
      price: "₹80/250gm",
      image: "/images/Products/Sevanthige.png"
    },
    {
      id: 5,
      name: "Kanakambara Maale",
      price: "₹50/mola",
      image: "/images/Products/Kanakambara-maale.png"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % products.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, products.length]);

  const nextSlide = () => {
    setCurrentIndex(prev => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex(prev => (prev - 1 + products.length) % products.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  return (
    <div className="relative w-full h-96 overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-br from-pink-50 to-orange-50 group">
      {/* Products container */}
      <div 
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {products.map((product) => (
          <div key={product.id} className="min-w-full flex items-center justify-center p-8">
            <div className="w-64 h-80 bg-white rounded-xl shadow-2xl overflow-hidden border-2 border-pink-200">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="font-semibold text-gray-800 text-lg">
                  {product.name}
                </h3>
                <p className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-orange-500 mt-2 text-xl">
                  {product.price}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-xl flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
      >
        <ChevronLeft className="w-6 h-6 text-gray-700" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-xl flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
      >
        <ChevronRight className="w-6 h-6 text-gray-700" />
      </button>

      {/* Auto-play toggle button */}
      <button
        onClick={toggleAutoPlay}
        className="absolute top-4 right-4 z-30 w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-xl flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
      >
        {isAutoPlaying ? (
          <Pause className="w-4 h-4 text-gray-700" />
        ) : (
          <Play className="w-4 h-4 text-gray-700" />
        )}
      </button>

      {/* Carousel indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30">
        {products.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 hover:scale-125 ${
              index === currentIndex 
                ? 'w-8 h-1 bg-gradient-to-r from-pink-600 to-orange-500 rounded-full' 
                : 'w-1 h-1 bg-white/70 hover:bg-white rounded-full'
            }`}
          />
        ))}
      </div>

      {/* Decorative elements */}
      <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-pink-200 to-orange-200 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-orange-200 to-pink-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
    </div>
  );
};

export default ProductCarousel;
