import { GraduationCap } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal, RevealGroup, RevealItem } from "@/components/shared/reveal";
import { DynamicIcon } from "@/components/shared/dynamic-icon";
import { education, achievements } from "@/data/education";

export function Education() {
  return (
    <section id="education" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="05 · Education & Achievements"
          title="Foundations and unlocked milestones"
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            {education.map((edu) => (
              <div
                key={edu.id}
                className="rounded-2xl border border-border/60 bg-surface/50 p-7"
              >
                <GraduationCap className="size-8 text-primary" />
                <h3 className="mt-4 font-display text-lg font-semibold">
                  {edu.credential}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {edu.institution}
                </p>
                <div className="mt-4 flex items-center justify-between border-t border-border/60 pt-4 font-mono text-xs text-muted-foreground">
                  <span>{edu.detail}</span>
                  <span>{edu.period}</span>
                </div>
              </div>
            ))}
          </Reveal>

          <RevealGroup className="grid gap-4 sm:grid-cols-2">
            {achievements.map((a) => (
              <RevealItem key={a.id}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-border/60 bg-surface/50 p-6 transition-colors hover:border-primary/30">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <DynamicIcon name={a.icon} className="size-5" />
                  </div>
                  <h4 className="mt-4 font-display text-sm font-semibold">
                    {a.title}
                  </h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {a.description}
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
