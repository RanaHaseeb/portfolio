import { ImageResponse } from "next/og";
import { profile, stats } from "@/lib/data";

export const alt = `${profile.name} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Generated at build time — keeps the social card in sync with the data file
 *  instead of drifting from a hand-exported PNG. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          backgroundColor: "#080b12",
          backgroundImage:
            "radial-gradient(1100px 700px at 88% -10%, #3a2f8f 0%, transparent 58%), radial-gradient(900px 620px at 2% 8%, #1d3596 0%, transparent 55%)",
          color: "#e9edf5",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 60,
              height: 60,
              borderRadius: 16,
              background: "rgba(96,128,250,0.16)",
              border: "1px solid rgba(150,176,255,0.4)",
              color: "#96b0ff",
              fontSize: 26,
              fontWeight: 700,
            }}
          >
            AH
          </div>
          <div style={{ display: "flex", fontSize: 24, color: "#96b0ff", letterSpacing: 2 }}>
            {profile.role.toUpperCase()}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 104,
              fontWeight: 700,
              letterSpacing: -4,
              lineHeight: 1.02,
            }}
          >
            {profile.name}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 22,
              fontSize: 34,
              color: "#b0b9cb",
              maxWidth: 900,
              lineHeight: 1.3,
            }}
          >
            {profile.valueProp}
          </div>
        </div>

        <div style={{ display: "flex", gap: 56, borderTop: "1px solid rgba(255,255,255,0.12)", paddingTop: 30 }}>
          {stats.map((s) => (
            <div key={s.label} style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", fontSize: 42, fontWeight: 700 }}>
                {s.value}
                {s.suffix}
              </div>
              <div style={{ display: "flex", fontSize: 20, color: "#8a94aa", marginTop: 6 }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    size
  );
}
