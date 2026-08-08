import { Reveal } from "@/components/shared/reveal";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <Reveal className={cn(align === "center" && "text-center")}>
      <div
        className={cn(
          "flex items-center gap-3 font-mono text-xs tracking-widest text-primary uppercase",
          align === "center" && "justify-center"
        )}
      >
        <span className="h-px w-8 bg-primary/50" />
        {eyebrow}
      </div>
      <h2
        className={cn(
          "mt-4 max-w-2xl text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl",
          align === "center" && "mx-auto"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 max-w-xl text-muted-foreground",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
