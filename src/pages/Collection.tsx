
import React from 'react';
import Header from '../components/Header';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Collection = () => {
  const flowers = [
    {
      id: 1,
      name: "Red Roses",
      price: "₹50/dozen",
      image: "/images/ChatGPT Image Jun 17, 2025, 11_51_00 AM.png",
      description: "Fresh red roses perfect for special occasions"
    },
    {
      id: 2,
      name: "White Lilies",
      price: "₹40/bunch",
      image: "/images/ChatGPT Image Jun 17, 2025, 11_51_00 AM.png",
      description: "Pure white lilies for elegant arrangements"
    },
    {
      id: 3,
      name: "Yellow Marigolds",
      price: "₹30/kg",
      image: "/images/ChatGPT Image Jun 17, 2025, 11_51_00 AM.png",
      description: "Bright yellow marigolds for festivals"
    },
    {
      id: 4,
      name: "Pink Carnations",
      price: "₹45/bunch",
      image: "/images/ChatGPT Image Jun 17, 2025, 11_51_00 AM.png",
      description: "Soft pink carnations for gentle occasions"
    },
    {
      id: 5,
      name: "Orange Gerberas",
      price: "₹35/bunch",
      image: "/images/ChatGPT Image Jun 17, 2025, 11_51_00 AM.png",
      description: "Vibrant orange gerberas for cheerful moments"
    },
    {
      id: 6,
      name: "Purple Orchids",
      price: "₹80/piece",
      image: "/images/ChatGPT Image Jun 17, 2025, 11_51_00 AM.png",
      description: "Exotic purple orchids for luxury arrangements"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pink-50 to-orange-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <Link to="/" className="inline-flex items-center space-x-2 text-pink-600 hover:text-pink-700 transition-colors mb-4">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
              Our
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-orange-500">
                {" "}Collection
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Fresh flowers sourced directly from K R Market, Bengaluru
            </p>
          </div>
        </div>
      </section>

      {/* Collection Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {flowers.map((flower) => (
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
                      <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-orange-500">
                        {flower.price}
                      </span>
                      <Button className="bg-gradient-to-r from-pink-600 to-pink-700 text-white hover:from-pink-700 hover:to-pink-800 transition-all duration-300">
                        Order Now
                      </Button>
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

export default Collection;
