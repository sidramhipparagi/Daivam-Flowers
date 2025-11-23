
import React from 'react';
import { Home, Heart, Gift, Building } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Home className="w-8 h-8" />,
      title: "Home Delivery",
      description: "Fresh flowers delivered directly to your home across Bengaluru"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Wedding Flowers",
      description: "Beautiful arrangements for your special day with traditional touch"
    },
    {
      icon: <Gift className="w-8 h-8" />,
      title: "Special Occasions",
      description: "Perfect flowers for birthdays, anniversaries, and celebrations"
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Corporate Events",
      description: "Professional floral arrangements for offices and events"
    }
  ];

  return (
    <section className="py-20" style={{ backgroundColor: '#FDF3F5' }}>
      <div className="container mx-auto px-12">
        <div className="text-center mb-16">
          <h3 className="text-4xl lg:text-5xl font-bold mb-4 text-brand-primary">Our Services</h3>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: '#FE003D', fontWeight: 500 }}>
            From K R Market to your doorstep - we bring the freshest flowers for every occasion
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="text-center p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group"
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
                className="icon-container inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 transition-all duration-300"
                style={{ 
                  background: 'linear-gradient(to bottom right, rgb(255, 228, 230), rgb(255, 237, 213))'
                }}
              >
                <div className="transition-colors duration-300" style={{ color: '#FE003D' }}>
                  {service.icon}
                </div>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h4>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
