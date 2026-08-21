import { Building2, Download, MapPin } from "lucide-react";
import { experience, profile } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import { Reveal } from "./Motion";

export default function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-content scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32"
    >
      <SectionHeading
        eyebrow="Experience"
        title="Eight years, one company, four roles"
        intro="I've grown at Green Origin Pvt Ltd from associate engineer to senior technical project manager — deepening both the code and the delivery."
      />

      <ol className="relative mt-14 space-y-6">
        {/* Spine — starts and ends at the first and last node */}
        <span
          className="absolute left-[11px] top-3 bottom-3 w-px sm:left-[15px]"
          style={{
            background:
              "linear-gradient(180deg, rgb(var(--accent) / 0.55), var(--hairline-strong) 55%, transparent)",
          }}
          aria-hidden="true"
        />

        {experience.map((job, i) => (
          <Reveal
            as="li"
            key={job.role}
            delay={i * 90}
            x={24}
            className="relative pl-10 sm:pl-14"
          >
            {/* Node */}
            <span
              className={`absolute left-0 top-2.5 grid h-6 w-6 place-items-center rounded-full border-2 sm:h-8 sm:w-8 ${
                job.current
                  ? "border-accent bg-accent/20"
                  : "border-strong bg-canvas"
              }`}
              aria-hidden="true"
            >
              <span
                className={`h-1.5 w-1.5 rounded-full ${
                  job.current ? "bg-accent-hi" : "bg-[rgb(var(--fg-faint))]"
                }`}
              />
              {job.current && (
                <span className="absolute inset-0 animate-ping rounded-full border border-accent/50" />
              )}
            </span>

            <div className="card-hover glow-edge rounded-2xl border border-hairline bg-surface/60 p-5 sm:p-7">
              <div className="flex flex-wrap items-center gap-3">
                <span className="pill pill-accent">{job.period}</span>
                {job.current && (
                  <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-emerald-500">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
                    Current
                  </span>
                )}
              </div>

              <h3 className="t-h3 mt-3.5 text-fg">{job.role}</h3>

              <p className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-fg-muted">
                <span className="inline-flex items-center gap-1.5">
                  <Building2 className="h-3.5 w-3.5" aria-hidden="true" />
                  {job.company}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                  {job.location}
                </span>
              </p>

              <ul className="mt-5 space-y-3">
                {job.achievements.map((a) => (
                  <li key={a} className="flex gap-3 text-sm leading-relaxed text-fg-soft">
                    <span
                      className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                      aria-hidden="true"
                    />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </ol>

      <Reveal className="mt-12 flex justify-center" delay={100}>
        <a
          href={profile.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-ghost"
        >
          <Download className="h-4 w-4" aria-hidden="true" />
          Download full résumé
        </a>
      </Reveal>
    </section>
  );
}
