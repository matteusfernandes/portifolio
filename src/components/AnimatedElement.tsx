'use client';

import { ReactNode, ElementType } from 'react';
import { useAnimateOnce } from '@/hooks/useAnimateOnce';

interface AnimatedElementProps {
  children: ReactNode;
  animation: 'fade-in-up' | 'slide-in-left' | 'code-highlight';
  delay?: number;
  className?: string;
  as?: ElementType;
}

export const AnimatedElement = ({ 
  children, 
  animation, 
  delay = 0, 
  className = '', 
  as: Component = 'div' 
}: AnimatedElementProps) => {
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
