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
    <section className="py-24 bg-brand-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-brand-primary">
            What Our
            <span className="text-brand-accent"> Customers Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
            Authentic reviews from our valued customers
          </p>
        </div>

        {/* Horizontal Scrolling Reviews */}
        <div className="relative">
          <div className="flex gap-8 overflow-x-auto pb-8 snap-x snap-mandatory scroll-smooth px-4 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {reviews.map((review) => (
              <div 
                key={review.id}
                className="flex-shrink-0 w-[420px] snap-center group"
              >
                <div className="relative bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden h-full flex flex-col border border-border/50">
                  {/* Top Accent Bar */}
                  <div className="h-1.5 bg-brand-accent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                  
                  {/* Content */}
                  <div className="p-8 flex-1 flex flex-col">
                    {/* Quote Icon */}
                    <div className="mb-6">
                      <Quote className="w-10 h-10 text-brand-accent/20" />
                    </div>
                    
                    {/* Review Text */}
                    <p className="text-foreground/80 leading-relaxed text-base mb-8 flex-1">
                      "{review.message}"
                    </p>
                    
                    {/* Author Info */}
                    <div className="flex items-center gap-4 pt-6 border-t border-border/30">
                      <div className="w-12 h-12 rounded-full bg-brand-primary flex items-center justify-center font-bold text-white text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                        {review.initial}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-brand-primary text-base">
                          {review.name}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <MessageCircle className="w-3.5 h-3.5 text-brand-accent" />
                          <span className="text-xs text-muted-foreground font-medium">Verified Customer</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Scroll Indicator */}
          <div className="text-center mt-6">
            <p className="text-sm text-muted-foreground">← Scroll to see more reviews →</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="https://wa.me/919742141080"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-brand-primary text-white px-10 py-5 rounded-full font-bold shadow-xl hover:shadow-2xl hover:bg-brand-accent transition-all duration-300 transform hover:scale-105 text-base"
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