
import React from 'react';
import Header from '../components/Header';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Maale = () => {
  const maaleFlowers = [
    {
      id: 1,
      name: "Chocolate Flower Maale",
      price: "₹120/maaru",
      image: "/images/Chocolate-maale.jpg",
      description: "Trendy garland with earthy-toned flowers for stylish rituals"
    },
    {
      id: 2,
      name: "Chendu Orange Maale",
      price: "₹80/maaru",
      image: "/images/Products/Chendu-orange-maale.png",
      description: "Bright Chendu garland perfect for divine worship and events"
    },
    {
      id: 3,
      name: "Sevanthige Rose Maale",
      price: "₹130/maaru",
      image: "/images/Products/classic.png",
      description: "Elegant Sevanthige and rose blend for pooja and celebrations"
    },
    {
      id: 4,
      name: "Sevanthige-White Rose Maale",
      price: "₹130/maaru",
      image: "/images/Products/classic-white.png",
      description: "Soothing white rose and Sevanthige garland for graceful rituals"
    },
    {
      id: 5,
      name: "Sevanthige Rose Maale(without paneer soppu)",
      price: "₹130/maaru",
      image: "/images/Products/classic-nopaneer.png",
      description: "A clean floral mix for simple and pure offerings"
    },
    {
      id: 6,
      name: "Chendu-Yellow maale",
      price: "₹80/maaru",
      image: "/images/Products/Chendu-yellow-maale.png",
      description: "Vibrant yellow garland ideal for festivals and pooja décor"
    },
    {
      id: 7,
      name: "Kanagale Maale",
      price: "₹100/maaru",
      image: "/images/Products/kanagale-maale.png",
      description: "Traditional Kanagale strand used in temple offerings and ceremonies"
    },
    {
      id: 8,
      name: "Mallige Maale",
      price: "₹50/mola",
      image: "/images/Products/Mallige-maale.png",
      description: "Classic jasmine garland for devotion, bridal wear, and fragrance"
    },
    {
      id: 9,
      name: "Mallige Maale(without paneer soppu)",
      price: "₹50/mola",
      image: "/images/Products/Mallige-maale-nopaneer.png",
      description: "Pure jasmine garland, perfect for clean and elegant use"
    },
    {
      id: 10,
      name: "Mixed Flowers Maale",
      price: "₹120/maaru",
      image: "/images/Products/Mixed-flowers-maale.png",
      description: "Colorful garland of mixed blooms for festive and decorative charm"
    },
    {
      id: 11,
      name: "Rose Maale",
      price: "₹100/maaru",
      image: "/images/Products/Rose-maale.png",
      description: "Fragrant rose garland suited for weddings, pooja, and gifting"
    },
    {
      id: 12,
      name: "Kanakambara Maale",
      price: "₹50/mola",
      image: "/images/Products/Kanakambara-maale.png",
      description: "Radiant orange Kanakambara for hair adornment and religious use"
    },
    {
      id: 13,
      name: "Purple Flowers Maale",
      price: "₹120/maaru",
      image: "/images/Products/Purple-maale.png",
      description: "Bold purple garland for stylish decor and temple offerings"
    },
    {
      id: 14,
      name: "Sevanthige White maale",
      price: "₹130/maaru",
      image: "/images/Products/sevanthige-white-maale.png",
      description: "Peaceful white Sevanthige for serene rituals and pujas"
    },
    {
      id: 15,
      name: "Purple White Flowers maale",
      price: "₹120/maaru",
      image: "/images/Products/purple-white-maale.png",
      description: "Elegant dual-tone garland for modern decor and divine use"
    },
    {
      id: 19,
      name: "Sevanthige-Yellow Maale",
      price: "₹120/maaru",
      image: "/images/Products/sevanthige-yellow-maale.png",
      description: "Bright yellow chrysanthemum garland for vibrant occasions."
    },
    
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="relative bg-gradient-to-br from-orange-50 to-pink-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <Link to="/" className="inline-flex items-center space-x-2 text-orange-600 hover:text-orange-700 transition-colors mb-4">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
              Maale
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-pink-500">
                {" "}Collection
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Traditional flower garlands for all occasions
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {maaleFlowers.map((flower) => (
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
                      <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-pink-500">
                        {flower.price}
                      </span>
                      <a 
                        href={`https://wa.me/919742141080?text=Hi, I would like to order ${encodeURIComponent(flower.name)} - ${encodeURIComponent(flower.price)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button className="bg-gradient-to-r from-orange-600 to-orange-700 text-white hover:from-orange-700 hover:to-orange-800 transition-all duration-300">
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

export default Maale;
