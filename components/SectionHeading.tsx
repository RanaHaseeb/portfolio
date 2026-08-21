import { Reveal } from "./Motion";

export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
}) {
  const centered = align === "center";

  return (
    <Reveal className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <div
        className={`flex items-center gap-2.5 t-eyebrow text-accent-hi ${
          centered ? "justify-center" : ""
        }`}
      >
        <span
          className="h-1.5 w-1.5 rounded-full"
          style={{
            background:
              "linear-gradient(130deg, rgb(var(--accent)), rgb(var(--accent-alt)))",
          }}
          aria-hidden="true"
        />
        {eyebrow}
      </div>
      <h2 className="t-h2 mt-5 text-fg">{title}</h2>
      {intro && (
        <p className="mt-4 text-base leading-relaxed text-fg-muted sm:text-lg">
          {intro}
        </p>
      )}
    </Reveal>
  );
}
