"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export function ScrollReveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<"visible" | "queued">("visible");

  useEffect(() => {
    const element = elementRef.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    setState("queued");
    const observer = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting) {
        setState("visible");
        observer.disconnect();
      }
    }, { rootMargin: "0px 0px -12%", threshold: 0.08 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return <div className={`scroll-reveal ${className}`} data-reveal-state={state} ref={elementRef}>{children}</div>;
}
