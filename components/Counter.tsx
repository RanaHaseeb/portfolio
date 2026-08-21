"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

/**
 * Counts from 0 to `value` once the element scrolls into view.
 * The final value is what renders on the server, so the number is present
 * (and correct) without JS and for anyone who prefers reduced motion.
 */
export default function Counter({
  value,
  suffix = "",
  duration = 1400,
  className = "",
}: {
  value: number;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -15% 0px" });
  const calm = useReducedMotion();
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (calm) return setDisplay(value);
    setDisplay(0);
  }, [calm, value]);

  useEffect(() => {
    if (!inView || calm) return;
    let frame = 0;
    const start = performance.now();
    // easeOutExpo — fast off the line, settles gently on the final number
    const ease = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      setDisplay(Math.round(ease(t) * value));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value, duration, calm]);

  return (
    <span ref={ref} className={className}>
      <span className="tabular-nums">{display}</span>
      {suffix}
    </span>
  );
}
