import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';

interface Review {
  id: number;
  name: string;
  message: string;
  initial: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Priya Sharma",
    message: "The flowers were perfect for our\npooja. Delivery was on\ntime and flowers were\nso fresh. Highly recommend!",
    initial: "P"
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    message: "Best quality flowers in\nBangalore! I've been ordering\nfrom them for the\npast 6 months. Always fresh!",
    initial: "R"
  },
  {
    id: 3,
    name: "Lakshmi Devi",
    message: "The maale collection is\nbeautiful. I order daily\nfor temple. Price is\nalso very reasonable!",
    initial: "L"
  },
  {
    id: 4,
    name: "Arun Bhat",
    message: "Ordered for my sister's\nwedding. The premium collection\nwas stunning!\nWill definitely order again!",
    initial: "A"
  },
  {
    id: 5,
    name: "Meena Iyer",
    message: "Very happy with the\nloose flowers quality. Perfect\nfor pooja & decoration.\nFresh and fragrant!",
    initial: "M"
  },
  {
    id: 6,
    name: "Suresh Reddy",
    message: "Ordered for special occasion\nand got many compliments.\nWill order again.\n Keep up the good work!",
    initial: "S"
  }
];

const WhatsAppReviews = () => {
  const isMobile = useIsMobile();
  const [currentReviewIndex, setCurrentReviewIndex] = useState(isMobile ? 0 : 1); // Start at 1 for desktop (first real review)
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const transitionRef = useRef<NodeJS.Timeout | null>(null);

  // Create extended array with clones for seamless loop (desktop only)
  // [last, ...originals, first]
  const extendedReviews = isMobile 
    ? reviews 
    : [
        reviews[reviews.length - 1], // Clone of last item at start
        ...reviews,
        reviews[0] // Clone of first item at end
      ];

  // Handle seamless loop transition (desktop only)
  useEffect(() => {
    if (isMobile || !isTransitioning) return;

    // Check if we're at a clone position
    if (currentReviewIndex === 0) {
      // At the clone of the last item (beginning)
      // Jump to the real last item
      if (transitionRef.current) clearTimeout(transitionRef.current);
      transitionRef.current = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentReviewIndex(reviews.length);
      }, 700); // Match transition duration
    } else if (currentReviewIndex === extendedReviews.length - 1) {
      // At the clone of the first item (end)
      // Jump to the real first item
      if (transitionRef.current) clearTimeout(transitionRef.current);
      transitionRef.current = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentReviewIndex(1);
      }, 700); // Match transition duration
    }

    return () => {
      if (transitionRef.current) clearTimeout(transitionRef.current);
    };
  }, [currentReviewIndex, isTransitioning, isMobile, extendedReviews.length]);

  // Re-enable transition after instant jump (desktop only)
  useEffect(() => {
    if (isMobile || isTransitioning) return;
    
    const timeout = setTimeout(() => {
      setIsTransitioning(true);
    }, 50);
    return () => clearTimeout(timeout);
  }, [isTransitioning, isMobile]);

  // Auto-play functionality - 5 second delay
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      if (isMobile) {
        setCurrentReviewIndex((prev) => (prev + 1) % reviews.length);
      } else {
        setCurrentReviewIndex((prev) => prev + 1);
      }
    }, 7000);

    return () => clearInterval(interval);
  }, [isMobile, isPaused]);

  // Navigation functions
  const goToNext = () => {
    if (isMobile) {
      setCurrentReviewIndex((prev) => (prev + 1) % reviews.length);
    } else {
      setCurrentReviewIndex((prev) => prev + 1);
    }
  };

  const goToPrev = () => {
    if (isMobile) {
      setCurrentReviewIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    } else {
      setCurrentReviewIndex((prev) => prev - 1);
    }
  };

  const goToSlide = (index: number) => {
    if (isMobile) {
      setCurrentReviewIndex(index);
    } else {
      setIsTransitioning(true);
      setCurrentReviewIndex(index + 1); // +1 because of clone at start
    }
  };

  // Calculate the real review index for indicators
  const getRealIndex = () => {
    if (isMobile) return currentReviewIndex;
    if (currentReviewIndex === 0) return reviews.length - 1;
    if (currentReviewIndex === extendedReviews.length - 1) return 0;
    return currentReviewIndex - 1;
  };

  return (
    <section 
      className="py-10 md:py-24 relative"
      style={{ 
        backgroundImage: 'url(/images/image5.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-[#FDF3F5]/80 z-0"></div>
      
      {/* Top fade to section above */}
      <div 
        className="absolute top-0 left-0 right-0 h-32 pointer-events-none z-10"
        style={{
          background: 'linear-gradient(to bottom, #FDF3F5 0%, transparent 100%)'
        }}
      ></div>
      
      {/* Bottom fade to section below */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-10"
        style={{
          background: 'linear-gradient(to top, #FDF3F5 0%, transparent 100%)'
        }}
      ></div>
      
      <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-20">
        {/* Header */}
        <div className="text-center mb-4 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4 text-brand-primary leading-[1.05] md:leading-tight">
            What Our
            <span className="text-brand-accent font-bold"> Customers Say</span>
          </h2>
          <p className="text-base md:text-xl max-w-2xl mx-auto mt-2 md:mt-4 font-bold" style={{ color: '#770737' }}>
            Authentic reviews from our valued customers
          </p>
        </div>

        {/* Reviews Container */}
        <div className="relative">
          {/* Mobile: Single review with fade transition */}
          {isMobile ? (
            <div className="relative overflow-visible py-2 pb-8">
              <div className="min-h-[300px] flex items-center justify-center">
                {reviews.map((review, index) => (
                  <div
                    key={review.id}
                    className={`absolute flex flex-col items-center justify-center transition-opacity duration-700 px-4 ${
                      index === currentReviewIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{ pointerEvents: index === currentReviewIndex ? 'auto' : 'none' }}
                  >
                    {/* Review Text */}
                    <div 
                      className="mb-4 cursor-pointer"
                      onClick={() => setIsPaused(prev => !prev)}
                    >
                      <p 
                        className="text-xl text-center font-semibold whitespace-pre-line" 
                        style={{ 
                          color: '#FE003D', 
                          lineHeight: '1.1',
                          textShadow: `
                            0 0 6px rgba(254, 0, 61, 0.25),
                            0 0 12px rgba(254, 0, 61, 0.15),
                            0 2px 3px rgba(254, 0, 61, 0.2)
                          `
                        }}
                      >
                        "{review.message}"
                      </p>
                    </div>
                    
                    {/* Author Info */}
                    <div className="flex items-center justify-center gap-2">
                      <MessageCircle className="w-4 h-4" style={{ color: '#25D366' }} />
                      <h3 className="font-bold text-base" style={{ color: '#770737' }}>
                        {review.name}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Navigation Buttons - Mobile */}
              <button
                onClick={goToPrev}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 z-30 w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-5 h-5" style={{ color: '#770737' }} />
              </button>

              <button
                onClick={goToNext}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 z-30 w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Next review"
              >
                <ChevronRight className="w-5 h-5" style={{ color: '#770737' }} />
              </button>
              
              {/* Dots Indicator */}
              <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      index === getRealIndex() ? 'bg-[#FE003D] w-3' : 'bg-[#770737]/30 w-1.5'
                    }`}
                    aria-label={`Go to review ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          ) : (
            /* Desktop: Infinite loop slider */
            <div className="relative overflow-hidden min-h-[340px]">
              <div className="w-full overflow-hidden">
                <div 
                  className="flex"
                  style={{
                    transform: `translateX(-${currentReviewIndex * 100}%)`,
                    transition: isTransitioning ? 'transform 700ms ease-in-out' : 'none'
                  }}
                >
                  {extendedReviews.map((review, index) => (
                    <div 
                      key={`${review.id}-${index}`}
                      className="flex-shrink-0 flex flex-col items-center justify-center w-full"
                    >
                      {/* Review Text */}
                      <div 
                        className="flex-1 flex items-center justify-center mb-6 px-4"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                      >
                        <p 
                          className="text-2xl lg:text-3xl text-center font-semibold whitespace-pre-line max-w-[600px] lg:max-w-[700px]" 
                          style={{ 
                            color: '#FE003D', 
                            lineHeight: '1.1',
                            textShadow: `
                              0 0 6px rgba(254, 0, 61, 0.25),
                              0 0 12px rgba(254, 0, 61, 0.15),
                              0 2px 3px rgba(254, 0, 61, 0.2)
                            `
                          }}
                        >
                          "{review.message}"
                        </p>
                      </div>
                      
                      {/* Author Info */}
                      <div className="flex items-center justify-center gap-3">
                        <MessageCircle className="w-6 h-6" style={{ color: '#25D366' }} />
                        <h3 className="font-bold text-xl" style={{ color: '#770737' }}>
                          {review.name}
                        </h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Buttons - Desktop */}
              <button
                onClick={goToPrev}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 bg-white/90 hover:bg-white"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-6 h-6" style={{ color: '#770737' }} />
              </button>

              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 bg-white/90 hover:bg-white"
                aria-label="Next review"
              >
                <ChevronRight className="w-6 h-6" style={{ color: '#770737' }} />
              </button>

              {/* Dots Indicator - Desktop */}
              <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      index === getRealIndex() ? 'bg-[#FE003D] w-3' : 'bg-[#770737]/30 w-1.5'
                    }`}
                    aria-label={`Go to review ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="text-center mt-8 md:mt-16">
          <a
            href="https://wa.me/919742141080"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 md:gap-3 px-6 py-3 rounded-full text-lg text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            style={{ 
              backgroundColor: '#770737',
              fontFamily: 'AfacadFlux, sans-serif',
              fontWeight: 600
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#FE003D'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
          >
            <MessageCircle className="w-5 h-5" />
            <span style={{ fontWeight: 600 }}>Share Your Experience</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppReviews;