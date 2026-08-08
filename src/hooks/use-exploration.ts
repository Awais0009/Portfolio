"use client";

import { useCallback, useEffect, useState } from "react";
import { navSections } from "@/data/navigation";

const STORAGE_KEY = "portfolio:visited-sections";
const TOTAL = navSections.length;

function read(): Set<string> {
  if (typeof window === "undefined") return new Set();
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return new Set(raw ? (JSON.parse(raw) as string[]) : []);
  } catch {
    return new Set();
  }
}

function write(set: Set<string>) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify([...set]));
}

export function useExploration() {
  const [visited, setVisited] = useState<Set<string>>(new Set());
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setVisited(read());
    setHydrated(true);
  }, []);

  const markVisited = useCallback((id: string) => {
    setVisited((prev) => {
      if (prev.has(id)) return prev;
      const next = new Set(prev).add(id);
      write(next);
      return next;
    });
  }, []);

  return { visited, total: TOTAL, hydrated, markVisited };
}
