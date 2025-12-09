import React, { useState } from 'react';
import { MessageCircle, ChevronRight, Star } from 'lucide-react';
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
    name: "Priya S.",
    message: "Perfect for our pooja. Delivery was on time and flowers were so fresh!",
    initial: "P"
  },
  {
    id: 2,
    name: "Rajesh K.",
    message: "Best quality flowers in Bangalore! Always fresh!",
    initial: "R"
  },
  {
    id: 3,
    name: "Lakshmi D.",
    message: "The maale collection is beautiful. Price is also very reasonable!",
    initial: "L"
  },
  {
    id: 4,
    name: "Arun B.",
    message: "Ordered for my sister's wedding. The premium collection was stunning!",
    initial: "A"
  },
  {
    id: 5,
    name: "Meena I.",
    message: "Very happy with the loose flowers quality. Fresh and fragrant!",
    initial: "M"
  },
  {
    id: 6,
    name: "Suresh R.",
    message: "Ordered for special occasion and got many compliments!",
    initial: "S"
  }
];

const WhatsAppReviews = () => {
  const isMobile = useIsMobile();
  const [isPaused, setIsPaused] = useState(false);
  
  const duplicatedReviews = [...reviews, ...reviews, ...reviews];

  return (
    <section className="py-6 md:py-24 relative" style={{ backgroundColor: '#FDF3F5' }}>
      <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-20">
        {/* Mobile Header */}
        <div className="flex items-center justify-between mb-4 md:hidden">
          <h2 className="text-lg font-bold" style={{ color: '#770737' }}>
            Customer Reviews
          </h2>
          <a 
            href="https://wa.me/919742141080"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium flex items-center gap-1"
            style={{ color: '#FE003D' }}
          >
            Write Review
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>

        {/* Desktop Header */}
        <div className="hidden md:block text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-brand-primary leading-tight">
            What Our
            <span className="text-brand-accent font-bold"> Customers Say</span>
          </h2>
        </div>

        {/* Mobile: Horizontal Scroll Cards */}
        {isMobile ? (
          <div className="md:hidden">
            <div 
              className="flex gap-3 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide" 
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="flex-shrink-0 w-[100px]"
                >
                  <div className="flex flex-col items-center gap-3">
                    <div 
                      className="w-[100px] h-28 rounded-xl overflow-hidden shadow-sm bg-white flex flex-col items-center justify-center p-2"
                    >
                      <div className="flex items-center gap-0.5 mb-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-2 h-2 fill-current" style={{ color: '#FE003D' }} />
                        ))}
                      </div>
                      <p 
                        className="text-[10px] leading-tight text-center line-clamp-3"
                        style={{ color: '#1F2937' }}
                      >
                        "{review.message}"
                      </p>
                    </div>
                    <span 
                      className="text-xs font-semibold text-center leading-tight"
                      style={{ color: '#770737' }}
                    >
                      {review.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Desktop: Continuous infinite scroll */
          <div 
            className="relative overflow-hidden min-h-[340px]"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
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
                    <div className="flex items-center justify-center mb-6 w-full">
                      <div 
                        className="rounded-2xl px-3 py-5 lg:px-4 lg:py-7 flex flex-col h-[280px] lg:h-[320px] w-full"
                        style={{ backgroundColor: '#FFFEFE' }}
                      >
                        <div className="flex-1 flex items-center justify-center">
                          <p 
                            className="text-xl text-center font-semibold" 
                            style={{ color: '#1F2937', lineHeight: '1.4' }}
                          >
                            "{review.message}"
                          </p>
                        </div>
                        
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

        {/* Desktop CTA */}
        <div className="hidden md:block text-center mt-16">
          <a
            href="https://wa.me/919742141080"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold transition-all duration-300 hover:scale-105"
            style={{ backgroundColor: '#770737' }}
          >
            <MessageCircle className="w-5 h-5" />
            Share Your Experience
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppReviews;