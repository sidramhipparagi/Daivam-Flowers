
import React from 'react';
import { Link } from 'react-router-dom';
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
        <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-center">
          <div className="space-y-4 md:space-y-8">
            <div className="space-y-2 md:space-y-4">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.05] md:leading-tight text-center md:text-left" style={{ color: '#FE003D' }}>
                Fresh Flowers
                <span style={{ color: '#FE003D', fontWeight: 700 }}>
                  {" "}Delivered
                </span>
              </h2>
              <div className="space-y-4 md:space-y-5">
                <p className="text-xl text-center md:text-left md:text-2xl lg:text-3xl font-semibold" style={{ color: '#770737', lineHeight: '1.1' }}>
                  We deliver all kinds of fresh flowers directly from K R Market Bengaluru to your doorstep
                </p>
                <p className="text-xl text-center md:text-left md:text-2xl lg:text-3xl font-semibold" style={{ color: '#770737', lineHeight: '1.1' }}>
                  Order Today Get Delivered Tomorrow Morning
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative flex flex-col items-center space-y-6">
            <ProductCarousel />
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/collection"
                className="px-8 py-4 rounded-lg font-semibold text-lg text-white transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
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
