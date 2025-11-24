
import React from 'react';
import { Truck, Clock, Star } from 'lucide-react';

const About = () => {
  return (
    <section className="py-10 md:py-20" style={{ backgroundColor: '#FDF3F5' }}>
      <div className="container mx-auto px-4 md:px-12">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-center">
          <div className="space-y-3 md:space-y-6">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4 text-brand-primary">
              Directly from 
              <span style={{ color: '#FE003D', fontWeight: 500 }}>
                {" "}K R Market
              </span>
            </h3>
            <p className="text-sm md:text-lg text-gray-600 leading-relaxed">
              Daivam Flowers is your trusted partner for fresh, beautiful flowers in Bengaluru. 
              We source our flowers directly from the famous K R Market, ensuring you get the 
              freshest blooms at the best prices.
            </p>
            <p className="text-sm md:text-lg text-gray-600 leading-relaxed">
              Our traditional flower business has been serving Bengaluru families for years, 
              bringing the vibrant colors and fragrances of K R Market directly to your homes.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-3 md:gap-4 pt-3 md:pt-6">
              <div 
                className="flex items-center space-x-2 md:space-x-3 p-2 md:p-4 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group"
                onMouseEnter={(e) => {
                  const iconContainer = e.currentTarget.querySelector('.icon-container') as HTMLElement;
                  if (iconContainer) {
                    iconContainer.style.background = '#770737';
                  }
                }}
                onMouseLeave={(e) => {
                  const iconContainer = e.currentTarget.querySelector('.icon-container') as HTMLElement;
                  if (iconContainer) {
                    iconContainer.style.background = 'linear-gradient(to bottom right, rgb(255, 228, 230), rgb(255, 237, 213))';
                  }
                }}
              >
                <div 
                  className="icon-container flex items-center justify-center w-8 h-8 md:w-12 md:h-12 rounded-full transition-all duration-300 flex-shrink-0"
                  style={{ 
                    background: 'linear-gradient(to bottom right, rgb(255, 228, 230), rgb(255, 237, 213))',
                    minWidth: '2rem',
                    minHeight: '2rem'
                  }}
                >
                  <Star className="w-4 h-4 md:w-6 md:h-6 transition-colors duration-300" style={{ color: '#FE003D' }} />
                </div>
                <div>
                  <h4 className="font-semibold text-sm md:text-base text-gray-800">Premium Quality</h4>
                  <p className="text-xs md:text-sm text-gray-600">Hand-picked fresh flowers</p>
                </div>
              </div>
              
              <div 
                className="flex items-center space-x-2 md:space-x-3 p-2 md:p-4 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group"
                onMouseEnter={(e) => {
                  const iconContainer = e.currentTarget.querySelector('.icon-container') as HTMLElement;
                  if (iconContainer) {
                    iconContainer.style.background = '#770737';
                  }
                }}
                onMouseLeave={(e) => {
                  const iconContainer = e.currentTarget.querySelector('.icon-container') as HTMLElement;
                  if (iconContainer) {
                    iconContainer.style.background = 'linear-gradient(to bottom right, rgb(255, 228, 230), rgb(255, 237, 213))';
                  }
                }}
              >
                <div 
                  className="icon-container flex items-center justify-center w-8 h-8 md:w-12 md:h-12 rounded-full transition-all duration-300 flex-shrink-0"
                  style={{ 
                    background: 'linear-gradient(to bottom right, rgb(255, 228, 230), rgb(255, 237, 213))',
                    minWidth: '2rem',
                    minHeight: '2rem'
                  }}
                >
                  <Clock className="w-4 h-4 md:w-6 md:h-6 transition-colors duration-300" style={{ color: '#FE003D' }} />
                </div>
                <div>
                  <h4 className="font-semibold text-sm md:text-base text-gray-800">Quick Delivery</h4>
                  <p className="text-xs md:text-sm text-gray-600">Order Today Get Delivered Tomorrow Morning</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
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
