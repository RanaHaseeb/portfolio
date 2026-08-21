"use client";

import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/data";
import ProjectThumb from "./ProjectThumb";

export default function ProjectCard({
  project,
  onOpen,
  wide = false,
}: {
  project: Project;
  onOpen: (p: Project) => void;
  /** Wide bento tiles get a shallower cover and one extra line of copy. */
  wide?: boolean;
}) {
  return (
    <article className="h-full">
      <button
        type="button"
        onClick={() => onOpen(project)}
        aria-label={`View case study: ${project.name}`}
        className="card-hover glow-edge group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-hairline bg-surface/70 text-left"
      >
        {/* Cover */}
        <div className={`relative overflow-hidden ${wide ? "aspect-[16/6]" : "aspect-[16/9]"}`}>
          <ProjectThumb
            project={project}
            className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-[1.06]"
          />

          <span className="absolute left-4 top-4 rounded-md bg-black/35 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-white/90 backdrop-blur-sm">
            {project.kind}
          </span>

          {/* Hover affordance */}
          <div className="absolute inset-0 flex items-end justify-start bg-black/45 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-white/95 px-3 py-2 text-xs font-semibold text-slate-900">
              View case study
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </span>
          </div>
        </div>

        {/* Body */}
        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <div className="flex items-start justify-between gap-3">
            <h3 className="t-h3 text-fg">{project.name}</h3>
            <ArrowUpRight
              className="mt-1 h-4 w-4 shrink-0 -translate-x-1 translate-y-1 text-accent-hi opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
              aria-hidden="true"
            />
          </div>

          <p className="mt-2.5 text-sm leading-relaxed text-fg-muted">
            {project.summary}
          </p>

          {wide && project.outcome && (
            <p className="mt-3 border-l-2 border-accent/40 pl-3 text-sm leading-relaxed text-fg-soft">
              {project.outcome}
            </p>
          )}

          <div className="mt-auto flex flex-wrap gap-1.5 pt-5">
            {project.tags.map((t) => (
              <span key={t} className="pill">
                {t}
              </span>
            ))}
          </div>
        </div>
      </button>
    </article>
  );
}
