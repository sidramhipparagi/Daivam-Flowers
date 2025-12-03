
import React, { useState, useEffect } from 'react';
import { Search, X, Info, ShoppingBag } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useIsMobile } from '../hooks/use-mobile';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
    { name: 'About', href: '/about', icon: Info },
    { name: 'Shop', href: '/collection', isCta: true, icon: ShoppingBag }
  ];

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
            <img src="/logo-red.png" alt="Daivam Flowers Logo" className="h-7 md:h-10" />
          </Link>
          
          {/* Desktop Navigation */}
          {!isMobile && (
            <nav className="hidden md:flex items-center space-x-6">
              {menuItems.map((item) => {
                const baseClasses = "relative text-white transition-colors duration-300 hover:text-[#FE003D]";
                const ctaClasses = "relative text-[#FE003D] transition-colors duration-300";

                const Icon = item.icon;

                if (item.isCta) {
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`${ctaClasses} group flex flex-col items-center`}
                    >
                      <Icon className="w-6 h-6" />
                      <span className="pointer-events-none absolute top-full mt-2 px-2 py-1 rounded-md text-xs bg-white text-[#770737] shadow-lg opacity-0 group-hover:opacity-100 transform -translate-y-1 group-hover:translate-y-0 transition-all whitespace-nowrap">
                        {item.name}
                      </span>
                    </Link>
                  );
                }

                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`${baseClasses} group flex flex-col items-center`}
                  >
                    <Icon className="w-6 h-6" />
                    <span className="pointer-events-none absolute top-full mt-2 px-2 py-1 rounded-md text-xs bg-white text-[#770737] shadow-lg opacity-0 group-hover:opacity-100 transform -translate-y-1 group-hover:translate-y-0 transition-all whitespace-nowrap">
                      {item.name}
                    </span>
                  </Link>
                );
              })}
            </nav>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md transition-colors"
              style={{ color: '#FE003D' }}
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" style={{ color: '#FE003D' }} />
              ) : (
                <Search className="w-5 h-5" style={{ color: '#FE003D' }} />
              )}
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
