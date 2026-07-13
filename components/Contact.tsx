import { profile } from "@/lib/data";
import Reveal from "./Reveal";
import { Mail, Github, Linkedin, Download, ArrowUpRight } from "./icons";

export default function Contact() {
  const links = [
    {
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
      icon: Mail,
      external: false,
    },
    {
      label: "LinkedIn",
      value: "in/abdul-haseeb",
      href: profile.linkedin,
      icon: Linkedin,
      external: true,
    },
    {
      label: "GitHub",
      value: "github.com/RanaHaseeb",
      href: profile.github,
      icon: Github,
      external: true,
    },
  ];

  return (
    <section id="contact" className="relative mx-auto max-w-content scroll-mt-24 px-5 py-24 sm:px-8 sm:py-36">
      <Reveal className="text-center">
        <div className="flex items-center justify-center gap-3 font-mono text-xs tracking-wider text-cobalt-light/80">
          <span className="h-px w-8 bg-cobalt/40" />
          <span className="uppercase tracking-[0.2em]">05 — Contact</span>
          <span className="h-px w-8 bg-cobalt/40" />
        </div>
        <h2 className="mx-auto mt-6 max-w-2xl text-4xl font-semibold text-content sm:text-5xl">
          Let&apos;s build something{" "}
          <span className="gradient-text">worth shipping</span>.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
          Whether you need a technical lead, a full-stack engineer, or a delivery
          partner who can do both — I&apos;d love to hear about your project.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3.5">
          <a
            href={`mailto:${profile.email}`}
            className="group inline-flex items-center gap-2 rounded-xl bg-cobalt px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-cobalt-dark"
          >
            <Mail className="h-4 w-4" />
            {profile.email}
          </a>
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-white/12 px-5 py-3 text-sm font-medium text-content transition-colors hover:border-cobalt/50 hover:bg-white/[0.03]"
          >
            <Download />
            Download résumé
          </a>
        </div>
      </Reveal>

      <Reveal delay={120} className="mt-14">
        <div className="grid gap-4 sm:grid-cols-3">
          {links.map((l) => {
            const Icon = l.icon;
            return (
              <a
                key={l.label}
                href={l.href}
                target={l.external ? "_blank" : undefined}
                rel={l.external ? "noopener noreferrer" : undefined}
                className="card-hover group flex items-center justify-between gap-3 rounded-xl border border-white/[0.08] bg-ink-800/50 p-5"
              >
                <span className="flex min-w-0 flex-1 items-center gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-cobalt/10 text-cobalt-light ring-1 ring-cobalt/20">
                    <Icon className="h-[18px] w-[18px]" />
                  </span>
                  <span className="min-w-0 text-left">
                    <span className="block font-mono text-[11px] uppercase tracking-wider text-muted">
                      {l.label}
                    </span>
                    <span className="block truncate text-sm text-content" title={l.value}>
                      {l.value}
                    </span>
                  </span>
                </span>
                <ArrowUpRight className="shrink-0 text-muted transition-colors group-hover:text-cobalt-light" />
              </a>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
