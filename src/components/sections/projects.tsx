import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/shared/icons";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { TiltCard } from "@/components/shared/tilt-card";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projects";
import type { Project } from "@/types";
import { cn } from "@/lib/utils";

export function Projects() {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="04 · Projects"
          title="Things I've built and shipped"
          description="Full write-ups on the stack and what each one actually does — not just a logo grid."
        />

        <div className="mt-14 space-y-8">
          {featured && (
            <Reveal>
              <FeaturedProjectCard project={featured} />
            </Reveal>
          )}

          <div className="grid gap-6 sm:grid-cols-2">
            {rest.map((project, i) => (
              <Reveal key={project.id} delay={i * 0.06}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedProjectCard({ project }: { project: Project }) {
  return (
    <TiltCard className="rounded-2xl">
      <div className="relative overflow-hidden rounded-2xl border border-primary/25 bg-surface p-8 sm:p-10">
        <div
          aria-hidden
          className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-primary/10 blur-[100px]"
        />
        <div className="relative flex flex-wrap items-start justify-between gap-4">
          <div>
            <Badge className="mb-4 bg-primary/15 font-mono text-primary hover:bg-primary/15">
              Featured · {project.year}
            </Badge>
            <h3 className="font-display text-3xl font-semibold tracking-tight">
              {project.name}
            </h3>
            <p className="mt-2 font-mono text-sm text-primary">
              {project.tagline}
            </p>
          </div>
          <div className="flex gap-2">
            {project.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex size-10 items-center justify-center rounded-lg border border-border/60 text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                aria-label={link.label}
              >
                {link.label === "GitHub" ? (
                  <GithubIcon className="size-4.5" />
                ) : (
                  <ExternalLink className="size-4.5" />
                )}
              </a>
            ))}
          </div>
        </div>

        <p className="relative mt-6 max-w-2xl text-muted-foreground">
          {project.description}
        </p>

        <div className="relative mt-8 grid gap-8 sm:grid-cols-2">
          <div>
            <h4 className="mb-3 font-mono text-xs tracking-wide text-muted-foreground uppercase">
              Core features
            </h4>
            <ul className="space-y-2">
              {project.features.map((f) => (
                <li key={f} className="flex gap-2 text-sm text-muted-foreground">
                  <span className="mt-2 size-1 shrink-0 rounded-full bg-primary/70" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-3 font-mono text-xs tracking-wide text-muted-foreground uppercase">
              Stack
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.stack.map((s) => (
                <Badge key={s} variant="outline" className="font-mono">
                  {s}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </TiltCard>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const accent = project.accent === "steel" ? "text-steel" : "text-primary";
  return (
    <TiltCard className="h-full rounded-2xl">
      <div className="flex h-full flex-col rounded-2xl border border-border/60 bg-surface/60 p-7 transition-colors hover:border-border">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-display text-lg font-semibold">
              {project.name}
            </h3>
            <p className={cn("mt-1 font-mono text-xs", accent)}>
              {project.tagline}
            </p>
          </div>
          <div className="flex gap-1.5">
            {project.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex size-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-primary"
                aria-label={link.label}
              >
                <GithubIcon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <p className="mt-3 flex-1 text-sm text-muted-foreground">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.stack.slice(0, 5).map((s) => (
            <Badge key={s} variant="secondary" className="font-mono text-[11px]">
              {s}
            </Badge>
          ))}
          {project.stack.length > 5 && (
            <Badge variant="secondary" className="font-mono text-[11px]">
              +{project.stack.length - 5}
            </Badge>
          )}
        </div>
      </div>
    </TiltCard>
  );
}
