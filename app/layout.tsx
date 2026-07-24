import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Space_Grotesk } from "next/font/google";
import { profile } from "@/lib/data";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const description =
  "Senior Technical Project Manager and full-stack engineer with 8+ years shipping web and cross-platform mobile products across Laravel, React, Node.js, and Flutter.";

export const metadata: Metadata = {
  metadataBase: new URL("https://abdulhaseeb.dev"),
  title: `${profile.name} — ${profile.role}`,
  description,
  keywords: [
    "Abdul Haseeb",
    "Technical Project Manager",
    "Full-stack engineer",
    "React",
    "Laravel",
    "Node.js",
    "Flutter",
    "Next.js",
  ],
  authors: [{ name: profile.name }],
  openGraph: {
    title: `${profile.name} — ${profile.role}`,
    description,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.role}`,
    description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable} ${display.variable}`}>
      <body>{children}</body>
    </html>
  );
}
