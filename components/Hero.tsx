"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowDown, ArrowRight, Download, Mail } from "lucide-react";
import { profile, stats } from "@/lib/data";
import Avatar from "./Avatar";
import Counter from "./Counter";

const EASE = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: {},
  shown: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 22 },
  shown: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE } },
};

export default function Hero() {
  const calm = useReducedMotion();

  // Under reduced motion every motion prop is dropped, so nothing is ever
  // rendered at opacity 0 — the page simply arrives finished.
  const cascade = calm
    ? {}
    : { variants: container, initial: "hidden", animate: "shown" };
  const step = calm ? {} : { variants: item };

  return (
    <section id="top" className="relative overflow-hidden" aria-labelledby="hero-name">
      <div className="pointer-events-none absolute inset-0 grid-bg" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -right-32 -top-32 h-[38rem] w-[38rem] rounded-full animate-float"
        style={{
          background:
            "radial-gradient(circle, rgb(var(--accent) / 0.22), transparent 62%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-content px-5 pb-28 pt-32 sm:px-8 sm:pb-32 sm:pt-40">
        <motion.div
          {...cascade}
          className="grid items-center gap-14 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:gap-16"
        >
          {/* ---------------- Copy column ----------------
              A motion element in its own right: it inherits the parent's
              variant label and re-staggers its own children under it. */}
          <motion.div {...(calm ? {} : { variants: container })}>
            <motion.div {...step}>
              <span className="inline-flex items-center gap-2.5 rounded-full border border-hairline bg-tint px-3.5 py-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                <span className="font-mono text-xs tracking-wider text-fg-soft">
                  Available for new projects
                </span>
              </span>
            </motion.div>

            <motion.p {...step} className="t-eyebrow mt-8 text-accent-hi">
              {profile.role}
            </motion.p>

            {/* One cohesive lockup — no floating monogram over the type */}
            <motion.h1 {...step} id="hero-name" className="t-display mt-4 text-fg">
              Abdul <span className="gradient-text">Haseeb</span>
            </motion.h1>

            <motion.p
              {...step}
              className="mt-7 max-w-xl text-lg leading-relaxed text-fg-soft sm:text-xl"
            >
              {profile.headline}
            </motion.p>

            <motion.p {...step} className="mt-3.5 font-mono text-sm text-fg-muted">
              {profile.valueProp}
            </motion.p>

            <motion.div {...step} className="mt-9 flex flex-wrap items-center gap-3.5">
              <a href="#work" className="btn btn-primary group">
                View my work
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </a>
              <a href="#contact" className="btn btn-ghost">
                <Mail className="h-4 w-4" aria-hidden="true" />
                Get in touch
              </a>
              <a
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-1 py-3 text-sm font-medium text-fg-muted transition-colors hover:text-accent-hi"
              >
                <Download
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-y-0.5"
                  aria-hidden="true"
                />
                Download résumé
              </a>
            </motion.div>
          </motion.div>

          {/* ---------------- Avatar column ---------------- */}
          <motion.div
            {...step}
            className="relative mx-auto w-full max-w-[340px] lg:mx-0 lg:ml-auto"
          >
            <div
              className="pointer-events-none absolute -inset-8 rounded-full opacity-70 blur-2xl"
              style={{
                background:
                  "radial-gradient(circle at 40% 30%, rgb(var(--accent) / 0.28), transparent 62%)",
              }}
              aria-hidden="true"
            />
            <div className="relative">
              <Avatar size={340} className="h-auto w-full drop-shadow-2xl" id="hero-av" />

              {/* One credential chip, anchored low so it sits over the
                  shoulder rather than across the face. The "Currently" chip
                  that used to sit opposite is dropped: the headline already
                  says AI-integrated, and About carries it as a hard fact. */}
              <div className="absolute -left-3 bottom-6 rounded-xl border border-hairline bg-surface/90 px-3 py-2 shadow-card backdrop-blur sm:-left-6">
                <p className="t-caption text-fg-faint">Based in</p>
                <p className="mt-0.5 text-xs font-medium text-fg">{profile.location}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* ---------------- Stats ---------------- */}
        <motion.dl
          {...(calm
            ? {}
            : {
                initial: { opacity: 0, y: 24 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.7, delay: 0.55, ease: EASE },
              })}
          className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-hairline bg-[var(--hairline)] sm:mt-24 lg:grid-cols-4"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-canvas-soft/60 px-5 py-6 backdrop-blur-sm sm:px-6 sm:py-7"
            >
              <dt className="font-display text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
                <Counter value={s.value} suffix={s.suffix} />
              </dt>
              <dd className="mt-1.5 text-xs text-fg-muted sm:text-sm">{s.label}</dd>
            </div>
          ))}
        </motion.dl>
      </div>

      {/* ---------------- Scroll indicator ---------------- */}
      <a
        href="#work"
        aria-label="Scroll to selected work"
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 text-fg-faint transition-colors hover:text-accent-hi lg:block"
      >
        <ArrowDown className="h-5 w-5 animate-bob" aria-hidden="true" />
      </a>
    </section>
  );
}
