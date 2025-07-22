'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

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

  const cleanup = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (trigger && !hasAnimated) {
      timerRef.current = setTimeout(() => {
        setShouldAnimate(true);
        setHasAnimated(true);
      }, delay);

      return cleanup;
    }
  }, [trigger, hasAnimated, delay, cleanup]);

  // Cleanup on unmount
  useEffect(() => {
    return cleanup;
  }, [cleanup]);

  const className = shouldAnimate ? animationClass : '';

  return { className, elementRef, hasAnimated };
};
