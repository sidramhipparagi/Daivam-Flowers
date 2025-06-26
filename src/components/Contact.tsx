import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from 'lucide-react';
import { 
  OrderData, 
  generateSerialNumber, 
  getCurrentDateTime, 
  saveOrderToJSON 
} from '../lib/orderUtils';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    requirements: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.address) {
      setSubmitMessage('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage('');

    const { date, time } = getCurrentDateTime();
    const orderData: OrderData = {
      serialNumber: generateSerialNumber(),
      name: formData.name,
      phone: formData.phone,
      address: formData.address,
      requirements: formData.requirements,
      timestamp: time,
      date: date
    };

    const success = await saveOrderToJSON(orderData);
    
    if (success) {
      setSubmitMessage('Order request submitted successfully! We will contact you soon.');
      setFormData({ name: '', phone: '', address: '', requirements: '' });
    } else {
      setSubmitMessage('Error submitting order. Please try again.');
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
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
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Call Us</h4>
                  <p className="text-gray-300">+91 97421 41080</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Email Us</h4>
                  <p className="text-gray-300">info@daivam.in</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Location</h4>
                  <p className="text-gray-300">K R Market, Bengaluru, Karnataka</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Delivery Hours</h4>
                  <p className="text-gray-300">Mon - Sun: 5:00 AM - 12:00 AM</p>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-4 pt-6">
              <a href="https://www.instagram.com/daivam_in/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-500 transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61577235691618" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-500 transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="bg-gray-800 rounded-2xl p-8">
            <h4 className="text-2xl font-bold mb-6">Quick Order</h4>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Your Name *</label>
                <input 
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-white"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Phone Number *</label>
                <input 
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-white"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Delivery Address *</label>
                <textarea 
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-white h-24"
                  placeholder="Enter delivery address"
                  required
                ></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Special Requirements</label>
                <textarea 
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-white h-20"
                  placeholder="Any specific flower requirements?"
                ></textarea>
              </div>
              {submitMessage && (
                <div className={`p-3 rounded-lg text-sm ${
                  submitMessage.includes('successfully') 
                    ? 'bg-green-600 text-white' 
                    : 'bg-red-600 text-white'
                }`}>
                  {submitMessage}
                </div>
              )}
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-pink-500 to-orange-500 text-white py-4 rounded-lg font-semibold hover:from-pink-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Send Order Request'}
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-16 pt-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <img src="./logo_colour.png" alt="Daivam Flowers Logo" className="h-12" />
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
