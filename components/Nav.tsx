"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { navLinks, profile } from "@/lib/data";
import ThemeToggle from "./ThemeToggle";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState<string>("");
  const calm = useReducedMotion();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active-section highlight
  useEffect(() => {
    const ids = navLinks.map((l) => l.href.replace("#", ""));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!sections.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  // Lock the page and wire Escape while the drawer is open
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "glass border-b border-hairline" : "border-b border-transparent"
      }`}
    >
      {/* Scroll progress */}
      <div
        className="absolute inset-x-0 top-0 h-px origin-left"
        style={{
          transform: `scaleX(${progress})`,
          background:
            "linear-gradient(90deg, rgb(var(--accent)), rgb(var(--accent-alt)))",
          transition: "transform 0.1s linear",
        }}
        aria-hidden="true"
      />

      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-content items-center justify-between px-5 sm:px-8"
      >
        <a href="#top" className="group flex items-center gap-2.5" aria-label={`${profile.name} — home`}>
          <span
            className="grid h-9 w-9 place-items-center rounded-lg font-display text-sm font-bold tracking-tight text-accent-hi ring-1 ring-accent/30 transition-transform duration-300 group-hover:scale-105"
            style={{ background: "rgb(var(--accent) / 0.12)" }}
          >
            AH
          </span>
          <span className="hidden font-display text-sm font-semibold tracking-tight text-fg sm:block">
            {profile.name}
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive = active === link.href.replace("#", "");
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? "true" : undefined}
                className={`relative rounded-lg px-3.5 py-2 text-sm transition-colors ${
                  isActive ? "text-fg" : "text-fg-muted hover:text-fg"
                }`}
              >
                {link.label}
                <span
                  className={`absolute inset-x-3.5 -bottom-0.5 h-px origin-left rounded-full transition-transform duration-300 ${
                    isActive ? "scale-x-100" : "scale-x-0"
                  }`}
                  style={{
                    background:
                      "linear-gradient(90deg, rgb(var(--accent)), rgb(var(--accent-alt)))",
                  }}
                  aria-hidden="true"
                />
              </a>
            );
          })}

          <span className="mx-2 h-5 w-px bg-[var(--hairline)]" aria-hidden="true" />
          <ThemeToggle />
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 inline-flex items-center gap-1.5 rounded-lg border border-hairline px-3.5 py-2 text-sm font-medium text-fg transition-colors hover:border-accent/50 hover:bg-tint"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            Résumé
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="grid h-9 w-9 place-items-center rounded-lg border border-hairline text-fg"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <Menu className="h-[18px] w-[18px]" aria-hidden="true" />
          </button>
        </div>
        </nav>
      </header>

      {/* Rendered outside <header>: its backdrop-filter would otherwise become
          the containing block for these fixed children, clipping them to the
          64px bar instead of the viewport. */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-[60] bg-black/50 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: calm ? 0.01 : 0.25 }}
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Menu"
              /* Opaque rather than `glass` — a drawer needs to hide what's
                 behind it, not tint it. */
              className="fixed inset-y-0 right-0 z-[70] flex w-[82%] max-w-xs flex-col border-l border-hairline bg-canvas-soft p-6 shadow-2xl md:hidden"
              initial={calm ? { opacity: 0 } : { x: "100%" }}
              animate={calm ? { opacity: 1 } : { x: 0 }}
              exit={calm ? { opacity: 0 } : { x: "100%" }}
              transition={{ duration: calm ? 0.01 : 0.32, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center justify-between">
                <span className="t-caption text-fg-muted">Menu</span>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="grid h-9 w-9 place-items-center rounded-lg border border-hairline text-fg"
                  aria-label="Close menu"
                  autoFocus
                >
                  <X className="h-[18px] w-[18px]" aria-hidden="true" />
                </button>
              </div>

              <div className="mt-8 flex flex-col">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    initial={calm ? false : { opacity: 0, x: 18 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: calm ? 0 : 0.08 + i * 0.05, duration: 0.35 }}
                    className={`border-b border-hairline py-4 font-display text-lg font-medium transition-colors ${
                      active === link.href.replace("#", "")
                        ? "text-accent-hi"
                        : "text-fg hover:text-accent-hi"
                    }`}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>

              <a
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="btn btn-primary mt-8"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                Download résumé
              </a>

              <p className="mt-auto pt-8 text-xs text-fg-faint">
                {profile.location}
              </p>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
