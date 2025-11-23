
import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
  const categories = [
    {
      id: 1,
      name: "Loose Flowers",
      image: "/images/posters/loose.png",
      route: "/loose-flowers",
      color: "from-pink-500 to-pink-600"
    },
    {
      id: 2,
      name: "Maale",
      image: "/images/posters/maale1.png",
      route: "/maale",
      color: "from-orange-500 to-orange-600"
    },
    {
      id: 3,
      name: "Daily Elegance",
      image: "/images/posters/human1.png",
      route: "/human-use",
      color: "from-purple-500 to-purple-600"
    },
    {
      id: 4,
      name: "Hara",
      image: "/images/posters/hara2.png",
      route: "/hara",
      color: "from-green-500 to-green-600"
    },
    {
      id: 5,
      name: "Premium Collection",
      image: "/images/posters/premium.png",
      route: "/premium",
      color: "from-purple-600 to-pink-500"
    }
  ];

  return (
    <section className="py-20 bg-brand-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-3 text-brand-primary">
            Explore Our
            <span className="text-brand-accent" style={{ fontWeight: 500 }}> Collections</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-4">
            Discover our curated selection of premium flowers for every occasion
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={category.route}
              className="group"
            >
              <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                {/* Image Container with Overlay */}
                <div className="aspect-square overflow-hidden relative">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/90 via-brand-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                {/* Content Container */}
                <div className="relative p-5 bg-brand-primary">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-brand-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  <h3 className={`${category.name === 'Premium Collection' ? 'text-base' : 'text-lg'} font-bold text-center text-white group-hover:text-brand-accent transition-colors duration-300`}>
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
