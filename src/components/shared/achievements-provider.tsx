"use client";

import {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Trophy } from "lucide-react";

interface Toast {
  id: number;
  title: string;
  description?: string;
}

interface AchievementsContextValue {
  unlock: (title: string, description?: string) => void;
}

const AchievementsContext = createContext<AchievementsContextValue | null>(
  null
);

export function useAchievements() {
  const ctx = useContext(AchievementsContext);
  if (!ctx) {
    throw new Error("useAchievements must be used within AchievementsProvider");
  }
  return ctx;
}

export function AchievementsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const counter = useRef(0);
  const seen = useRef(new Set<string>());

  const unlock = useCallback((title: string, description?: string) => {
    if (seen.current.has(title)) return;
    seen.current.add(title);
    const id = ++counter.current;
    setToasts((t) => [...t, { id, title, description }]);
    setTimeout(() => {
      setToasts((t) => t.filter((toast) => toast.id !== id));
    }, 4200);
  }, []);

  return (
    <AchievementsContext.Provider value={{ unlock }}>
      {children}
      <div className="pointer-events-none fixed right-4 bottom-4 z-[90] flex flex-col gap-2 sm:right-6 sm:bottom-6">
        <AnimatePresence>
          {toasts.map((t) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, x: 40, transition: { duration: 0.2 } }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="pointer-events-auto flex w-72 items-start gap-3 rounded-xl border border-primary/30 bg-surface/95 p-4 shadow-[0_8px_40px_rgba(0,0,0,0.4)] backdrop-blur"
            >
              <div className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary">
                <Trophy className="size-4" />
              </div>
              <div>
                <div className="font-mono text-[11px] tracking-wide text-primary uppercase">
                  Achievement unlocked
                </div>
                <div className="mt-0.5 text-sm font-medium">{t.title}</div>
                {t.description && (
                  <div className="mt-0.5 text-xs text-muted-foreground">
                    {t.description}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </AchievementsContext.Provider>
  );
}
