import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';

const FloatingOrderButton = () => {
  return (
    <Link
      to="/collection"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <div className="flex items-center justify-center bg-brand-primary hover:bg-brand-primary/90 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out h-14 w-14 hover:w-32 hover:px-4">
        <ShoppingCart className="h-6 w-6 flex-shrink-0" />
        <span className="overflow-hidden max-w-0 group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 font-medium whitespace-nowrap">
          Order
        </span>
      </div>
    </Link>
  );
};

export default FloatingOrderButton;
