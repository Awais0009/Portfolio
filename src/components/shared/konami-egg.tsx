"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const KONAMI = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

export function KonamiEgg() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    let progress: string[] = [];
    function onKey(e: KeyboardEvent) {
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      progress = [...progress, key].slice(-KONAMI.length);
      if (progress.join(",") === KONAMI.join(",")) {
        setActive(true);
        progress = [];
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (!active) return;
    document.documentElement.classList.add("konami-mode");
    const t = setTimeout(() => {
      setActive(false);
      document.documentElement.classList.remove("konami-mode");
    }, 4500);
    return () => clearTimeout(t);
  }, [active]);

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          className="fixed top-6 left-1/2 z-[100] -translate-x-1/2"
        >
          <div className="flex items-center gap-2 rounded-full border border-primary/30 bg-surface/95 px-4 py-2 font-mono text-sm text-primary shadow-[0_0_40px_oklch(0.74_0.16_55/25%)] backdrop-blur">
            <Sparkles className="size-4" />
            <span>achievement unlocked: konami engineer</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
