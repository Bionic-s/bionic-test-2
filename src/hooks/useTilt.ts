import { useRef, useEffect, useCallback } from 'react';

/**
 * useTilt — subtle 3D card tilt effect on mouse hover.
 * Uses CSS transform: perspective + rotateX/rotateY.
 * Extremely lightweight — no framer-motion, just CSS transforms.
 * 
 * Usage:
 *   const tiltRef = useTilt({ maxTilt: 8, perspective: 600 });
 *   <div ref={tiltRef} className="tilt-card">...</div>
 */

interface UseTiltOptions {
  /** Maximum tilt angle in degrees (default 8) */
  maxTilt?: number;
  /** CSS perspective value in px (default 600) */
  perspective?: number;
  /** Scale factor on hover (default 1.02) */
  scale?: number;
}

export function useTilt(options: UseTiltOptions = {}) {
  const { maxTilt = 8, perspective = 600, scale = 1.02 } = options;
  const ref = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!ref.current) return;
      const el = ref.current;
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateY = ((x - centerX) / centerX) * maxTilt;
      const rotateX = -((y - centerY) / centerY) * maxTilt;

      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        el.style.transform = `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`;
      });
    },
    [maxTilt, perspective, scale]
  );

  const handleMouseLeave = useCallback(() => {
    if (!ref.current) return;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      ref.current!.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    });
  }, [perspective]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Check prefers-reduced-motion
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) return;

    const isTouchDevice = 'ontouchstart' in window;
    if (isTouchDevice) return;

    el.addEventListener('mousemove', handleMouseMove, { passive: true });
    el.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [handleMouseMove, handleMouseLeave]);

  return ref;
}

export default useTilt;
