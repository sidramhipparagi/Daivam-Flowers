
import React, { useState, useEffect } from 'react';
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
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const isMobile = useIsMobile();
  const navigate = useNavigate();

  const productCategories = [
    { name: 'Loose Flowers', href: '/loose-flowers' },
    { name: 'Maale', href: '/maale' },
    { name: 'Daily Elegance', href: '/human-use' },
    { name: 'Hara', href: '/hara' },
    { name: 'Premium', href: '/premium' }
  ];

  const menuItems = [
    { name: 'About', href: '/about' },
    { name: 'Order', href: '/collection' }
  ];

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (dropdownTimeout) {
        clearTimeout(dropdownTimeout);
      }
    };
  }, [dropdownTimeout]);

  // Handle scroll behavior - hide on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show header at the top of the page
      if (currentScrollY < 10) {
        setIsHeaderVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down - hide header
        setIsHeaderVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up - show header quickly
        setIsHeaderVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header 
      className={`sticky top-0 z-50 transition-transform duration-300 ease-in-out ${isHeaderVisible ? 'translate-y-0' : '-translate-y-full'}`}
      style={{ backgroundColor: '#770737' }}
    >
      <div className="container mx-auto px-4 py-3 md:px-12 md:py-5">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/logo-red.png" alt="Daivam Flowers Logo" className="h-8 md:h-10" />
          </Link>
          
          {/* Desktop Navigation */}
          {!isMobile && (
            <nav className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <Link 
                  key={item.name}
                  to={item.href}
                  className="relative text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-600 hover:to-orange-500 font-medium transition-all duration-300 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-gradient-to-r before:from-pink-600 before:to-orange-500 before:transition-all before:duration-300 hover:before:w-full"
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Products Dropdown */}
              <div
                onMouseEnter={() => {
                  if (dropdownTimeout) {
                    clearTimeout(dropdownTimeout);
                    setDropdownTimeout(null);
                  }
                  setIsProductsDropdownOpen(true);
                }}
                onMouseLeave={() => {
                  const timeout = setTimeout(() => {
                    setIsProductsDropdownOpen(false);
                  }, 200);
                  setDropdownTimeout(timeout);
                }}
              >
                <DropdownMenu open={isProductsDropdownOpen} onOpenChange={setIsProductsDropdownOpen}>
                  <DropdownMenuTrigger className="relative flex items-center space-x-1 font-semibold hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-600 hover:to-orange-500 transition-all duration-300 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-gradient-to-r before:from-pink-600 before:to-orange-500 before:transition-all before:duration-300 hover:before:w-full outline-none" style={{ color: '#FE000B' }}>
                    <span>Products</span>
                    <ChevronDown className="w-4 h-4" style={{ color: '#FE003D' }} />
                  </DropdownMenuTrigger>
                <DropdownMenuContent 
                  className="w-48 bg-white border border-gray-200 shadow-lg z-50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 duration-300"
                  onMouseEnter={() => {
                    if (dropdownTimeout) {
                      clearTimeout(dropdownTimeout);
                      setDropdownTimeout(null);
                    }
                    setIsProductsDropdownOpen(true);
                  }}
                  onMouseLeave={() => {
                    const timeout = setTimeout(() => {
                      setIsProductsDropdownOpen(false);
                    }, 200);
                    setDropdownTimeout(timeout);
                  }}
                >
                  {productCategories.map((category) => (
                    <DropdownMenuItem key={category.name} asChild>
                      <Link 
                        to={category.href}
                        className="block px-4 py-2 text-gray-700 transition-all duration-300 cursor-pointer focus:!bg-[#770737] focus:!text-[#FE003D]"
                        style={{
                          color: '#374151'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = '#770737';
                          e.currentTarget.style.color = '#FE003D';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = '';
                          e.currentTarget.style.color = '#374151';
                        }}
                      >
                        {category.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              </div>
            </nav>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md transition-colors"
              style={{ color: '#FE003D' }}
            >
              {isMenuOpen ? <X className="w-6 h-6" style={{ color: '#FE003D' }} /> : <Menu className="w-6 h-6" style={{ color: '#FE003D' }} />}
            </button>
          )}
        </div>

        {/* Mobile Menu */}
        {isMobile && isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/20">
            <nav className="flex flex-col space-y-4 pt-4">
              {menuItems.map((item) => (
                <Link 
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-2 rounded-lg font-medium transition-all duration-300"
                  style={{ color: '#FE003D' }}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Products Section */}
              <div className="px-4 py-2">
                <h3 className="text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: '#FE003D' }}>Products</h3>
                <div className="space-y-2">
                  {productCategories.map((category) => (
                    <Link 
                      key={category.name}
                      to={category.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="block px-4 py-2 rounded-lg font-medium transition-all duration-300"
                      style={{ color: '#FE003D' }}
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
