
import React from 'react';
import { Clock, Star } from 'lucide-react';

const About = () => {
  return (
    <section className="py-6 md:py-20" style={{ backgroundColor: '#FDF3F5' }}>
      <div className="container mx-auto px-4 md:px-12">
        {/* Mobile Header */}
        <div className="flex items-center justify-between mb-4 md:hidden">
          <h3 className="text-xl font-bold" style={{ color: '#770737' }}>
            About Us
          </h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 md:gap-12 items-center">
          <div className="space-y-3 md:space-y-6">
            {/* Desktop heading */}
            <h3 className="hidden md:block text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4 text-brand-primary leading-[1.05] md:leading-tight">
              Directly from 
              <span style={{ color: '#FE003D', fontWeight: 700 }}>
                {" "}K R Market
              </span>
            </h3>
            
            {/* Mobile heading */}
            <h3 className="md:hidden text-lg font-bold leading-tight" style={{ color: '#770737' }}>
              Directly from 
              <span style={{ color: '#FE003D', fontWeight: 700 }}>
                {" "}K R Market
              </span>
            </h3>
            
            <p className="text-sm md:text-xl font-medium leading-relaxed text-gray-700">
              Daivam Flowers is your trusted partner for fresh, beautiful flowers in Bengaluru. 
              We source our flowers directly from the famous K R Market, ensuring you get the 
              freshest blooms at the best prices.
            </p>
            
            {/* Feature cards */}
            <div className="flex gap-3 md:grid md:grid-cols-2 md:gap-4 pt-2 md:pt-6 overflow-x-auto pb-1 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              <div 
                className="flex-shrink-0 w-[100px] md:w-auto md:flex md:items-center md:space-x-3 md:p-4 md:rounded-xl md:hover:shadow-lg md:transition-all md:duration-300 md:hover:-translate-y-2 group"
              >
                {/* Mobile card */}
                <div className="md:hidden flex flex-col items-center gap-2">
                  <div 
                    className="w-[100px] h-28 rounded-xl overflow-hidden shadow-sm flex items-center justify-center"
                    style={{ backgroundColor: '#fff' }}
                  >
                    <Star className="w-10 h-10" style={{ color: '#FE003D' }} />
                  </div>
                  <span 
                    className="text-xs font-semibold text-center leading-tight"
                    style={{ color: '#770737' }}
                  >
                    Premium Quality
                  </span>
                </div>
                
                {/* Desktop card */}
                <div 
                  className="hidden md:flex icon-container items-center justify-center w-12 h-12 rounded-full transition-all duration-300 flex-shrink-0"
                  style={{ 
                    background: 'linear-gradient(to bottom right, rgb(255, 228, 230), rgb(255, 237, 213))',
                  }}
                >
                  <Star className="w-6 h-6 transition-colors duration-300" style={{ color: '#FE003D' }} />
                </div>
                <div className="hidden md:block">
                  <h4 className="font-semibold text-base text-gray-800">Premium Quality</h4>
                </div>
              </div>
              
              <div 
                className="flex-shrink-0 w-[100px] md:w-auto md:flex md:items-center md:space-x-3 md:p-4 md:rounded-xl md:hover:shadow-lg md:transition-all md:duration-300 md:hover:-translate-y-2 group"
              >
                {/* Mobile card */}
                <div className="md:hidden flex flex-col items-center gap-2">
                  <div 
                    className="w-[100px] h-28 rounded-xl overflow-hidden shadow-sm flex items-center justify-center"
                    style={{ backgroundColor: '#fff' }}
                  >
                    <Clock className="w-10 h-10" style={{ color: '#FE003D' }} />
                  </div>
                  <span 
                    className="text-xs font-semibold text-center leading-tight px-1"
                    style={{ color: '#770737' }}
                  >
                    Next Day Delivery
                  </span>
                </div>
                
                {/* Desktop card */}
                <div 
                  className="hidden md:flex icon-container items-center justify-center w-12 h-12 rounded-full transition-all duration-300 flex-shrink-0"
                  style={{ 
                    background: 'linear-gradient(to bottom right, rgb(255, 228, 230), rgb(255, 237, 213))',
                  }}
                >
                  <Clock className="w-6 h-6 transition-colors duration-300" style={{ color: '#FE003D' }} />
                </div>
                <div className="hidden md:block">
                  <h4 className="font-semibold text-base text-gray-800">Order Today Get Delivered Tomorrow Morning</h4>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative hidden md:block">
            <div 
              className="absolute inset-0 pointer-events-none z-10"
              style={{
                background: `linear-gradient(to right, #FDF3F5 0%, transparent 10%, transparent 90%, #FDF3F5 100%),
                             linear-gradient(to bottom, #FDF3F5 0%, transparent 15%, transparent 85%, #FDF3F5 100%)`
              }}
            ></div>
            <img 
              src="./images/image3.png" 
              alt="K R Market Bengaluru" 
              className="w-full h-96 object-cover relative z-0"
              style={{
                backgroundColor: '#F8E8E8'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
