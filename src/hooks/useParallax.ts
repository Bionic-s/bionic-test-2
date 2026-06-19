import { useEffect, useRef } from 'react';

/**
 * Subtle parallax — the hero image scrolls 20% slower than the page.
 * Attach `ref` to the hero image element.
 */
export function useParallax(speed = 0.2) {
  const ref = useRef<HTMLImageElement | HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY <= window.innerHeight) {
        el.style.transform = `translateY(${scrollY * speed}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return ref;
}
