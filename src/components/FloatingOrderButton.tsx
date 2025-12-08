import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const FloatingOrderButton = () => {
  const [isHovered, setIsHovered] = React.useState(false);
  const isMobile = useIsMobile();

  return (
    <a
      href="https://wa.me/c/919742141080"
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed z-50 group ${isMobile ? 'bottom-4 right-4' : 'bottom-6 right-6'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ fontWeight: 'normal' }} // Override link default
    >
      <div 
        className={`flex items-center justify-center rounded-full transition-all duration-300 ease-in-out ${isMobile ? 'h-10 w-10 shadow-md' : 'h-14 w-14 shadow-lg hover:shadow-xl hover:w-32 hover:px-4'}`}
        style={{ backgroundColor: isMobile ? '#FDF3F5' : '#770737' }}
      >
        <ShoppingCart 
          className={`flex-shrink-0 transition-colors duration-300 ${isMobile ? 'h-5 w-5' : 'h-6 w-6'}`}
          style={{ color: isMobile || isHovered ? '#FE003D' : 'white' }}
        />
        {!isMobile && (
          <span 
            className="floating-order-text overflow-hidden max-w-0 group-hover:max-w-xs group-hover:ml-2 whitespace-nowrap"
            style={{ 
              color: isHovered ? '#FE003D' : 'white',
              fontWeight: isHovered ? 700 : 500,
              lineHeight: '1.2',
              transition: 'all 0.3s ease-in-out',
              display: 'inline-block'
            }}
          >
            Order
          </span>
        )}
      </div>
    </a>
  );
};

export default FloatingOrderButton;
