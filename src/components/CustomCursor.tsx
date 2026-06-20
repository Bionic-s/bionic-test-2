import { useEffect, useState, useCallback, useRef } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

/**
 * CustomCursor — a circular cursor that follows the mouse.
 * Scales up on links/buttons, hidden on touch devices (< 768px).
 */
export const CustomCursor = () => {
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springX = useSpring(cursorX, { stiffness: 300, damping: 28 });
  const springY = useSpring(cursorY, { stiffness: 300, damping: 28 });

  const rafRef = useRef<number>(0);

  // Detect mobile
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // Track mouse via rAF for performance
  const onMouseMove = useCallback((e: MouseEvent) => {
    if (!visible) setVisible(true);
    cursorX.set(e.clientX);
    cursorY.set(e.clientY);
  }, [cursorX, cursorY, visible]);

  const onMouseLeave = useCallback(() => setVisible(false), []);
  const onMouseEnter = useCallback(() => setVisible(true), []);

  // Hover detection via event delegation
  useEffect(() => {
    if (isMobile) return;

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest('a, button, [role="button"], input, select, textarea, [data-cursor-hover]');
      setHovering(!!interactive);
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest('a, button, [role="button"], input, select, textarea, [data-cursor-hover]');
      if (interactive) setHovering(false);
    };

    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isMobile, onMouseMove, onMouseLeave, onMouseEnter]);

  if (isMobile) return null;

  const size = hovering ? 80 : 40;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9998] mix-blend-difference"
      style={{
        x: springX,
        y: springY,
      }}
      animate={{
        width: size,
        height: size,
        opacity: visible ? 1 : 0,
      }}
      transition={{ duration: 0.15 }}
    >
      <div
        className="w-full h-full rounded-full border-2 flex items-center justify-center"
        style={{
          borderColor: '#2563EB',
          backgroundColor: 'rgba(37, 99, 235, 0.08)',
          transform: `translate(-50%, -50%)`,
        }}
      >
        {hovering && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: '#2563EB' }}
          />
        )}
      </div>
    </motion.div>
  );
};

export default CustomCursor;
