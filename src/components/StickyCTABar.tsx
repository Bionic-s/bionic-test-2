import { useState, useEffect } from 'react';
import { trackCTAClick } from '../lib/analytics';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const t = {
  en: {
    title: 'Start the Conversation',
    subtitle: 'A focused discussion about your transformation priorities',
    cta: 'Start the Conversation',
    ctaShort: 'Briefing',
    close: 'Close banner',
    to: '/contact?source=sticky&intent=conversation',
  },
  ar: {
    title: 'ابدأ المحادثة',
    subtitle: 'نقاش مركّز حول أولويات التحول في مؤسستكم',
    cta: 'ابدأ المحادثة',
    ctaShort: 'إحاطة',
    close: 'إغلاق الشريط',
    to: '/ar/contact?source=sticky&intent=conversation',
  },
};

export const StickyCTABar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false);
  const location = useLocation();
  const isArabic = location.pathname === '/ar' || location.pathname.startsWith('/ar/');
  const copy = isArabic ? t.ar : t.en;

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling 300px for better visibility
      if (window.scrollY > 300 && !isClosed) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isClosed]);

  const handleClose = () => {
    setIsClosed(true);
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          dir={isArabic ? 'rtl' : 'ltr'}
          className="fixed bottom-0 left-0 right-0 z-40 bg-gradient-to-r from-accent-primary to-accent-secondary shadow-2xl"
        >
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between gap-4">
              <div className="flex-1">
                <p className={`text-text-primary font-semibold text-lg md:text-xl ${isArabic ? 'font-[Tajawal]' : ''}`}>
                  {copy.title}
                </p>
                <p className={`text-text-primary/80 text-sm hidden md:block ${isArabic ? 'font-[Tajawal]' : ''}`}>
                  {copy.subtitle}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Link
                  to={copy.to}
                  onClick={() => trackCTAClick('sticky', copy.to)}
                  className={`px-6 py-3 bg-bg-primary text-text-primary font-semibold rounded-full hover:bg-bg-secondary hover:shadow-lg transition-all duration-300 flex items-center gap-2 whitespace-nowrap ${isArabic ? 'font-[Tajawal]' : ''}`}
                >
                  <span className="hidden sm:inline">{copy.cta}</span>
                  <span className="sm:hidden">{copy.ctaShort}</span>
                  <ArrowRight className={`w-5 h-5 ${isArabic ? 'rotate-180' : ''}`} />
                </Link>

                <button
                  onClick={handleClose}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                  aria-label={copy.close}
                >
                  <X className="w-5 h-5 text-text-primary" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
