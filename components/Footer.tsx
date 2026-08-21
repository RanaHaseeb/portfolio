import { ArrowUp, Mail } from "lucide-react";
import { Github, Linkedin } from "./BrandIcons";
import { navLinks, profile } from "@/lib/data";

const socials = [
  { href: profile.github, Icon: Github, label: "GitHub", external: true },
  { href: profile.linkedin, Icon: Linkedin, label: "LinkedIn", external: true },
  { href: `mailto:${profile.email}`, Icon: Mail, label: "Email", external: false },
];

export default function Footer() {
  return (
    <footer className="border-t border-hairline bg-canvas-soft/50">
      <div className="mx-auto max-w-content px-5 py-14 sm:px-8">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          {/* Brand */}
          <div className="max-w-xs">
            <a href="#top" className="inline-flex items-center gap-2.5" aria-label={`${profile.name} — back to top`}>
              <span
                className="grid h-9 w-9 place-items-center rounded-lg font-display text-sm font-bold tracking-tight text-accent-hi ring-1 ring-accent/30"
                style={{ background: "rgb(var(--accent) / 0.12)" }}
              >
                AH
              </span>
              <span className="font-display text-sm font-semibold tracking-tight text-fg">
                {profile.name}
              </span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-fg-muted">
              {profile.role} — taking web and mobile products from architecture to release.
            </p>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer">
            <h2 className="t-caption text-fg-faint">Explore</h2>
            <ul className="mt-4 grid grid-cols-2 gap-x-10 gap-y-2.5 sm:grid-cols-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-fg-muted transition-colors hover:text-accent-hi"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={profile.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-fg-muted transition-colors hover:text-accent-hi"
                >
                  Résumé
                </a>
              </li>
            </ul>
          </nav>

          {/* Socials */}
          <div>
            <h2 className="t-caption text-fg-faint">Elsewhere</h2>
            <div className="mt-4 flex items-center gap-2">
              {socials.map(({ href, Icon, label, external }) => (
                <a
                  key={label}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-lg border border-hairline text-fg-muted transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/45 hover:text-accent-hi"
                >
                  <Icon className="h-[17px] w-[17px]" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col-reverse items-center justify-between gap-4 border-t border-hairline pt-7 sm:flex-row">
          <p className="text-xs text-fg-faint">
            © {new Date().getFullYear()} {profile.name}. Built with Next.js, Tailwind CSS,
            and Framer Motion.
          </p>
          <a
            href="#top"
            className="group inline-flex items-center gap-1.5 text-xs text-fg-muted transition-colors hover:text-accent-hi"
          >
            Back to top
            <ArrowUp
              className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
