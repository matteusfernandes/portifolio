import { useState, useEffect, useRef, useCallback } from 'react';

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
  
  // Use refs to track if component is mounted
  const isMountedRef = useRef(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Cleanup function
  const cleanup = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  // Effect for initial delay
  useEffect(() => {
    if (delay > 0 && !hasStarted && isMountedRef.current) {
      timeoutRef.current = setTimeout(() => {
        if (isMountedRef.current) {
          setHasStarted(true);
        }
      }, delay);
      
      return cleanup;
    } else if (delay === 0 && !hasStarted) {
      setHasStarted(true);
    }
  }, [delay, hasStarted, cleanup]);

  // Effect for typing animation
  useEffect(() => {
    if (!isMountedRef.current) return;

    if (hasStarted && currentIndex < text.length && !isComplete) {
      timeoutRef.current = setTimeout(() => {
        if (isMountedRef.current) {
          setDisplayText(text.slice(0, currentIndex + 1));
          setCurrentIndex(prev => prev + 1);
        }
      }, speed);

      return cleanup;
    } else if (hasStarted && currentIndex === text.length && !isComplete) {
      setIsComplete(true);
    }
  }, [currentIndex, text, speed, hasStarted, isComplete, cleanup]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      isMountedRef.current = false;
      cleanup();
    };
  }, [cleanup]);

  return { displayText, isComplete };
};
