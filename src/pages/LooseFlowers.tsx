
import React from 'react';
import Header from '../components/Header';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const LooseFlowers = () => {
  const looseFlowers = [
    {
      id: 1,
      name: "Chendu Flowers (Orange)",
      price: "₹50/500g",
      image: "/images/Products/Chendu-loose.png",
      description: "Pure white chendu flowers for elegant arrangements"
    },
    {
      id: 2,
      name: "Gundu Mallige",
      price: "₹40/100g",
      image: "/images/Products/Gundu-mallige.png",
      description: "Fragrant gundu mallige flowers"
    },
    {
      id: 3,
      name: "Kanakambara Hoovu",
      price: "₹40/100g",
      image: "/images/Products/Kanakambara-loose.png",
      description: "Traditional kanakambara flowers"
    },
    {
      id: 4,
      name: "Rose-Orange",
      price: "₹60/500g",
      image: "/images/Products/Rose-Orange.png",
      description: "Fresh orange roses"
    },
    {
      id: 5,
      name: "Rose",
      price: "₹60/500g",
      image: "/images/Products/Rose-loose.png",
      description: "Classic red roses"
    },
    {
      id: 6,
      name: "Rose Yellow",
      price: "₹60/500g",
      image: "/images/Products/Rose-yellow.png",
      description: "Bright yellow roses"
    },
    {
      id: 7,
      name: "Sevanthige",
      price: "₹80/250g",
      image: "/images/Products/Sevanthige.png",
      description: "Premium sevanthige flowers"
    },
    {
      id: 8,
      name: "Sevanthige-White",
      price: "₹80/250g",
      image: "/images/Products/Sevanthige-white.png",
      description: "White sevanthige flowers"
    },
    {
      id: 9,
      name: "Sooji Mallige",
      price: "₹80/250g",
      image: "/images/Products/Sooji-mallige.png",
      description: "Delicate sooji mallige flowers"
    },
    {
      id: 10,
      name: "Lotus",
      price: "₹20/one",
      image: "/images/Products/Lotus.png",
      description: "Yellow sevanthige flowers"
    },
    {
      id: 11,
      name: "Ekke Hoovu",
      price: "₹50",
      image: "/images/Products/ekke.png",
      description: "Exotic purple orchids for luxury arrangements"
    },
    {
      id: 12,
      name: "Chendu Yellow",
      price: "₹40/500g",
      image: "/images/Products/Chendu-yellow.png",
      description: "Vibrant orange gerberas for cheerful moments"
    },
    {
      id: 13,
      name: "Sevanthige Mariegold",
      price: "₹70/250g",
      image: "/images/Products/Sevanthige-mariegold.png",
      description: "Vibrant orange gerberas for cheerful moments"
    },
    {
      id: 14,
      name: "Kadu Mallige",
      price: "₹300/packet",
      image: "/images/Products/Kadu-Mallige.png",
      description: "Vibrant orange gerberas for cheerful moments"
    },
    {
      id: 15,
      name: "Kanagale",
      price: "₹300/packet",
      image: "/images/Products/Kanagale.png",
      description: "Vibrant orange gerberas for cheerful moments"
    },
    {
      id: 16,
      name: "Chocolate Flowers",
      price: "₹60/250gm",
      image: "/images/Products/Chocolate-flower.png",
      description: "Vibrant orange gerberas for cheerful moments"
    },
    {
      id: 17,
      name: "Purple Flowers",
      price: "₹60/250g",
      image: "/images/Products/Purple-flowers.png",
      description: "Vibrant orange gerberas for cheerful moments"
    },
    {
      id: 18,
      name: "Sugandaraja Hoovu",
      price: "₹50/500g",
      image: "/images/Products/sugandaraja.png",
      description: "Vibrant orange gerberas for cheerful moments"
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="relative bg-gradient-to-br from-pink-50 to-orange-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <Link to="/" className="inline-flex items-center space-x-2 text-pink-600 hover:text-pink-700 transition-colors mb-4">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
              Loose
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-orange-500">
                {" "}Flowers
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Fresh loose flowers for all your decoration needs
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {looseFlowers.map((flower) => (
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

export default LooseFlowers;
