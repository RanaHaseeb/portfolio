"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { additionalProjects, projects, type Project } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import ProjectDialog from "./ProjectDialog";
import { Reveal, Stagger, StaggerItem } from "./Motion";

/** Bento column spans (on a 6-col grid) keyed to featured order: 4-2 / 2-4 / 3-3 */
const SPANS = [
  "lg:col-span-4",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-4",
  "lg:col-span-3",
  "lg:col-span-3",
];

const COLLAPSED_COUNT = 4;

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);
  const [expanded, setExpanded] = useState(false);
  const calm = useReducedMotion();

  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);
  const visibleRest = expanded ? rest : rest.slice(0, COLLAPSED_COUNT);

  return (
    <section id="work" className="mx-auto max-w-content scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32">
      <SectionHeading
        eyebrow="Selected work"
        title="Products I've shipped end to end"
        intro="From investment platforms and multi-site operations suites to AI assistants and cross-platform mobile apps — here's the work I've led from first scope to release."
      />

      {/* ---------------- Featured bento ---------------- */}
      <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-6" step={0.07}>
        {featured.map((project, i) => {
          const wide = SPANS[i] === "lg:col-span-4";
          return (
            <StaggerItem
              key={project.name}
              as="div"
              className={`${SPANS[i] ?? "lg:col-span-2"} ${
                wide ? "sm:col-span-2" : ""
              }`}
            >
              <ProjectCard project={project} onOpen={setSelected} wide={wide} />
            </StaggerItem>
          );
        })}
      </Stagger>

      {/* ---------------- More projects ---------------- */}
      <div className="mt-20">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h3 className="t-eyebrow text-accent-hi">More projects</h3>
            <p className="mt-2 text-sm text-fg-muted">
              Side builds and smaller client work — {rest.length} more, across mobile, AI, and data.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            className="inline-flex items-center gap-1.5 rounded-lg border border-hairline px-3.5 py-2 text-sm font-medium text-fg transition-colors hover:border-accent/50 hover:bg-tint"
          >
            {expanded ? "Show less" : `Show all ${rest.length}`}
            <ChevronDown
              className={`h-4 w-4 transition-transform duration-300 ${
                expanded ? "rotate-180" : ""
              }`}
              aria-hidden="true"
            />
          </button>
        </Reveal>

        <motion.div layout={!calm} className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <AnimatePresence initial={false}>
            {visibleRest.map((p) => (
              <motion.button
                key={p.name}
                type="button"
                layout={!calm}
                initial={calm ? { opacity: 0 } : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={calm ? { opacity: 0 } : { opacity: 0, y: -8 }}
                transition={{ duration: calm ? 0.01 : 0.32, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => setSelected(p)}
                aria-label={`View details: ${p.name}`}
                className="card-hover glow-edge flex flex-col rounded-xl border border-hairline bg-surface/60 p-5 text-left"
              >
                <span className="t-caption text-fg-faint">{p.kind}</span>
                <h4 className="mt-1.5 font-display text-sm font-semibold text-fg">{p.name}</h4>
                <p className="mt-1.5 text-xs leading-relaxed text-fg-muted">{p.summary}</p>
                <span className="mt-auto flex flex-wrap gap-1.5 pt-4">
                  {p.tags.map((t) => (
                    <span key={t} className="pill">
                      {t}
                    </span>
                  ))}
                </span>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <Reveal className="mt-10" delay={80}>
        <p className="rounded-xl border border-hairline bg-tint px-5 py-4 text-sm leading-relaxed text-fg-muted">
          <span className="font-medium text-fg-soft">Also shipped: </span>
          {additionalProjects.join(" · ")}
        </p>
      </Reveal>

      <ProjectDialog project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
