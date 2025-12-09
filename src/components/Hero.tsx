
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Truck, Sparkles } from 'lucide-react';
import ProductCarousel from './ProductCarousel';
import FeatureDialog from './FeatureDialog';

const Hero = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState<'delivery' | 'fresh' | null>(null);

  const handleFeatureClick = (feature: 'delivery' | 'fresh') => {
    setSelectedFeature(feature);
    setDialogOpen(true);
  };

  return (
    <>
    <section 
      className="relative py-4 md:py-20"
    >
      <div className="absolute inset-0 bg-[#FDF3F5]/80"></div>
      <div 
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, #FDF3F5 100%)'
        }}
      ></div>
      <div className="container mx-auto md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-4 md:gap-12 items-start">
          {/* Mobile: Carousel first, Desktop: Text first */}
          <div className="order-2 lg:order-1 space-y-4 md:space-y-8 animate-fade-in px-4">
            <div className="space-y-2 md:space-y-4">
              <h2 className="hidden sm:block text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.05] md:leading-tight text-center md:text-left">
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
            <div className="flex gap-3 mt-6 justify-center md:justify-start">
              <button 
                onClick={() => handleFeatureClick('delivery')}
                className="group flex items-center justify-center rounded-full shadow-lg hover:shadow-xl transition-all duration-500 ease-out h-14 w-14 hover:w-40 cursor-pointer" 
                style={{ backgroundColor: '#770737' }}
              >
                <Truck className="h-6 w-6 flex-shrink-0 transition-colors duration-500 ease-out group-hover:text-white" style={{ color: '#FE003D' }} />
                <span 
                  className="overflow-hidden max-w-0 group-hover:max-w-xs group-hover:ml-2 whitespace-nowrap font-semibold text-sm"
                  style={{ 
                    color: '#FE003D',
                    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                    display: 'inline-block'
                  }}
                >
                  Fast Delivery
                </span>
              </button>

              <button 
                onClick={() => handleFeatureClick('fresh')}
                className="group flex items-center justify-center rounded-full shadow-lg hover:shadow-xl transition-all duration-500 ease-out h-14 w-14 hover:w-40 cursor-pointer" 
                style={{ backgroundColor: '#770737' }}
              >
                <Sparkles className="h-6 w-6 flex-shrink-0 transition-colors duration-500 ease-out group-hover:text-white" style={{ color: '#FE003D' }} />
                <span 
                  className="overflow-hidden max-w-0 group-hover:max-w-xs group-hover:ml-2 whitespace-nowrap font-semibold text-sm"
                  style={{ 
                    color: '#FE003D',
                    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                    display: 'inline-block'
                  }}
                >
                  100% Fresh
                </span>
              </button>
            </div>
          </div>
          
          {/* Mobile: Carousel first, Desktop: Carousel second */}
          <div className="order-1 lg:order-2 relative flex flex-col items-center lg:space-y-6 animate-fade-in -mx-4 lg:mx-0" style={{ animationDelay: '400ms' }}>
            <ProductCarousel />
            
            <div className="hidden sm:flex gap-4 px-4 mt-4 lg:mt-0">
              <Link 
                to="/collection"
                className="group flex items-center justify-center rounded-full px-6 py-3 font-semibold text-lg text-white hover:text-[#FE003D] transition-all duration-500 ease-out transform hover:scale-105 shadow-lg hover:shadow-xl"
                style={{ backgroundColor: '#770737' }}
              >
                View Collection
              </Link>
            </div>
          </div>
        </div>
      </div>

      <FeatureDialog 
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        feature={selectedFeature}
      />
    </section>
    </>
  );
};

export default Hero;
