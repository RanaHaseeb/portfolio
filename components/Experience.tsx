import { experience, experienceHighlights } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-content scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32">
      <SectionHeading
        eyebrow="Experience"
        title="Eight years, one company, four roles"
        intro="I've grown at Green Origin Pvt Ltd from associate engineer to senior technical project manager — deepening both the code and the delivery."
      />

      <div className="mt-14 grid gap-14 lg:grid-cols-[1fr_1fr]">
        <div className="relative">
          <div className="absolute bottom-2 left-[7px] top-2 w-px bg-gradient-to-b from-cobalt/50 via-white/10 to-transparent" aria-hidden="true" />
          <ol className="space-y-8">
            {experience.map((job, i) => (
              <Reveal as="li" key={job.role} delay={i * 70} className="relative pl-8">
                <span
                  className={`absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 ${
                    job.current
                      ? "border-cobalt bg-cobalt/30"
                      : "border-white/25 bg-ink"
                  }`}
                  aria-hidden="true"
                />
                <p className="font-mono text-xs tracking-wide text-cobalt-light/80">
                  {job.period}
                </p>
                <h3 className="mt-1.5 font-display text-lg font-semibold text-content">{job.role}</h3>
                <p className="text-sm text-muted">
                  {job.company} · {job.location}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>

        <Reveal delay={120}>
          <div className="rounded-2xl border border-white/[0.08] bg-ink-800/50 p-6 sm:p-7">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
              What I do
            </h3>
            <ul className="mt-5 space-y-4">
              {experienceHighlights.map((h) => (
                <li key={h} className="flex gap-3 text-sm leading-relaxed text-secondary">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cobalt" />
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
