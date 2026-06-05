import { useState, useEffect } from 'react';

/**
 * Cycles through an array of words, highlighting one at a time.
 * The full list is always visible — only the accent position changes.
 * No typewriter effect. No partial words. No first-paint glitch.
 */
export const useCycleWords = (
  words: string[],
  intervalMs: number = 3000
) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % words.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [words, intervalMs]);

  return { activeIndex, words };
};