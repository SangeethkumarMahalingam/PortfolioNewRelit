import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { FileX2, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 mesh-bg" aria-hidden="true" />
      <div className="absolute inset-0 grain" aria-hidden="true" />
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="rounded-3xl bg-card/80 backdrop-blur border border-border/70 shadow-lift p-8 sm:p-10">
          <div className="h-12 w-12 rounded-2xl bg-background/70 ring-soft grid place-items-center">
            <FileX2 className="h-6 w-6 text-primary" />
          </div>
          <h1 className="mt-6 text-3xl sm:text-4xl font-bold leading-tight">
            Page not found
          </h1>
          <p className="mt-3 text-base text-muted-foreground leading-relaxed">
            The page you’re looking for doesn’t exist. Head back to the portfolio.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link href="/" className="inline-flex">
              <Button
                className="rounded-xl shadow-soft hover:shadow-lift transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
                onClick={() => {}}
              >
                <Home className="mr-2 h-4 w-4" />
                Go Home
              </Button>
            </Link>

            <Button
              variant="secondary"
              className="rounded-xl border border-border/70 bg-background/60 hover:bg-muted/70 transition-all duration-200"
              onClick={() => window.history.back()}
            >
              Go Back
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
