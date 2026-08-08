"use client";

import { useRef } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { routeOrder } from "@/data/navigation";

const DISTANCE = 48;

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const prevIndex = useRef(routeOrder.indexOf(pathname));

  const currentIndex = routeOrder.indexOf(pathname);
  const direction = currentIndex >= prevIndex.current ? 1 : -1;
  prevIndex.current = currentIndex;

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={{ opacity: 0, x: direction * DISTANCE }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: direction * -DISTANCE }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
