import React from "react";
import { cn } from "@/lib/utils";

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
  rightSlot,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  rightSlot?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("scroll-mt-28", className)}>
      <div className="flex items-end justify-between gap-6">
        <div className="max-w-2xl">
          {eyebrow ? (
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.22em] uppercase text-muted-foreground">
              <span className="h-px w-10 bg-border/80" />
              <span>{eyebrow}</span>
            </div>
          ) : null}
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold leading-[1.05]">
            {title}
          </h2>
          {description ? (
            <p className="mt-3 text-base sm:text-lg text-muted-foreground leading-relaxed">
              {description}
            </p>
          ) : null}
        </div>
        {rightSlot ? <div className="hidden md:block">{rightSlot}</div> : null}
      </div>

      <div className="mt-8">{children}</div>
    </section>
  );
}
