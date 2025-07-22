'use client';

import { ReactNode, ElementType, ComponentPropsWithoutRef } from 'react';
import { useAnimateOnce } from '@/hooks/useAnimateOnce';

type AnimationType = 'fade-in-up' | 'slide-in-left' | 'code-highlight';

interface AnimatedElementProps {
  children: ReactNode;
  animation: AnimationType;
  delay?: number;
  className?: string;
  as?: ElementType;
}

export const AnimatedElement = <T extends ElementType = 'div'>({ 
  children, 
  animation, 
  delay = 0, 
  className = '', 
  as: Component = 'div' as T
}: AnimatedElementProps & ComponentPropsWithoutRef<T>) => {
  const animationClass = `animate-${animation}`;
  const { className: animClass } = useAnimateOnce({ 
    animationClass, 
    delay 
  });

  return (
    <Component className={`${className} ${animClass}`.trim()}>
      {children}
    </Component>
  );
};
