
import React, { useState } from 'react';
import { Phone, Mail, Clock, Instagram, Facebook, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-12">
        {/* Notification Message */}
        <div className="bg-white/10 backdrop-blur-md text-white p-4 rounded-lg mb-8 text-center border border-white/20">
          <p className="text-lg font-semibold">
            We are currently accepting orders via WhatsApp and phone calls. Sorry for the inconvenience.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-4xl font-bold mb-4">Get in Touch</h3>
              <p className="text-xl text-gray-300">
                Ready to brighten your day with fresh flowers? Contact us for orders and inquiries.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#770737' }}>
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Call Us</h4>
                  <a 
                    href="tel:+919742141080"
                    className="transition-colors hover:opacity-80"
                    style={{ color: '#FE003D' }}
                  >
                    +91 97421 41080
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">WhatsApp</h4>
                  <a 
                    href="https://wa.me/919742141080?text=Hi, I would like to place an order for flowers"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-300 hover:text-green-200 transition-colors"
                  >
                    +91 97421 41080
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#770737' }}>
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Email Us</h4>
                  <a 
                    href="mailto:info@daivam.in"
                    className="transition-colors hover:opacity-80"
                    style={{ color: '#FE003D' }}
                  >
                    info@daivam.in
                  </a>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-4 pt-6">
              <a href="https://www.instagram.com/daivam_in/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-[#770737]">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61577235691618" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-[#770737]">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="bg-gray-800 rounded-2xl p-8">
            <h4 className="text-2xl font-bold mb-6">Contact Information</h4>
            <div className="space-y-4">
              <p className="text-gray-300">
                We deliver fresh flowers directly from K R Market, Bengaluru to your doorstep.
              </p>
              <p className="text-gray-300">
                For orders and inquiries, please contact us via WhatsApp or phone call.
              </p>
              <p className="text-gray-300">
                We strive to provide the freshest and most beautiful flowers for all your occasions.
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-16 pt-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <img src="/logo-red.png" alt="Daivam Flowers Logo" className="h-12" />
          </div>
          <p className="text-gray-400">
            Fresh flowers delivered with love from K R Market, Bengaluru
          </p>
          <p className="text-gray-500 text-sm mt-2">
            © 2025 Daivam Flowers. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
