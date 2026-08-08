"use client";

import { useEffect, useRef } from "react";

/**
 * A radial "signal" glow that follows the pointer across the whole page.
 * Pure CSS-variable updates on rAF — no re-renders, so it stays cheap
 * even on long scroll pages.
 */
export function CursorSpotlight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;
    let x = 0;
    let y = 0;

    function onMove(e: PointerEvent) {
      x = e.clientX;
      y = e.clientY;
      if (!frame) {
        frame = requestAnimationFrame(() => {
          ref.current?.style.setProperty("--spot-x", `${x}px`);
          ref.current?.style.setProperty("--spot-y", `${y}px`);
          frame = 0;
        });
      }
    }

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-30 hidden md:block"
      style={
        {
          "--spot-x": "50%",
          "--spot-y": "20%",
          background:
            "radial-gradient(600px circle at var(--spot-x) var(--spot-y), oklch(0.74 0.16 55 / 6%), transparent 70%)",
        } as React.CSSProperties
      }
    />
  );
}
