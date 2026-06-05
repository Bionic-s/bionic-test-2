import { useState, useEffect } from 'react';

export interface AnimationState {
  opacity: number;
  scale: number;
  y: number;
  filter: string;
}

export const useAnimatedText = (
  words: string[],
  cycleDuration: number = 3000,
  typingSpeed: number = 100,
  deletingSpeed: number = 50,
  holdDuration: number = 1500
) => {
  const [displayedWord, setDisplayedWord] = useState(words[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationState, setAnimationState] = useState<AnimationState>({
    opacity: 1,
    scale: 1,
    y: 0,
    filter: 'none',
  });

  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    let timeoutId: NodeJS.Timeout;

    const startCycle = () => {
      setIsAnimating(true);

      // Phase 1: Select (selection sweep effect)
      setAnimationState({ opacity: 0.7, scale: 0.95, y: 0, filter: 'blur(2px)' });
      
      setTimeout(() => {
        // Phase 2: Delete (delete effect)
        let charIndex = displayedWord.length;
        
        const deleteInterval = setInterval(() => {
          if (charIndex > 0) {
            charIndex--;
            setDisplayedWord(displayedWord.substring(0, charIndex));
            setAnimationState({ opacity: 0.7, scale: 0.95, y: 0, filter: 'blur(2px)' });
          } else {
            clearInterval(deleteInterval);
            
            // Phase 3: Type (typewriter effect)
            const nextWord = words[(currentIndex + 1) % words.length];
            charIndex = 0;
            
            const typeInterval = setInterval(() => {
              if (charIndex < nextWord.length) {
                charIndex++;
                setDisplayedWord(nextWord.substring(0, charIndex));
                setAnimationState({ opacity: 1, scale: 1.05, y: -2, filter: 'none' });
              } else {
                clearInterval(typeInterval);
                
                // Phase 4: Settle
                setAnimationState({ opacity: 1, scale: 1, y: 0, filter: 'none' });
                setIsAnimating(false);
                setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
              }
            }, typingSpeed);
          }
        }, deletingSpeed);
      }, 300);
    };

    // Start the cycle after initial hold
    intervalId = setTimeout(() => {
      startCycle();
    }, holdDuration);

    return () => {
      clearTimeout(intervalId);
      clearTimeout(timeoutId);
    };
  }, [displayedWord, currentIndex, words, cycleDuration, typingSpeed, deletingSpeed, holdDuration]);

  return { displayedWord, currentIndex, isAnimating, animationState };
};