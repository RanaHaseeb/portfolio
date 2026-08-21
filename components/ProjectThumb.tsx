import type { Project } from "@/lib/data";

/**
 * Deterministic abstract artwork per project — no image assets needed.
 * The tile carries its own colour (derived from `project.hue`), so it reads
 * the same in both themes; the linework is white-on-colour throughout.
 */
export default function ProjectThumb({
  project,
  className = "",
}: {
  project: Project;
  className?: string;
}) {
  const { hue, art = "orbit", kind, name } = project;
  const id = `t-${name.replace(/[^a-z0-9]/gi, "").toLowerCase()}`;
  // Muted mid-saturation and a short hue rotation — distinct per project,
  // but never louder than the surrounding UI in either theme.
  const from = `hsl(${hue} 46% 52%)`;
  const to = `hsl(${(hue + 28) % 360} 44% 30%)`;

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <svg
        viewBox="0 0 400 240"
        preserveAspectRatio="xMidYMid slice"
        className="h-full w-full"
        role="img"
        aria-label={`${name} — ${kind} cover art`}
      >
        <defs>
          <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={from} />
            <stop offset="100%" stopColor={to} />
          </linearGradient>
          <radialGradient id={`${id}-hl`} cx="18%" cy="8%" r="90%">
            <stop offset="0%" stopColor="#fff" stopOpacity="0.34" />
            <stop offset="100%" stopColor="#fff" stopOpacity="0" />
          </radialGradient>
          <linearGradient id={`${id}-scrim`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#000" stopOpacity="0" />
            <stop offset="100%" stopColor="#000" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        <rect width="400" height="240" fill={`url(#${id}-bg)`} />
        <rect width="400" height="240" fill={`url(#${id}-hl)`} />

        <g
          fill="none"
          stroke="#fff"
          strokeOpacity="0.42"
          strokeWidth="1.25"
          className="transition-opacity duration-500"
        >
          {art === "orbit" && (
            <>
              <circle cx="300" cy="52" r="118" />
              <circle cx="300" cy="52" r="82" strokeOpacity="0.28" />
              <circle cx="300" cy="52" r="46" strokeOpacity="0.2" />
              <ellipse cx="300" cy="52" rx="150" ry="60" strokeOpacity="0.22" transform="rotate(-28 300 52)" />
              <circle cx="182" cy="52" r="5" fill="#fff" fillOpacity="0.9" stroke="none" />
              <circle cx="352" cy="120" r="3.5" fill="#fff" fillOpacity="0.6" stroke="none" />
            </>
          )}

          {art === "stack" && (
            <>
              {[0, 1, 2, 3].map((i) => (
                <rect
                  key={i}
                  x={70 + i * 14}
                  y={40 + i * 34}
                  width="230"
                  height="52"
                  rx="10"
                  strokeOpacity={0.5 - i * 0.09}
                />
              ))}
              <path d="M70 66 h230 M84 100 h230" strokeOpacity="0.18" />
            </>
          )}

          {art === "grid" && (
            <>
              {Array.from({ length: 7 }, (_, i) => (
                <line key={`v${i}`} x1={40 + i * 54} y1="10" x2={40 + i * 54} y2="230" strokeOpacity="0.22" />
              ))}
              {Array.from({ length: 5 }, (_, i) => (
                <line key={`h${i}`} x1="10" y1={26 + i * 48} x2="390" y2={26 + i * 48} strokeOpacity="0.22" />
              ))}
              <rect x="94" y="74" width="108" height="96" rx="8" strokeOpacity="0.7" fill="#fff" fillOpacity="0.09" />
              <rect x="256" y="26" width="80" height="144" rx="8" strokeOpacity="0.45" />
            </>
          )}

          {art === "wave" && (
            <>
              {[0, 1, 2, 3].map((i) => (
                <path
                  key={i}
                  d={`M-10 ${96 + i * 26} Q 90 ${44 + i * 26} 200 ${96 + i * 26} T 410 ${96 + i * 26}`}
                  strokeOpacity={0.5 - i * 0.1}
                />
              ))}
              <circle cx="200" cy="122" r="6" fill="#fff" fillOpacity="0.85" stroke="none" />
            </>
          )}

          {art === "nodes" && (
            <>
              <path d="M92 172 L168 76 L268 128 L336 60" strokeOpacity="0.5" />
              <path d="M92 172 L268 128 M168 76 L336 60" strokeOpacity="0.22" />
              {[
                [92, 172, 9],
                [168, 76, 12],
                [268, 128, 8],
                [336, 60, 6],
              ].map(([cx, cy, r], i) => (
                <circle key={i} cx={cx} cy={cy} r={r} fill="#fff" fillOpacity="0.9" stroke="none" />
              ))}
              <circle cx="168" cy="76" r="26" strokeOpacity="0.35" />
            </>
          )}

          {art === "bars" && (
            <>
              {[120, 168, 96, 200, 144, 176].map((h, i) => (
                <rect
                  key={i}
                  x={62 + i * 48}
                  y={230 - h}
                  width="30"
                  height={h}
                  rx="6"
                  fill="#fff"
                  fillOpacity={0.16 + (i % 3) * 0.1}
                  stroke="#fff"
                  strokeOpacity="0.32"
                />
              ))}
              <line x1="30" y1="230" x2="370" y2="230" strokeOpacity="0.4" />
            </>
          )}
        </g>

        {/* Soft bottom vignette — settles the art into the card below it */}
        <rect y="120" width="400" height="120" fill={`url(#${id}-scrim)`} />
      </svg>
    </div>
  );
}
