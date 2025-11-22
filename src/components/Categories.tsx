
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
    <section className="py-16" style={{ backgroundColor: '#FDF3F5' }}>
      <div className="container mx-auto px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: '#770737' }}>
            Explore Our Different
            <span style={{ color: '#FE003D' }}>
              {" "}Categories
            </span>
          </h2>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={category.route}
              className="group hover:scale-105 transition-transform duration-300"
            >
              <div className="bg-brand-primary rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className={`${category.name === 'Premium Collection' ? 'text-base' : 'text-lg'} font-semibold text-center text-white group-hover:text-brand-accent transition-colors duration-300`}>
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
