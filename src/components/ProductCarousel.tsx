
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

const ProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const products = [
    {
      id: 1,
      name: "Mallige Dindu",
      price: "₹70/piece",
      image: "/images/Products/Mallige-Dindu.png"
    },
    {
      id: 2,
      name: "Sevanthige Maale",
      price: "₹130/maaru",
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
    <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto h-64 sm:h-80 overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-br from-pink-50 to-orange-50 group">
      {/* Products container */}
      <div 
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {products.map((product) => (
          <div key={product.id} className="min-w-full flex items-center justify-center p-2 sm:p-4">
            <div className="w-full max-w-[240px] sm:max-w-[280px] h-52 sm:h-72 bg-white rounded-xl shadow-xl overflow-hidden border border-pink-200">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-32 sm:h-48 object-cover"
              />
              <div className="p-2 sm:p-4 text-center">
                <h3 className="font-semibold text-gray-800 text-sm sm:text-lg truncate">
                  {product.name}
                </h3>
                <p className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-orange-500 mt-1 sm:mt-2 text-base sm:text-xl">
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
        className="absolute left-1 sm:left-2 top-1/2 transform -translate-y-1/2 z-30 w-8 h-8 sm:w-10 sm:h-10 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
      >
        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-1 sm:right-2 top-1/2 transform -translate-y-1/2 z-30 w-8 h-8 sm:w-10 sm:h-10 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
      >
        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
      </button>

      {/* Auto-play toggle button */}
      <button
        onClick={toggleAutoPlay}
        className="absolute top-1 sm:top-2 right-1 sm:right-2 z-30 w-7 h-7 sm:w-9 sm:h-9 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
      >
        {isAutoPlaying ? (
          <Pause className="w-3 h-3 sm:w-4 sm:h-4 text-gray-700" />
        ) : (
          <Play className="w-3 h-3 sm:w-4 sm:h-4 text-gray-700" />
        )}
      </button>

      {/* Carousel indicators */}
      <div className="absolute bottom-1 sm:bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-1 sm:space-x-2 z-30">
        {products.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 hover:scale-125 ${
              index === currentIndex 
                ? 'w-4 sm:w-6 h-1 bg-gradient-to-r from-pink-600 to-orange-500 rounded-full' 
                : 'w-1 h-1 bg-white/70 hover:bg-white rounded-full'
            }`}
          />
        ))}
      </div>

      {/* Decorative elements */}
      <div className="absolute -top-2 sm:-top-4 -left-2 sm:-left-4 w-8 sm:w-16 h-8 sm:h-16 bg-gradient-to-br from-pink-200 to-orange-200 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute -bottom-2 sm:-bottom-4 -right-2 sm:-right-4 w-10 sm:w-20 h-10 sm:h-20 bg-gradient-to-br from-orange-200 to-pink-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
    </div>
  );
};

export default ProductCarousel;
