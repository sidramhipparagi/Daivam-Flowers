
import React from 'react';

import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getProductsByCategory } from '../data/products';

const HumanUse = () => {
  const humanUseFlowers = getProductsByCategory('human-use');

  return (
    <>
      
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
              <Link key={flower.id} to={`/product/${flower.id}`}>
                <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden cursor-pointer">
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
                        <div className="flex flex-col">
                          <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
                            {flower.salePrice || flower.price}
                          </span>
                          {flower.salePrice && (
                            <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-xs font-semibold w-fit">
                              SALE
                            </span>
                          )}
                        </div>
                        <Button className="bg-gradient-to-r from-purple-600 to-purple-700 text-white hover:from-purple-700 hover:to-purple-800 transition-all duration-300">
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
    </>
  );
};

export default HumanUse;
