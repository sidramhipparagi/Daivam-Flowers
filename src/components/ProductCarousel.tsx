
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

const ProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
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
    
    setDirection('next');
    setIsTransitioning(true);
    setCurrentIndex(prev => (prev + 1) % products.length);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 700);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    
    setDirection('prev');
    setIsTransitioning(true);
    setCurrentIndex(prev => (prev - 1 + products.length) % products.length);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 700);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    
    setDirection(index > currentIndex ? 'next' : 'prev');
    setIsTransitioning(true);
    setCurrentIndex(index);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 700);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  const getProductByIndex = (index: number) => {
    return products[(index + products.length) % products.length];
  };

  const renderProduct = (index: number, position: 'left' | 'center' | 'right') => {
    const product = getProductByIndex(index);
    const isCenter = position === 'center';
    
    let baseClasses = 'absolute transition-all duration-700 ease-in-out transform';
    let sizeClasses = isCenter ? 'w-64 h-80' : 'w-48 h-72';
    let containerClasses = isCenter 
      ? 'bg-white rounded-xl shadow-2xl overflow-hidden border-2 border-pink-200 ring-4 ring-pink-100' 
      : 'bg-white rounded-xl shadow-lg overflow-hidden backdrop-blur-sm';
    let imageClasses = isCenter ? 'w-full h-56 object-cover' : 'w-full h-48 object-cover';
    let opacity = isCenter ? 'opacity-100' : 'opacity-70';
    let scale = isCenter ? 'scale-100' : 'scale-90';
    let zIndex = isCenter ? 'z-20' : 'z-10';
    
    // Position and transition classes based on state
    let positionClasses = '';
    
    if (!isTransitioning) {
      // Static positions
      if (position === 'left') {
        positionClasses = 'left-8 top-1/2 -translate-y-1/2';
      } else if (position === 'center') {
        positionClasses = 'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2';
      } else {
        positionClasses = 'right-8 top-1/2 -translate-y-1/2';
      }
    } else {
      // Transitioning positions
      if (direction === 'next') {
        if (position === 'left') {
          positionClasses = '-left-64 top-1/2 -translate-y-1/2 opacity-0';
        } else if (position === 'center') {
          positionClasses = 'left-8 top-1/2 -translate-y-1/2 scale-90 opacity-70';
        } else {
          positionClasses = 'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-100 opacity-100';
        }
      } else {
        if (position === 'left') {
          positionClasses = 'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-100 opacity-100';
        } else if (position === 'center') {
          positionClasses = 'right-8 top-1/2 -translate-y-1/2 scale-90 opacity-70';
        } else {
          positionClasses = '-right-64 top-1/2 -translate-y-1/2 opacity-0';
        }
      }
    }

    return (
      <div 
        key={`${product.id}-${position}`}
        className={`${baseClasses} ${positionClasses} ${zIndex}`}
      >
        <div className={`${sizeClasses} ${containerClasses} ${!isTransitioning ? opacity : ''} ${!isTransitioning ? scale : ''}`}>
          <img 
            src={product.image} 
            alt={product.name}
            className={imageClasses}
          />
          <div className="p-4 text-center">
            <h3 className={`font-semibold text-gray-800 ${isCenter ? 'text-lg' : 'text-sm'}`}>
              {product.name}
            </h3>
            <p className={`font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-orange-500 mt-2 ${isCenter ? 'text-xl' : 'text-lg'}`}>
              {product.price}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="relative w-full h-96 overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-br from-pink-50 to-orange-50 group">
      <div className="relative h-full">
        {/* Render visible products */}
        {renderProduct(currentIndex - 1, 'left')}
        {renderProduct(currentIndex, 'center')}
        {renderProduct(currentIndex + 1, 'right')}
        
        {/* Render incoming product during transition */}
        {isTransitioning && (
          <>
            {direction === 'next' && renderProduct(currentIndex + 2, 'right')}
            {direction === 'prev' && renderProduct(currentIndex - 2, 'left')}
          </>
        )}

        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-pink-50/30 via-transparent to-orange-50/30 pointer-events-none"></div>
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
