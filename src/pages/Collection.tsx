
import React from 'react';
import Header from '../components/Header';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

const Collection = () => {
  // Filter out duplicate products by name, keeping the first occurrence
  const uniqueProducts = products.filter((product, index, self) => 
    index === self.findIndex(p => p.name === product.name)
  );

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Notification Message */}
      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black p-4 text-center">
        <p className="text-lg font-semibold">
          We are currently accepting orders via WhatsApp and phone calls. Sorry for the inconvenience.
        </p>
      </div>
      
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
                          {flower.salePrice ? (
                            <div className="flex items-center space-x-2">
                              <span className="text-lg text-gray-400 line-through">
                                {flower.price}
                              </span>
                              <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-orange-500">
                                {flower.salePrice}
                              </span>
                            </div>
                          ) : (
                            <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-orange-500">
                              {flower.price}
                            </span>
                          )}
                          {flower.salePrice && (
                            <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-xs font-semibold w-fit">
                              SALE
                            </span>
                          )}
                        </div>
                        <Button className="bg-gradient-to-r from-pink-600 to-pink-700 text-white hover:from-pink-700 hover:to-pink-800 transition-all duration-300">
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

export default Collection;
