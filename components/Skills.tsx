import {
  Brain,
  Layout,
  Server,
  Smartphone,
  Users,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { skills, type SkillGroup } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import { Stagger, StaggerItem } from "./Motion";

const ICONS: Record<SkillGroup["icon"], LucideIcon> = {
  frontend: Layout,
  backend: Server,
  mobile: Smartphone,
  ai: Brain,
  leadership: Users,
  platform: Wrench,
};

export default function Skills() {
  return (
    <section id="toolkit" className="border-y border-hairline bg-canvas-soft/50">
      <div className="mx-auto max-w-content scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32">
        <SectionHeading
          eyebrow="Toolkit"
          title="What I build with"
          intro="Grouped by where it sits in a product rather than dumped in one list — this is the stack I actually reach for on delivery."
        />

        <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" step={0.07}>
          {skills.map((group) => {
            const Icon = ICONS[group.icon];
            return (
              <StaggerItem key={group.label} className="h-full">
                <div className="card-hover glow-edge flex h-full flex-col rounded-2xl border border-hairline bg-surface/60 p-6">
                  <span
                    className="grid h-10 w-10 place-items-center rounded-xl text-accent-hi ring-1 ring-accent/25"
                    style={{ background: "rgb(var(--accent) / 0.1)" }}
                  >
                    <Icon className="h-[19px] w-[19px]" aria-hidden="true" />
                  </span>

                  <h3 className="t-h3 mt-4 text-fg">{group.label}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-fg-muted">
                    {group.blurb}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2 pt-1">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-lg border border-hairline bg-tint px-2.5 py-1.5 text-xs text-fg-soft transition-colors hover:border-accent/40 hover:text-fg"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
