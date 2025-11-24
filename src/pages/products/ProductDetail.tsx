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
      <div className="container mx-auto px-4 md:px-8 lg:px-12 py-16 text-center">
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
    if (product.isEnquiryOnly) {
      return `Hi, I would like to enquire about ${product.name}. Please provide details on availability, pricing, and customization options.`;
    }
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
      case 'premium': return 'Premium Collection';
      default: return 'Products';
    }
  };

  const getCategoryRoute = (category: string) => {
    switch (category) {
      case 'loose-flowers': return '/loose-flowers';
      case 'maale': return '/maale';
      case 'human-use': return '/human-use';
      case 'hara': return '/hara';
      case 'premium': return '/premium';
      default: return '/collection';
    }
  };

  // All pages now use unified brand colors

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
      
      {/* Hero Section */}
      <section className="relative bg-brand-background py-16">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center space-y-4">
            <Link to={getCategoryRoute(primaryCategory)} className="inline-flex items-center space-x-2 text-brand-primary hover:text-brand-accent transition-colors mb-4">
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
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
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
                        <span className="text-3xl font-bold text-brand-primary">
                          {product.salePrice || product.price}
                        </span>
                        {product.salePrice && (
                          <span className="bg-brand-accent/10 text-brand-accent px-2 py-1 rounded-full text-sm font-semibold">
                            SALE
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Quantity Selector - Only show for non-enquiry products */}
                  {!product.isEnquiryOnly && (
                    <>
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
                        <span className="block text-4xl font-bold text-brand-primary">
                          ₹{calculateTotalPrice().toLocaleString()}
                        </span>
                      </div>
                    </>
                  )}

                  {/* Enquiry note for premium products */}
                  {product.isEnquiryOnly && (
                    <div className="mb-6 p-4 bg-brand-primary/10 rounded-lg border border-brand-primary/20">
                      <p className="text-brand-primary font-medium text-center">
                        🌟 This is a premium product available on enquiry basis with custom pricing and personalization options
                      </p>
                    </div>
                  )}

                  <a 
                    href={`https://wa.me/919742141080?text=${encodeURIComponent(formatWhatsAppMessage())}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full"
                  >
                    <Button 
                      className="w-full btn-brand-hover"
                      style={{ backgroundColor: '#770737' }}
                      size="lg"
                    >
                      {product.isEnquiryOnly ? 'Enquire Now' : 'Order Now'}
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
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
              <Card className="bg-brand-background p-4 rounded-lg max-w-2xl mx-auto border-2 border-brand-primary/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-brand-primary font-medium">Need Help?</h3>
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
