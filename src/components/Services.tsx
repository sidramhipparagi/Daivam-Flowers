import React, { useState } from 'react';
import { Home, Heart, Gift, Building } from 'lucide-react';
import ServiceDialog from './ServiceDialog';

// Services component with mobile view updates

const Services = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<'home-delivery' | 'wedding' | 'special-occasions' | 'corporate' | null>(null);

  const handleServiceClick = (service: 'home-delivery' | 'wedding' | 'special-occasions' | 'corporate') => {
    setSelectedService(service);
    setDialogOpen(true);
  };

  const services = [
    {
      icon: Home,
      title: "Home Delivery",
      id: 'home-delivery' as const,
      image: "/images/homedelivery.png"
    },
    {
      icon: Heart,
      title: "Wedding",
      id: 'wedding' as const,
      image: "/images/wedding.png"
    },
    {
      icon: Gift,
      title: "Special Events",
      id: 'special-occasions' as const,
      image: "/images/special.png"
    },
    {
      icon: Building,
      title: "Corporate",
      id: 'corporate' as const,
      image: "/images/corporate.png"
    }
  ];

  return (
    <section className="py-6 md:py-16" style={{ backgroundColor: '#FDF3F5' }}>
      <div className="container mx-auto px-4 md:px-12">
        {/* Mobile Header */}
        <div className="flex items-center justify-between mb-5 md:hidden">
          <h3 className="text-xl font-bold" style={{ color: '#770737' }}>
            Our Services
          </h3>
        </div>

        {/* Desktop Header */}
        <div className="hidden md:block text-center mb-12">
          <h3 className="text-4xl lg:text-5xl font-bold mb-4 text-brand-primary">Our Services</h3>
        </div>

        {/* Mobile: Horizontal Scroll */}
        <div className="md:hidden">
          <div className="flex gap-4 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <button
                  key={index}
                  onClick={() => handleServiceClick(service.id)}
                  className="flex-shrink-0 w-[100px]"
                >
                  <div className="flex flex-col items-center gap-3">
                    <div 
                      className="w-[100px] h-28 rounded-xl overflow-hidden shadow-sm flex items-center justify-center"
                      style={{ backgroundColor: '#fff' }}
                    >
                      <IconComponent className="w-10 h-10" strokeWidth={1.5} style={{ color: '#FE003D' }} />
                    </div>
                    <span 
                      className="text-xs font-semibold text-center leading-tight"
                      style={{ color: '#770737' }}
                    >
                      {service.title}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
        
        {/* Desktop: Grid Layout */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <button
                key={index}
                onClick={() => handleServiceClick(service.id)}
                className="text-center p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group cursor-pointer w-full bg-white"
              >
                <div 
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 transition-all duration-300 bg-gradient-to-br from-[#FE003D]/10 to-[#770737]/10 group-hover:bg-[#770737]"
                >
                  <IconComponent className="w-8 h-8 transition-colors duration-300 group-hover:text-white" style={{ color: '#FE003D' }} />
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h4>
              </button>
            );
          })}
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
