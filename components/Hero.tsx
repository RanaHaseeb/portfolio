import { profile, stats } from "@/lib/data";
import { ArrowRight, Mail } from "./icons";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 grid-bg" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-[34rem] w-[34rem] rounded-full animate-float"
        style={{
          background:
            "radial-gradient(circle, rgba(74,128,255,0.22), transparent 62%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-content px-5 pb-20 pt-36 sm:px-8 sm:pt-44">
        <div className="animate-fade-up">
          <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="font-mono text-xs tracking-wider text-secondary">
              Available for new projects
            </span>
          </div>

          <p className="mb-5 font-mono text-xs uppercase tracking-[0.28em] text-cobalt-light/90 sm:text-sm">
            {profile.role}
          </p>

          <h1 className="text-[clamp(2.75rem,8vw,5.5rem)] font-semibold leading-[1.02] text-content">
            {profile.firstName}{" "}
            <span className="gradient-text">{profile.lastName}</span>
          </h1>

          <p className="mt-3 text-lg text-secondary sm:text-xl">{profile.subrole}</p>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {profile.tagline}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3.5">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-xl bg-cobalt px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-cobalt-dark"
            >
              View my work
              <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-white/12 px-5 py-3 text-sm font-medium text-content transition-colors hover:border-cobalt/50 hover:bg-white/[0.03]"
            >
              <Mail className="h-4 w-4" />
              Get in touch
            </a>
          </div>
        </div>

        <dl className="mt-16 grid grid-cols-3 gap-6 border-t border-white/[0.07] pt-8 sm:mt-20 sm:max-w-xl sm:gap-10">
          {stats.map((s) => (
            <div key={s.label}>
              <dt className="text-3xl font-semibold tracking-tight text-content sm:text-4xl">
                {s.value}
              </dt>
              <dd className="mt-1 text-xs text-muted sm:text-sm">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
