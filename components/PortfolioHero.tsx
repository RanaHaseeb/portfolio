"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { profile, stats } from "@/lib/data";
import { ArrowRight, ChevronDown, Mail } from "./icons";

/**
 * Adapted from 21st.dev "Portfolio Hero" by @waleedkibhen.
 * Reworked for the Midnight Cobalt theme: Geist Mono display type + cobalt
 * gradient (in place of Fira Code + lime), local SVG icons instead of
 * lucide-react, and wired to real profile data. No extra npm dependencies.
 */

type BlurTextProps = {
  text: string;
  delay?: number;
  animateBy?: "words" | "letters";
  className?: string;
  style?: React.CSSProperties;
  start?: boolean;
  gradient?: boolean;
};

// Applied per-letter: background-clip:text won't paint through nested
// inline-block spans, so each animated segment carries its own gradient fill.
const GRADIENT_FILL: React.CSSProperties = {
  backgroundImage: "linear-gradient(92deg, #a8c6ff, #4a80ff)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  WebkitTextFillColor: "transparent",
  color: "transparent",
};

function BlurText({
  text,
  delay = 60,
  animateBy = "words",
  className = "",
  style,
  start = true,
  gradient = false,
}: BlurTextProps) {
  const segments = useMemo(
    () => (animateBy === "words" ? text.split(" ") : text.split("")),
    [text, animateBy]
  );

  return (
    <span className={`inline-flex flex-wrap ${className}`} style={style}>
      {segments.map((segment, i) => (
        <span
          key={i}
          style={{
            display: "inline-block",
            filter: start ? "blur(0px)" : "blur(10px)",
            opacity: start ? 1 : 0,
            transform: start ? "translateY(0)" : "translateY(-20px)",
            transition: `filter 0.5s ease-out ${i * delay}ms, opacity 0.5s ease-out ${i * delay}ms, transform 0.5s ease-out ${i * delay}ms`,
            ...(gradient ? GRADIENT_FILL : null),
          }}
        >
          {segment}
          {animateBy === "words" && i < segments.length - 1 ? " " : ""}
        </span>
      ))}
    </span>
  );
}

export default function PortfolioHero() {
  const [start, setStart] = useState(false);
  const initials = `${profile.firstName[0]}${profile.lastName[0]}`;

  useEffect(() => {
    const t = requestAnimationFrame(() => setStart(true));
    return () => cancelAnimationFrame(t);
  }, []);

  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-5 pb-16 pt-28 text-center sm:px-8"
    >
      <div className="pointer-events-none absolute inset-0 grid-bg" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-[34rem] w-[34rem] rounded-full animate-float"
        style={{ background: "radial-gradient(circle, rgba(74,128,255,0.22), transparent 62%)" }}
        aria-hidden="true"
      />

      {/* Availability badge */}
      <div
        className="mb-10 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5"
        style={{ opacity: start ? 1 : 0, transition: "opacity 0.6s ease-out" }}
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
        </span>
        <span className="font-mono text-xs tracking-wider text-secondary">
          {profile.role}
        </span>
      </div>

      {/* Giant blur-in name with profile pill overlay */}
      <div className="relative">
        <h1 className="flex flex-col items-center leading-[0.78]">
          <BlurText
            text={profile.firstName.toUpperCase()}
            animateBy="letters"
            delay={90}
            start={start}
            gradient
            className="justify-center whitespace-nowrap font-mono text-[19vw] font-bold uppercase tracking-tighter sm:text-[15vw] lg:text-[11rem]"
          />
          <BlurText
            text={profile.lastName.toUpperCase()}
            animateBy="letters"
            delay={90}
            start={start}
            gradient
            className="justify-center whitespace-nowrap font-mono text-[19vw] font-bold uppercase tracking-tighter sm:text-[15vw] lg:text-[11rem]"
          />
        </h1>

        {/* Monogram pill (swap for an <img src="/profile.jpg" /> if you add a photo) */}
        <div
          className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
          style={{
            opacity: start ? 1 : 0,
            transition: "opacity 0.8s ease-out 0.5s",
          }}
        >
          <div className="flex h-[110px] w-[66px] items-center justify-center overflow-hidden rounded-full shadow-2xl ring-1 ring-white/15 transition-transform duration-300 hover:scale-110 sm:h-[168px] sm:w-[100px] lg:h-[210px] lg:w-[124px]"
            style={{ background: "linear-gradient(160deg, #4a80ff, #0d1220 70%)" }}
          >
            <span className="font-mono text-2xl font-bold tracking-tight text-white sm:text-4xl">
              {initials}
            </span>
          </div>
        </div>
      </div>

      {/* Tagline */}
      <div className="mt-8 max-w-xl">
        <BlurText
          text={profile.subrole}
          animateBy="words"
          delay={120}
          start={start}
          className="justify-center text-base text-secondary sm:text-xl"
        />
      </div>

      {/* CTAs */}
      <div
        className="mt-9 flex flex-wrap items-center justify-center gap-3.5"
        style={{ opacity: start ? 1 : 0, transition: "opacity 0.6s ease-out 0.8s" }}
      >
        <a
          href="#work"
          className="group inline-flex items-center gap-2 rounded-xl bg-cobalt px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-cobalt-dark"
        >
          View my work
          <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
        </a>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-xl border border-white/12 px-5 py-3 text-sm font-medium text-content transition-colors hover:border-cobalt/50 hover:bg-white/[0.03]"
        >
          <Mail className="h-4 w-4" />
          Get in touch
        </a>
      </div>

      {/* Stats */}
      <dl
        className="mt-12 flex flex-wrap items-center justify-center gap-8 sm:gap-12"
        style={{ opacity: start ? 1 : 0, transition: "opacity 0.6s ease-out 1s" }}
      >
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <dt className="text-2xl font-semibold tracking-tight text-content sm:text-3xl">
              {s.value}
            </dt>
            <dd className="mt-1 text-xs text-muted">{s.label}</dd>
          </div>
        ))}
      </dl>

      {/* Scroll indicator */}
      <a
        href="#work"
        aria-label="Scroll to work"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted transition-colors hover:text-content"
        style={{ opacity: start ? 1 : 0, transition: "opacity 0.6s ease-out 1.2s" }}
      >
        <ChevronDown className="animate-float" />
      </a>
    </section>
  );
}
