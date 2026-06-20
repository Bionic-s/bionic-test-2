import { MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { officeLocations } from '../data/contactData';

interface OfficeLocationsProps {
  variant?: 'card' | 'list';
  showDescription?: boolean;
  title?: string;
  locale?: 'en' | 'ar';
}

export default function OfficeLocations({ 
  variant = 'card', 
  showDescription = true,
  title,
  locale = 'en'
}: OfficeLocationsProps) {
  const isAr = locale === 'ar';
  const defaultTitle = isAr ? 'زوروا مكاتبنا' : 'Visit Our Offices';
  const displayTitle = title || defaultTitle;

  if (variant === 'list') {
    // List variant for About page
    return (
      <div>
        <div className={`flex items-center mb-8 justify-center ${isAr ? 'flex-row-reverse space-x-reverse space-x-3' : 'space-x-3'}`}>
          <MapPin className="w-8 h-8 text-accent-primary" />
          <h3 className="text-h3 font-bold">{displayTitle}</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {officeLocations.map((office, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-bg-secondary/50 backdrop-blur-sm border border-white/10 rounded-full p-6 hover:border-accent-primary/30 transition-all duration-300"
            >
              <div className={`flex items-start mb-4 ${isAr ? 'flex-row-reverse space-x-reverse space-x-3' : 'space-x-3'}`}>
                <MapPin className="w-5 h-5 text-accent-primary flex-shrink-0 mt-1" />
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-lg mb-1">{isAr ? office.cityAr : office.city}</h4>
                  <p className="text-small text-accent-primary mb-2">{isAr ? office.regionAr : office.region}</p>
                  <p className="text-body text-text-muted">{isAr ? office.countryAr : office.country}</p>
                </div>
              </div>
              {showDescription && (
                <p className="text-small text-text-muted leading-relaxed">{isAr ? office.descriptionAr : office.description}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  // Card variant for Contact/Sales/Support pages
  return (
    <div className="mt-12">
      <h3 className="text-h3 font-bold mb-6 text-center">{displayTitle}</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {officeLocations.map((office, index) => (
          <div 
            key={index}
            className="bg-bg-secondary border border-white/10 rounded-large p-6 hover:border-accent-primary/50 transition-all duration-300"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-accent-primary/20 rounded-full flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-accent-primary" />
              </div>
              <h4 className="font-semibold text-white mb-2">{isAr ? office.nameAr : office.name}</h4>
              <p className="text-accent-primary mb-1">{isAr ? office.regionAr : office.region}</p>
              <p className="text-small text-text-muted">
                {isAr ? office.cityAr : office.city}, {isAr ? office.countryAr : office.country}<br />
                
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
