
import React from 'react';
import Header from '../components/Header';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const HumanUse = () => {
  const humanUseFlowers = [
    {
      id: 1,
      name: "Mallige Dindu",
      price: "₹60/1 piece",
      image: "/images/Products/Mallige-Dindu.png",
      description: "Freshly packed jasmine buds ideal for garlands and hair adornment."
    },
    {
      id: 2,
      name: "Gundu Mallige",
      price: "₹40/100g",
      image: "/images/Products/Gundu-mallige.png",
      description: "Fragrant Gundu Mallige perfect for hair and devotion"
    },
    {
      id: 3,
      name: "Kanakambara Hoovu",
      price: "₹40/100g",
      image: "/images/Products/Kanakambara-loose.png",
      description: "Vibrant Kanakambara for hair adornment and rituals"
    },
    {
      id: 4,
      name: "Mallige Maale",
      price: "₹50/mola",
      image: "/images/Products/Mallige-maale.png",
      description: "Classic jasmine garland for devotion, bridal wear, and fragrance"
    },
    {
      id: 5,
      name: "Mallige Maale(no paneer soppu)",
      price: "₹50/mola",
      image: "/images/Products/Mallige-maale-nopaneer.png",
      description: "Pure jasmine garland, perfect for clean and elegant use"
    },
    {
      id: 6,
      name: "Rose",
      price: "₹60/500g",
      image: "/images/Products/Rose-loose.png",
      description: "Classic red roses for devotion and celebration"
    },
    {
      id: 7,
      name: "Kanakambara Maale",
      price: "₹50/mola",
      image: "/images/Products/Kanakambara-maale.png",
      description: "Radiant orange Kanakambara for hair adornment and religious use"
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="relative bg-gradient-to-br from-purple-50 to-pink-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <Link to="/" className="inline-flex items-center space-x-2 text-purple-600 hover:text-purple-700 transition-colors mb-4">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
              Daily
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
                {" "}Elegance
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Flowers perfect for personal decoration and ceremonies
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {humanUseFlowers.map((flower) => (
              <Card key={flower.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                <div className="relative overflow-hidden">
                  <img 
                    src={flower.image} 
                    alt={flower.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">{flower.name}</h3>
                      <p className="text-gray-600 text-sm mt-1">{flower.description}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
                        {flower.price}
                      </span>
                      <a 
                        href={`https://wa.me/919742141080?text=Hi, I would like to order ${encodeURIComponent(flower.name)} - ${encodeURIComponent(flower.price)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button className="bg-gradient-to-r from-purple-600 to-purple-700 text-white hover:from-purple-700 hover:to-purple-800 transition-all duration-300">
                          Order Now
                        </Button>
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HumanUse;
