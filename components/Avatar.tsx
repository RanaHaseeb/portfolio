import Image from "next/image";
import { profile } from "@/lib/data";

/**
 * Portrait mark. Renders the real headshot when `profile.photo` is set, and
 * otherwise falls back to a generative geometric monogram in the theme
 * colours. Both variants occupy the same box, so callers don't change.
 */
export default function Avatar({
  size = 320,
  className = "",
  id = "av",
}: {
  size?: number;
  className?: string;
  /** Unique per instance — SVG defs ids are document-global. */
  id?: string;
}) {
  const initials = `${profile.firstName[0]}${profile.lastName[0]}`;

  if (profile.photo) {
    return (
      <div
        className={`relative overflow-hidden rounded-[24%] ring-1 ring-accent/30 ${className}`}
        style={{ aspectRatio: "1 / 1" }}
      >
        <Image
          src={profile.photo}
          alt={`${profile.name}, ${profile.role}`}
          width={size}
          height={size}
          quality={90}
          // The hero copy is the LCP element, not this — let it load lazily
          // everywhere except the fold, where `priority` is cheap insurance.
          priority={size >= 320}
          sizes={`${size}px`}
          className="h-full w-full object-cover"
        />
        {/* Edge-only treatment. Deliberately no colour wash across the middle:
            an accent tint over skin tones reads as a broken white balance. */}
        <span
          className="pointer-events-none absolute inset-0 rounded-[24%]"
          style={{
            boxShadow:
              "inset 0 0 0 1px rgb(var(--accent) / 0.2), inset 0 -70px 60px -55px rgba(0,0,0,0.55)",
          }}
          aria-hidden="true"
        />
      </div>
    );
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 320 320"
      className={className}
      role="img"
      aria-label={`${profile.name} — monogram avatar`}
    >
      <defs>
        <linearGradient id={`${id}-mesh`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="rgb(var(--accent))" stopOpacity="0.9" />
          <stop offset="55%" stopColor="rgb(var(--accent-alt))" stopOpacity="0.55" />
          <stop offset="100%" stopColor="rgb(var(--accent))" stopOpacity="0.15" />
        </linearGradient>
        <linearGradient id={`${id}-edge`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="rgb(var(--accent-hi))" stopOpacity="0.85" />
          <stop offset="100%" stopColor="rgb(var(--accent-alt))" stopOpacity="0.2" />
        </linearGradient>
        <radialGradient id={`${id}-glow`} cx="30%" cy="22%" r="80%">
          <stop offset="0%" stopColor="rgb(var(--accent-hi))" stopOpacity="0.45" />
          <stop offset="100%" stopColor="rgb(var(--accent))" stopOpacity="0" />
        </radialGradient>
        <clipPath id={`${id}-clip`}>
          <rect x="20" y="20" width="280" height="280" rx="76" />
        </clipPath>
      </defs>

      {/* Plate */}
      <rect x="20" y="20" width="280" height="280" rx="76" fill="rgb(var(--surface))" />
      <g clipPath={`url(#${id}-clip)`}>
        <rect x="20" y="20" width="280" height="280" fill={`url(#${id}-mesh)`} opacity="0.28" />
        <rect x="20" y="20" width="280" height="280" fill={`url(#${id}-glow)`} />

        {/* Orbital rings — the "systems" motif used across the thumbnails */}
        <g fill="none" stroke="rgb(var(--accent-hi))" strokeOpacity="0.3">
          <circle cx="160" cy="168" r="104" />
          <circle cx="160" cy="168" r="74" strokeOpacity="0.2" />
          <ellipse cx="160" cy="168" rx="126" ry="52" strokeOpacity="0.16" transform="rotate(-24 160 168)" />
        </g>

        {/* Nodes on the outer ring */}
        <g fill="rgb(var(--accent-hi))">
          <circle cx="160" cy="64" r="5" />
          <circle cx="250" cy="220" r="4" fillOpacity="0.75" />
          <circle cx="70" cy="220" r="4" fillOpacity="0.75" />
        </g>

        {/* Baseline horizon */}
        <path
          d="M20 244 Q 90 214 160 240 T 300 232 L300 300 L20 300 Z"
          fill="rgb(var(--accent))"
          fillOpacity="0.14"
        />

        <text
          x="160"
          y="196"
          textAnchor="middle"
          fontFamily="var(--font-display), var(--font-geist-sans), system-ui, sans-serif"
          fontSize="104"
          fontWeight="700"
          letterSpacing="-4"
          fill="rgb(var(--fg))"
          fillOpacity="0.92"
        >
          {initials}
        </text>
      </g>

      <rect
        x="20.5"
        y="20.5"
        width="279"
        height="279"
        rx="75.5"
        fill="none"
        stroke={`url(#${id}-edge)`}
        strokeWidth="1.5"
      />
    </svg>
  );
}
