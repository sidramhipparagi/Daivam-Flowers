
import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, Clock, Shield, Sparkles } from 'lucide-react';
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
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.05] md:leading-tight text-center md:text-left" style={{ color: '#FE003D' }}>
                Fresh Flowers
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
            <div className="grid grid-cols-2 gap-3 md:gap-4 mt-6">
              <div className="group flex items-center gap-2 md:gap-3 p-3 md:p-4 rounded-lg bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-[#FE003D]/10 to-[#770737]/10 group-hover:bg-[#770737] flex items-center justify-center transition-all duration-300">
                  <Truck className="w-5 h-5 md:w-6 md:h-6 transition-colors duration-300 group-hover:text-white" style={{ color: '#FE003D' }} />
                </div>
                <div>
                  <p className="text-xs md:text-sm font-semibold" style={{ color: '#770737' }}>Fast Delivery</p>
                  <p className="text-[10px] md:text-xs text-gray-600">Next morning</p>
                </div>
              </div>

              <div className="group flex items-center gap-2 md:gap-3 p-3 md:p-4 rounded-lg bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1" style={{ animationDelay: '100ms' }}>
                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-[#FE003D]/10 to-[#770737]/10 group-hover:bg-[#770737] flex items-center justify-center transition-all duration-300">
                  <Sparkles className="w-5 h-5 md:w-6 md:h-6 transition-colors duration-300 group-hover:text-white" style={{ color: '#FE003D' }} />
                </div>
                <div>
                  <p className="text-xs md:text-sm font-semibold" style={{ color: '#770737' }}>100% Fresh</p>
                  <p className="text-[10px] md:text-xs text-gray-600">From K R Market</p>
                </div>
              </div>

              <div className="group flex items-center gap-2 md:gap-3 p-3 md:p-4 rounded-lg bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1" style={{ animationDelay: '200ms' }}>
                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-[#FE003D]/10 to-[#770737]/10 group-hover:bg-[#770737] flex items-center justify-center transition-all duration-300">
                  <Clock className="w-5 h-5 md:w-6 md:h-6 transition-colors duration-300 group-hover:text-white" style={{ color: '#FE003D' }} />
                </div>
                <div>
                  <p className="text-xs md:text-sm font-semibold" style={{ color: '#770737' }}>Order Anytime</p>
                  <p className="text-[10px] md:text-xs text-gray-600">24/7 service</p>
                </div>
              </div>

              <div className="group flex items-center gap-2 md:gap-3 p-3 md:p-4 rounded-lg bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1" style={{ animationDelay: '300ms' }}>
                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-[#FE003D]/10 to-[#770737]/10 group-hover:bg-[#770737] flex items-center justify-center transition-all duration-300">
                  <Shield className="w-5 h-5 md:w-6 md:h-6 transition-colors duration-300 group-hover:text-white" style={{ color: '#FE003D' }} />
                </div>
                <div>
                  <p className="text-xs md:text-sm font-semibold" style={{ color: '#770737' }}>Quality Assured</p>
                  <p className="text-[10px] md:text-xs text-gray-600">Premium flowers</p>
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
