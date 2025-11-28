import React, { useState, useEffect } from 'react';
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
    message: "Absolutely loved the fresh\nflowers! The mallige maale\nwas perfect for our\npooja. Delivery was on\ntime and flowers were\nso fresh. Highly recommend!",
    initial: "P"
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    message: "Best quality flowers in\nBangalore! I've been ordering\nfrom them for the\npast 6 months. Always\nfresh from KR Market.\nGreat service!",
    initial: "R"
  },
  {
    id: 3,
    name: "Lakshmi Devi",
    message: "The hara collection is\nbeautiful. I order daily\nfor temple and they\nnever disappoint. Price is\nalso very reasonable. Thank\nyou!",
    initial: "L"
  },
  {
    id: 4,
    name: "Arun Bhat",
    message: "Ordered for my sister's\nwedding. The premium collection\nwas stunning! Everyone asked\nwhere we got such\nbeautiful flowers. Will definitely\norder again!",
    initial: "A"
  },
  {
    id: 5,
    name: "Meena Iyer",
    message: "Very happy with the\nloose flowers quality. Perfect\nfor rangoli and decoration.\nFresh and fragrant. Good\nservice!",
    initial: "M"
  },
  {
    id: 6,
    name: "Suresh Reddy",
    message: "Excellent quality maale flowers!\nUsed for special occasion\nand got many compliments.\nWill order again. Keep\nup the good work!",
    initial: "S"
  }
];

const WhatsAppReviews = () => {
  const isMobile = useIsMobile();
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  
  // Duplicate reviews for seamless infinite loop (desktop)
  const duplicatedReviews = [...reviews, ...reviews];

  // Mobile: Auto-advance reviews every 5 seconds
  useEffect(() => {
    if (!isMobile) return;
    
    const interval = setInterval(() => {
      setCurrentReviewIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isMobile]);

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
        {isMobile ? (
          /* Mobile: Single review with fade transition */
          <div className="relative overflow-visible py-2 pb-12">
            <div className="min-h-[350px] flex items-center justify-center">
              {reviews.map((review, index) => (
                <div
                  key={review.id}
                  className={`absolute flex flex-col items-center justify-center transition-opacity duration-700 px-4 ${
                    index === currentReviewIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{ pointerEvents: index === currentReviewIndex ? 'auto' : 'none' }}
                >
                  {/* Review Text */}
                  <div className="mb-4">
                    <p className="text-xl text-center font-semibold whitespace-pre-line" style={{ color: '#FE003D', lineHeight: '1.1' }}>
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
            
            {/* Dots Indicator */}
            <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentReviewIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentReviewIndex ? 'bg-[#FE003D] w-6' : 'bg-[#770737]/30'
                  }`}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>
          </div>
        ) : (
          /* Desktop: Horizontal scrolling */
          <div className="relative overflow-hidden">
            <div 
              className="flex gap-8 pb-8 scroll-container"
              style={{
                width: 'max-content'
              }}
            >
              {duplicatedReviews.map((review, index) => (
                <div 
                  key={`${review.id}-${index}`}
                  className="flex-shrink-0 w-[600px] lg:w-[700px] flex flex-col items-center justify-center"
                >
                  {/* Review Text */}
                  <div className="flex-1 flex items-center justify-center mb-6">
                    <p className="text-2xl lg:text-3xl text-center font-semibold whitespace-pre-line" style={{ color: '#FE003D', lineHeight: '1.1' }}>
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
        )}

        {/* CTA */}
        <div className="text-center mt-8 md:mt-16">
          <a
            href="https://wa.me/919742141080"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 md:gap-3 px-6 py-3 md:px-8 md:py-4 rounded-lg text-base md:text-lg font-medium text-white transition-all duration-300 transform hover:scale-105 shadow-lg"
            style={{ backgroundColor: '#770737' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#FE003D';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'white';
            }}
          >
            <MessageCircle className="w-5 h-5" />
            <span>Share Your Experience</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppReviews;