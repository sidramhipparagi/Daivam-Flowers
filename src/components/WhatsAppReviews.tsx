import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle } from 'lucide-react';
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
  const [isPaused, setIsPaused] = useState(false);
  
  // Duplicate reviews multiple times for seamless infinite scroll
  const duplicatedReviews = [...reviews, ...reviews, ...reviews];


  return (
    <section 
      className="py-10 md:py-24 relative"
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
        </div>

        {/* Reviews Container */}
        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Mobile: Continuous infinite scroll */}
          {isMobile ? (
            <div 
              className="relative overflow-hidden min-h-[300px]"
              onClick={() => setIsPaused(prev => !prev)}
            >
              <div className="w-full overflow-hidden">
                <div 
                  className="flex gap-4"
                  style={{
                    animation: 'scrollReviewsMobile 60s linear infinite',
                    animationPlayState: isPaused ? 'paused' : 'running',
                    width: `${duplicatedReviews.length * 90 + (duplicatedReviews.length - 1) * 16}vw`
                  }}
                >
                  {duplicatedReviews.map((review, index) => (
                    <div 
                      key={`${review.id}-${index}`}
                      className="flex-shrink-0 flex flex-col items-center justify-center"
                      style={{ width: '90vw', minWidth: '90vw' }}
                    >
                      {/* Review Container */}
                      <div className="flex items-center justify-center mb-6 w-full">
                        <div 
                          className="rounded-2xl px-3 py-4 flex flex-col h-[200px] md:h-[240px] w-full"
                          style={{ 
                            backgroundColor: '#FFFEFE'
                          }}
                        >
                          {/* Review Text */}
                          <div className="flex-1 flex items-center justify-center">
                            <p 
                              className="text-base text-center font-semibold whitespace-pre-line" 
                              style={{ 
                                color: '#1F2937', 
                                lineHeight: '1.1'
                              }}
                            >
                              "{review.message}"
                            </p>
                          </div>
                          
                          {/* Author Info */}
                          <div className="flex items-center justify-center gap-2 mt-3 md:mt-4">
                            <MessageCircle className="w-4 h-4" style={{ color: '#25D366' }} />
                            <h3 className="font-bold text-base" style={{ color: '#FE003D' }}>
                              {review.name}
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <style>{`
                @keyframes scrollReviewsMobile {
                  0% {
                    transform: translateX(-${reviews.length * 90}vw);
                  }
                  100% {
                    transform: translateX(0);
                  }
                }
              `}</style>
            </div>
          ) : (
            /* Desktop: Continuous infinite scroll */
            <div className="relative overflow-hidden min-h-[340px]">
              <div className="w-full overflow-hidden">
                <div 
                  className="flex gap-4"
                  style={{
                    animation: 'scrollReviews 75s linear infinite',
                    animationPlayState: isPaused ? 'paused' : 'running',
                    width: `${duplicatedReviews.length * 500 + (duplicatedReviews.length - 1) * 16}px`
                  }}
                >
                  {duplicatedReviews.map((review, index) => (
                    <div 
                      key={`${review.id}-${index}`}
                      className="flex-shrink-0 flex flex-col items-center justify-center"
                      style={{ width: '500px', minWidth: '500px' }}
                    >
                      {/* Review Container */}
                      <div className="flex items-center justify-center mb-6 w-full">
                        <div 
                          className="rounded-2xl px-3 py-5 lg:px-4 lg:py-7 flex flex-col h-[280px] lg:h-[320px] w-full"
                          style={{ 
                            backgroundColor: '#FFFEFE'
                          }}
                        >
                          {/* Review Text */}
                          <div className="flex-1 flex items-center justify-center">
                            <p 
                              className="text-xl text-center font-semibold whitespace-pre-line" 
                              style={{ 
                                color: '#1F2937', 
                                lineHeight: '1.1'
                              }}
                            >
                              "{review.message}"
                            </p>
                          </div>
                          
                          {/* Author Info */}
                          <div className="flex items-center justify-center gap-3 mt-4 lg:mt-5">
                            <MessageCircle className="w-6 h-6" style={{ color: '#25D366' }} />
                            <h3 className="font-bold text-xl" style={{ color: '#FE003D' }}>
                              {review.name}
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <style>{`
                @keyframes scrollReviews {
                  0% {
                    transform: translateX(-${reviews.length * 500}px);
                  }
                  100% {
                    transform: translateX(0);
                  }
                }
              `}</style>
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