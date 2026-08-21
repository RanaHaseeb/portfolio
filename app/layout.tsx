import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Space_Grotesk } from "next/font/google";
import { profile } from "@/lib/data";
import Cursor from "@/components/Cursor";
import { themeInitScript } from "@/components/ThemeToggle";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const siteUrl = "https://abdulhaseeb.dev";

const description =
  "Senior Technical Project Manager and full-stack engineer with 8+ years shipping web and cross-platform mobile products across Laravel, React, Node.js, and Flutter.";

const title = `${profile.name} — ${profile.role}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s — ${profile.name}`,
  },
  description,
  applicationName: profile.name,
  keywords: [
    "Abdul Haseeb",
    "Technical Project Manager",
    "Full-stack engineer",
    "Delivery lead",
    "React",
    "Laravel",
    "Node.js",
    "Flutter",
    "Next.js",
    "TypeScript",
  ],
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: `${profile.name} — Portfolio`,
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: profile.name,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#080b12" },
    { media: "(prefers-color-scheme: light)", color: "#fafafc" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable} ${display.variable}`}
    >
      <head>
        {/* Applies the stored theme before first paint — no palette flash */}
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        {/* Scroll reveals are server-rendered at opacity:0 and animated in by
            Framer Motion. Without JS that state would never clear, so force
            everything visible when scripting is unavailable. */}
        <noscript>
          <style>{`[style*="opacity:0"]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body>
        <a
          href="#main"
          className="sr-only z-[100] rounded-lg bg-[rgb(var(--accent-solid))] px-4 py-2 text-sm font-medium text-white focus-visible:not-sr-only focus-visible:fixed focus-visible:left-4 focus-visible:top-4"
        >
          Skip to content
        </a>
        <Cursor />
        {children}
      </body>
    </html>
  );
}
