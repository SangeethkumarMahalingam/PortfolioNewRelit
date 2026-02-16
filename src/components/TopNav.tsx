import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Download, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const items = [
  { label: "Home", href: "/" },
  { label: "Skills", href: "/#skills" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
];

function scrollToHash(hash: string) {
  const id = hash.replace("#", "");
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function TopNav({ resumeHref }: { resumeHref: string }) {
  const [location] = useLocation();
  const onNavClick = (href: string) => (e: React.MouseEvent) => {
    if (!href.includes("#")) return;
    e.preventDefault();
    const hash = href.split("#")[1] ? `#${href.split("#")[1]}` : "";
    if (location !== "/") {
      window.location.href = `/${hash}`;
      return;
    }
    scrollToHash(hash);
    history.replaceState(null, "", `/${hash}`);
  };

  return (
    <div className="sticky top-0 z-50">
      <div className="relative">
        <div className="absolute inset-0 mesh-bg" aria-hidden="true" />
        <div className="absolute inset-0 bg-background/60 backdrop-blur-xl" aria-hidden="true" />
        <div className="relative border-b border-border/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <div className="flex items-center justify-between gap-4">
              <Link
                href="/"
                className="group inline-flex items-center gap-2 rounded-xl px-2 py-2 focus-ring"
              >
                <div className="h-9 w-9 rounded-xl bg-card ring-soft shadow-soft grid place-items-center">
                  <span className="font-display text-lg font-bold leading-none">
                    S
                  </span>
                </div>
                <div className="hidden sm:block">
                  <div className="font-display text-base font-bold leading-tight">
                    Sangeethkumar
                  </div>
                  <div className="text-xs text-muted-foreground leading-tight">
                    XR Developer
                  </div>
                </div>
                <ArrowUpRight className="ml-1 h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200" />
              </Link>

              <div className="hidden md:flex items-center gap-1 rounded-2xl bg-card/70 ring-soft px-2 py-2">
                {items.map((it) => (
                  <Link
                    key={it.href}
                    href={it.href}
                    onClick={onNavClick(it.href)}
                    className={cn(
                      "px-3 py-2 rounded-xl text-sm font-semibold text-muted-foreground hover:text-foreground hover:bg-muted/70 transition-all duration-200 focus-ring",
                    )}
                  >
                    {it.label}
                  </Link>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <Button
                  variant="default"
                  className="rounded-xl shadow-soft hover:shadow-lift transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
                  onClick={() => window.open(resumeHref, "_blank")}
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
              </div>
            </div>

            <div className="mt-3 md:hidden flex flex-wrap gap-2">
              {items.map((it) => (
                <Link
                  key={it.href}
                  href={it.href}
                  onClick={onNavClick(it.href)}
                  className="px-3 py-2 rounded-xl text-xs font-semibold bg-card/70 ring-soft text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-all duration-200 focus-ring"
                >
                  {it.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
