"use client";

import type React from "react";
import { useEffect, useRef, useState } from "react";
import type { Project } from "@/lib/data";
import { ArrowUpRight } from "./icons";

/**
 * Adapted from 21st.dev "Project Showcase" by @jatin-yadav05.
 * Reworked for the Midnight Cobalt theme: shadcn CSS-var classes remapped to
 * the ink/cobalt/content tokens, lucide-react swapped for local SVG icons, and
 * the photo preview replaced with a themed gradient tile (no image assets
 * required). Keeps the lerp-based cursor-following preview. No extra deps.
 */

export default function ProjectShowcase({ projects }: { projects: Project[] }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [smoothPosition, setSmoothPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const lerp = (start: number, end: number, factor: number) =>
      start + (end - start) * factor;

    const animate = () => {
      setSmoothPosition((prev) => ({
        x: lerp(prev.x, mousePosition.x, 0.15),
        y: lerp(prev.y, mousePosition.y, 0.15),
      }));
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [mousePosition]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    }
  };

  const rect =
    typeof window !== "undefined"
      ? containerRef.current?.getBoundingClientRect()
      : undefined;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative"
    >
      {/* Cursor-following preview tile */}
      <div
        className="pointer-events-none fixed z-50 hidden overflow-hidden rounded-xl shadow-2xl md:block"
        style={{
          left: rect?.left ?? 0,
          top: rect?.top ?? 0,
          transform: `translate3d(${smoothPosition.x + 24}px, ${smoothPosition.y - 100}px, 0)`,
          opacity: isVisible ? 1 : 0,
          scale: isVisible ? "1" : "0.8",
          transition:
            "opacity 0.3s cubic-bezier(0.4,0,0.2,1), scale 0.3s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        <div className="relative h-[190px] w-[300px] overflow-hidden rounded-xl border border-white/10 bg-ink-700">
          {projects.map((project, index) => (
            <div
              key={project.name}
              className="absolute inset-0 flex flex-col justify-end p-5 transition-all duration-500 ease-out"
              style={{
                opacity: hoveredIndex === index ? 1 : 0,
                scale: hoveredIndex === index ? "1" : "1.08",
                filter: hoveredIndex === index ? "none" : "blur(10px)",
                background:
                  "radial-gradient(120% 120% at 15% 0%, rgba(74,128,255,0.35), transparent 55%), linear-gradient(160deg, #131b2b, #070a11)",
              }}
            >
              <div className="mb-2 flex flex-wrap gap-1.5">
                {project.tags.slice(0, 3).map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-cobalt/20 bg-cobalt/[0.12] px-2 py-0.5 font-mono text-[10px] text-cobalt-light"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <p className="text-lg font-semibold text-content">{project.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Project list */}
      <div className="space-y-0">
        {projects.map((project, index) => (
          <div
            key={project.name}
            className="group block"
            onMouseEnter={() => {
              setHoveredIndex(index);
              setIsVisible(true);
            }}
            onMouseLeave={() => {
              setHoveredIndex(null);
              setIsVisible(false);
            }}
          >
            <div className="relative border-t border-white/[0.08] py-5 transition-all duration-300 ease-out">
              <div
                className={`absolute inset-0 -mx-4 rounded-lg bg-cobalt/[0.06] px-4 transition-all duration-300 ease-out ${
                  hoveredIndex === index ? "scale-100 opacity-100" : "scale-95 opacity-0"
                }`}
              />

              <div className="relative flex items-start justify-between gap-4">
                <div className="min-w-0 flex-1">
                  <div className="inline-flex items-center gap-2">
                    <h3 className="text-lg font-medium tracking-tight text-content">
                      <span className="relative">
                        {project.name}
                        <span
                          className={`absolute -bottom-0.5 left-0 h-px bg-cobalt transition-all duration-300 ease-out ${
                            hoveredIndex === index ? "w-full" : "w-0"
                          }`}
                        />
                      </span>
                    </h3>
                    <ArrowUpRight
                      className={`h-4 w-4 text-cobalt-light transition-all duration-300 ease-out ${
                        hoveredIndex === index
                          ? "translate-x-0 translate-y-0 opacity-100"
                          : "-translate-x-2 translate-y-2 opacity-0"
                      }`}
                    />
                  </div>
                  <p
                    className={`mt-1 text-sm leading-relaxed transition-colors duration-300 ease-out ${
                      hoveredIndex === index ? "text-secondary" : "text-muted"
                    }`}
                  >
                    {project.summary}
                  </p>
                </div>

                <span className="shrink-0 font-mono text-xs text-muted">
                  {project.tags[0]}
                </span>
              </div>
            </div>
          </div>
        ))}
        <div className="border-t border-white/[0.08]" />
      </div>
    </div>
  );
}
