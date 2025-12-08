
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

// Categories component with mobile view updates

const Categories = () => {
  const location = useLocation();
  const isCollectionPage = location.pathname === '/collection';
  const categories = [
    {
      id: 1,
      name: "Loose Flowers",
      image: "/images/posters/loose.png",
      route: "/loose-flowers"
    },
    {
      id: 2,
      name: "Maale",
      image: "/images/posters/maale1.png",
      route: "/maale"
    },
    {
      id: 3,
      name: "Daily Elegance",
      image: "/images/posters/human1.png",
      route: "/human-use"
    },
    {
      id: 4,
      name: "Hara",
      image: "/images/posters/hara2.png",
      route: "/hara"
    },
    {
      id: 5,
      name: "Premium",
      image: "/images/posters/premium.png",
      route: "/premium"
    }
  ];

  return (
    <section className="py-6 md:py-20 bg-brand-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-12">
        {/* Mobile Header */}
        <div className="flex items-center justify-between mb-5 md:hidden">
          <h2 className="text-xl font-bold" style={{ color: '#770737' }}>
            Shop by Category
          </h2>
          {!isCollectionPage && (
            <Link 
              to="/collection" 
              className="text-sm font-medium flex items-center gap-1"
              style={{ color: '#FE003D' }}
            >
              View All
              <ChevronRight className="w-4 h-4" />
            </Link>
          )}
        </div>

        {/* Desktop Header */}
        <div className="hidden md:block text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-3 text-brand-primary leading-tight">
            Explore Our
            <span className="text-brand-accent font-bold"> Collections</span>
          </h2>
        </div>

        {/* Mobile: Horizontal Scroll */}
        <div className="md:hidden">
          <div className="flex gap-4 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {categories.map((category) => (
              <Link
                key={category.id}
                to={category.route}
                className="flex-shrink-0 w-[100px]"
              >
                <div className="flex flex-col items-center gap-3">
                  <div 
                    className="w-[100px] h-28 rounded-xl overflow-hidden shadow-sm"
                  >
                    <img 
                      src={category.image} 
                      alt={category.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span 
                    className="text-xs font-semibold text-center leading-tight"
                    style={{ color: '#770737' }}
                  >
                    {category.name}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
        
        {/* Desktop: Grid Layout */}
        <div className="hidden md:grid grid-cols-5 gap-8">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={category.route}
              className="group"
            >
              <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                <div className="aspect-square overflow-hidden relative">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/90 via-brand-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                <div className="relative p-5" style={{ backgroundColor: '#770737' }}>
                  <div className="absolute top-0 left-0 right-0 h-1 bg-brand-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  <h3 className="text-lg font-bold text-center text-white group-hover:text-brand-accent transition-colors duration-300">
                    {category.name}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
