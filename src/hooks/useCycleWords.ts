import { useState, useEffect, useRef, useCallback } from 'react';

/**
 * Typewriter cycle hook.
 * Types a word character by character, pauses, deletes, advances to next word, repeats.
 * No partial word flash on first paint — starts with first word fully visible.
 */
export const useCycleWords = (
  words: string[],
  typingSpeedMs: number = 80,
  pauseMs: number = 2000,
  deletingSpeedMs: number = 40,
) => {
  const [displayText, setDisplayText] = useState(words[0] || '');
  const [wordIndex, setWordIndex] = useState(0);
  const phaseRef = useRef<'typing' | 'pause' | 'deleting'>('typing');
  const charIndexRef = useRef(words[0]?.length || 0);
  const initializedRef = useRef(false);

  const reset = useCallback(() => {
    const nextIdx = (wordIndex + 1) % words.length;
    setWordIndex(nextIdx);
    phaseRef.current = 'typing';
    charIndexRef.current = 0;
    setDisplayText('');
  }, [wordIndex, words.length]);

  useEffect(() => {
    // On first mount, start with first word already fully typed (no flash)
    if (!initializedRef.current) {
      initializedRef.current = true;
      setDisplayText(words[0] || '');
      charIndexRef.current = words[0]?.length || 0;
      phaseRef.current = 'pause';
      return;
    }

    const currentWord = words[wordIndex];
    if (!currentWord) return;

    const tick = () => {
      switch (phaseRef.current) {
        case 'typing': {
          if (charIndexRef.current < currentWord.length) {
            charIndexRef.current++;
            setDisplayText(currentWord.slice(0, charIndexRef.current));
          } else {
            // Full word typed — pause
            phaseRef.current = 'pause';
          }
          break;
        }
        case 'pause':
          // Pause is handled by the timer interval — do nothing this tick
          break;
        case 'deleting': {
          if (charIndexRef.current > 0) {
            charIndexRef.current--;
            setDisplayText(currentWord.slice(0, charIndexRef.current));
          } else {
            // Deleted — advance to next word
            reset();
          }
          break;
        }
      }
    };

    // Use different intervals per phase
    const getDelay = () => {
      switch (phaseRef.current) {
        case 'typing': return typingSpeedMs;
        case 'pause': return pauseMs;
        case 'deleting': return deletingSpeedMs;
      }
    };

    let delId: ReturnType<typeof setInterval> | undefined;
    const id = setInterval(() => {
      if (phaseRef.current === 'pause') {
        // After pause, switch to deleting
        clearInterval(id);
        phaseRef.current = 'deleting';
        // Start deleting immediately
        delId = setInterval(() => {
          if (phaseRef.current !== 'deleting' || charIndexRef.current <= 0) {
            clearInterval(delId);
            if (charIndexRef.current <= 0) reset();
            return;
          }
          charIndexRef.current--;
          setDisplayText(words[wordIndex].slice(0, charIndexRef.current));
        }, deletingSpeedMs);
        return;
      }
      tick();
    }, getDelay());

    return () => {
      clearInterval(id);
      if (delId !== undefined) clearInterval(delId);
    };
  }, [wordIndex, words, typingSpeedMs, pauseMs, deletingSpeedMs, reset]);

  return displayText;
};