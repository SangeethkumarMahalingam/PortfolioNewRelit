import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, Layers3, Sparkles } from "lucide-react";
import React, { useMemo, useState } from "react";

export function ProjectCard({
  title,
  category,
  summary,
  highlights,
  stack,
  status,
  demoUrl,
}: {
  title: string;
  category: "XR" | "Web" | "System";
  summary: string;
  highlights: string[];
  stack: string[];
  status?: string;
  demoUrl?: string;
}) {
  const [expanded, setExpanded] = useState(false);

  const meta = useMemo(() => {
    if (category === "XR")
      return {
        icon: <Sparkles className="h-4 w-4 text-primary" />,
        pill: "bg-primary/10 text-primary border-primary/20",
      };
    if (category === "Web")
      return {
        icon: <Layers3 className="h-4 w-4 text-accent" />,
        pill: "bg-accent/10 text-accent border-accent/20",
      };
    return {
      icon: <Layers3 className="h-4 w-4 text-muted-foreground" />,
      pill: "bg-muted/60 text-foreground border-border/70",
    };
  }, [category]);

  return (
    <div className="group relative overflow-hidden rounded-2xl bg-card border border-border/70 shadow-soft hover:shadow-lift transition-all duration-300 hover:-translate-y-1">
      <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.035] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span
                className={cn(
                  "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold",
                  meta.pill,
                )}
              >
                {meta.icon}
                {category}
              </span>
              {status ? (
                <Badge
                  variant="secondary"
                  className="rounded-full border border-border/70 bg-background/60"
                >
                  {status}
                </Badge>
              ) : null}
            </div>
            <h3 className="mt-3 text-2xl font-bold leading-tight">{title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              {summary}
            </p>
          </div>

          <Button
            variant="secondary"
            className="rounded-xl border border-border/70 bg-background/70 hover:bg-muted/70 transition-all duration-200"
            onClick={() => setExpanded((v) => !v)}
          >
            {expanded ? "Less" : "More"}
            <ArrowRight
              className={cn(
                "ml-2 h-4 w-4 transition-transform duration-200",
                expanded ? "-rotate-90" : "rotate-0",
              )}
            />
          </Button>
        </div>

        <div
          className={cn(
            "grid transition-all duration-300 ease-out",
            expanded ? "grid-rows-[1fr] mt-5" : "grid-rows-[0fr] mt-0",
          )}
        >
          <div className="overflow-hidden">
            <div className="rounded-2xl bg-background/60 ring-soft p-4">
              <div className="text-xs font-semibold tracking-[0.18em] uppercase text-muted-foreground">
                Highlights
              </div>
              <ul className="mt-3 space-y-2 text-sm">
                {highlights.map((h) => (
                  <li key={h} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary/70 flex-none" />
                    <span className="text-foreground/90 leading-relaxed">
                      {h}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-2">
                {stack.map((s) => (
                  <Badge
                    key={s}
                    variant="outline"
                    className="rounded-full border-border/70 bg-card/70"
                  >
                    {s}
                  </Badge>
                ))}
              </div>

              {demoUrl && (
                <div className="mt-4">
                  <Button
                    size="sm"
                    className="rounded-xl shadow-soft hover:shadow-lift transition-all duration-300 w-full sm:w-auto"
                    onClick={() => window.open(demoUrl, "_blank")}
                  >
                    <Sparkles className="mr-2 h-4 w-4" />
                    View Demo
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
