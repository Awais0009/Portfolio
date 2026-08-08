"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { navSections } from "@/data/navigation";
import { useAchievements } from "@/components/shared/achievements-provider";

const STORAGE_KEY = "portfolio:visited-sections";
const TOTAL = navSections.length;

interface ExplorationContextValue {
  visited: Set<string>;
  total: number;
}

const ExplorationContext = createContext<ExplorationContextValue>({
  visited: new Set(),
  total: TOTAL,
});

export function useExplorationState() {
  return useContext(ExplorationContext);
}

function readStored(): Set<string> {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return new Set(raw ? (JSON.parse(raw) as string[]) : []);
  } catch {
    return new Set();
  }
}

export function ExplorationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [visited, setVisited] = useState<Set<string>>(new Set());
  const pathname = usePathname();
  const { unlock } = useAchievements();

  useEffect(() => {
    setVisited(readStored());
  }, []);

  useEffect(() => {
    const section = navSections.find((s) => s.href === pathname);
    if (!section) return;

    setVisited((prev) => {
      if (prev.has(section.id)) return prev;
      const next = new Set(prev).add(section.id);
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify([...next]));

      unlock(`${section.label} unlocked`, `${next.size}/${TOTAL} sections explored`);
      if (next.size === TOTAL) {
        setTimeout(
          () =>
            unlock(
              "Full Stack Explorer",
              "You've been through every section — nice."
            ),
          600
        );
      }
      return next;
    });
  }, [pathname, unlock]);

  return (
    <ExplorationContext.Provider value={{ visited, total: TOTAL }}>
      {children}
    </ExplorationContext.Provider>
  );
}
