import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <Reveal className="max-w-2xl">
      <div className="flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.22em] text-cobalt-light/80">
        <span
          className="h-1.5 w-1.5 rounded-full"
          style={{ background: "linear-gradient(130deg, #4a80ff, #7c5cff)" }}
          aria-hidden="true"
        />
        {eyebrow}
      </div>
      <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-content sm:text-[2.6rem] sm:leading-[1.05]">
        {title}
      </h2>
      {intro && (
        <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
          {intro}
        </p>
      )}
    </Reveal>
  );
}
