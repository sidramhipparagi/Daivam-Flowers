
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
    }, 600);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentIndex(prev => (prev - 1 + products.length) % products.length);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 600);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    
    setIsTransitioning(true);
    setCurrentIndex(index);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 600);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  const getVisibleProducts = () => {
    const prevIndex = (currentIndex - 1 + products.length) % products.length;
    const nextIndex = (currentIndex + 1) % products.length;
    const nextNextIndex = (currentIndex + 2) % products.length;
    
    return {
      left: products[prevIndex],
      center: products[currentIndex],
      right: products[nextIndex],
      incoming: products[nextNextIndex]
    };
  };

  const { left, center, right, incoming } = getVisibleProducts();

  return (
    <div className="relative w-full h-96 overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-br from-pink-50 to-orange-50 group">
      <div className="flex items-center justify-center h-full relative">
        {/* Left product (partially visible) - slides out */}
        <div className={`absolute left-4 z-10 transition-all duration-600 ease-out transform ${
          isTransitioning 
            ? 'translate-x-[-120px] opacity-0 scale-50' 
            : 'translate-x-0 opacity-60 scale-75'
        }`}>
          <div className="w-48 h-72 bg-white rounded-xl shadow-lg overflow-hidden backdrop-blur-sm">
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

        {/* Center product (main focus) - slides to left */}
        <div className={`z-20 transition-all duration-600 ease-out transform ${
          isTransitioning 
            ? 'translate-x-[-180px] opacity-0 scale-75' 
            : 'translate-x-0 opacity-100 scale-100'
        }`}>
          <div className="w-64 h-80 bg-white rounded-xl shadow-2xl overflow-hidden border-2 border-gradient-to-r from-pink-400 to-orange-400 ring-4 ring-pink-100">
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

        {/* Right product (slides to center) */}
        <div className={`absolute right-4 z-10 transition-all duration-600 ease-out transform ${
          isTransitioning 
            ? 'translate-x-[-240px] scale-100 opacity-100 z-15' 
            : 'translate-x-0 opacity-60 scale-75'
        }`}>
          <div className="w-48 h-72 bg-white rounded-xl shadow-lg overflow-hidden backdrop-blur-sm">
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
          <div className="absolute right-4 z-10 transition-all duration-600 ease-out transform translate-x-[300px] animate-slide-in-smooth">
            <div className="w-48 h-72 bg-white rounded-xl shadow-lg overflow-hidden backdrop-blur-sm opacity-60 scale-75">
              <img 
                src={incoming.image}
                alt={incoming.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-sm font-semibold text-gray-800">
                  {incoming.name}
                </h3>
                <p className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-orange-500 mt-2">
                  {incoming.price}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Subtle shimmer effect overlay */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="w-full h-full">
            <div className="w-full h-full animate-shimmer opacity-5">
              <div className="w-full h-full bg-gradient-to-r from-transparent via-white to-transparent"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        disabled={isTransitioning}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 z-30 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-xl flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm"
      >
        <ChevronLeft className="w-6 h-6 text-gray-700" />
      </button>

      <button
        onClick={nextSlide}
        disabled={isTransitioning}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 z-30 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-xl flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm"
      >
        <ChevronRight className="w-6 h-6 text-gray-700" />
      </button>

      {/* Auto-play toggle button */}
      <button
        onClick={toggleAutoPlay}
        className="absolute top-4 right-4 z-30 w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-xl flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 backdrop-blur-sm"
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
            disabled={isTransitioning}
            className={`transition-all duration-300 hover:scale-125 ${
              index === currentIndex 
                ? 'w-8 h-3 bg-gradient-to-r from-pink-600 to-orange-500 rounded-full' 
                : 'w-3 h-3 bg-white/70 hover:bg-white rounded-full'
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
