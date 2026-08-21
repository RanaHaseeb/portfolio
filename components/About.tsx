import { Compass, MapPin, Sparkles, Timer } from "lucide-react";
import { profile } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import Avatar from "./Avatar";
import { Reveal, Stagger, StaggerItem } from "./Motion";

const facts = [
  { label: "Based in", value: "Lahore, Pakistan", Icon: MapPin },
  { label: "Experience", value: "8+ years", Icon: Timer },
  { label: "Focus", value: "Web & mobile delivery", Icon: Compass },
  { label: "Currently", value: "AI-integrated apps", Icon: Sparkles },
];

export default function About() {
  return (
    <section id="about" className="border-y border-hairline bg-canvas-soft/50">
      <div className="mx-auto max-w-content scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32">
        <SectionHeading
          eyebrow="About"
          title="A builder who ships"
          intro="Eight years in one company, four roles deep — long enough to see what actually gets products over the line."
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] lg:gap-16">
          {/* Portrait + facts */}
          <div className="order-2 lg:order-1">
            <Reveal x={-24}>
              <div className="relative mx-auto max-w-[240px] lg:mx-0">
                <div
                  className="pointer-events-none absolute -inset-6 rounded-full opacity-60 blur-2xl"
                  style={{
                    background:
                      "radial-gradient(circle at 45% 35%, rgb(var(--accent-alt) / 0.25), transparent 62%)",
                  }}
                  aria-hidden="true"
                />
                <Avatar size={240} className="relative h-auto w-full" id="about-av" />
              </div>
            </Reveal>

            <Stagger className="mt-8 grid grid-cols-2 gap-3" step={0.06}>
              {facts.map(({ label, value, Icon }) => (
                <StaggerItem
                  key={label}
                  className="card-hover rounded-xl border border-hairline bg-surface p-4"
                >
                  <Icon className="h-4 w-4 text-accent-hi" aria-hidden="true" />
                  <p className="mt-2.5 t-caption text-fg-faint">{label}</p>
                  <p className="mt-1 text-sm font-medium text-fg">{value}</p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          {/* Narrative */}
          <div className="order-1 space-y-5 lg:order-2">
            {profile.bio.map((para, i) => (
              <Reveal key={para} delay={i * 90}>
                <p className="text-base leading-relaxed text-fg-soft sm:text-lg">{para}</p>
              </Reveal>
            ))}

            <Reveal delay={180}>
              <div className="relative mt-9 rounded-2xl border border-hairline bg-surface/70 p-6 sm:p-7">
                <span
                  className="absolute left-0 top-6 h-12 w-1 rounded-r-full"
                  style={{
                    background:
                      "linear-gradient(180deg, rgb(var(--accent)), rgb(var(--accent-alt)))",
                  }}
                  aria-hidden="true"
                />
                <h3 className="t-caption text-accent-hi">What drives me</h3>
                <p className="mt-3.5 text-base leading-relaxed text-fg-soft">
                  {profile.drives}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
