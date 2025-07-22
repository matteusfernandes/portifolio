'use client';

import { useState, useEffect, useRef } from 'react';

interface UseAnimateOnceOptions {
  animationClass: string;
  delay?: number;
  trigger?: boolean;
}

interface UseAnimateOnceReturn {
  className: string;
  elementRef: React.RefObject<HTMLElement | null>;
  hasAnimated: boolean;
}

export const useAnimateOnce = ({ 
  animationClass, 
  delay = 0, 
  trigger = true 
}: UseAnimateOnceOptions): UseAnimateOnceReturn => {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (trigger && !hasAnimated) {
      timerRef.current = setTimeout(() => {
        setShouldAnimate(true);
        setHasAnimated(true);
      }, delay);

      return () => {
        if (timerRef.current) {
          clearTimeout(timerRef.current);
          timerRef.current = null;
        }
      };
    }
  }, [trigger, hasAnimated, delay]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
  }, []);

  const className = shouldAnimate ? animationClass : '';

  return { className, elementRef, hasAnimated };
};
