import profileImg from "@/assets/profile.jpeg";
import { useEffect, useMemo, useState } from "react";
import { TopNav } from "@/components/TopNav";
import { Section } from "@/components/Section";
import { FeatureCard } from "@/components/FeatureCard";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { ProjectCard } from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import {
  ArrowDown,
  CheckCircle2,
  Code2,
  Cuboid,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";
import { usePortfolioData } from "@/hooks/use-portfolio";

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Home() {
  const { data } = usePortfolioData();
  const [copied, setCopied] = useState(false);

  const [contact, setContact] = useState({
    name: "",
    email: "",
    message: "",
  });

  const heroChips = useMemo(
    () => [
      "Unity (C#)",
      "XR Interaction Toolkit",
      "OpenXR",
      "WebXR",
      "Angular",
      "TypeScript",
    ],
    [],
  );

  useEffect(() => {
    const hash = window.location.hash?.replace("#", "");
    if (hash) {
      setTimeout(() => scrollToId(hash), 60);
    }
  }, []);

  const onCopyEmail = async () => {
    const email = data.email || "";
    if (!email) {
      toast({
        title: "Email not set",
        description:
          "Update the email in client/src/hooks/use-portfolio.ts and try again.",
        variant: "destructive",
      });
      return;
    }
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      toast({
        title: "Copied",
        description: "Email copied to clipboard.",
      });
      window.setTimeout(() => setCopied(false), 1200);
    } catch {
      toast({
        title: "Copy failed",
        description: "Your browser blocked clipboard access.",
        variant: "destructive",
      });
    }
  };

  const onSendEmail = () => {
    const email = data.email || "";
    if (!email) return;
    window.location.href = `mailto:${email}`;
  };

  const onSubmitContact = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contact.name.trim() || !contact.email.trim() || !contact.message.trim()) {
      toast({
        title: "Missing details",
        description: "Please fill in name, email, and message.",
        variant: "destructive",
      });
      return;
    }
    
    // Construct mailto link
    const subject = encodeURIComponent(`Message from ${contact.name}`);
    const body = encodeURIComponent(contact.message);
    window.location.href = `mailto:${data.email}?subject=${subject}&body=${body}`;
    
    toast({
      title: "Opening email client",
      description: "Redirecting to your email app...",
    });
    setContact({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <TopNav resumeHref={data.resumeHref} />

      <main className="relative">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 mesh-bg" aria-hidden="true" />
          <div className="absolute inset-0 opacity-70" aria-hidden="true" />
          <div className="absolute inset-0 grain" aria-hidden="true" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 pb-12 sm:pb-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              <div className="lg:col-span-7 rise-in">
                <div className="inline-flex items-center gap-2 rounded-full bg-card/70 ring-soft px-3 py-1.5 text-xs font-semibold text-muted-foreground backdrop-blur">
                  <MapPin className="h-4 w-4 text-primary" />
                  {data.location}
                  <span className="mx-2 text-border">•</span>
                  <span className="text-foreground/90">XR Development</span>
                </div>

                <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[0.98]">
                  <span className="block">{data.headline}</span>
                </h1>
                <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                  {data.subheadline}
                </p>

                <div className="mt-7 flex flex-col sm:flex-row gap-3 sm:items-center">
                  <Button
                    className="rounded-xl shadow-soft hover:shadow-lift transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
                    onClick={() => window.open(data.resumeHref, "_blank")}
                  >
                    <Sparkles className="mr-2 h-4 w-4" />
                    Download Resume
                  </Button>

                  <Button
                    variant="secondary"
                    className="rounded-xl border border-border/70 bg-card/70 hover:bg-muted/70 transition-all duration-200"
                    onClick={() => scrollToId("projects")}
                  >
                    View Projects
                    <ArrowDown className="ml-2 h-4 w-4" />
                  </Button>

                  <Button
                    variant="outline"
                    className="rounded-xl border-border/70 bg-background/60 hover:bg-muted/70 transition-all duration-200"
                    onClick={onCopyEmail}
                  >
                    {copied ? (
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                    ) : (
                      <Mail className="mr-2 h-4 w-4" />
                    )}
                    Copy Email
                  </Button>
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  {heroChips.map((c) => (
                    <span
                      key={c}
                      className="rounded-full border border-border/70 bg-card/60 px-3 py-1 text-xs font-semibold text-foreground/85 backdrop-blur"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 fade-in">
                <div className="glass rounded-3xl p-5 sm:p-6 relative overflow-hidden">
                  <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-primary/15 blur-3xl" />
                  <div className="absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-accent/12 blur-3xl" />

                  <div className="relative">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <div className="text-xs font-semibold tracking-[0.22em] uppercase text-muted-foreground">
                          Profile
                        </div>
                        <div className="mt-2 font-display text-2xl font-bold leading-tight">
                          {data.name}
                        </div>
                        <div className="mt-1 text-sm text-muted-foreground">
                          XR Developer • Web-to-XR progression
                        </div>
                      </div>

                      <div className="h-16 w-16 rounded-2xl bg-card ring-soft shadow-soft overflow-hidden">
                        <img
                          src={profileImg}
                          alt="Profile"
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>

                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="rounded-2xl bg-background/60 ring-soft p-4">
                        <div className="text-xs font-semibold tracking-[0.22em] uppercase text-muted-foreground">
                          Focus
                        </div>
                        <div className="mt-2 text-sm leading-relaxed text-foreground/90">
                          Immersive labs, guided simulations, interaction systems, and deployment-ready builds.
                        </div>
                      </div>
                      <div className="rounded-2xl bg-background/60 ring-soft p-4">
                        <div className="text-xs font-semibold tracking-[0.22em] uppercase text-muted-foreground">
                          Strength
                        </div>
                        <div className="mt-2 text-sm leading-relaxed text-foreground/90">
                          UI clarity—first in the browser, now in 3D spaces.
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 rounded-2xl bg-background/60 ring-soft p-4">
                      <div className="flex items-center gap-2 text-sm font-semibold">
                        <Code2 className="h-4 w-4 text-accent" />
                        Web foundation → immersive systems
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                        I started by building robust, user-friendly dashboards and interfaces—then applied the same discipline to spatial UX and XR workflows.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-18 space-y-16">
          <Section
            id="skills"
            eyebrow="Capabilities"
            title="Skills that ship"
            description="Clean, minimal interfaces—backed by a technical toolkit for immersive XR development and reliable web UI engineering."
            rightSlot={
              <Button
                variant="secondary"
                className="rounded-xl border border-border/70 bg-card/70 hover:bg-muted/70 transition-all duration-200"
                onClick={() => scrollToId("experience")}
              >
                See Experience
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
            }
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 stagger">
              {data.skillGroups.map((g) => (
                <FeatureCard
                  key={g.title}
                  title={g.title}
                  description={g.description || ""}
                  tone={g.tone === "primary" ? "primary" : "neutral"}
                  icon={
                    g.title.includes("XR") ? (
                      <Cuboid className="h-5 w-5 text-primary" />
                    ) : (
                      <Code2 className="h-5 w-5 text-accent" />
                    )
                  }
                  chips={g.items}
                />
              ))}
            </div>
          </Section>

          <Section
            id="experience"
            eyebrow="Work"
            title="Experience"
            description="A natural progression: solid web foundations, then deeper interaction design and real-time systems in XR."
          >
            <ExperienceTimeline items={data.experiences} />
          </Section>

          <Section
            id="projects"
            eyebrow="Selected"
            title="Projects"
            description="A mix of XR prototypes and shipped web work—focused on clarity, immersion, and real-world usability."
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 stagger">
              {data.projects.map((p) => (
                <ProjectCard
                  key={p.title}
                  title={p.title}
                  category={p.category}
                  summary={p.summary}
                  highlights={p.highlights}
                  stack={p.stack}
                  status={p.status}
                />
              ))}
            </div>
          </Section>

          <Section
            id="contact"
            eyebrow="Let’s build"
            title="Contact"
            description="If you'd like to collaborate on XR simulations, WebXR experiences, or clean dashboard UIs—send a note."
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-5">
                <div className="rounded-3xl bg-card border border-border/70 shadow-soft p-6 sm:p-7">
                  <div className="text-xs font-semibold tracking-[0.22em] uppercase text-muted-foreground">
                    Details
                  </div>

                  <div className="mt-4 space-y-3">
                    <button
                      type="button"
                      onClick={onCopyEmail}
                      className="w-full rounded-2xl border border-border/70 bg-background/60 hover:bg-muted/70 transition-all duration-200 p-4 text-left focus-ring"
                    >
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-2xl bg-card ring-soft grid place-items-center">
                          <Mail className="h-4 w-4 text-primary" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-sm font-semibold">Email</div>
                          <div className="text-xs text-muted-foreground truncate">
                            {data.email}
                          </div>
                        </div>
                        <div className="ml-auto text-xs font-semibold text-muted-foreground">
                          {copied ? "Copied" : "Copy"}
                        </div>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={onSendEmail}
                      className="w-full rounded-2xl border border-border/70 bg-background/60 hover:bg-muted/70 transition-all duration-200 p-4 text-left focus-ring"
                    >
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-2xl bg-card ring-soft grid place-items-center">
                          <Mail className="h-4 w-4 text-accent" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-sm font-semibold">Send Email</div>
                          <div className="text-xs text-muted-foreground truncate">
                            Direct message
                          </div>
                        </div>
                        <div className="ml-auto text-xs font-semibold text-muted-foreground">
                          Send
                        </div>
                      </div>
                    </button>

                    <div className="rounded-2xl border border-border/70 bg-background/60 p-4">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-2xl bg-card ring-soft grid place-items-center">
                          <MapPin className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold">Location</div>
                          <div className="text-xs text-muted-foreground">{data.location}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 text-xs text-muted-foreground leading-relaxed">
                    Tip: This form is UI-only. Hook it up to your preferred email/service when you’re ready.
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <form
                  onSubmit={onSubmitContact}
                  className="rounded-3xl bg-card border border-border/70 shadow-soft p-6 sm:p-7"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-xs font-semibold tracking-[0.22em] uppercase text-muted-foreground">
                        Message
                      </div>
                      <h3 className="mt-2 text-2xl font-bold leading-tight">
                        Send a note
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                        Tell me what you’re building. I’ll reply with ideas, constraints, and a plan.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-muted-foreground tracking-[0.18em] uppercase">
                        Name
                      </label>
                      <Input
                        value={contact.name}
                        onChange={(e) =>
                          setContact((p) => ({ ...p, name: e.target.value }))
                        }
                        placeholder="Your name"
                        className="mt-2 h-12 rounded-xl bg-background/60 border-border/70 focus-ring"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-muted-foreground tracking-[0.18em] uppercase">
                        Email
                      </label>
                      <Input
                        value={contact.email}
                        onChange={(e) =>
                          setContact((p) => ({ ...p, email: e.target.value }))
                        }
                        placeholder="you@example.com"
                        type="email"
                        className="mt-2 h-12 rounded-xl bg-background/60 border-border/70 focus-ring"
                      />
                    </div>
                  </div>

                  <div className="mt-4">
                    <label className="text-xs font-semibold text-muted-foreground tracking-[0.18em] uppercase">
                      Message
                    </label>
                    <Textarea
                      value={contact.message}
                      onChange={(e) =>
                        setContact((p) => ({ ...p, message: e.target.value }))
                      }
                      placeholder="A quick note about the project, timeline, and what you need…"
                      className="mt-2 min-h-[140px] rounded-xl bg-background/60 border-border/70 focus-ring"
                    />
                  </div>

                  <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
                    <Button
                      type="submit"
                      className="rounded-xl shadow-soft hover:shadow-lift transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
                      onClick={() => {
                        // onClick is required even when type="submit"
                        // (keeps consistency with "no dead buttons" rule)
                      }}
                    >
                      Send Message
                    </Button>

                    <Button
                      type="button"
                      variant="secondary"
                      className="rounded-xl border border-border/70 bg-background/60 hover:bg-muted/70 transition-all duration-200"
                      onClick={() => setContact({ name: "", email: "", message: "" })}
                    >
                      Clear
                    </Button>
                  </div>
                </form>
              </div>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-3xl bg-card border border-border/70 shadow-soft p-6">
              <div>
                <div className="font-display text-xl font-bold leading-tight">
                  Prefer a quick scan?
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  Download the updated resume and keep it handy.
                </div>
              </div>
              <Button
                className="rounded-xl shadow-soft hover:shadow-lift transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
                onClick={() => window.open(data.resumeHref, "_blank")}
              >
                Download Resume
              </Button>
            </div>
          </Section>

          <footer className="pb-10">
            <div className="border-t border-border/80 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} {data.name}. Built with a clean minimal aesthetic.
              </div>
              <div className="flex flex-wrap gap-2">
                {data.links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-border/70 bg-card/70 px-4 py-2 text-xs font-semibold text-foreground/85 hover:bg-muted/70 hover:text-foreground transition-all duration-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-ring/20"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}
