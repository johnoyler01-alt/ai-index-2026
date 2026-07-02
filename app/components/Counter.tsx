"use client";

import { useEffect, useRef, useState } from "react";

interface CounterProps {
  from: number;
  to: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
  delay?: number;
}

export function Counter({
  from,
  to,
  suffix = "",
  prefix = "",
  decimals = 0,
  duration = 2000,
  className = "text-5xl font-bold",
  delay = 0,
}: CounterProps) {
  const [value, setValue] = useState(from);
  const elementRef = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 },
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!isVisible || hasAnimated) return;

    const timeout = setTimeout(() => {
      const startTime = Date.now();
      const startValue = from;
      const endValue = to;
      const range = endValue - startValue;

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Ease function for smooth animation
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = startValue + range * eased;
        setValue(current);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setHasAnimated(true);
        }
      };

      animate();
    }, delay);

    return () => clearTimeout(timeout);
  }, [isVisible, hasAnimated, from, to, duration, delay]);

  return (
    <span ref={elementRef} className={className}>
      {prefix}
      {value.toFixed(decimals)}
      {suffix}
    </span>
  );
}
