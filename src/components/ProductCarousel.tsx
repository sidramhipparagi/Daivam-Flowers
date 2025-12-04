import React, { useState, useEffect, useRef, useId } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getProductById } from '../data/products';

interface ProductCarouselProps {
  productIds?: number[];
}

const ProductCarousel = ({ productIds = [37, 2, 3, 28, 23, 10] }: ProductCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(1); // Start at 1 (first real product)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const transitionRef = useRef<NodeJS.Timeout | null>(null);

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

  // Create extended array with clones for seamless loop
  // [last, ...originals, first]
  const extendedProducts = [
    products[products.length - 1], // Clone of last item at start
    ...products,
    products[0] // Clone of first item at end
  ];

  // Handle seamless loop transition
  useEffect(() => {
    if (!isTransitioning) return;

    // Check if we're at a clone position
    if (currentIndex === 0) {
      // At the clone of the last item (beginning)
      // Jump to the real last item
      if (transitionRef.current) clearTimeout(transitionRef.current);
      transitionRef.current = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(products.length);
      }, 500); // Match transition duration
    } else if (currentIndex === extendedProducts.length - 1) {
      // At the clone of the first item (end)
      // Jump to the real first item
      if (transitionRef.current) clearTimeout(transitionRef.current);
      transitionRef.current = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(1);
      }, 500); // Match transition duration
    }

    return () => {
      if (transitionRef.current) clearTimeout(transitionRef.current);
    };
  }, [currentIndex, isTransitioning, products.length, extendedProducts.length]);

  // Re-enable transition after instant jump
  useEffect(() => {
    if (!isTransitioning) {
      const timeout = setTimeout(() => {
        setIsTransitioning(true);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [isTransitioning]);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex(prev => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentIndex(prev => prev + 1);
  };

  const prevSlide = () => {
    setCurrentIndex(prev => prev - 1);
  };

  const goToSlide = (index: number) => {
    setIsTransitioning(true);
    setCurrentIndex(index + 1); // +1 because of clone at start
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  // Calculate the real product index for indicators
  const getRealIndex = () => {
    if (currentIndex === 0) return products.length - 1;
    if (currentIndex === extendedProducts.length - 1) return 0;
    return currentIndex - 1;
  };

  const maskId = useId().replace(/:/g, '_');

  return (
    <div className="w-full sm:max-w-[240px] md:max-w-[280px] mx-auto">
      <div className="relative">
        {/* "Fresh Flowers Delivered" text overlay & CTA - mobile only, fixed position */}
        <div className="pointer-events-none absolute top-1/2 left-0 right-0 transform -translate-y-1/2 z-30 sm:hidden px-4">
          <div className="flex flex-col items-center gap-3">
            <h2 className="text-2xl font-bold text-center text-white drop-shadow-lg leading-tight">
              Fresh Flowers{" "}
              <span className="font-bold">Delivered</span>
            </h2>
            <Link
              to="/collection"
              className="pointer-events-auto relative inline-flex items-center justify-center rounded-full shadow-md overflow-hidden"
              style={{ width: '100px', height: '30px' }}
            >
              <span className="sr-only">View Collection</span>
              <svg 
                className="absolute inset-0 w-full h-full" 
                viewBox="0 0 100 30" 
                preserveAspectRatio="none"
                aria-hidden="true" 
                focusable="false"
              >
                <defs>
                  <mask id={maskId}>
                    <rect width="100" height="30" fill="white" />
                    <text
                      x="50"
                      y="16"
                      fill="black"
                      fontSize="18"
                      fontWeight="700"
                      textAnchor="middle"
                      dominantBaseline="middle"
                      letterSpacing="1.2"
                    >
                      View
                    </text>
                  </mask>
                </defs>
                <rect width="100" height="30" rx="15" fill="white" mask={`url(#${maskId})`} />
              </svg>
            </Link>
          </div>
        </div>

        <div className="relative overflow-hidden group" style={{ minHeight: '280px' }}>
          {/* Products container */}
          <div 
            className="flex h-full"
            style={{ 
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: isTransitioning ? 'transform 500ms ease-in-out' : 'none'
            }}
          >
            {extendedProducts.map((product, index) => (
              <div key={`${product.id}-${index}`} className="min-w-full flex items-center justify-center sm:p-2">
                <Link to={`/product/${product.id}`} className="block w-full bg-white sm:rounded-2xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl sm:hover:-translate-y-2 group">
                  {/* Image Container - matching categories aspect-square */}
                  <div className="aspect-square overflow-hidden relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Product name overlay - visible on mobile only */}
                  <div className="absolute top-4 left-0 right-0 z-20 sm:hidden">
                    <h3 className="text-base font-bold text-center text-white drop-shadow-lg px-4">
                      {product.name}
                    </h3>
                  </div>
                  </div>
                  
                  {/* Content Container - hidden on mobile, visible on sm+ */}
                  <div className="hidden sm:block relative p-2 md:p-3" style={{ backgroundColor: '#770737' }}>
                    <h3 className="text-xs md:text-sm font-bold text-center text-white truncate">
                      {product.name}
                    </h3>
                    <div className="flex flex-col items-center mt-1">
                      <span className="font-bold text-white text-sm md:text-base">
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

        {/* Carousel indicators - stable position, doesn't scroll with images */}
        {/* Mobile: positioned below image */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center items-center gap-1.5 z-30 sm:hidden">
          {products.map((_, idx) => (
            <button
              key={idx}
              onClick={(e) => {
                e.preventDefault();
                goToSlide(idx);
              }}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === getRealIndex() 
                  ? 'bg-white w-3 shadow-lg' 
                  : 'bg-white/60 w-1.5'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Desktop: positioned outside carousel */}
        <div className="hidden sm:flex justify-center items-center mt-4 gap-1.5">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === getRealIndex() 
                  ? 'bg-[#FE003D] w-3' 
                  : 'bg-[#770737]/30 w-1.5'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCarousel;
