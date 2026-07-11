import { projects, additionalProjects } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="work" className="mx-auto max-w-content scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32">
      <SectionHeading
        index="01"
        eyebrow="Selected work"
        title="Products I've shipped"
        intro="A selection of platforms I've led or built end to end — from investment tooling and AI assistants to cross-platform mobile apps."
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {featured.map((p, i) => (
          <Reveal key={p.name} delay={(i % 2) * 80} className="h-full">
            <article className="card-hover flex h-full flex-col rounded-2xl border border-white/[0.08] bg-ink-800/60 p-6 sm:p-7">
              <div className="mb-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-cobalt/20 bg-cobalt/[0.08] px-2 py-1 font-mono text-[11px] text-cobalt-light"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <h3 className="text-xl font-semibold text-content">{p.name}</h3>
              <p className="mt-2 text-sm text-secondary">{p.summary}</p>
              <ul className="mt-4 space-y-2">
                {p.points.map((pt) => (
                  <li key={pt} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cobalt/70" />
                    {pt}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-14">
        <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
          More projects
        </h3>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {rest.map((p) => (
            <div
              key={p.name}
              className="card-hover rounded-xl border border-white/[0.07] bg-ink-800/40 p-5"
            >
              <h4 className="text-sm font-medium text-content">{p.name}</h4>
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
