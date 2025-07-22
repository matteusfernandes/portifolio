'use client';

import { useState, useEffect, useRef } from 'react';

interface UseAnimateOnceOptions {
  animationClass: string;
  delay?: number;
  trigger?: boolean;
}

export const useAnimateOnce = ({ 
  animationClass, 
  delay = 0, 
  trigger = true 
}: UseAnimateOnceOptions) => {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (trigger && !hasAnimated) {
      const timer = setTimeout(() => {
        setShouldAnimate(true);
        setHasAnimated(true);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [trigger, hasAnimated, delay]);

  const className = shouldAnimate ? animationClass : '';

  return { className, elementRef, hasAnimated };
};
