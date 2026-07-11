import { profile } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const facts = [
  { label: "Based in", value: "Lahore, Pakistan" },
  { label: "Experience", value: "8+ years" },
  { label: "Focus", value: "Web & mobile delivery" },
  { label: "Currently", value: "AI-integrated apps" },
];

export default function About() {
  return (
    <section
      id="about"
      className="border-y border-white/[0.06] bg-ink-900/40"
    >
      <div className="mx-auto max-w-content scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32">
        <SectionHeading index="02" eyebrow="About" title="A builder who ships" />

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.5fr_1fr]">
          <Reveal>
            <div className="space-y-5">
              {profile.bio.map((para) => (
                <p key={para} className="text-base leading-relaxed text-secondary sm:text-lg">
                  {para}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={100}>
            <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.05]">
              {facts.map((f) => (
                <div key={f.label} className="bg-ink-800 p-5">
                  <dt className="font-mono text-[11px] uppercase tracking-wider text-muted">
                    {f.label}
                  </dt>
                  <dd className="mt-1.5 text-sm font-medium text-content">{f.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
