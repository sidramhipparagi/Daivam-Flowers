import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
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
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl p-0">
        <div className="grid md:grid-cols-2 gap-0 h-full">
          <div className="relative overflow-hidden rounded-l-3xl">
            <img 
              src={content.image} 
              alt={content.title}
              className="w-full h-full object-cover min-h-[400px]"
            />
          </div>
          
          <div className="flex flex-col p-6">
            <DialogHeader>
              <DialogTitle className="text-2xl md:text-3xl font-bold" style={{ color: '#770737' }}>
                {content.title}
              </DialogTitle>
              <DialogDescription className="text-base md:text-lg mt-2">
                {content.description}
              </DialogDescription>
            </DialogHeader>
            
            <div className="mt-6 space-y-4">
              <ul className="space-y-3">
                {content.details.map((detail, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div 
                      className="flex-shrink-0 w-2 h-2 rounded-full mt-2"
                      style={{ backgroundColor: '#FE003D' }}
                    />
                    <span className="text-sm md:text-base text-gray-700">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FeatureDialog;
