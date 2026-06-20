import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Preloader — shows the Bionic logo with a gentle pulse animation
 * on first load, then fades out once the app is mounted.
 */
export const Preloader = () => {
  const [visible, setVisible] = useState(true);
  const logoSrc = `${import.meta.env.BASE_URL}bionic-full-dark.svg`;

  useEffect(() => {
    // Small delay so the user sees the logo even on fast loads
    const timer = setTimeout(() => setVisible(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-bg-primary"
          aria-hidden="true"
        >
          <motion.img
            src={logoSrc}
            alt="Bionic Solutions"
            className="w-40 md:w-56 h-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{
              opacity: 1,
              scale: [1, 1.04, 1],
            }}
            transition={{
              opacity: { duration: 0.4 },
              scale: {
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              },
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
