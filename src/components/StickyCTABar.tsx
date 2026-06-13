import { useState, useEffect } from 'react';
import { trackCTAClick } from '../lib/analytics';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const StickyCTABar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

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
          className="fixed bottom-0 left-0 right-0 z-40 bg-gradient-to-r from-accent-primary to-accent-secondary shadow-2xl"
        >
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between gap-4">
              <div className="flex-1">
                <p className="text-text-primary font-semibold text-lg md:text-xl">
                  Start the Conversation
                </p>
                <p className="text-text-primary/80 text-sm hidden md:block">
                  A focused discussion about your transformation priorities
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Link
                  to="/contact?source=sticky&intent=conversation"
                  onClick={() => trackCTAClick('sticky', '/contact?source=sticky&intent=conversation')}
                  className="px-6 py-3 bg-bg-primary text-text-primary font-semibold rounded-full hover:bg-bg-secondary hover:shadow-lg transition-all duration-300 flex items-center space-x-2 whitespace-nowrap"
                >
                  <span className="hidden sm:inline">Start the Conversation</span>
                  <span className="sm:hidden">Briefing</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>

                <button
                  onClick={handleClose}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                  aria-label="Close banner"
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
