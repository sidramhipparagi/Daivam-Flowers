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
import fastDeliveryPainting from '@/assets/fast-delivery-painting.jpg';
import freshFlowersPainting from '@/assets/fresh-flowers-painting.jpg';

interface FeatureDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  feature: 'delivery' | 'fresh' | null;
}

const featureContent = {
  delivery: {
    title: "Fast Delivery",
    image: fastDeliveryPainting,
    description: "Experience the convenience of next-morning delivery",
    details: [
      "Order today, receive tomorrow morning before 8 AM",
      "Carefully packaged to maintain freshness during transit",
      "Real-time order tracking and updates",
      "Dedicated delivery team ensuring timely arrival",
      "Coverage across Bangalore and surrounding areas"
    ]
  },
  fresh: {
    title: "100% Fresh Flowers",
    image: freshFlowersPainting,
    description: "Premium quality flowers sourced daily from K R Market",
    details: [
      "Hand-picked fresh flowers every morning from K R Market",
      "Direct sourcing ensures the highest quality and freshness",
      "Wide variety of seasonal and traditional flowers",
      "Strict quality control before each delivery",
      "Support local flower farmers and sustainable practices"
    ]
  }
};

const FeatureDialog = ({ open, onOpenChange, feature }: FeatureDialogProps) => {
  if (!feature) return null;
  
  const content = featureContent[feature];

  return (
    <>
      <style>{`
        @media (min-width: 768px) {
          .feature-dialog-image {
            border-radius: 2rem 0 0 2rem !important;
          }
          .feature-dialog-content {
            border-radius: 0 2rem 2rem 0 !important;
          }
        }
        @media (max-width: 767px) {
          .feature-dialog-image {
            border-radius: 2rem 2rem 0 0 !important;
          }
          .feature-dialog-content {
            border-radius: 0 0 2rem 2rem !important;
          }
        }
      `}</style>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent 
          className="max-w-4xl max-h-[95vh] md:max-h-[90vh] overflow-hidden !rounded-[2rem] p-4 md:p-6 border-0 [&>button]:hidden w-[90vw] sm:w-[85vw] md:w-auto mx-auto"
          style={{ borderRadius: '2rem' }}
        >
          <div className="overflow-y-auto max-h-[calc(95vh-2rem)] md:max-h-[calc(90vh-3rem)] rounded-[1.5rem]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 min-h-fit md:min-h-[500px]">
            {/* Image Section */}
            <div className="relative overflow-hidden h-56 sm:h-64 md:h-auto feature-dialog-image">
              <img 
                src={content.image} 
                alt={content.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            
            {/* Content Section */}
            <div 
              className="flex flex-col p-6 md:p-6 lg:p-8 relative feature-dialog-content"
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
          </div>
      </DialogContent>
    </Dialog>
    </>
  );
};

export default FeatureDialog;
