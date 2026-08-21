"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export type Theme = "dark" | "light";

export const THEME_KEY = "ah-theme";

/** Runs before first paint (see layout.tsx) so the correct theme is already
 *  on <html> and there is no flash of the wrong palette. */
export const themeInitScript = `(function(){try{var t=localStorage.getItem(${JSON.stringify(
  THEME_KEY
)});if(t!=="light"&&t!=="dark"){t="dark"}document.documentElement.setAttribute("data-theme",t)}catch(e){document.documentElement.setAttribute("data-theme","dark")}})();`;

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme");
    setTheme(current === "light" ? "light" : "dark");
    setMounted(true);
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem(THEME_KEY, next);
    } catch {
      /* private mode — the toggle still works for this session */
    }
  };

  const label = theme === "dark" ? "Switch to light theme" : "Switch to dark theme";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className={`relative grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-hairline text-fg-soft transition-colors hover:border-accent/45 hover:text-fg ${className}`}
    >
      {/* Both icons render; opacity crossfades so there's no layout shift.
          Before mount they're hidden to keep SSR and client markup identical. */}
      <Sun
        className="absolute h-[17px] w-[17px] transition-all duration-300"
        style={{
          opacity: mounted && theme === "dark" ? 1 : 0,
          transform: mounted && theme === "dark" ? "rotate(0deg) scale(1)" : "rotate(-70deg) scale(0.6)",
        }}
        aria-hidden="true"
      />
      <Moon
        className="absolute h-[17px] w-[17px] transition-all duration-300"
        style={{
          opacity: mounted && theme === "light" ? 1 : 0,
          transform: mounted && theme === "light" ? "rotate(0deg) scale(1)" : "rotate(70deg) scale(0.6)",
        }}
        aria-hidden="true"
      />
    </button>
  );
}
