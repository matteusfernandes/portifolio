import { useState, useEffect, useRef } from 'react';

interface UseTypewriterOptions {
  text: string;
  speed?: number;
  delay?: number;
}

interface UseTypewriterReturn {
  displayText: string;
  isComplete: boolean;
}

export const useTypewriter = ({ text, speed = 50, delay = 0 }: UseTypewriterOptions): UseTypewriterReturn => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  
  // Use separate refs for different timeouts to avoid race conditions
  const isMountedRef = useRef(false);
  const delayTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Effect for initial delay with mounting logic
  useEffect(() => {
    isMountedRef.current = true;
    
    if (delay > 0 && !hasStarted) {
      delayTimeoutRef.current = setTimeout(() => {
        if (isMountedRef.current) {
          setHasStarted(true);
        }
      }, delay);
    } else if (delay === 0 && !hasStarted) {
      setHasStarted(true);
    }
    
    return () => {
      isMountedRef.current = false;
      if (delayTimeoutRef.current) {
        clearTimeout(delayTimeoutRef.current);
        delayTimeoutRef.current = null;
      }
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current);
        typingTimeoutRef.current = null;
      }
    };
  }, [delay, hasStarted]);

  // Effect for typing animation
  useEffect(() => {
    if (!isMountedRef.current) return;

    if (hasStarted && currentIndex < text.length && !isComplete) {
      typingTimeoutRef.current = setTimeout(() => {
        if (isMountedRef.current) {
          // Use direct state update since we're not updating based on previous state
          setCurrentIndex(prevIndex => {
            const nextIndex = prevIndex + 1;
            setDisplayText(text.slice(0, nextIndex));
            return nextIndex;
          });
        }
      }, speed);

      return () => {
        if (typingTimeoutRef.current) {
          clearTimeout(typingTimeoutRef.current);
          typingTimeoutRef.current = null;
        }
      };
    } else if (hasStarted && currentIndex === text.length && !isComplete) {
      setIsComplete(true);
    }
  }, [currentIndex, text, speed, hasStarted, isComplete]);

  return { displayText, isComplete };
};
