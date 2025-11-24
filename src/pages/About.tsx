
import React from 'react';

import { MapPin, Star, Clock, Users, Award, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const About = () => {
  return (
    <>
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pink-50 to-orange-50 py-16">
        <div className="container mx-auto px-12">
          <div className="text-center space-y-4">
            <Link to="/" className="inline-flex items-center space-x-2 text-pink-600 hover:text-pink-700 transition-colors mb-4">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-brand-primary">
              About
              <span className="text-brand-accent" style={{ fontWeight: 600 }}> Daivam Flowers</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Your trusted partner for fresh, beautiful flowers from the heart of K R Market, Bengaluru
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-800">Our Story</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Daivam Flowers has been a cornerstone of Bengaluru's flower trade, rooted deeply in the vibrant traditions of K R Market. Our journey began with a simple vision: to bring the freshest, most beautiful flowers directly from the market to your doorstep.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                For years, we have been serving families across Bengaluru, understanding that flowers are not just decorations—they are expressions of love, celebration, and tradition. Every bloom we deliver carries the essence of our commitment to quality and freshness.
              </p>
            </div>
            
            <div className="relative overflow-hidden">
              <img 
                src="./images/about.png" 
                alt="Daivam Flowers Story" 
                className="w-full"
              />
              <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'linear-gradient(to right, white 0%, transparent 10%, transparent 90%, white 100%), linear-gradient(to bottom, white 0%, transparent 10%, transparent 90%, white 100%)'
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-orange-50">
        <div className="container mx-auto px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              What drives us every day to deliver the best flower experience
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div 
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              onMouseEnter={(e) => {
                const iconContainer = e.currentTarget.querySelector('.icon-container') as HTMLElement;
                if (iconContainer) {
                  iconContainer.style.background = '#770737';
                }
              }}
              onMouseLeave={(e) => {
                const iconContainer = e.currentTarget.querySelector('.icon-container') as HTMLElement;
                if (iconContainer) {
                  iconContainer.style.background = 'linear-gradient(to bottom right, rgb(255, 228, 230), rgb(255, 237, 213))';
                }
              }}
            >
              <div 
                className="icon-container w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-all duration-300"
                style={{ 
                  background: 'linear-gradient(to bottom right, rgb(255, 228, 230), rgb(255, 237, 213))'
                }}
              >
                <Star className="w-8 h-8 transition-colors duration-300" style={{ color: '#FE003D' }} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Premium Quality</h3>
              <p className="text-gray-600">
                We hand-pick only the freshest flowers from K R Market, ensuring every bloom meets our high standards of beauty and longevity.
              </p>
            </div>
            
            <div 
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              onMouseEnter={(e) => {
                const iconContainer = e.currentTarget.querySelector('.icon-container') as HTMLElement;
                if (iconContainer) {
                  iconContainer.style.background = '#770737';
                }
              }}
              onMouseLeave={(e) => {
                const iconContainer = e.currentTarget.querySelector('.icon-container') as HTMLElement;
                if (iconContainer) {
                  iconContainer.style.background = 'linear-gradient(to bottom right, rgb(255, 228, 230), rgb(255, 237, 213))';
                }
              }}
            >
              <div 
                className="icon-container w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-all duration-300"
                style={{ 
                  background: 'linear-gradient(to bottom right, rgb(255, 228, 230), rgb(255, 237, 213))'
                }}
              >
                <Clock className="w-8 h-8 transition-colors duration-300" style={{ color: '#FE003D' }} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Timely Delivery</h3>
              <p className="text-gray-600">
                We understand the importance of timing. Our same-day delivery service ensures your flowers arrive fresh and on time.
              </p>
            </div>
            
            <div 
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              onMouseEnter={(e) => {
                const iconContainer = e.currentTarget.querySelector('.icon-container') as HTMLElement;
                if (iconContainer) {
                  iconContainer.style.background = '#770737';
                }
              }}
              onMouseLeave={(e) => {
                const iconContainer = e.currentTarget.querySelector('.icon-container') as HTMLElement;
                if (iconContainer) {
                  iconContainer.style.background = 'linear-gradient(to bottom right, rgb(255, 228, 230), rgb(255, 237, 213))';
                }
              }}
            >
              <div 
                className="icon-container w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-all duration-300"
                style={{ 
                  background: 'linear-gradient(to bottom right, rgb(255, 228, 230), rgb(255, 237, 213))'
                }}
              >
                <Heart className="w-8 h-8 transition-colors duration-300" style={{ color: '#FE003D' }} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Personal Touch</h3>
              <p className="text-gray-600">
                Every arrangement is crafted with care and attention to detail, making each delivery a special moment for our customers.
              </p>
            </div>
            
            <div 
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              onMouseEnter={(e) => {
                const iconContainer = e.currentTarget.querySelector('.icon-container') as HTMLElement;
                if (iconContainer) {
                  iconContainer.style.background = '#770737';
                }
              }}
              onMouseLeave={(e) => {
                const iconContainer = e.currentTarget.querySelector('.icon-container') as HTMLElement;
                if (iconContainer) {
                  iconContainer.style.background = 'linear-gradient(to bottom right, rgb(255, 228, 230), rgb(255, 237, 213))';
                }
              }}
            >
              <div 
                className="icon-container w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-all duration-300"
                style={{ 
                  background: 'linear-gradient(to bottom right, rgb(255, 228, 230), rgb(255, 237, 213))'
                }}
              >
                <Users className="w-8 h-8 transition-colors duration-300" style={{ color: '#FE003D' }} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Community Focus</h3>
              <p className="text-gray-600">
                We're proud to be part of the Bengaluru community, supporting local traditions and celebrations with our beautiful flowers.
              </p>
            </div>
            
            <div 
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              onMouseEnter={(e) => {
                const iconContainer = e.currentTarget.querySelector('.icon-container') as HTMLElement;
                if (iconContainer) {
                  iconContainer.style.background = '#770737';
                }
              }}
              onMouseLeave={(e) => {
                const iconContainer = e.currentTarget.querySelector('.icon-container') as HTMLElement;
                if (iconContainer) {
                  iconContainer.style.background = 'linear-gradient(to bottom right, rgb(255, 228, 230), rgb(255, 237, 213))';
                }
              }}
            >
              <div 
                className="icon-container w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-all duration-300"
                style={{ 
                  background: 'linear-gradient(to bottom right, rgb(255, 228, 230), rgb(255, 237, 213))'
                }}
              >
                <Award className="w-8 h-8 transition-colors duration-300" style={{ color: '#FE003D' }} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Trusted Service</h3>
              <p className="text-gray-600">
                Years of experience have taught us what our customers value most: reliability, quality, and genuine care in every interaction.
              </p>
            </div>
            
            <div 
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              onMouseEnter={(e) => {
                const iconContainer = e.currentTarget.querySelector('.icon-container') as HTMLElement;
                if (iconContainer) {
                  iconContainer.style.background = '#770737';
                }
              }}
              onMouseLeave={(e) => {
                const iconContainer = e.currentTarget.querySelector('.icon-container') as HTMLElement;
                if (iconContainer) {
                  iconContainer.style.background = 'linear-gradient(to bottom right, rgb(255, 228, 230), rgb(255, 237, 213))';
                }
              }}
            >
              <div 
                className="icon-container w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-all duration-300"
                style={{ 
                  background: 'linear-gradient(to bottom right, rgb(255, 228, 230), rgb(255, 237, 213))'
                }}
              >
                <MapPin className="w-8 h-8 transition-colors duration-300" style={{ color: '#FE003D' }} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Local Expertise</h3>
              <p className="text-gray-600">
                Our deep roots in K R Market give us unmatched access to the best flowers and the knowledge to select them perfectly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Experience Fresh Flowers?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let us bring the beauty and fragrance of K R Market's finest flowers to your special moments.
          </p>
          <Link 
            to="/collection" 
            className="inline-block px-8 py-4 rounded-lg font-semibold text-lg text-white transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
            style={{ backgroundColor: '#770737' }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#FE003D'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
          >
            View Our Collection
          </Link>
        </div>
      </section>
    </>
  );
};

export default About;
