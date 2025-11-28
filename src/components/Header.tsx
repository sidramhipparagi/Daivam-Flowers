
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
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
    { name: 'About', href: '/about' },
    { name: 'Shop', href: '/collection', isCta: true }
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
            <img src="/logo-red.png" alt="Daivam Flowers Logo" className="h-8 md:h-10" />
          </Link>
          
          {/* Desktop Navigation */}
          {!isMobile && (
            <nav className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => {
                const commonUnderline =
                  "relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5 before:bg-[#FE003D] before:transition-transform before:duration-300 before:origin-left";
                const baseClasses = `${commonUnderline} text-white font-medium transition-colors duration-300 before:scale-x-0 hover:before:scale-x-100 hover:text-[#FE003D]`;
                const ctaClasses = `${commonUnderline} font-semibold text-[#FE003D] transition-colors duration-300 before:scale-x-0 hover:before:scale-x-100`;

                if (item.isCta) {
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={ctaClasses}
                    >
                      {item.name}
                    </Link>
                  );
                }

                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={baseClasses}
                  >
                    {item.name}
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
