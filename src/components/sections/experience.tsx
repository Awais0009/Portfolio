import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { experience } from "@/data/experience";
import { Badge } from "@/components/ui/badge";

export function Experience() {
  return (
    <section id="experience" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="03 · Experience"
          title="Career timeline"
          description="Roles where I got to own delivery, not just tickets."
        />

        <div className="relative mt-16 space-y-12 border-l border-border/60 pl-8 sm:pl-10">
          {experience.map((role, i) => (
            <Reveal key={role.id} delay={i * 0.05}>
              <div className="relative">
                <span
                  className={
                    "absolute top-1.5 -left-[41px] size-3 rounded-full border-2 border-background sm:-left-[49px] " +
                    (role.current ? "bg-primary" : "bg-muted-foreground/50")
                  }
                />
                {role.current && (
                  <span className="absolute top-1.5 -left-[41px] size-3 animate-ping rounded-full bg-primary/60 sm:-left-[49px]" />
                )}

                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-display text-xl font-semibold">
                    {role.role}{" "}
                    <span className="text-muted-foreground">
                      · {role.company}
                    </span>
                  </h3>
                  <span className="font-mono text-xs text-muted-foreground">
                    {role.start} — {role.end}
                  </span>
                </div>

                <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
                  {role.summary}
                </p>

                <ul className="mt-4 space-y-1.5">
                  {role.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex gap-2 text-sm text-muted-foreground"
                    >
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-primary/60" />
                      {h}
                    </li>
                  ))}
                </ul>

                {role.stack && (
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {role.stack.map((s) => (
                      <Badge key={s} variant="secondary" className="font-mono">
                        {s}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
