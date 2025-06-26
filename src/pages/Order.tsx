import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { ArrowLeft, Plus, Minus, Phone, Mail, MapPin, Clock, Instagram, Facebook } from 'lucide-react';
import Header from '../components/Header';
import { 
  OrderData, 
  generateSerialNumber, 
  getCurrentDateTime, 
  saveOrderToJSON 
} from '../lib/orderUtils';

interface CollectionOrderData extends OrderData {
  itemName: string;
  quantity: number;
  price: string;
}

const Order = () => {
  const [searchParams] = useSearchParams();
  const itemName = searchParams.get('item') || '';
  const itemPrice = searchParams.get('price') || '';
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    requirements: '',
    itemName: itemName,
    quantity: 1
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  useEffect(() => {
    if (itemName) {
      setFormData(prev => ({
        ...prev,
        itemName: itemName
      }));
    }
  }, [itemName]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleQuantityChange = (change: number) => {
    setFormData(prev => ({
      ...prev,
      quantity: Math.max(1, Math.min(10, prev.quantity + change))
    }));
  };

  const saveCollectionOrderToJSON = async (orderData: CollectionOrderData): Promise<boolean> => {
    try {
      // Save to localStorage for persistence
      const existingOrders = JSON.parse(localStorage.getItem('orders') || '[]');
      existingOrders.push(orderData);
      localStorage.setItem('orders', JSON.stringify(existingOrders, null, 2));
      
      console.log('Collection order saved:', orderData);
      console.log('All orders:', existingOrders);
      
      return true;
    } catch (error) {
      console.error('Error saving collection order:', error);
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.address || !formData.itemName) {
      setSubmitMessage('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage('');

    const { date, time } = getCurrentDateTime();
    const orderData: CollectionOrderData = {
      serialNumber: generateSerialNumber(),
      name: formData.name,
      phone: formData.phone,
      address: formData.address,
      requirements: formData.requirements,
      timestamp: time,
      date: date,
      itemName: formData.itemName,
      quantity: formData.quantity,
      price: itemPrice
    };

    const success = await saveCollectionOrderToJSON(orderData);
    
    if (success) {
      setSubmitMessage('Order request submitted successfully! We will contact you soon.');
      setFormData({ 
        name: '', 
        phone: '', 
        address: '', 
        requirements: '', 
        itemName: itemName,
        quantity: 1 
      });
    } else {
      setSubmitMessage('Error submitting order. Please try again.');
    }

    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pink-50 to-orange-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <Link to="/collection" className="inline-flex items-center space-x-2 text-pink-600 hover:text-pink-700 transition-colors mb-4">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Collection</span>
            </Link>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
              Place Your
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-orange-500">
                {" "}Order
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Complete your flower order with delivery details
            </p>
          </div>
        </div>
      </section>

      {/* Order Form Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-4xl font-bold mb-4">Order Details</h3>
                <p className="text-xl text-gray-300">
                  Fresh flowers delivered with love from K R Market, Bengaluru
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
              <h4 className="text-2xl font-bold mb-6">Complete Your Order</h4>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Item Name *</label>
                  <input 
                    type="text"
                    name="itemName"
                    value={formData.itemName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-white"
                    placeholder="Enter flower/item name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Quantity *</label>
                  <div className="flex items-center space-x-4">
                    <button
                      type="button"
                      onClick={() => handleQuantityChange(-1)}
                      className="w-10 h-10 bg-gray-700 border border-gray-600 rounded-lg flex items-center justify-center hover:bg-gray-600 transition-colors"
                      disabled={formData.quantity <= 1}
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="text-2xl font-bold text-white min-w-[3rem] text-center">
                      {formData.quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleQuantityChange(1)}
                      className="w-10 h-10 bg-gray-700 border border-gray-600 rounded-lg flex items-center justify-center hover:bg-gray-600 transition-colors"
                      disabled={formData.quantity >= 10}
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                    <span className="text-gray-400 text-sm ml-4">
                      (Select 1-10 items)
                    </span>
                  </div>
                  {itemPrice && (
                    <p className="text-gray-400 text-sm mt-2">
                      Price: {itemPrice}
                    </p>
                  )}
                </div>

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
                    placeholder="Any specific requirements for this order?"
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
                  {isSubmitting ? 'Submitting...' : 'Place Order'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Order; 