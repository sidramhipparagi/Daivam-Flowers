import React, { useState, useEffect } from 'react';
import { Download, Trash2, RefreshCw, Calendar, Clock, User, Phone, MapPin, FileText, Package, Hash } from 'lucide-react';
import { 
  OrderData, 
  getOrdersFromStorage, 
  exportOrdersToFile, 
  clearAllOrders 
} from '../lib/orderUtils';

interface CollectionOrderData extends OrderData {
  itemName?: string;
  quantity?: number;
  price?: string;
}

const OrdersAdmin = () => {
  const [orders, setOrders] = useState<CollectionOrderData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadOrders();
  }, []);

  const loadOrders = () => {
    setLoading(true);
    const storedOrders = getOrdersFromStorage();
    setOrders(storedOrders.sort((a, b) => b.serialNumber - a.serialNumber)); // Sort by newest first
    setLoading(false);
  };

  const handleExportOrders = () => {
    exportOrdersToFile();
  };

  const handleClearAllOrders = () => {
    if (window.confirm('Are you sure you want to clear all orders? This action cannot be undone.')) {
      clearAllOrders();
      setOrders([]);
    }
  };

  const formatSerialNumber = (serialNumber: number) => {
    return `#${serialNumber.toString().slice(-8)}`;
  };

  const isCollectionOrder = (order: CollectionOrderData): boolean => {
    return !!(order.itemName || order.quantity || order.price);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 text-white p-8">
        <div className="flex items-center justify-center">
          <RefreshCw className="w-8 h-8 animate-spin" />
          <span className="ml-2 text-lg">Loading orders...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Orders Management</h1>
            <p className="text-gray-400">
              Total Orders: {orders.length} | 
              Collection Orders: {orders.filter(isCollectionOrder).length} | 
              General Orders: {orders.filter(order => !isCollectionOrder(order)).length}
            </p>
          </div>
          <div className="space-x-4">
            <button
              onClick={loadOrders}
              className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Refresh</span>
            </button>
            <button
              onClick={handleExportOrders}
              className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Export JSON</span>
            </button>
            <button
              onClick={handleClearAllOrders}
              className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
            >
              <Trash2 className="w-4 h-4" />
              <span>Clear All</span>
            </button>
          </div>
        </div>

        {orders.length === 0 ? (
          <div className="bg-gray-800 rounded-lg p-12 text-center">
            <FileText className="w-16 h-16 text-gray-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">No Orders Found</h3>
            <p className="text-gray-400">Orders submitted through the contact form will appear here.</p>
          </div>
        ) : (
          <div className="grid gap-6">
            {orders.map((order) => (
              <div key={order.serialNumber} className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="bg-gradient-to-r from-pink-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {formatSerialNumber(order.serialNumber)}
                    </span>
                    {isCollectionOrder(order) && (
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Collection Order
                      </span>
                    )}
                    <div className="flex items-center space-x-2 text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span>{order.date}</span>
                      <Clock className="w-4 h-4 ml-4" />
                      <span>{order.timestamp}</span>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    {/* Collection Order Details */}
                    {isCollectionOrder(order) && (
                      <>
                        {order.itemName && (
                          <div className="flex items-start space-x-3">
                            <Package className="w-5 h-5 text-blue-500 mt-1" />
                            <div>
                              <label className="text-sm text-gray-400">Item Name</label>
                              <p className="text-white font-medium">{order.itemName}</p>
                            </div>
                          </div>
                        )}

                        {order.quantity && (
                          <div className="flex items-start space-x-3">
                            <Hash className="w-5 h-5 text-blue-500 mt-1" />
                            <div>
                              <label className="text-sm text-gray-400">Quantity</label>
                              <p className="text-white font-medium">{order.quantity} items</p>
                            </div>
                          </div>
                        )}

                        {order.price && (
                          <div className="flex items-start space-x-3">
                            <div className="w-5 h-5 text-blue-500 mt-1 flex items-center justify-center text-sm font-bold">₹</div>
                            <div>
                              <label className="text-sm text-gray-400">Price</label>
                              <p className="text-white font-medium">{order.price}</p>
                            </div>
                          </div>
                        )}
                      </>
                    )}

                    <div className="flex items-start space-x-3">
                      <User className="w-5 h-5 text-pink-500 mt-1" />
                      <div>
                        <label className="text-sm text-gray-400">Customer Name</label>
                        <p className="text-white font-medium">{order.name}</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Phone className="w-5 h-5 text-pink-500 mt-1" />
                      <div>
                        <label className="text-sm text-gray-400">Phone Number</label>
                        <p className="text-white font-medium">
                          <a href={`tel:${order.phone}`} className="hover:text-pink-400 transition-colors">
                            {order.phone}
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-pink-500 mt-1" />
                      <div>
                        <label className="text-sm text-gray-400">Delivery Address</label>
                        <p className="text-white">{order.address}</p>
                      </div>
                    </div>

                    {order.requirements && (
                      <div className="flex items-start space-x-3">
                        <FileText className="w-5 h-5 text-pink-500 mt-1" />
                        <div>
                          <label className="text-sm text-gray-400">Special Requirements</label>
                          <p className="text-white">{order.requirements}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default OrdersAdmin; 