import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { ArrowLeft, Check, Plus, Minus } from 'lucide-react';
import { getProductById } from '../../data/products';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const productId = id ? parseInt(id) : 0;
  const product = getProductById(productId);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Product Not Found</h1>
        <Link to="/collection" className="text-pink-600 hover:text-pink-700">
          Back to Collection
        </Link>
      </div>
    );
  }

  // Use the first category for styling and navigation
  const primaryCategory = product.category[0];

  const increaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity(prev => prev > 1 ? prev - 1 : 1);
  };

  const calculateTotalPrice = () => {
    const priceToUse = product.salePrice || product.price;
    const priceNumber = parseFloat(priceToUse.replace(/[₹,]/g, ''));
    return priceNumber * quantity;
  };

  const formatWhatsAppMessage = () => {
    const totalPrice = calculateTotalPrice();
    const unitPrice = product.salePrice || product.price;
    return `Hi, I would like to order:\n\nProduct: ${product.name}\nQuantity: ${quantity}\nUnit Price: ${unitPrice}\nTotal Price: ₹${totalPrice.toLocaleString()}\n\nPlease confirm availability and delivery details.`;
  };

  const getCategoryName = (category: string) => {
    switch (category) {
      case 'loose-flowers': return 'Loose Flowers';
      case 'maale': return 'Maale';
      case 'human-use': return 'Daily Elegance';
      case 'hara': return 'Hara';
      default: return 'Products';
    }
  };

  const getCategoryRoute = (category: string) => {
    switch (category) {
      case 'loose-flowers': return '/loose-flowers';
      case 'maale': return '/maale';
      case 'human-use': return '/human-use';
      case 'hara': return '/hara';
      default: return '/collection';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'loose-flowers': return 'from-pink-600 to-orange-500';
      case 'maale': return 'from-orange-600 to-pink-500';
      case 'human-use': return 'from-purple-600 to-pink-500';
      case 'hara': return 'from-green-600 to-orange-500';
      default: return 'from-pink-600 to-orange-500';
    }
  };

  const getButtonColor = (category: string) => {
    switch (category) {
      case 'loose-flowers': return 'from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800';
      case 'maale': return 'from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800';
      case 'human-use': return 'from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800';
      case 'hara': return 'from-green-600 to-green-700 hover:from-green-700 hover:to-green-800';
      default: return 'from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800';
    }
  };

  const getCategoryLinkColor = (category: string) => {
    switch (category) {
      case 'loose-flowers': return 'text-pink-600 hover:text-pink-700';
      case 'maale': return 'text-orange-600 hover:text-orange-700';
      case 'human-use': return 'text-purple-600 hover:text-purple-700';
      case 'hara': return 'text-green-600 hover:text-green-700';
      default: return 'text-pink-600 hover:text-pink-700';
    }
  };

  return (
    <>
      {/* Notification Message */}
      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black p-4 text-center">
        <p className="text-lg font-semibold">
          We are currently accepting orders via WhatsApp and phone calls. Sorry for the inconvenience.
        </p>
      </div>
      
      {/* Hero Section */}
      <section className={`relative bg-gradient-to-br ${primaryCategory === 'loose-flowers' ? 'from-pink-50 to-orange-50' : primaryCategory === 'maale' ? 'from-orange-50 to-pink-50' : primaryCategory === 'human-use' ? 'from-purple-50 to-pink-50' : 'from-green-50 to-orange-50'} py-16`}>
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <Link to={getCategoryRoute(primaryCategory)} className={`inline-flex items-center space-x-2 ${getCategoryLinkColor(primaryCategory)} transition-colors mb-4`}>
              <ArrowLeft className="w-4 h-4" />
              <span>Back to {getCategoryName(primaryCategory)}</span>
            </Link>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
              {product.name}
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {product.description}
            </p>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Product Image */}
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 shadow-lg">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-96 object-contain rounded-lg"
                />
              </div>
            </div>

            {/* Product Information */}
            <div className="space-y-8">
              <div>
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-lg text-gray-600">Price:</span>
                      <div className="flex items-center space-x-3">
                        {product.salePrice && (
                          <span className="text-2xl font-bold text-gray-400 line-through">
                            {product.price}
                          </span>
                        )}
                        <span className={`text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${getCategoryColor(primaryCategory)}`}>
                          {product.salePrice || product.price}
                        </span>
                        {product.salePrice && (
                          <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-sm font-semibold">
                            SALE
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Quantity Selector */}
                  <div className="mb-6">
                    <label className="block text-lg font-semibold text-gray-800 mb-3">Quantity</label>
                    <div className="flex items-center space-x-4">
                      <button
                        onClick={decreaseQuantity}
                        className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-gray-400 transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="text-2xl font-semibold min-w-[3rem] text-center">{quantity}</span>
                      <button
                        onClick={increaseQuantity}
                        className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-gray-400 transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Total Price */}
                  <div className="mb-6">
                    <span className="text-lg text-gray-600">Total Price:</span>
                    <span className={`block text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${getCategoryColor(primaryCategory)}`}>
                      ₹{calculateTotalPrice().toLocaleString()}
                    </span>
                  </div>

                  <a 
                    href={`https://wa.me/919742141080?text=${encodeURIComponent(formatWhatsAppMessage())}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className={`bg-gradient-to-r ${getButtonColor(primaryCategory)} text-white transition-all duration-300 px-8 py-3 text-lg w-full`}>
                      Order Now
                    </Button>
                  </a>
                </div>
                
                <div className="prose max-w-none">
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {product.detailedDescription || product.description}
                  </p>
                </div>
              </div>

              {/* Features */}
              {product.features && product.features.length > 0 && (
                <Card className="border-2 border-gray-100">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Features</h3>
                    <ul className="space-y-3">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-3">
                          <Check className={`w-5 h-5 text-green-600 flex-shrink-0`} />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}

              {/* Usage */}
              {product.usage && product.usage.length > 0 && (
                <Card className="border-2 border-gray-100">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Perfect For</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {product.usage.map((use, index) => (
                        <div key={index} className={`px-4 py-2 bg-gray-100 rounded-lg text-center`}>
                          <span className="text-sm font-medium text-gray-800">
                            {use}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Contact Info */}
              <Card className="border-2 border-gray-100 bg-gradient-to-br from-gray-50 to-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Need Help?</h3>
                  <p className="text-gray-600 mb-4">Contact us directly for custom orders or bulk requirements.</p>
                  <div className="space-y-2">
                    <p className="text-gray-700">📞 <strong>Call:</strong> +91 97421 41080</p>
                    <p className="text-gray-700">💬 <strong>WhatsApp:</strong> Chat with us instantly</p>
                    <p className="text-gray-700">📍 <strong>Fresh from:</strong> K R Market, Bengaluru</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetail;
