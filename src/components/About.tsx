
import React from 'react';
import { MapPin, Truck, Clock, Star } from 'lucide-react';

const About = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-4xl font-bold text-gray-800 mb-6">
              Directly from 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-orange-500">
                {" "}K R Market
              </span>
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Daivam Flowers is your trusted partner for fresh, beautiful flowers in Bengaluru. 
              We source our flowers directly from the famous K R Market, ensuring you get the 
              freshest blooms at the best prices.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our traditional flower business has been serving Bengaluru families for years, 
              bringing the vibrant colors and fragrances of K R Market directly to your homes.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 pt-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                  <Star className="w-5 h-5 text-pink-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Premium Quality</h4>
                  <p className="text-sm text-gray-600">Hand-picked fresh flowers</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                  <Clock className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Quick Delivery</h4>
                  <p className="text-sm text-gray-600">Order Today Get Delivered Tomorrow Morning</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="./images/image2.png" 
              alt="K R Market Bengaluru" 
              className="rounded-2xl shadow-2xl w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-lg p-4">
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-pink-600" />
                <span className="font-semibold text-gray-800">K R Market, Bengaluru</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
