import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getProductById } from '../data/products';

interface ProductCarouselProps {
  productIds?: number[];
}

const ProductCarousel = ({ productIds = [37, 2, 3, 28, 23, 10] }: ProductCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Get specific products by their IDs
  const products = productIds
    .map(id => getProductById(id))
    .filter(product => product !== undefined)
    .map(product => ({
      id: product!.id,
      name: product!.name,
      price: product!.price,
      salePrice: product!.salePrice,
      image: product!.image
    }));

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
    <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
      <div className="relative h-64 sm:h-80 overflow-hidden group">
        {/* Products container */}
        <div 
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {products.map((product) => (
            <div key={product.id} className="min-w-full flex items-center justify-center p-2 sm:p-4">
              <Link to={`/product/${product.id}`} className="block w-full max-w-[240px] sm:max-w-[280px] h-52 sm:h-72 bg-white rounded-xl overflow-hidden border border-pink-200 transition-all duration-300">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-32 sm:h-48 object-cover"
                />
                <div className="px-2 sm:px-4 pt-2 sm:pt-3 pb-0 text-center">
                  <h3 className="font-semibold text-gray-800 text-sm sm:text-lg truncate mb-0">
                    {product.name}
                  </h3>
                  <div className="flex flex-col items-center">
                    <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-orange-500 text-base sm:text-xl">
                      {product.salePrice || product.price}
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-1 sm:left-2 top-1/2 transform -translate-y-1/2 z-30 w-8 h-8 sm:w-10 sm:h-10 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 opacity-0 group-hover:opacity-100"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-1 sm:right-2 top-1/2 transform -translate-y-1/2 z-30 w-8 h-8 sm:w-10 sm:h-10 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 opacity-0 group-hover:opacity-100"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
        </button>

        {/* Auto-play toggle button */}
        <button
          onClick={toggleAutoPlay}
          className="absolute top-1 sm:top-2 right-1 sm:right-2 z-30 w-7 h-7 sm:w-9 sm:h-9 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 opacity-0 group-hover:opacity-100"
        >
          {isAutoPlaying ? (
            <Pause className="w-3 h-3 sm:w-4 sm:h-4 text-gray-700" />
          ) : (
            <Play className="w-3 h-3 sm:w-4 sm:h-4 text-gray-700" />
          )}
        </button>
      </div>

      {/* Carousel indicators - moved outside the product container */}
      <div className="flex justify-center items-center mt-4 space-x-1 sm:space-x-2">
        {products.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 hover:scale-125 ${
              index === currentIndex 
                ? 'w-4 sm:w-6 h-1 bg-gradient-to-r from-pink-600 to-orange-500 rounded-full' 
                : 'w-1 h-1 bg-gray-400 hover:bg-gray-600 rounded-full'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;
