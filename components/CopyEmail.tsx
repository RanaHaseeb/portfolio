"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Copy } from "lucide-react";
import { profile } from "@/lib/data";

export default function CopyEmail() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(false), 1800);
    return () => clearTimeout(t);
  }, [copied]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
    } catch {
      // Clipboard blocked (insecure context / permissions) — select it instead
      // so the visitor can copy manually.
      const sel = window.getSelection();
      const node = document.getElementById("copy-email-text");
      if (node && sel) {
        const range = document.createRange();
        range.selectNodeContents(node);
        sel.removeAllRanges();
        sel.addRange(range);
      }
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="group relative inline-flex items-center gap-2.5 rounded-xl border border-hairline bg-surface/70 px-4 py-3 text-sm transition-colors hover:border-accent/50 hover:bg-tint"
    >
      <span id="copy-email-text" className="font-mono text-fg">
        {profile.email}
      </span>
      <span className="text-fg-muted transition-colors group-hover:text-accent-hi">
        {copied ? (
          <Check className="h-4 w-4 text-emerald-500" aria-hidden="true" />
        ) : (
          <Copy className="h-4 w-4" aria-hidden="true" />
        )}
      </span>
      <span className="sr-only" aria-live="polite">
        {copied ? "Email address copied to clipboard" : "Copy email address"}
      </span>

      <AnimatePresence>
        {copied && (
          <motion.span
            initial={{ opacity: 0, y: 6, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.94 }}
            transition={{ duration: 0.18 }}
            className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-fg px-2.5 py-1 text-xs font-medium text-canvas"
          >
            Copied!
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}
