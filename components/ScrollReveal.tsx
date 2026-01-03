
import React, { useEffect, useRef, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({ children, className = '', delay = 0 }) => {
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Fallback timer: If for some reason the observer doesn't fire, ensure content is visible
    const timer = setTimeout(() => {
      if (domRef.current && !domRef.current.classList.contains('active')) {
        domRef.current.classList.add('active');
      }
    }, 2000);

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          clearTimeout(timer);
        }
      });
    }, {
      threshold: 0.05,
      rootMargin: '0px 0px -20px 0px'
    });

    const { current } = domRef;
    if (current) {
      observer.observe(current);
    }

    return () => {
      clearTimeout(timer);
      if (current) {
        observer.unobserve(current);
      }
    };
  }, []);

  const delayClass = delay > 0 ? `reveal-delay-${delay}` : '';

  return (
    <div 
      ref={domRef} 
      className={`reveal ${delayClass} ${className}`}
    >
      {children}
    </div>
  );
};
