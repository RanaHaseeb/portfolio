"use client";

import { useEffect, useRef } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ExternalLink, Target, TrendingUp, X } from "lucide-react";
import type { Project } from "@/lib/data";
import ProjectThumb from "./ProjectThumb";

export default function ProjectDialog({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const calm = useReducedMotion();
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!project) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") return onClose();
      if (e.key !== "Tab") return;

      // Keep focus inside the dialog while it's open
      const focusables = panelRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (!focusables?.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    const restoreTo = document.activeElement as HTMLElement | null;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    closeRef.current?.focus();

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
      restoreTo?.focus?.();
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-[80] flex items-end justify-center p-0 sm:items-center sm:p-6">
          <motion.div
            className="absolute inset-0 bg-black/65 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: calm ? 0.01 : 0.25 }}
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-dialog-title"
            className="relative flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-t-3xl border border-hairline bg-canvas-soft shadow-2xl sm:rounded-3xl"
            initial={calm ? { opacity: 0 } : { opacity: 0, y: 28, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={calm ? { opacity: 0 } : { opacity: 0, y: 20, scale: 0.985 }}
            transition={{ duration: calm ? 0.01 : 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Close case study"
              className="absolute right-4 top-4 z-10 grid h-9 w-9 place-items-center rounded-lg border border-white/20 bg-black/40 text-white backdrop-blur transition-colors hover:bg-black/60"
            >
              <X className="h-[18px] w-[18px]" aria-hidden="true" />
            </button>

            <div className="relative aspect-[16/7] shrink-0">
              <ProjectThumb project={project} className="absolute inset-0" />
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
                <span className="rounded-md bg-black/40 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-white/90 backdrop-blur-sm">
                  {project.kind}
                </span>
                <h2
                  id="project-dialog-title"
                  className="mt-2.5 font-display text-2xl font-semibold tracking-tight text-white drop-shadow sm:text-3xl"
                >
                  {project.name}
                </h2>
              </div>
            </div>

            <div className="overflow-y-auto p-5 sm:p-7">
              <p className="text-base leading-relaxed text-fg-soft">{project.summary}</p>

              {(project.problem || project.outcome) && (
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {project.problem && (
                    <div className="rounded-xl border border-hairline bg-surface p-4">
                      <p className="flex items-center gap-2 t-caption text-fg-faint">
                        <Target className="h-3.5 w-3.5" aria-hidden="true" />
                        The problem
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-fg-soft">
                        {project.problem}
                      </p>
                    </div>
                  )}
                  {project.outcome && (
                    <div className="rounded-xl border border-accent/25 bg-accent/[0.07] p-4">
                      <p className="flex items-center gap-2 t-caption text-accent-hi">
                        <TrendingUp className="h-3.5 w-3.5" aria-hidden="true" />
                        The outcome
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-fg-soft">
                        {project.outcome}
                      </p>
                    </div>
                  )}
                </div>
              )}

              <h3 className="mt-7 t-caption text-fg-faint">What I built</h3>
              <ul className="mt-3 space-y-3">
                {project.points.map((p) => (
                  <li key={p} className="flex gap-3 text-sm leading-relaxed text-fg-soft">
                    <span
                      className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                      aria-hidden="true"
                    />
                    {p}
                  </li>
                ))}
              </ul>

              <h3 className="mt-7 t-caption text-fg-faint">Stack</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tags.map((t) => (
                  <span key={t} className="pill pill-accent">
                    {t}
                  </span>
                ))}
              </div>

              {project.href && (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary mt-7"
                >
                  Visit live site
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
