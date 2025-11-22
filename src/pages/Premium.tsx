import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { ArrowLeft, MessageCircle, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getProductsByCategory } from '../data/products';

const Premium = () => {
  const premiumFlowers = getProductsByCategory('premium');

  const formatWhatsAppMessage = (productName: string) => {
    return `Hi, I would like to enquire about ${productName}. Please provide details on availability, pricing, and customization options.`;
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-brand-background py-16">
        <div className="container mx-auto px-12">
          <div className="text-center space-y-4">
            <Link to="/" className="inline-flex items-center space-x-2 text-brand-primary hover:text-brand-accent transition-colors mb-4">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
              Premium
              <span className="text-brand-primary">
                {" "}Collection
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Exclusive premium flowers and custom arrangements for your special occasions
            </p>
            <div className="bg-brand-primary/10 p-4 rounded-lg max-w-2xl mx-auto border border-brand-primary/20">
              <p className="text-brand-primary font-medium">
                🌟 All premium products are available on enquiry basis with custom pricing and personalization options
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {premiumFlowers.map((flower) => (
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
                      <div className="absolute top-4 right-4">
                        <span className="bg-brand-accent text-brand-foreground px-3 py-1 rounded-full text-xs font-semibold">
                          PREMIUM
                        </span>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800">{flower.name}</h3>
                        <p className="text-gray-600 text-sm mt-1">{flower.description}</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex flex-col">
                          <span className="text-lg font-bold text-brand-primary">
                            Contact for Quote
                          </span>
                          <span className="text-sm text-gray-500">
                            Custom pricing available
                          </span>
                        </div>
                        <div className="flex space-x-2">
                          <a 
                            href={`https://wa.me/919742141080?text=${encodeURIComponent(formatWhatsAppMessage(flower.name))}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="p-2 bg-green-600 hover:bg-green-700 text-white rounded-full transition-colors"
                          >
                            <MessageCircle className="w-4 h-4" />
                          </a>
                          <a 
                            href="tel:+919742141080"
                            onClick={(e) => e.stopPropagation()}
                            className="p-2 bg-brand-accent hover:bg-brand-primary text-white rounded-full transition-colors"
                          >
                            <Phone className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-brand-background">
        <div className="container mx-auto px-12">
          <Card className="max-w-2xl mx-auto border-2 border-brand-primary/20 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Ready to Create Something Special?</h2>
              <p className="text-gray-600 mb-6">
                Our premium collection offers custom designs and exclusive arrangements. 
                Contact us to discuss your requirements and get a personalized quote.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://wa.me/919742141080?text=Hi, I'm interested in your premium flower collection. Please provide more details."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <button 
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold text-lg text-white transition-all duration-300 transform hover:scale-105 shadow-lg w-full sm:w-auto"
                    style={{ backgroundColor: '#25D366' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#FE003D'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
                  >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp Enquiry
                  </button>
                </a>
                <a href="tel:+919742141080" className="inline-block">
                  <button 
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold text-lg text-white transition-all duration-300 transform hover:scale-105 shadow-lg w-full sm:w-auto"
                    style={{ backgroundColor: '#770737' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#FE003D'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
                  >
                    <Phone className="w-5 h-5" />
                    Call Now
                  </button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
};

export default Premium;