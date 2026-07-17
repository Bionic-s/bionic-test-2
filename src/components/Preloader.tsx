import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SEEN_KEY = 'bionic_preloader_seen';

function alreadySeenThisSession(): boolean {
  try {
    return sessionStorage.getItem(SEEN_KEY) === '1';
  } catch {
    return false;
  }
}

/**
 * Preloader — shows the Bionic logo with a gentle pulse animation on the
 * first load of a session, then fades out. Skipped on repeat loads and
 * never blocks pointer input.
 */
export const Preloader = () => {
  const [visible, setVisible] = useState(() => !alreadySeenThisSession());
  const logoSrc = `${import.meta.env.BASE_URL}bionic-full-dark.svg`;

  useEffect(() => {
    if (!visible) return;
    const timer = setTimeout(() => {
      setVisible(false);
      try {
        sessionStorage.setItem(SEEN_KEY, '1');
      } catch { /* ignore */ }
    }, 700);
    return () => clearTimeout(timer);
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-bg-primary pointer-events-none"
          aria-hidden="true"
        >
          <motion.img
            src={logoSrc}
            alt=""
            className="w-40 md:w-56 h-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{
              opacity: 1,
              scale: [1, 1.04, 1],
            }}
            transition={{
              opacity: { duration: 0.3 },
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
