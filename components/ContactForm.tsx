"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { profile } from "@/lib/data";

type Status = "idle" | "sending" | "sent" | "handoff" | "error";

const field =
  "w-full rounded-xl border border-hairline bg-canvas-soft px-4 py-3 text-sm text-fg placeholder:text-fg-faint transition-colors focus:border-accent/60 focus:outline-none focus-visible:outline-none";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;

    setStatus("sending");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));

      if (res.ok && json.ok) {
        setStatus("sent");
        form.reset();
        return;
      }

      // No form service wired up yet — hand off to the visitor's mail client
      if (json.configured === false) {
        const subject = encodeURIComponent(`Portfolio enquiry from ${data.name || "a visitor"}`);
        const body = encodeURIComponent(
          `${data.message || ""}\n\n—\n${data.name || ""}\n${data.email || ""}`
        );
        window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
        setStatus("handoff");
        return;
      }

      setStatus("error");
      setError(json.error || "Something went wrong. Please email me directly.");
    } catch {
      setStatus("error");
      setError("Network error — please email me directly.");
    }
  }

  const busy = status === "sending";

  return (
    <div className="rounded-2xl border border-hairline bg-surface/60 p-6 sm:p-8">
      <AnimatePresence mode="wait">
        {status === "sent" ? (
          <motion.div
            key="sent"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex min-h-[380px] flex-col items-center justify-center text-center"
          >
            <span className="grid h-14 w-14 place-items-center rounded-full bg-emerald-500/15 text-emerald-500">
              <CheckCircle2 className="h-7 w-7" aria-hidden="true" />
            </span>
            <h3 className="t-h3 mt-5 text-fg">Message sent</h3>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-fg-muted">
              Thanks for reaching out — I&apos;ll get back to you within a couple of
              working days.
            </p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="mt-6 text-sm font-medium text-accent-hi hover:underline"
            >
              Send another
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={onSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            noValidate
          >
            <h3 className="t-h3 text-fg">Send a message</h3>
            <p className="mt-1.5 text-sm text-fg-muted">
              Tell me what you&apos;re building and I&apos;ll come back with
              thoughts, not a sales pitch.
            </p>

            <div className="mt-6 space-y-4">
              <div>
                <label htmlFor="cf-name" className="mb-1.5 block text-xs font-medium text-fg-soft">
                  Name
                </label>
                <input
                  id="cf-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  maxLength={100}
                  placeholder="Your name"
                  className={field}
                />
              </div>

              <div>
                <label htmlFor="cf-email" className="mb-1.5 block text-xs font-medium text-fg-soft">
                  Email
                </label>
                <input
                  id="cf-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  maxLength={200}
                  placeholder="you@company.com"
                  className={field}
                />
              </div>

              <div>
                <label htmlFor="cf-message" className="mb-1.5 block text-xs font-medium text-fg-soft">
                  Message
                </label>
                <textarea
                  id="cf-message"
                  name="message"
                  required
                  rows={5}
                  maxLength={4000}
                  placeholder="A little about the project, the timeline, and where you need help."
                  className={`${field} resize-y`}
                />
              </div>

              {/* Honeypot — hidden from humans, catnip for bots */}
              <div aria-hidden="true" className="absolute h-px w-px overflow-hidden opacity-0">
                <label htmlFor="cf-company">Company</label>
                <input id="cf-company" name="company" type="text" tabIndex={-1} autoComplete="off" />
              </div>
            </div>

            <button type="submit" disabled={busy} className="btn btn-primary mt-6 w-full disabled:opacity-70">
              {busy ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                  Sending…
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" aria-hidden="true" />
                  Send message
                </>
              )}
            </button>

            <p aria-live="polite" className="mt-3 min-h-[1.25rem] text-xs">
              {status === "error" && <span className="text-red-400">{error}</span>}
              {status === "handoff" && (
                <span className="text-fg-muted">
                  Opening your email app with the message ready to send.
                </span>
              )}
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
