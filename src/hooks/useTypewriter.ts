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
  
  // Use separate refs for delay and typing timeouts to prevent operations from interfering with each other.
  const isMountedRef = useRef(false);
  const delayTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Initialize mounting state and handle initial delay
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
    };
  }, [delay, hasStarted]);

  // Effect for typing animation
  useEffect(() => {
    if (!isMountedRef.current) return;

    if (hasStarted && currentIndex < text.length && !isComplete) {
      typingTimeoutRef.current = setTimeout(() => {
        if (isMountedRef.current) {
          const nextIndex = currentIndex + 1;
          setCurrentIndex(nextIndex);
          setDisplayText(text.slice(0, nextIndex));
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
