import { ArrowUpRight, FileText, Mail, MapPin } from "lucide-react";
import { Github, Linkedin } from "./BrandIcons";
import { profile } from "@/lib/data";
import { Reveal, Stagger, StaggerItem } from "./Motion";
import ContactForm from "./ContactForm";
import CopyEmail from "./CopyEmail";

/** `value` stays short so the three cards never truncate side by side. */
const socials = [
  { label: "GitHub", value: "RanaHaseeb", href: profile.github, Icon: Github, external: true },
  {
    label: "LinkedIn",
    value: "abdul-haseeb",
    href: profile.linkedin,
    Icon: Linkedin,
    external: true,
  },
  {
    label: "Email",
    value: "Message me directly",
    href: `mailto:${profile.email}`,
    Icon: Mail,
    external: false,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative mx-auto max-w-content scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 dot-bg opacity-60" aria-hidden="true" />

      <div className="relative grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
        {/* Pitch */}
        <div>
          <Reveal>
            <div className="flex items-center gap-2.5 t-eyebrow text-accent-hi">
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{
                  background:
                    "linear-gradient(130deg, rgb(var(--accent)), rgb(var(--accent-alt)))",
                }}
                aria-hidden="true"
              />
              Contact
            </div>
            <h2 className="t-h2 mt-5 text-fg">
              Let&apos;s build something <span className="gradient-text">worth shipping</span>.
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-fg-muted sm:text-lg">
              Have a project in mind, or looking for a technical lead who can architect
              it and then actually deliver it? Let&apos;s talk.
            </p>
          </Reveal>

          <Reveal delay={90} className="mt-8 flex flex-wrap items-center gap-3.5">
            <CopyEmail />
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              <FileText className="h-4 w-4" aria-hidden="true" />
              Download résumé
              <span className="pill ml-0.5">PDF</span>
            </a>
          </Reveal>

          <Reveal delay={150}>
            <p className="mt-7 inline-flex items-center gap-2 text-sm text-fg-muted">
              <MapPin className="h-4 w-4 text-accent-hi" aria-hidden="true" />
              {profile.location} — working with teams across time zones
            </p>
          </Reveal>

          <Stagger className="mt-9 grid gap-3 sm:grid-cols-3" step={0.07}>
            {socials.map(({ label, value, href, Icon, external }) => (
              <StaggerItem key={label} className="h-full">
                <a
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="card-hover glow-edge group flex h-full items-center gap-3 rounded-xl border border-hairline bg-surface/60 p-4"
                >
                  <span
                    className="grid h-9 w-9 shrink-0 place-items-center rounded-lg text-accent-hi ring-1 ring-accent/20"
                    style={{ background: "rgb(var(--accent) / 0.1)" }}
                  >
                    <Icon className="h-[17px] w-[17px]" aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block t-caption text-fg-faint">{label}</span>
                    <span className="block truncate text-xs text-fg" title={value}>
                      {value}
                    </span>
                  </span>
                  <ArrowUpRight
                    className="h-4 w-4 shrink-0 text-fg-faint transition-colors group-hover:text-accent-hi"
                    aria-hidden="true"
                  />
                </a>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        {/* Form */}
        <Reveal delay={120} x={24}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
