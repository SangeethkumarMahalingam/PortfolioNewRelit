import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import React from "react";

export function FeatureCard({
  title,
  description,
  icon,
  tone = "neutral",
  chips = [],
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  tone?: "primary" | "accent" | "neutral";
  chips?: string[];
}) {
  const toneStyles =
    tone === "primary"
      ? "from-primary/12 via-primary/0 to-transparent"
      : tone === "accent"
        ? "from-accent/12 via-accent/0 to-transparent"
        : "from-foreground/6 via-foreground/0 to-transparent";

  const ring =
    tone === "primary"
      ? "ring-1 ring-primary/18"
      : tone === "accent"
        ? "ring-1 ring-accent/18"
        : "ring-1 ring-border/70";

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl bg-card shadow-soft hover:shadow-lift transition-all duration-300",
        "border border-border/70",
        "hover:-translate-y-1",
      )}
    >
      <div className={cn("absolute inset-0 bg-gradient-to-br", toneStyles)} />
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute -top-14 -right-14 h-40 w-40 rounded-full bg-primary/10 blur-2xl" />
      </div>

      <div className="relative p-6">
        <div className={cn("inline-flex items-center justify-center rounded-2xl p-3", ring, "bg-background/60 backdrop-blur")}>
          {icon}
        </div>
        <h3 className="mt-4 text-xl font-bold leading-tight">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>

        {chips.length ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {chips.map((c) => (
              <Badge
                key={c}
                variant="secondary"
                className="rounded-xl border border-border/70 bg-card/70 backdrop-blur"
              >
                {c}
              </Badge>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
