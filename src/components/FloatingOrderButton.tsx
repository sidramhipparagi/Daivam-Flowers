import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';

const FloatingOrderButton = () => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <Link
      to="/collection"
      className="fixed bottom-6 right-6 z-50 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center justify-center rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out h-14 w-14 hover:w-32 hover:px-4" style={{ backgroundColor: '#770737' }}>
        <ShoppingCart 
          className="h-6 w-6 flex-shrink-0 transition-colors duration-300" 
          style={{ color: isHovered ? '#FE003D' : 'white' }}
        />
        <span 
          className="overflow-hidden max-w-0 group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 font-medium whitespace-nowrap"
          style={{ color: isHovered ? '#FE003D' : 'white' }}
        >
          Order
        </span>
      </div>
    </Link>
  );
};

export default FloatingOrderButton;
