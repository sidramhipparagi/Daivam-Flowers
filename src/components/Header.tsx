
import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useIsMobile } from '../hooks/use-mobile';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const navigate = useNavigate();

  const scrollToContact = () => {
    navigate('/');
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
    setIsMenuOpen(false);
  };

  const productCategories = [
    { name: 'Loose Flowers', href: '/loose-flowers' },
    { name: 'Maale', href: '/maale' },
    { name: 'Daily Elegance', href: '/human-use' },
    { name: 'Hara', href: '/hara' },
    { name: 'Premium Collection', href: '/premium' }
  ];

  const menuItems = [
    { name: 'About', href: '/about' },
    { name: 'Order', action: scrollToContact }
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-200">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/logo_colour.png" alt="Daivam Flowers Logo" className="h-12" />
          </Link>
          
          {/* Desktop Navigation */}
          {!isMobile && (
            <nav className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <div key={item.name}>
                  {item.href ? (
                    <Link 
                      to={item.href}
                      className="relative text-gray-700 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-600 hover:to-orange-500 font-medium transition-all duration-300 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-gradient-to-r before:from-pink-600 before:to-orange-500 before:transition-all before:duration-300 hover:before:w-full"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <button 
                      onClick={item.action}
                      className="relative text-gray-700 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-600 hover:to-orange-500 font-medium transition-all duration-300 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-gradient-to-r before:from-pink-600 before:to-orange-500 before:transition-all before:duration-300 hover:before:w-full"
                    >
                      {item.name}
                    </button>
                  )}
                </div>
              ))}
              
              {/* Products Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="relative flex items-center space-x-1 text-gray-700 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-600 hover:to-orange-500 font-medium transition-all duration-300 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-gradient-to-r before:from-pink-600 before:to-orange-500 before:transition-all before:duration-300 hover:before:w-full outline-none">
                  <span>Products</span>
                  <ChevronDown className="w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-48 bg-white border border-gray-200 shadow-lg z-50">
                  {productCategories.map((category) => (
                    <DropdownMenuItem key={category.name} asChild>
                      <Link 
                        to={category.href}
                        className="block px-4 py-2 text-gray-700 hover:bg-gradient-to-r hover:from-pink-600 hover:to-orange-500 hover:text-white transition-all duration-300 cursor-pointer"
                      >
                        {category.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </nav>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md bg-gradient-to-r from-pink-600 to-orange-500 text-white hover:from-pink-700 hover:to-orange-600 transition-all duration-300"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          )}
        </div>

        {/* Mobile Menu */}
        {isMobile && isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4 pt-4">
              {menuItems.map((item) => (
                <div key={item.name}>
                  {item.href ? (
                    <Link 
                      to={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="block px-4 py-2 text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-pink-600 hover:to-orange-500 rounded-lg font-medium transition-all duration-300"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <button 
                      onClick={item.action}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-pink-600 hover:to-orange-500 rounded-lg font-medium transition-all duration-300"
                    >
                      {item.name}
                    </button>
                  )}
                </div>
              ))}
              
              {/* Mobile Products Section */}
              <div className="px-4 py-2">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Products</h3>
                <div className="space-y-2">
                  {productCategories.map((category) => (
                    <Link 
                      key={category.name}
                      to={category.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="block px-4 py-2 text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-pink-600 hover:to-orange-500 rounded-lg font-medium transition-all duration-300"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
