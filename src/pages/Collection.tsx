import React from 'react';

import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import Categories from '../components/Categories';

const Collection = () => {
  // Filter out duplicate products by name, keeping the first occurrence
  const uniqueProducts = products.filter((product, index, self) => 
    index === self.findIndex(p => p.name === product.name)
  );

  return (
    <>
      {/* Notification Message */}
      <div className="bg-brand-background border-l-4 border-brand-accent p-4 text-center">
        <p className="text-base font-medium text-gray-700">
          We are currently accepting orders via{' '}
          <span className="text-brand-primary font-semibold">
            WhatsApp and phone calls
          </span>
          . Sorry for the inconvenience.
        </p>
      </div>
      
      {/* Back to Home Link */}
      <section className="relative bg-brand-background py-6">
        <div className="container mx-auto px-12">
          <div className="text-center">
            <Link to="/" className="inline-flex items-center space-x-2 text-brand-primary hover:text-brand-accent transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <Categories />

      {/* Collection Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {uniqueProducts.map((flower) => (
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
                        <Button 
                          className="btn-brand-hover"
                          style={{ backgroundColor: '#770737' }}
                        >
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

export default Collection;
