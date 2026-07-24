import { skills } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section
      id="skills"
      className="border-y border-white/[0.06] bg-ink-900/40"
    >
      <div className="mx-auto max-w-content scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32">
        <SectionHeading
          eyebrow="Toolkit"
          title="Technologies I work with"
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => (
            <Reveal key={group.label} delay={(i % 3) * 70} className="h-full">
              <div className="card-hover glow-edge h-full rounded-2xl border border-white/[0.08] bg-ink-800/50 p-6">
                <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-cobalt-light/80">
                  {group.label}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-white/[0.07] bg-white/[0.03] px-2.5 py-1.5 text-xs text-secondary"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
