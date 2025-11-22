
import React from 'react';

import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getProductsByCategory } from '../data/products';

const LooseFlowers = () => {
  const looseFlowers = getProductsByCategory('loose-flowers');

  return (
    <>
      
      <section className="relative bg-brand-background py-16">
        <div className="container mx-auto px-12">
          <div className="text-center space-y-4">
            <Link to="/" className="inline-flex items-center space-x-2 text-brand-primary hover:text-brand-accent transition-colors mb-4">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
              Loose
              <span className="text-brand-primary">
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
        <div className="container mx-auto px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {looseFlowers.map((flower) => (
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
                          <span className="text-2xl font-bold text-brand-primary">
                            {flower.salePrice || flower.price}
                          </span>
                          {flower.salePrice && (
                            <span className="bg-brand-accent/10 text-brand-accent px-2 py-1 rounded-full text-xs font-semibold w-fit">
                              SALE
                            </span>
                          )}
                        </div>
                        <button 
                          className="px-6 py-3 rounded-lg font-semibold text-base text-white transition-all duration-300 transform hover:scale-105 shadow-lg"
                          style={{ backgroundColor: '#770737' }}
                          onMouseEnter={(e) => e.currentTarget.style.color = '#FE003D'}
                          onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
                        >
                          Shop Now
                        </button>
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

export default LooseFlowers;
