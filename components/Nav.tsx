"use client";

import { useEffect, useState } from "react";
import { navLinks, profile } from "@/lib/data";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState<string>("");

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

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "glass border-b border-white/[0.06]" : "border-b border-transparent"
      }`}
    >
      {/* Scroll progress */}
      <div
        className="absolute inset-x-0 top-0 h-px origin-left"
        style={{
          transform: `scaleX(${progress})`,
          background: "linear-gradient(90deg, #4a80ff, #7c5cff)",
          transition: "transform 0.1s linear",
        }}
        aria-hidden="true"
      />

      <nav className="mx-auto flex h-16 max-w-content items-center justify-between px-5 sm:px-8">
        <a href="#top" className="group flex items-center gap-2.5" aria-label="Home">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-cobalt/15 font-mono text-sm font-medium text-cobalt-light ring-1 ring-cobalt/25">
            AH
          </span>
          <span className="font-display text-sm font-medium tracking-tight text-content">
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
                  isActive ? "text-content" : "text-secondary hover:text-content"
                }`}
              >
                {link.label}
                <span
                  className={`absolute inset-x-3.5 -bottom-0.5 h-px origin-left rounded-full transition-transform duration-300 ${
                    isActive ? "scale-x-100" : "scale-x-0"
                  }`}
                  style={{ background: "linear-gradient(90deg, #4a80ff, #7c5cff)" }}
                  aria-hidden="true"
                />
              </a>
            );
          })}
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 rounded-lg border border-white/10 px-3.5 py-2 text-sm font-medium text-content transition-colors hover:border-cobalt/50 hover:bg-cobalt/10"
          >
            Résumé
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 text-content md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="glass border-t border-white/[0.06] md:hidden">
          <div className="mx-auto flex max-w-content flex-col px-5 py-3 sm:px-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-2 py-3 text-sm transition-colors ${
                  active === link.href.replace("#", "")
                    ? "text-content"
                    : "text-secondary hover:text-content"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-1 rounded-lg border border-white/10 px-2 py-3 text-sm font-medium text-content"
            >
              Download résumé
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
