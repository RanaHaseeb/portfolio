import Reveal from "./Reveal";

export default function SectionHeading({
  index,
  eyebrow,
  title,
  intro,
}: {
  index: string;
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <Reveal className="max-w-2xl">
      <div className="flex items-center gap-3 font-mono text-xs tracking-wider text-cobalt-light/80">
        <span>{index}</span>
        <span className="h-px w-8 bg-cobalt/40" />
        <span className="uppercase tracking-[0.2em]">{eyebrow}</span>
      </div>
      <h2 className="mt-4 text-3xl font-semibold text-content sm:text-4xl">
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
