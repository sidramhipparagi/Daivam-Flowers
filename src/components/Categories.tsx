
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
      image: "/images/posters/maale.png",
      route: "/maale",
      color: "from-orange-500 to-orange-600"
    },
    {
      id: 3,
      name: "Daily Elegance",
      image: "/images/posters/human.png",
      route: "/human-use",
      color: "from-purple-500 to-purple-600"
    },
    {
      id: 4,
      name: "Hara",
      image: "/images/posters/hara.png",
      route: "/hara",
      color: "from-green-500 to-green-600"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Explore Our Different
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-orange-500">
              {" "}Categories
            </span>
          </h2>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={category.route}
              className="group hover:scale-105 transition-transform duration-300"
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className={`text-lg font-semibold text-center text-transparent bg-clip-text bg-gradient-to-r ${category.color}`}>
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
