import React, { useEffect, useRef, useState } from 'react';

interface RevealOnScrollProps {
  children: React.ReactNode;
  threshold?: number; // 0.0 to 1.0 - How much of the element must be visible
  delay?: number;     // Delay in ms before animation starts
  className?: string; // Additional classes
}

const RevealOnScroll: React.FC<RevealOnScrollProps> = ({ 
  children, 
  threshold = 0.1, 
  delay = 0,
  className = "" 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Trigger animation when element enters viewport
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Run only once
        }
      },
      {
        threshold: threshold,
        rootMargin: "0px 0px -50px 0px" // Trigger slightly before the bottom
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out transform ${className} ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default RevealOnScroll;