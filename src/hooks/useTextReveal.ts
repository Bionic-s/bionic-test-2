import { useEffect, useRef, useState, useCallback } from 'react';

/**
 * useTextReveal — reveals text elements line-by-line as they scroll into view:
 * opacity 0 → 1, blur 5px → 0.
 * 
 * Usage:
 *   const { ref } = useTextReveal({ threshold?: 0.3, staggerDelay?: 80 });
 *   <div ref={ref}>
 *     <span className="reveal-line">Line 1</span>
 *     <span className="reveal-line">Line 2</span>
 *   </div>
 * 
 * Each child with class "reveal-line" will animate in sequence.
 * The CSS transition is handled in index.css under .reveal-line.
 */

interface UseTextRevealOptions {
  threshold?: number;
  staggerDelay?: number;
  rootMargin?: string;
}

export function useTextReveal(options: UseTextRevealOptions = {}) {
  const {
    threshold = 0.2,
    staggerDelay = 80,
    rootMargin = '0px 0px -40px 0px',
  } = options;

  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const revealLines = useCallback(() => {
    if (!ref.current) return;
    const lines = ref.current.querySelectorAll('.reveal-line');
    lines.forEach((line, i) => {
      setTimeout(() => {
        (line as HTMLElement).style.setProperty('--reveal-opacity', '1');
        (line as HTMLElement).style.setProperty('--reveal-blur', '0px');
      }, i * staggerDelay);
    });
  }, [staggerDelay]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !revealed) {
          setRevealed(true);
          revealLines();
        }
      },
      { threshold, rootMargin }
    );

    observerRef.current.observe(el);

    return () => {
      observerRef.current?.disconnect();
    };
  }, [threshold, rootMargin, revealed, revealLines]);

  return { ref, revealed };
}

export default useTextReveal;
