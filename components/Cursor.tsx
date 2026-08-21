"use client";

import { useEffect, useRef } from "react";

const INTERACTIVE =
  'a, button, [role="button"], input, textarea, select, summary, [data-cursor="hover"]';

/**
 * Two-part cursor: a dot pinned to the pointer and a ring that trails it and
 * scales up over interactive elements. Runs on rAF with direct style writes —
 * no React state per frame. Mounts only for fine pointers (real mice) and is
 * skipped entirely under prefers-reduced-motion.
 */
export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)");
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!fine.matches || calm.matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    document.documentElement.setAttribute("data-cursor", "custom");

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let visible = false;
    let frame = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!visible) {
        visible = true;
        dot.style.opacity = "1";
        ring.style.opacity = "1";
      }
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;

      const target = e.target as Element | null;
      const over = Boolean(target?.closest?.(INTERACTIVE));
      if (ring.dataset.active !== String(over)) ring.dataset.active = String(over);
    };

    const onLeave = () => {
      visible = false;
      dot.style.opacity = "0";
      ring.style.opacity = "0";
    };

    const tick = () => {
      // Ease the ring toward the pointer for a slight trailing feel
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    window.addEventListener("blur", onLeave);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("blur", onLeave);
      document.documentElement.removeAttribute("data-cursor");
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" style={{ opacity: 0 }} aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" style={{ opacity: 0 }} aria-hidden="true" />
    </>
  );
}
