import React from 'react';
import Header from '../components/Header';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hara = () => {
  const haraFlowers = [
    {
      id: 1,
      name: "Kamala Hara",
      price: "₹400/one",
      image: "/images/hara/Kamala-hara-one.png",
      description: "Lotus Hara for Wedding or Engagements"
    },
    {
      id: 2,
      name: "Sugandaraja Hara",
      price: "₹100/one",
      image: "/images/hara/Sugandaraja-hara.png",
      description: "Traditional Sugandaraja Hara for worship"
    },
    {
      id: 3,
      name: "Mallige Hara",
      price: "₹300/one",
      image: "/images/hara/Mallige-Rose-hara.png",
      description: "Mallige Hara for Wedding or Engagements"
    },
    {
      id: 4,
      name: "Mallige Rose Hara",
      price: "₹400/one",
      image: "/images/hara/mallige-2rose.png",
      description: "Mallige Hara for Wedding or Engagements"
    },
    {
      id: 5,
      name: "Kamala Hara (three lotus on each side)",
      price: "₹500/one",
      image: "/images/hara/Kamala-hara.png",
      description: "Lotus Hara for Wedding or Engagements"
    },
    {
      id: 6,
      name: "Mallige Rose Hara (with yellow and red roses)",
      price: "₹400/one",
      image: "/images/hara/mallige-redyellow-rose.png",
      description: "Mallige Rose Hara for Wedding or Engagements"
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="relative bg-gradient-to-br from-green-50 to-orange-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <Link to="/" className="inline-flex items-center space-x-2 text-green-600 hover:text-green-700 transition-colors mb-4">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
              Hara
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-orange-500">
                {" "}Collection
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Sacred and ceremonial flowers for worship and rituals
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {haraFlowers.map((flower) => (
              <Card key={flower.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                <div className="relative overflow-hidden">
                  <div className="relative w-full" style={{ aspectRatio: '2/3' }}>
                    <img 
                      src={flower.image} 
                      alt={flower.name}
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">{flower.name}</h3>
                      <p className="text-gray-600 text-sm mt-1">{flower.description}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-orange-500">
                        {flower.price}
                      </span>
                      <Link 
                        to={`/order?item=${encodeURIComponent(flower.name)}&price=${encodeURIComponent(flower.price)}`}
                      >
                        <Button className="bg-gradient-to-r from-green-600 to-green-700 text-white hover:from-green-700 hover:to-green-800 transition-all duration-300">
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

export default Hara;
