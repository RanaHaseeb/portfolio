import { profile } from "@/lib/data";
import { Github, Linkedin, Mail } from "./icons";

export default function Footer() {
  const socials = [
    { href: `mailto:${profile.email}`, icon: Mail, label: "Email", external: false },
    { href: profile.linkedin, icon: Linkedin, label: "LinkedIn", external: true },
    { href: profile.github, icon: Github, label: "GitHub", external: true },
  ];

  return (
    <footer className="border-t border-white/[0.06]">
      <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-5 px-5 py-9 sm:flex-row sm:px-8">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} {profile.name}. Built with Next.js &amp; Tailwind.
        </p>
        <div className="flex items-center gap-2">
          {socials.map((s) => {
            const Icon = s.icon;
            return (
              <a
                key={s.label}
                href={s.href}
                target={s.external ? "_blank" : undefined}
                rel={s.external ? "noopener noreferrer" : undefined}
                aria-label={s.label}
                className="grid h-9 w-9 place-items-center rounded-lg border border-white/[0.08] text-secondary transition-colors hover:border-cobalt/40 hover:text-content"
              >
                <Icon className="h-[17px] w-[17px]" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
