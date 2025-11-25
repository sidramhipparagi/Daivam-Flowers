import React from 'react';
import { MessageCircle } from 'lucide-react';

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
    message: "Absolutely loved the fresh flowers! The mallige maale was perfect for our pooja. Delivery was on time and flowers were so fresh. Highly recommend!",
    initial: "P"
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    message: "Best quality flowers in Bangalore! I've been ordering from them for the past 6 months. Always fresh from KR Market. Great service!",
    initial: "R"
  },
  {
    id: 3,
    name: "Lakshmi Devi",
    message: "The hara collection is beautiful. I order daily for temple and they never disappoint. Price is also very reasonable. Thank you!",
    initial: "L"
  },
  {
    id: 4,
    name: "Arun Bhat",
    message: "Ordered for my sister's wedding. The premium collection was stunning! Everyone asked where we got such beautiful flowers. Will definitely order again!",
    initial: "A"
  },
  {
    id: 5,
    name: "Meena Iyer",
    message: "Very happy with the loose flowers quality. Perfect for rangoli and decoration. Fresh and fragrant. Good service!",
    initial: "M"
  },
  {
    id: 6,
    name: "Suresh Reddy",
    message: "Excellent quality maale flowers! Used for special occasion and got many compliments. Will order again. Keep up the good work!",
    initial: "S"
  }
];

const WhatsAppReviews = () => {
  // Duplicate reviews for seamless infinite loop
  const duplicatedReviews = [...reviews, ...reviews];

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
        <div className="text-center mb-8 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4 text-brand-primary leading-[1.05] md:leading-tight">
            What Our
            <span className="text-brand-accent font-bold"> Customers Say</span>
          </h2>
          <p className="text-sm md:text-lg max-w-2xl mx-auto mt-2 md:mt-4" style={{ color: '#770737' }}>
            Authentic reviews from our valued customers
          </p>
        </div>

        {/* Horizontal Scrolling Reviews */}
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
                className="flex-shrink-0 w-[280px] md:w-[520px] flex flex-col items-center justify-center"
              >
                {/* Review Text */}
                <div className="flex-1 flex items-center justify-center mb-3 md:mb-6">
                  <p className="leading-relaxed text-sm md:text-xl text-center" style={{ color: '#770737' }}>
                    "{review.message}"
                  </p>
                </div>
                
                {/* Author Info */}
                <div className="flex items-center justify-center gap-2 md:gap-3">
                  <MessageCircle className="w-4 h-4 md:w-6 md:h-6" style={{ color: '#25D366' }} />
                  <h3 className="font-bold text-base md:text-xl" style={{ color: '#FE003D' }}>
                    {review.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

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