
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

const ProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const products = [
    {
      id: 1,
      name: "Red Roses",
      price: "₹50/dozen",
      image: "/images/image1.png"
    },
    {
      id: 2,
      name: "White Lilies",
      price: "₹40/bunch",
      image: "/images/image2.png"
    },
    {
      id: 3,
      name: "Yellow Marigolds",
      price: "₹30/kg",
      image: "/images/image1.png"
    },
    {
      id: 4,
      name: "Pink Carnations",
      price: "₹45/bunch",
      image: "/images/image2.png"
    },
    {
      id: 5,
      name: "Orange Gerberas",
      price: "₹35/bunch",
      image: "/images/image1.png"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      if (!isTransitioning) {
        nextSlide();
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, isTransitioning]);

  const nextSlide = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentIndex(prev => (prev + 1) % products.length);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 800);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentIndex(prev => (prev - 1 + products.length) % products.length);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 800);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    
    setIsTransitioning(true);
    setCurrentIndex(index);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 800);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

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
    <div className="relative w-full h-96 overflow-hidden rounded-2xl shadow-2xl bg-white group">
      <div className="flex items-center justify-center h-full relative">
        {/* Left product (partially visible) */}
        <div className={`absolute left-4 z-10 opacity-50 scale-75 transition-all duration-800 ease-in-out transform ${
          isTransitioning ? 'translate-x-[-100px] opacity-0' : 'translate-x-0'
        }`}>
          <div className="w-48 h-72 bg-white rounded-xl shadow-lg overflow-hidden">
            <img 
              src={left.image} 
              alt={left.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-sm font-semibold text-gray-800">{left.name}</h3>
              <p className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-orange-500 mt-2">
                {left.price}
              </p>
            </div>
          </div>
        </div>

        {/* Center product (main focus with slide animation) */}
        <div className={`z-20 scale-100 transition-all duration-800 ease-in-out transform ${
          isTransitioning ? 'translate-x-[-200px] opacity-0 scale-90' : 'translate-x-0 opacity-100 scale-100'
        }`}>
          <div className="w-64 h-80 bg-white rounded-xl shadow-2xl overflow-hidden border-4 border-gradient-to-r from-pink-600 to-orange-500">
            <img 
              src={center.image} 
              alt={center.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800">{center.name}</h3>
              <p className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-orange-500 mt-2">
                {center.price}
              </p>
            </div>
          </div>
        </div>

        {/* Right product (partially visible) with slide-in effect */}
        <div className={`absolute right-4 z-10 opacity-50 scale-75 transition-all duration-800 ease-in-out transform ${
          isTransitioning ? 'translate-x-[-300px] opacity-80 scale-90' : 'translate-x-0'
        }`}>
          <div className="w-48 h-72 bg-white rounded-xl shadow-lg overflow-hidden">
            <img 
              src={right.image} 
              alt={right.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-sm font-semibold text-gray-800">{right.name}</h3>
              <p className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-orange-500 mt-2">
                {right.price}
              </p>
            </div>
          </div>
        </div>

        {/* New product sliding in from the right */}
        {isTransitioning && (
          <div className="absolute right-4 z-10 opacity-50 scale-75 transition-all duration-800 ease-in-out transform translate-x-[400px] animate-slide-in">
            <div className="w-48 h-72 bg-white rounded-xl shadow-lg overflow-hidden">
              <img 
                src={products[(currentIndex + 2) % products.length].image}
                alt={products[(currentIndex + 2) % products.length].name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-sm font-semibold text-gray-800">
                  {products[(currentIndex + 2) % products.length].name}
                </h3>
                <p className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-orange-500 mt-2">
                  {products[(currentIndex + 2) % products.length].price}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Continuous movement overlay */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="w-full h-full">
            <div className="w-full h-full animate-slide-left opacity-10">
              <div className="w-full h-full bg-gradient-to-r from-transparent via-pink-300 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        disabled={isTransitioning}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 z-30 w-10 h-10 bg-white/80 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ChevronLeft className="w-6 h-6 text-gray-700" />
      </button>

      <button
        onClick={nextSlide}
        disabled={isTransitioning}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 z-30 w-10 h-10 bg-white/80 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ChevronRight className="w-6 h-6 text-gray-700" />
      </button>

      {/* Auto-play toggle button */}
      <button
        onClick={toggleAutoPlay}
        className="absolute top-4 right-4 z-30 w-8 h-8 bg-white/80 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
      >
        {isAutoPlaying ? (
          <Pause className="w-4 h-4 text-gray-700" />
        ) : (
          <Play className="w-4 h-4 text-gray-700" />
        )}
      </button>

      {/* Carousel indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
        {products.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            disabled={isTransitioning}
            className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
              index === currentIndex 
                ? 'bg-gradient-to-r from-pink-600 to-orange-500 scale-125' 
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
