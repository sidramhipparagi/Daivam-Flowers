import React from 'react';
import { MessageCircle, Star } from 'lucide-react';
import { Card } from './ui/card';

interface Review {
  id: number;
  name: string;
  date: string;
  message: string;
  rating: number;
  initial: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Priya Sharma",
    date: "2 days ago",
    message: "Absolutely loved the fresh flowers! The mallige maale was perfect for our pooja. Delivery was on time and flowers were so fresh. Highly recommend! 🌸",
    rating: 5,
    initial: "P"
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    date: "1 week ago",
    message: "Best quality flowers in Bangalore! I've been ordering from them for the past 6 months. Always fresh from KR Market. Great service! 👍",
    rating: 5,
    initial: "R"
  },
  {
    id: 3,
    name: "Lakshmi Devi",
    date: "3 days ago",
    message: "The hara collection is beautiful. I order daily for temple and they never disappoint. Price is also very reasonable. Thank you! 🙏",
    rating: 5,
    initial: "L"
  },
  {
    id: 4,
    name: "Arun Bhat",
    date: "5 days ago",
    message: "Ordered for my sister's wedding. The premium collection was stunning! Everyone asked where we got such beautiful flowers. Will definitely order again! 💐",
    rating: 5,
    initial: "A"
  },
  {
    id: 5,
    name: "Meena Iyer",
    date: "1 week ago",
    message: "Very happy with the loose flowers quality. Perfect for rangoli and decoration. Fresh and fragrant. Good service! 🌺",
    rating: 5,
    initial: "M"
  },
  {
    id: 6,
    name: "Suresh Reddy",
    date: "4 days ago",
    message: "Excellent quality maale flowers! Used for special occasion and got many compliments. Will order again. Keep up the good work! ✨",
    rating: 5,
    initial: "S"
  }
];

const WhatsAppReviews = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-green-50 via-white to-pink-50">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full mb-4 shadow-lg">
            <MessageCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real reviews from our happy customers on WhatsApp
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {reviews.map((review) => (
            <Card 
              key={review.id}
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-white border-2 border-green-100 overflow-hidden"
            >
              {/* WhatsApp Chat Header */}
              <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center font-bold text-green-600">
                  {review.initial}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-white">{review.name}</h3>
                  <p className="text-xs text-green-100">{review.date}</p>
                </div>
              </div>

              {/* Chat Bubble */}
              <div className="p-6 bg-gradient-to-br from-gray-50 to-white min-h-[180px] flex flex-col">
                {/* Rating Stars */}
                <div className="flex space-x-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-4 h-4 fill-yellow-400 text-yellow-400" 
                    />
                  ))}
                </div>

                {/* Message Bubble */}
                <div className="bg-white rounded-lg rounded-tl-none p-4 shadow-md border border-gray-100 flex-1 relative">
                  <p className="text-gray-700 leading-relaxed text-sm">
                    {review.message}
                  </p>
                  {/* WhatsApp-style tail */}
                  <div className="absolute -top-2 left-0 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-white border-b-8 border-b-white"></div>
                </div>

                {/* WhatsApp checkmark */}
                <div className="flex justify-end mt-2">
                  <div className="flex items-center space-x-1">
                    <svg className="w-4 h-4 text-blue-500" viewBox="0 0 16 15" fill="none">
                      <path d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.483a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.891 7.769a.366.366 0 0 0-.515.006l-.423.433a.364.364 0 0 0 .006.514l3.258 3.185c.143.14.368.14.511 0l6.672-8.047a.365.365 0 0 0-.063-.512z" fill="currentColor"/>
                    </svg>
                  </div>
                </div>
              </div>
            </Card>
          ))}
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