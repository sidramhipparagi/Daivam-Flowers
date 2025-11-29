import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { X } from 'lucide-react';

interface ServiceDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  service: 'home-delivery' | 'wedding' | 'special-occasions' | 'corporate' | null;
}

const serviceContent = {
  'home-delivery': {
    title: "Home Delivery",
    image: "/images/homedelivery.png",
    description: "Convenient and reliable flower delivery service right to your doorstep",
    details: [
      "Same-day and next-morning delivery options available",
      "Carefully packaged to maintain freshness during transit",
      "Real-time order tracking and delivery updates",
      "Flexible delivery time slots to suit your schedule",
      "Coverage across Bangalore and surrounding areas",
      "Secure payment options and order confirmation"
    ]
  },
  'wedding': {
    title: "Wedding Flowers",
    image: "/images/wedding.png",
    description: "Beautiful floral arrangements to make your special day unforgettable",
    details: [
      "Custom wedding bouquets and garlands (maale)",
      "Mandap decoration with fresh flowers",
      "Bridal and groom floral accessories",
      "Reception and venue floral arrangements",
      "Wide variety of traditional and modern designs",
      "Consultation and planning assistance available"
    ]
  },
  'special-occasions': {
    title: "Special Occasions",
    image: "/images/special.png",
    description: "Perfect floral arrangements for every celebration and milestone",
    details: [
      "Birthday and anniversary flower arrangements",
      "Festival and religious ceremony flowers (hara collection)",
      "Graduation and achievement celebrations",
      "Valentine's Day and romantic occasions",
      "Get well soon and sympathy arrangements",
      "Customized arrangements for any special moment"
    ]
  },
  'corporate': {
    title: "Corporate Events",
    image: "/images/corporate.png",
    description: "Professional floral arrangements for business events and corporate spaces",
    details: [
      "Office decoration and reception arrangements",
      "Conference and meeting room floral displays",
      "Corporate gifting and client appreciation bouquets",
      "Event venue decoration services",
      "Regular maintenance and weekly flower arrangements",
      "Bulk orders with competitive pricing"
    ]
  }
};

const ServiceDialog = ({ open, onOpenChange, service }: ServiceDialogProps) => {
  if (!service) return null;
  
  const content = serviceContent[service];

  return (
    <>
      <style>{`
        @media (min-width: 768px) {
          .service-dialog-image {
            border-radius: 1.5rem 0 0 1.5rem !important;
          }
          .service-dialog-content {
            border-radius: 0 1.5rem 1.5rem 0 !important;
          }
        }
        @media (max-width: 767px) {
          .service-dialog-image {
            border-radius: 1.5rem 1.5rem 0 0 !important;
          }
          .service-dialog-content {
            border-radius: 0 0 1.5rem 1.5rem !important;
          }
        }
      `}</style>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent 
          className="max-w-4xl max-h-[95vh] md:max-h-[90vh] overflow-y-auto !rounded-[1.5rem] p-0 border-0 [&>button]:hidden mx-4 md:mx-auto"
          style={{ borderRadius: '1.5rem' }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 min-h-[400px] md:min-h-[500px]">
            {/* Image Section */}
            <div className="relative overflow-hidden h-64 md:h-auto service-dialog-image">
              <img 
                src={content.image} 
                alt={content.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            
            {/* Content Section */}
            <div 
              className="flex flex-col p-4 md:p-6 lg:p-8 relative service-dialog-content"
              style={{ backgroundColor: '#FDF3F5' }}
            >
            <DialogClose className="absolute right-4 top-4 md:right-6 md:top-6 z-50 opacity-70 hover:opacity-100 transition-opacity focus:outline-none cursor-pointer" style={{ backgroundColor: 'transparent', border: 'none', padding: 0, boxShadow: 'none' }}>
              <X className="h-8 w-8 md:h-10 md:w-10" style={{ color: '#770737' }} />
              <span className="sr-only">Close</span>
            </DialogClose>
            <DialogHeader className="pr-8 md:pr-12">
              <DialogTitle className="text-xl md:text-2xl lg:text-3xl font-bold" style={{ color: '#770737' }}>
                {content.title}
              </DialogTitle>
              <DialogDescription className="text-sm md:text-base lg:text-lg mt-2 md:mt-3">
                {content.description}
              </DialogDescription>
            </DialogHeader>
            
            <div className="mt-4 md:mt-6 space-y-3 md:space-y-4">
              <ul className="space-y-2 md:space-y-3">
                {content.details.map((detail, index) => (
                  <li key={index} className="flex items-start gap-2 md:gap-3">
                    <div 
                      className="flex-shrink-0 w-1.5 h-1.5 md:w-2 md:h-2 rounded-full mt-2"
                      style={{ backgroundColor: '#FE003D' }}
                    />
                    <span className="text-xs md:text-sm lg:text-base text-gray-700 leading-relaxed">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
    </>
  );
};

export default ServiceDialog;

