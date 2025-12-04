
import React, { useState } from 'react';
import { Phone, Mail, Clock, Instagram, Facebook, MessageCircle, ArrowUpRight } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-10 md:py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-12">
        {/* Notification Message */}
        <div className="mb-6 md:mb-8 text-center">
          <p className="text-sm md:text-base font-medium text-white">
            We are currently accepting orders via{' '}
            <a
              href="https://wa.me/919742141080?text=Hi, I would like to order flowers..."
              target="_blank"
              rel="noopener noreferrer"
              className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-orange-300 font-semibold hover:brightness-110 transition"
            >
              WhatsApp and phone calls only
            </a>
            . Sorry for the inconvenience.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-12">
          <div className="space-y-4 md:space-y-8">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-2 md:mb-4">Get in Touch</h3>
            </div>
            
            <div className="space-y-3 md:space-y-6">
              <div className="flex items-center space-x-3 md:space-x-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#770737' }}>
                  <Phone className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-base md:text-lg">Call Us</h4>
                  <a 
                    href="tel:+919742141080"
                    className="inline-flex items-center gap-2 text-white hover:text-gray-200 transition-colors"
                  >
                    <span>+91 97421 41080</span>
                    <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5" />
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 md:space-x-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-base md:text-lg">WhatsApp</h4>
                  <a 
                    href="https://wa.me/919742141080?text=Hi, I would like to place an order for flowers"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-white hover:text-gray-200 transition-colors"
                  >
                    <span>+91 97421 41080</span>
                    <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5" />
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 md:space-x-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#770737' }}>
                  <Mail className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-base md:text-lg">Email Us</h4>
                  <a 
                    href="mailto:info@daivam.in"
                    className="inline-flex items-center gap-2 text-white hover:text-gray-200 transition-colors"
                  >
                    <span>info@daivam.in</span>
                    <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-4 pt-3 md:pt-6">
              <a href="https://www.instagram.com/daivam_in/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-[#770737]">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61577235691618" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-[#770737]">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 md:mt-16 pt-6 md:pt-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-3 md:mb-4">
            <img src="/logo-red.png" alt="Daivam Flowers Logo" className="h-10 md:h-12" />
          </div>
          <p className="text-gray-500 text-sm mt-2">
            © 2025 Daivam Flowers. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
