import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function ExperienceTimeline({
  items,
}: {
  items: {
    company: string;
    role: string;
    period: string;
    bullets: string[];
    tags: string[];
  }[];
}) {
  return (
    <div className="relative">
      <div className="absolute left-3 top-1 bottom-1 w-px bg-border/80" aria-hidden="true" />
      <div className="space-y-6">
        {items.map((e, idx) => (
          <div
            key={`${e.company}-${idx}`}
            className="relative pl-10"
          >
            <div className="absolute left-0 top-2 h-6 w-6 rounded-full bg-card ring-soft shadow-soft grid place-items-center">
              <div className="h-2.5 w-2.5 rounded-full bg-primary" />
            </div>

            <div className={cn("rounded-2xl bg-card border border-border/70 shadow-soft hover:shadow-lift transition-all duration-300", "p-6")}>
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold leading-tight">{e.role}</h3>
                  <div className="mt-1 text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground/90">{e.company}</span>
                    <span className="mx-2 text-border">•</span>
                    <span>{e.period}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {e.tags.map((t) => (
                    <Badge
                      key={t}
                      variant="secondary"
                      className="rounded-full border border-border/70 bg-background/60"
                    >
                      {t}
                    </Badge>
                  ))}
                </div>
              </div>

              <ul className="mt-4 space-y-2 text-sm">
                {e.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent/70 flex-none" />
                    <span className="text-foreground/90 leading-relaxed">
                      {b}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
