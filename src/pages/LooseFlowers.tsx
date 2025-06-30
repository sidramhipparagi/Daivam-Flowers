
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
      price: "₹25/250g",
      image: "/images/Products/Chendu-loose.png",
      description: "Bright Chendu blooms ideal for pooja and festive decor"
    },
    {
      id: 2,
      name: "Gundu Mallige",
      price: "₹50/100g",
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
      name: "Rose-Orange",
      price: "₹30/250g",
      image: "/images/Products/Rose-Orange.png",
      description: "Fresh orange roses for graceful pooja and décor"
    },
    {
      id: 5,
      name: "Rose",
      price: "₹30/250g",
      image: "/images/Products/Rose-loose.png",
      description: "Classic red roses for devotion and celebration"
    },
    {
      id: 6,
      name: "Rose Yellow",
      price: "₹30/250g",
      image: "/images/Products/Rose-yellow.png",
      description: "Cheerful yellow roses for puja and warm décor"
    },
    {
      id: 7,
      name: "Sevanthige",
      price: "₹80/250g",
      image: "/images/Products/Sevanthige.png",
      description: "Traditional Sevanthige for temples and festivals"
    },
    {
      id: 8,
      name: "Sevanthige-White",
      price: "₹80/250g",
      image: "/images/Products/Sevanthige-white.png",
      description: "Pure white Sevanthige for peaceful worship"
    },
    {
      id: 9,
      name: "Sooji Mallige",
      price: "₹50/100g",
      image: "/images/Products/Sooji-mallige.png",
      description: "Soft Sooji Mallige ideal for hair and pooja"
    },
    {
      id: 10,
      name: "Lotus",
      price: "₹15/one",
      image: "/images/Products/Lotus.png",
      description: "Sacred lotus for divine rituals and serenity"
    },
    {
      id: 11,
      name: "Ekke Hoovu",
      price: "₹50",
      image: "/images/Products/ekke.png",
      description: "Beautiful Ekke flowers for pooja and décor"
    },
    {
      id: 12,
      name: "Chendu Yellow",
      price: "₹25/250g",
      image: "/images/Products/Chendu-yellow.png",
      description: "Sunny yellow Chendu for vibrant rituals"
    },
    {
      id: 13,
      name: "Sevanthige Mariegold",
      price: "₹70/250g",
      image: "/images/Products/Sevanthige-mariegold.png",
      description: "Marigold Sevanthige for pooja and festive decor"
    },
    {
      id: 14,
      name: "Kadu Mallige",
      price: "₹250/packet",
      image: "/images/Products/Kadu-Mallige.png",
      description: "Elegant Kadu Mallige used in traditional garlands"
    },
    {
      id: 15,
      name: "Kanagale",
      price: "₹250/packet",
      image: "/images/Products/Kanagale.png",
      description: "Traditional Kanagale flowers for devotion and décor"
    },
    {
      id: 16,
      name: "Chocolate Flowers",
      price: "₹70/250g",
      image: "/images/Products/Chocolate-flower.png",
      description: "Unique chocolate-toned blooms for stylish décor"
    },
    {
      id: 17,
      name: "Purple Flowers",
      price: "₹80/250g",
      image: "/images/Products/Purple-flowers.png",
      description: "Bold purple blossoms to enhance pooja and beauty"
    },
    {
      id: 18,
      name: "Sugandaraja Hoovu",
      price: "₹25/250g",
      image: "/images/Products/sugandaraja.png",
      description: "Graceful Sugandaraja blooms for beautiful garlands"
    },
    {
      id: 20,
      name: "Rose Lightyellow",
      price: "₹25/250g",
      image: "/images/Products/rose-lightyellow.png",
      description: "Soft light-yellow rose garland for graceful celebrations."
    }
    
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
                      <a 
                        href={`https://wa.me/919742141080?text=Hi, I would like to order ${encodeURIComponent(flower.name)} - ${encodeURIComponent(flower.price)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button className="bg-gradient-to-r from-pink-600 to-pink-700 text-white hover:from-pink-700 hover:to-pink-800 transition-all duration-300">
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

export default LooseFlowers;
