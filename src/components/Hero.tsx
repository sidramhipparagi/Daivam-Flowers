
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
            <div className="flex gap-3 mt-6 justify-center md:justify-start">
              <button 
                onClick={() => handleFeatureClick('delivery')}
                className="group flex items-center justify-center rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out h-14 w-14 hover:w-40 cursor-pointer" 
                style={{ backgroundColor: '#770737' }}
              >
                <Truck className="h-6 w-6 flex-shrink-0 transition-colors duration-300 group-hover:text-white" style={{ color: '#FE003D' }} />
                <span 
                  className="overflow-hidden max-w-0 group-hover:max-w-xs group-hover:ml-2 whitespace-nowrap font-semibold text-sm"
                  style={{ 
                    color: '#FE003D',
                    transition: 'all 0.3s ease-in-out',
                    display: 'inline-block'
                  }}
                >
                  Fast Delivery
                </span>
              </button>

              <button 
                onClick={() => handleFeatureClick('fresh')}
                className="group flex items-center justify-center rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out h-14 w-14 hover:w-40 cursor-pointer" 
                style={{ backgroundColor: '#770737' }}
              >
                <Sparkles className="h-6 w-6 flex-shrink-0 transition-colors duration-300 group-hover:text-white" style={{ color: '#FE003D' }} />
                <span 
                  className="overflow-hidden max-w-0 group-hover:max-w-xs group-hover:ml-2 whitespace-nowrap font-semibold text-sm"
                  style={{ 
                    color: '#FE003D',
                    transition: 'all 0.3s ease-in-out',
                    display: 'inline-block'
                  }}
                >
                  100% Fresh
                </span>
              </button>
            </div>
          </div>
          
          <div className="relative flex flex-col items-center space-y-6 animate-fade-in" style={{ animationDelay: '400ms' }}>
            <ProductCarousel />
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/collection"
                className="group flex items-center justify-center rounded-full px-6 py-3 font-semibold text-lg text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
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
