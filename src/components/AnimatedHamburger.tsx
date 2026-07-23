import { motion } from 'framer-motion';

interface AnimatedHamburgerProps {
  isOpen: boolean;
  onClick: () => void;
  color?: string;
  size?: number;
  className?: string;
}

/**
 * Animated hamburger menu button that morphs into an X.
 * Three lines → cross animation using framer-motion.
 */
export const AnimatedHamburger = ({
  isOpen,
  onClick,
  color = '#00BFFF',
  size = 24,
  className = '',
}: AnimatedHamburgerProps) => {
  const lineW = size * 0.75;
  const lineH = 2;
  const gap = size * 0.22;

  // Shared line style
  const lineStyle = {
    width: lineW,
    height: lineH,
    backgroundColor: color,
    borderRadius: 1,
  };

  return (
    <button
      onClick={onClick}
      aria-label={isOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
      className={`relative flex items-center justify-center p-2 rounded-lg hover:bg-white/5 transition-colors ${className}`}
      style={{ width: size + 16, height: size + 16 }}
    >
      <div
        className="relative flex flex-col items-center justify-center"
        style={{ width: lineW, height: lineW, gap }}
      >
        {/* Top line — rotates to form top of X */}
        <motion.div
          style={lineStyle}
          animate={{
            rotate: isOpen ? 45 : 0,
            y: isOpen ? gap + lineH / 2 : 0,
          }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        />

        {/* Middle line — fades out */}
        <motion.div
          style={lineStyle}
          animate={{
            opacity: isOpen ? 0 : 1,
            scaleX: isOpen ? 0 : 1,
          }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
        />

        {/* Bottom line — rotates to form bottom of X */}
        <motion.div
          style={lineStyle}
          animate={{
            rotate: isOpen ? -45 : 0,
            y: isOpen ? -(gap + lineH / 2) : 0,
          }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        />
      </div>
    </button>
  );
};

export default AnimatedHamburger;
