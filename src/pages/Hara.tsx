
import React from 'react';
import Header from '../components/Header';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getProductsByCategory } from '../data/products';

const Hara = () => {
  const haraFlowers = getProductsByCategory('hara');

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
              <Link key={flower.id} to={`/product/${flower.id}`}>
                <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden cursor-pointer">
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
                        <Button className="bg-gradient-to-r from-green-600 to-green-700 text-white hover:from-green-700 hover:to-green-800 transition-all duration-300">
                          Shop Now
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hara;
