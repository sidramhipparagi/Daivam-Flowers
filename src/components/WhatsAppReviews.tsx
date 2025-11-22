import React from 'react';
import { MessageCircle, Star, Quote } from 'lucide-react';

interface Review {
  id: number;
  name: string;
  date: string;
  message: string;
  rating: number;
  initial: string;
  color: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Priya Sharma",
    date: "2 days ago",
    message: "Absolutely loved the fresh flowers! The mallige maale was perfect for our pooja. Delivery was on time and flowers were so fresh.",
    rating: 5,
    initial: "P",
    color: "from-pink-500 to-orange-500"
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    date: "1 week ago",
    message: "Best quality flowers in Bangalore! I've been ordering from them for the past 6 months. Always fresh from KR Market. Great service!",
    rating: 5,
    initial: "R",
    color: "from-orange-500 to-pink-500"
  },
  {
    id: 3,
    name: "Lakshmi Devi",
    date: "3 days ago",
    message: "The hara collection is beautiful. I order daily for temple and they never disappoint. Price is also very reasonable. Thank you!",
    rating: 5,
    initial: "L",
    color: "from-pink-600 to-orange-400"
  },
  {
    id: 4,
    name: "Arun Bhat",
    date: "5 days ago",
    message: "Ordered for my sister's wedding. The premium collection was stunning! Everyone asked where we got such beautiful flowers.",
    rating: 5,
    initial: "A",
    color: "from-orange-600 to-pink-400"
  },
  {
    id: 5,
    name: "Meena Iyer",
    date: "1 week ago",
    message: "Very happy with the loose flowers quality. Perfect for rangoli and decoration. Fresh and fragrant. Good service!",
    rating: 5,
    initial: "M",
    color: "from-pink-500 to-orange-600"
  },
  {
    id: 6,
    name: "Suresh Reddy",
    date: "4 days ago",
    message: "Excellent quality maale flowers! Used for special occasion and got many compliments. Will order again. Keep up the good work!",
    rating: 5,
    initial: "S",
    color: "from-orange-500 to-pink-600"
  }
];

const WhatsAppReviews = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 via-white to-orange-50 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl mb-4 shadow-lg">
            <MessageCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            What Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-orange-500">
              Customers Say
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real reviews from our happy customers via WhatsApp
          </p>
        </div>

        {/* Horizontal Scrolling Reviews */}
        <div className="relative">
          {/* Gradient Overlays for scroll hint */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-pink-50 via-pink-50/50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-orange-50 via-orange-50/50 to-transparent z-10 pointer-events-none"></div>
          
          <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory scroll-smooth px-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {reviews.map((review) => (
              <div 
                key={review.id}
                className="flex-shrink-0 w-[400px] group snap-center"
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-pink-100 overflow-hidden h-full">
                  {/* Header with WhatsApp Style */}
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-5 border-b border-green-100">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${review.color} flex items-center justify-center font-bold text-white text-lg shadow-md`}>
                        {review.initial}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-800 text-lg">{review.name}</h3>
                        <p className="text-xs text-gray-500 flex items-center space-x-1">
                          <MessageCircle className="w-3 h-3" />
                          <span>{review.date}</span>
                        </p>
                      </div>
                      {/* WhatsApp checkmark */}
                      <svg className="w-5 h-5 text-green-600" viewBox="0 0 16 15" fill="none">
                        <path d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.483a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.891 7.769a.366.366 0 0 0-.515.006l-.423.433a.364.364 0 0 0 .006.514l3.258 3.185c.143.14.368.14.511 0l6.672-8.047a.365.365 0 0 0-.063-.512z" fill="currentColor"/>
                      </svg>
                    </div>
                    
                    {/* Rating Stars */}
                    <div className="flex items-center space-x-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star 
                          key={i} 
                          className="w-4 h-4 fill-yellow-500 text-yellow-500" 
                        />
                      ))}
                      <span className="ml-2 text-sm font-semibold text-gray-700">5.0</span>
                    </div>
                  </div>

                  {/* Review Content */}
                  <div className="p-6 relative">
                    <Quote className="absolute top-4 left-4 w-8 h-8 text-pink-200" />
                    <p className="text-gray-700 leading-relaxed relative z-10 pl-6">
                      {review.message}
                    </p>
                  </div>

                  {/* Bottom Accent */}
                  <div className={`h-1 bg-gradient-to-r ${review.color}`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500 mb-6">← Scroll to see more reviews →</p>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://wa.me/919742141080"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
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