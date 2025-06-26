
import React from 'react';
import { Truck, Clock, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductCarousel from './ProductCarousel';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-pink-50 to-orange-50 py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                Fresh Flowers
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-orange-500">
                  {" "}Delivered
                </span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                We deliver all kinds of fresh flowers directly from K R Market Bengaluru to your doorstep
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-sm">
                <Star className="w-5 h-5 text-yellow-500" />
                <span className="text-sm font-medium">Premium Quality</span>
              </div>
              <div className="flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-sm">
                <Truck className="w-5 h-5 text-pink-500" />
                <span className="text-sm font-medium">Home Delivery</span>
              </div>
              <div className="flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-sm">
                <Clock className="w-5 h-5 text-orange-500" />
                <span className="text-sm font-medium">Same Day Delivery</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/collection"
                className="bg-gradient-to-r from-pink-600 to-pink-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-pink-700 hover:to-pink-800 transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
              >
                View Collection
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <ProductCarousel />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
