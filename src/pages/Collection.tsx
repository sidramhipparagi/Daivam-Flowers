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
      name: "Chocolate Flower Maale",
      price: "₹30/mola",
      image: "/images/Chocolate-maale.jpg",
      description: "Fresh maale perfect for special occasions"
    },
    {
      id: 2,
      name: "Chendu Flowers (Orange)",
      price: "₹50/500g",
      image: "/images/Products/Chendu-loose.png",
      description: "Pure white lilies for elegant arrangements"
    },
    {
      id: 3,
      name: "Lotus",
      price: "₹20/1 piece",
      image: "/images/Products/Lotus.png",
      description: "Bright yellow marigolds for festivals"
    },
    {
      id: 4,
      name: "Mallige Dindu",
      price: "₹60/1 piece",
      image: "/images/Products/Mallige-Dindu.png",
      description: "Soft pink carnations for gentle occasions"
    },
    {
      id: 5,
      name: "Chendu Orange Maale",
      price: "₹35/mola",
      image: "/images/Products/Chendu-orange-maale.png",
      description: "Vibrant orange gerberas for cheerful moments"
    },
    {
      id: 6,
      name: "Sevanthige Rose Maale",
      price: "₹50/mola",
      image: "/images/Products/classic.png",
      description: "Vibrant orange gerberas for cheerful moments"
    },
    {
      id: 7,
      name: "Ekke Hoovu",
      price: "₹50",
      image: "/images/Products/ekke.png",
      description: "Exotic purple orchids for luxury arrangements"
    },
    {
      id: 8,
      name: "Sevanthige-White Rose Maale",
      price: "₹50/mola",
      image: "/images/Products/classic-white.png",
      description: "Vibrant orange gerberas for cheerful moments"
    },
    {
      id: 9,
      name: "Sevanthige Rose Maale(no paneer soppu)",
      price: "₹50/mola",
      image: "/images/Products/classic-nopaneer.png",
      description: "Vibrant orange gerberas for cheerful moments"
    },
    {
      id: 10,
      name: "Chendu-Yellow maale",
      price: "₹40/mola",
      image: "/images/Products/Chendu-yellow-maale.png",
      description: "Vibrant orange gerberas for cheerful moments"
    },
    {
      id: 11,
      name: "Chendu Yellow",
      price: "₹40/500g",
      image: "/images/Products/Chendu-yellow.png",
      description: "Vibrant orange gerberas for cheerful moments"
    },
    {
      id: 12,
      name: "Gundu Mallige",
      price: "₹40/100g",
      image: "/images/Products/Gundu-mallige.png",
      description: "Vibrant orange gerberas for cheerful moments"
    },
    {
      id: 13,
      name: "Kanagale Maale",
      price: "₹30/mola",
      image: "/images/Products/kanagale-maale.png",
      description: "Vibrant orange gerberas for cheerful moments"
    },
    {
      id: 14,
      name: "Kanakambara Hoovu",
      price: "₹40/100g",
      image: "/images/Products/Kanakambara-loose.png",
      description: "Vibrant orange gerberas for cheerful moments"
    },
    {
      id: 15,
      name: "Mallige Maale",
      price: "₹50/mola",
      image: "/images/Products/Mallige-maale.png",
      description: "Vibrant orange gerberas for cheerful moments"
    },
    {
      id: 16,
      name: "Mallige Maale(no paneer soppu)",
      price: "₹50/mola",
      image: "/images/Products/Mallige-maale-nopaneer.png",
      description: "Vibrant orange gerberas for cheerful moments"
    },
    {
      id: 17,
      name: "Mixed Flowers Maale",
      price: "₹50/mola",
      image: "/images/Products/Mixed-flowers-maale.png",
      description: "Vibrant orange gerberas for cheerful moments"
    },
    {
      id: 18,
      name: "Rose-Orange",
      price: "₹60/500g",
      image: "/images/Products/Rose-Orange.png",
      description: "Vibrant orange gerberas for cheerful moments"
    },
    {
      id: 19,
      name: "Rose",
      price: "₹60/500g",
      image: "/images/Products/Rose-loose.png",
      description: "Vibrant orange gerberas for cheerful moments"
    },
    {
      id: 20,
      name: "Rose Maale",
      price: "₹50/mola",
      image: "/images/Products/Rose-maale.png",
      description: "Vibrant orange gerberas for cheerful moments"
    },
    {
      id: 21,
      name: "Rose Yellow",
      price: "₹60/500g",
      image: "/images/Products/Rose-yellow.png",
      description: "Vibrant orange gerberas for cheerful moments"
    },
    {
      id: 22,
      name: "Sevanthige",
      price: "₹80/250g",
      image: "/images/Products/Sevanthige.png",
      description: "Vibrant orange gerberas for cheerful moments"
    },
    {
      id: 23,
      name: "Sevanthige-White",
      price: "₹80/250g",
      image: "/images/Products/Sevanthige-white.png",
      description: "Vibrant orange gerberas for cheerful moments"
    },
    {
      id: 24,
      name: "Sevanthige Mariegold",
      price: "₹70/250g",
      image: "/images/Products/Sevanthige-mariegold.png",
      description: "Vibrant orange gerberas for cheerful moments"
    },
    {
      id: 25,
      name: "Sooji Mallige",
      price: "₹80/250g",
      image: "/images/Products/Sooji-mallige.png",
      description: "Vibrant orange gerberas for cheerful moments"
    },
    {
      id: 26,
      name: "Kadu Mallige",
      price: "₹300/packet",
      image: "/images/Products/Kadu-Mallige.png",
      description: "Vibrant orange gerberas for cheerful moments"
    },
    {
      id: 27,
      name: "Kanagale",
      price: "₹300/packet",
      image: "/images/Products/Kanagale.png",
      description: "Vibrant orange gerberas for cheerful moments"
    },
    {
      id: 28,
      name: "Kanakambara Maale",
      price: "₹50/mola",
      image: "/images/Products/Kanakambara-maale.png",
      description: "Vibrant orange gerberas for cheerful moments"
    },
    {
      id: 29,
      name: "Sevanthige Yellow maale",
      price: "₹120/maru",
      image: "/images/Products/sevanthige-yellow-maale.png",
      description: "Vibrant orange gerberas for cheerful moments"
    },
    {
      id: 30,
      name: "Chocolate Flowers",
      price: "₹60/250gm",
      image: "/images/Products/Chocolate-flower.png",
      description: "Vibrant orange gerberas for cheerful moments"
    },
    {
      id: 31,
      name: "Purple Flowers",
      price: "₹60/250g",
      image: "/images/Products/Purple-flowers.png",
      description: "Vibrant orange gerberas for cheerful moments"
    },
    {
      id: 32,
      name: "Purple White Flowers maale",
      price: "₹60/250g",
      image: "/images/Products/purple-white-maale.png",
      description: "Vibrant orange gerberas for cheerful moments"
    },
    {
      id: 33,
      name: "Rose Lightyellow",
      price: "₹60/250g",
      image: "/images/Products/rose-lightyellow.png",
      description: "Vibrant orange gerberas for cheerful moments"
    },
    {
      id: 34,
      name: "Sevanthige White maale",
      price: "₹120/maru",
      image: "/images/Products/sevanthige-white-maale.png",
      description: "Vibrant orange gerberas for cheerful moments"
    },
    {
      id: 35,
      name: "Sugandaraja Hoovu",
      price: "₹50/500g",
      image: "/images/Products/sugandaraja.png",
      description: "Vibrant orange gerberas for cheerful moments"
    },
    {
      id: 36,
      name: "Purple Flowers Maale",
      price: "₹100/maru",
      image: "/images/Products/Purple-maale.png",
      description: "Vibrant orange gerberas for cheerful moments"
    },
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
                      <Link 
                        to={`/order?item=${encodeURIComponent(flower.name)}&price=${encodeURIComponent(flower.price)}`}
                      >
                        <Button className="bg-gradient-to-r from-pink-600 to-pink-700 text-white hover:from-pink-700 hover:to-pink-800 transition-all duration-300">
                          Request Order
                        </Button>
                      </Link>
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
