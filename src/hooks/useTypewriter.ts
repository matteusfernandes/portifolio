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
  
  // Use refs to track if component is mounted and timeout
  const isMountedRef = useRef(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Set mounted state on component mount
  useEffect(() => {
    isMountedRef.current = true;
    
    return () => {
      isMountedRef.current = false;
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, []);

  // Effect for initial delay
  useEffect(() => {
    if (delay > 0 && !hasStarted && isMountedRef.current) {
      timeoutRef.current = setTimeout(() => {
        if (isMountedRef.current) {
          setHasStarted(true);
        }
      }, delay);
      
      return () => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
          timeoutRef.current = null;
        }
      };
    } else if (delay === 0 && !hasStarted) {
      setHasStarted(true);
    }
  }, [delay, hasStarted]);

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

      return () => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
          timeoutRef.current = null;
        }
      };
    } else if (hasStarted && currentIndex === text.length && !isComplete) {
      setIsComplete(true);
    }
  }, [currentIndex, text, speed, hasStarted, isComplete]);

  return { displayText, isComplete };
};
