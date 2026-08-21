"use client";

import type { ReactNode } from "react";
import { createElement } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

type Tag = "div" | "li" | "section" | "article" | "header" | "ul" | "ol";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Slide-in distance in px; negative values enter from the opposite side. */
  y?: number;
  x?: number;
  as?: Tag;
};

/**
 * Scroll-triggered enter animation.
 *
 * Under `prefers-reduced-motion` these render as plain elements with no motion
 * wrapper at all — the content is simply there. That is both what the user
 * asked for and one less thing that can leave content stuck at opacity 0.
 */
export function Reveal({
  children,
  className = "",
  delay = 0,
  y = 20,
  x,
  as = "div",
}: RevealProps) {
  const calm = useReducedMotion();
  if (calm) return createElement(as, { className }, children);

  const axis = x !== undefined ? "x" : "y";
  const distance = x !== undefined ? x : y;
  const Motion = motion[as];

  return (
    <Motion
      className={className}
      initial={{ opacity: 0, [axis]: distance }}
      whileInView={{ opacity: 1, [axis]: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.7, delay: delay / 1000, ease: EASE }}
    >
      {children}
    </Motion>
  );
}

/** Parent that staggers its <StaggerItem> children as the group scrolls in. */
export function Stagger({
  children,
  className = "",
  delay = 0,
  step = 0.08,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  step?: number;
  as?: Tag;
}) {
  const calm = useReducedMotion();
  if (calm) return createElement(as, { className }, children);

  const Motion = motion[as];
  const variants: Variants = {
    hidden: {},
    shown: { transition: { staggerChildren: step, delayChildren: delay } },
  };

  return (
    <Motion
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
    >
      {children}
    </Motion>
  );
}

export function StaggerItem({
  children,
  className = "",
  y = 18,
  x,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  y?: number;
  x?: number;
  as?: "div" | "li" | "article";
}) {
  const calm = useReducedMotion();
  if (calm) return createElement(as, { className }, children);

  const Motion = motion[as];
  const transition = { duration: 0.6, ease: EASE };
  // Written out per axis rather than with a computed key: a computed key
  // widens the object to an index signature, which then clashes with
  // `transition` under Variants' typing.
  const variants: Variants =
    x !== undefined
      ? {
          hidden: { opacity: 0, x },
          shown: { opacity: 1, x: 0, transition },
        }
      : {
          hidden: { opacity: 0, y },
          shown: { opacity: 1, y: 0, transition },
        };

  return (
    <Motion className={className} variants={variants}>
      {children}
    </Motion>
  );
}

export default Reveal;
