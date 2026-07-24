import { projects, additionalProjects } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import ProjectShowcase from "./ProjectShowcase";

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="work" className="mx-auto max-w-content scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32">
      <SectionHeading
        eyebrow="Selected work"
        title="Products I've shipped"
        intro="A selection of platforms I've led or built end to end — from investment tooling and AI assistants to cross-platform mobile apps."
      />

      <Reveal className="mx-auto mt-12 max-w-3xl">
        <ProjectShowcase projects={featured} />
      </Reveal>

      <Reveal className="mt-14">
        <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
          More projects
        </h3>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {rest.map((p) => (
            <div
              key={p.name}
              className="card-hover glow-edge rounded-xl border border-white/[0.07] bg-ink-800/40 p-5"
            >
              <h4 className="font-display text-sm font-medium text-content">{p.name}</h4>
              <p className="mt-1.5 text-xs leading-relaxed text-muted">{p.summary}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span key={t} className="font-mono text-[10px] text-cobalt-light/70">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal className="mt-8">
        <p className="text-sm text-muted">
          <span className="text-secondary">Also: </span>
          {additionalProjects.join("  ·  ")}
        </p>
      </Reveal>
    </section>
  );
}
