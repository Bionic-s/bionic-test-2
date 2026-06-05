import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: {
    opacity?: number;
    y?: number;
    x?: number;
    scale?: number;
    delay?: number;
    duration?: number;
  };
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ 
  children, 
  className = "", 
  animation = {} 
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const {
    opacity = 0,
    y = 50,
    x = 0,
    scale = 1,
    delay = 0,
    duration = 0.8
  } = animation;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity, y, x, scale }}
      animate={inView ? { opacity: 1, y: 0, x: 0, scale: 1 } : { opacity, y, x, scale }}
      transition={{ 
        duration, 
        delay, 
        ease: "easeOut",
        type: "spring",
        stiffness: 100
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
