"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/section-heading";
import { DynamicIcon } from "@/components/shared/dynamic-icon";
import { skillCategories } from "@/data/skills";
import { cn } from "@/lib/utils";

const LEVEL_LABEL: Record<string, string> = {
  learning: "Learning",
  proficient: "Proficient",
  advanced: "Advanced",
  expert: "Expert",
};

export function Skills() {
  const [activeId, setActiveId] = useState(skillCategories[0].id);
  const active = skillCategories.find((c) => c.id === activeId)!;

  return (
    <section id="skills" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="02 · Skills"
          title="A stack built for shipping, end to end"
          description="Grouped the way I actually use them — not a logo wall. Bars track working proficiency, not years-on-a-CV."
        />

        <div className="mt-12 flex flex-wrap gap-2">
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveId(cat.id)}
              className={cn(
                "relative flex items-center gap-2 rounded-full border px-4 py-2 font-mono text-sm transition-colors",
                activeId === cat.id
                  ? "border-primary/40 bg-primary/10 text-primary"
                  : "border-border/60 text-muted-foreground hover:border-border hover:text-foreground"
              )}
            >
              <DynamicIcon name={cat.icon} className="size-4" />
              {cat.label}
            </button>
          ))}
        </div>

        <motion.div
          key={active.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="mt-10 grid gap-x-10 gap-y-7 sm:grid-cols-2"
        >
          {active.skills.map((skill, i) => (
            <div key={skill.name}>
              <div className="mb-2 flex items-baseline justify-between">
                <span className="text-sm font-medium">{skill.name}</span>
                <span className="font-mono text-[11px] tracking-wide text-muted-foreground uppercase">
                  {LEVEL_LABEL[skill.level]}
                </span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-muted">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-steel to-primary"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.xp}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
