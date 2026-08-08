import { Reveal, RevealGroup, RevealItem } from "@/components/shared/reveal";
import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/shared/section-heading";

const STATS = [
  { label: "Years shipping code", value: "3+" },
  { label: "Full-stack projects", value: "6+" },
  { label: "CGPA at NUST", value: "3.56" },
];

export function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="01 · About"
          title="A software engineer who likes finishing what he starts"
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <p className="text-balance text-lg leading-relaxed text-muted-foreground">
              {profile.summary}
            </p>

            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border/60 pt-8">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-3xl font-semibold text-primary">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <RevealGroup className="space-y-4">
            {profile.about.map((item) => (
              <RevealItem key={item.label}>
                <div className="group rounded-xl border border-border/60 bg-surface/50 p-6 transition-colors hover:border-primary/30">
                  <div className="mb-2 font-mono text-xs tracking-wide text-primary uppercase">
                    {item.label}
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.body}
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
