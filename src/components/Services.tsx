
import React, { useState } from 'react';
import { Home, Heart, Gift, Building } from 'lucide-react';
import ServiceDialog from './ServiceDialog';

const Services = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<'home-delivery' | 'wedding' | 'special-occasions' | 'corporate' | null>(null);

  const handleServiceClick = (service: 'home-delivery' | 'wedding' | 'special-occasions' | 'corporate') => {
    setSelectedService(service);
    setDialogOpen(true);
  };

  const services = [
    {
      icon: <Home className="w-8 h-8" />,
      title: "Home Delivery",
      id: 'home-delivery' as const
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Wedding Flowers",
      id: 'wedding' as const
    },
    {
      icon: <Gift className="w-8 h-8" />,
      title: "Special Occasions",
      id: 'special-occasions' as const
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Corporate Events",
      id: 'corporate' as const
    }
  ];

  return (
    <section className="py-8 md:py-16" style={{ backgroundColor: '#FDF3F5' }}>
      <div className="container mx-auto px-4 md:px-12">
        <div className="text-center mb-6 md:mb-12">
          <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4 text-brand-primary">Our Services</h3>
          <p className="text-base md:text-xl max-w-2xl mx-auto mt-2 md:mt-4 font-bold" style={{ color: '#FE003D' }}>
            From K R Market to your doorstep - we bring the freshest flowers for every occasion
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {services.map((service, index) => (
            <button
              key={index}
              onClick={() => handleServiceClick(service.id)}
              className="text-center p-3 md:p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group cursor-pointer w-full bg-white"
            >
              <div 
                className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full mb-2 md:mb-4 transition-all duration-300 bg-gradient-to-br from-[#FE003D]/10 to-[#770737]/10 group-hover:bg-[#770737]"
              >
                <div className="transition-colors duration-300 group-hover:text-white" style={{ color: '#FE003D' }}>
                  {service.icon}
                </div>
              </div>
              <h4 className="text-base md:text-xl font-semibold text-gray-800 mb-1 md:mb-2">{service.title}</h4>
            </button>
          ))}
        </div>

        <ServiceDialog 
          open={dialogOpen}
          onOpenChange={setDialogOpen}
          service={selectedService}
        />
      </div>
    </section>
  );
};

export default Services;
