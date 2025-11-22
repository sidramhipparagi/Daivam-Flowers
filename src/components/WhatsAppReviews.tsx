import React from 'react';
import { MessageCircle, Quote } from 'lucide-react';

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
  return (
    <section className="py-20" style={{ backgroundColor: '#FDF3F5' }}>
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#770737' }}>
            What Our
            <span style={{ color: '#FE003D' }}>
              {" "}Customers Say
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real reviews from our happy customers via WhatsApp
          </p>
        </div>

        {/* Horizontal Scrolling Reviews */}
        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scroll-smooth px-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {reviews.map((review) => (
              <div 
                key={review.id}
                className="flex-shrink-0 w-[400px] snap-center"
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden h-full flex flex-col">
                  {/* Header */}
                  <div className="p-6 border-b" style={{ borderColor: '#FDF3F5' }}>
                    <div className="flex items-center space-x-4">
                      <div 
                        className="w-14 h-14 rounded-full flex items-center justify-center font-bold text-white text-xl shadow-md"
                        style={{ backgroundColor: '#770737' }}
                      >
                        {review.initial}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg" style={{ color: '#770737' }}>
                          {review.name}
                        </h3>
                        <div className="flex items-center space-x-2 mt-1">
                          <MessageCircle className="w-4 h-4" style={{ color: '#FE003D' }} />
                          <span className="text-sm text-gray-500">WhatsApp Customer</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Review Content */}
                  <div className="p-6 relative flex-1">
                    <Quote className="absolute top-4 left-4 w-10 h-10 opacity-10" style={{ color: '#FE003D' }} />
                    <p className="text-gray-700 leading-relaxed relative z-10 text-base">
                      {review.message}
                    </p>
                  </div>

                  {/* Bottom Accent */}
                  <div className="h-1 mt-auto" style={{ backgroundColor: '#FE003D' }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">← Scroll to see more reviews →</p>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://wa.me/919742141080"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            style={{ backgroundColor: '#770737' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#FE003D';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#770737';
            }}
          >
            <MessageCircle className="w-5 h-5" />
            <span>Share Your Experience on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppReviews;