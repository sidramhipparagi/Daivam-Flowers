
import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, Sparkles } from 'lucide-react';
import ProductCarousel from './ProductCarousel';

const Hero = () => {
  return (
    <section 
      className="relative py-10 md:py-20"
      style={{ 
        backgroundImage: 'url(/images/image5.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-[#FDF3F5]/80"></div>
      <div 
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, #FDF3F5 100%)'
        }}
      ></div>
      <div className="container mx-auto px-4 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-start">
          <div className="space-y-4 md:space-y-8 animate-fade-in">
            <div className="space-y-2 md:space-y-4">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.05] md:leading-tight text-center md:text-left">
                <span style={{ 
                  background: 'linear-gradient(135deg, #770737 0%, #FE003D 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  Fresh Flowers
                </span>
                <span style={{ 
                  background: 'linear-gradient(135deg, #FE003D 0%, #FF6B8A 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  fontWeight: 700 
                }}>
                  {" "}Delivered
                </span>
              </h2>
              <div className="space-y-4 md:space-y-5">
                <p className="text-xl text-center md:text-left md:text-2xl lg:text-3xl font-semibold" style={{ color: '#770737', lineHeight: '1.1' }}>
                  Order Today Get Delivered Tomorrow Morning
                </p>
              </div>
            </div>

            {/* Feature Highlights with Icons */}
            <div className="grid grid-cols-2 gap-4 md:gap-6 mt-6">
              <div className="group flex items-center gap-3 md:gap-4 p-4 md:p-5 rounded-lg bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-[#FE003D]/10 to-[#770737]/10 group-hover:bg-[#770737] flex items-center justify-center transition-all duration-300">
                  <Truck className="w-6 h-6 md:w-7 md:h-7 transition-colors duration-300 group-hover:text-white" style={{ color: '#FE003D' }} />
                </div>
                <div>
                  <p className="text-sm md:text-base font-semibold" style={{ color: '#770737' }}>Fast Delivery</p>
                  <p className="text-xs md:text-sm text-gray-600">Next morning</p>
                </div>
              </div>

              <div className="group flex items-center gap-3 md:gap-4 p-4 md:p-5 rounded-lg bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1" style={{ animationDelay: '100ms' }}>
                <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-[#FE003D]/10 to-[#770737]/10 group-hover:bg-[#770737] flex items-center justify-center transition-all duration-300">
                  <Sparkles className="w-6 h-6 md:w-7 md:h-7 transition-colors duration-300 group-hover:text-white" style={{ color: '#FE003D' }} />
                </div>
                <div>
                  <p className="text-sm md:text-base font-semibold" style={{ color: '#770737' }}>100% Fresh</p>
                  <p className="text-xs md:text-sm text-gray-600">From K R Market</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative flex flex-col items-center space-y-6 animate-fade-in" style={{ animationDelay: '400ms' }}>
            <ProductCarousel />
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/collection"
                className="px-6 py-3 rounded-lg font-semibold text-lg text-white transition-all duration-300 transform hover:scale-105 shadow-lg text-center hover:shadow-xl"
                style={{ backgroundColor: '#770737' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#FE003D'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
              >
                View Collection
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
