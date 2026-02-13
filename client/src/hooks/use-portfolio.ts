export type SkillGroup = {
  title: string;
  tone?: "primary" | "accent" | "neutral";
  items: string[];
  description?: string;
};

export type Experience = {
  company: string;
  role: string;
  location?: string;
  period: string;
  bullets: string[];
  tags: string[];
};

export type Project = {
  title: string;
  category: "XR" | "Web" | "System";
  summary: string;
  highlights: string[];
  stack: string[];
  status?: "Shipped" | "In progress" | "Prototype";
  demoUrl?: string;
};

export type Portfolio = {
  name: string;
  headline: string;
  subheadline: string;
  location: string;
  email?: string;
  phone?: string;
  links: { label: string; href: string }[];
  resumeHref: string;
  skillGroups: SkillGroup[];
  experiences: Experience[];
  projects: Project[];
};

export function usePortfolioData() {
  const data: Portfolio = {
    name: "Sangeethkumar",
    headline: "XR Developer crafting immersive learning & simulation experiences.",
    subheadline:
      "Motivated and aspiring Software Engineer with a strong foundation in web technologies. Passionate about 3D modeling and VR app development, with experience in building responsive web applications through academic and personal projects. Equipped with excellent problem-solving skills and a proactive learning attitude, eager to tackle real-world challenges.",
    location: "India",
    email: "sangeethkumarMahalingam@outlook.com",
    phone: "",
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/sangeethkumar-m-link" },
      { label: "Instagram", href: "https://www.instagram.com/__golden_cube_" },
    ],
    resumeHref: "/Sangeethkumar_Resume_1770881056253.pdf",
    skillGroups: [
      {
        title: "XR Development",
        tone: "primary",
        description:
          "Immersive interaction systems, spatial UI, and optimized scene workflows for WebXR and headset deployments.",
        items: [
          "Meta SDK",
          "XR Interaction Toolkit",
          "OpenXR",
          "Zappar AR",
          "WebXR",
          "Unity (C#)",
          "Addressables",
          "Draw Call Optimization",
          "3D Modeling (Blender)",
        ],
      },
      {
        title: "Web Development",
        tone: "neutral",
        description:
          "Frontend engineering for dashboards and enterprise-style apps with a focus on maintainable UI systems.",
        items: ["Angular", "TypeScript", "HTML/CSS"],
      },
    ],
    experiences: [
      {
        company: "Objectx Innovatech Pvt. Ltd",
        role: "XR Developer",
        period: "2024 — Present",
        bullets: [
          "Designing immersive environments for Virtual Chemistry Labs and CRP Simulations, balancing clarity, realism, and user guidance.",
          "Implemented voice-guided workflows and environment animation logic in Unity to support step-by-step learning and simulation flow.",
          "Hosted WebGL/WebVR applications on AWS using S3, CloudFront, and Lambda—delivering reliable builds and fast global access.",
          "Collaborated with stakeholders to translate training goals into interactive scenarios, iterating on UX and performance.",
        ],
        tags: ["Unity", "XR", "WebGL/WebVR", "AWS", "Simulation", "Interaction"],
      },
      {
        company: "SBNA Software Solutions",
        role: "Web Developer",
        period: "2023 — 2024",
        bullets: [
          "Contributed to web application development with a focus on clean UI implementation and maintainable TypeScript code.",
          "Built and refined components for real-world workflows, working closely with product requirements and design feedback.",
        ],
        tags: ["Angular", "TypeScript", "UI Engineering"],
      },
    ],
    projects: [
      {
        title: "VR Escape Room",
        category: "XR",
        status: "Prototype",
        demoUrl: "https://www.youtube.com/watch?v=vApsPOnttlk",
        summary:
          "An adaptive VR escape experience tuned to user mental states such as stress and anxiety—changing pacing, cues, and challenge to keep the experience engaging and supportive.",
        highlights: [
          "Adaptive gameplay loops that adjust guidance and intensity based on user state.",
          "Focus on immersive interaction clarity and comfort-first design patterns.",
        ],
        stack: ["Unity", "C#", "XR Interaction Toolkit", "OpenXR"],
      },
      {
        title: "Virtual Reality Shopping",
        category: "XR",
        status: "In progress",
        demoUrl: "https://www.youtube.com/watch?v=2WY3tAgzLu8",
        summary:
          "A VR simulation of real-world shopping interactions—browsing, selecting, comparing, and checking out within an immersive environment.",
        highlights: [
          "Realistic interaction metaphors for product handling and navigation.",
          "Environment animation logic for responsive, lifelike retail scenarios.",
        ],
        stack: ["Unity", "C#", "OpenXR", "Meta SDK"],
      },
      {
        title: "Cuba Game",
        category: "XR",
        status: "Shipped",
        demoUrl: "https://www.youtube.com/watch?v=ZvDJIbTyPLQ",
        summary:
          "Designed and developed a 3D cube navigation game with interactive mechanics, integrating Unity’s physics engine to ensure smooth gameplay.",
        highlights: [
          "3D cube navigation mechanics.",
          "Physics engine integration for smooth movement.",
        ],
        stack: ["Unity", "C#"],
      },
      {
        title: "IQAS Dashboard",
        category: "Web",
        status: "Shipped",
        summary:
          "A web dashboard experience emphasizing clear information architecture, responsive UI, and maintainable Angular components.",
        highlights: [
          "Component-driven UI and consistent styling patterns.",
          "Type-safe UI logic to reduce regressions across iterations.",
        ],
        stack: ["Angular", "TypeScript", "HTML/CSS"],
      },
      {
        title: "Smart Hostel Management System",
        category: "System",
        status: "Shipped",
        summary:
          "A system to manage hostel operations and records with a practical, workflow-oriented interface and structured data handling.",
        highlights: [
          "Preserved as a key systems project demonstrating end-to-end ownership.",
          "Clear UX for daily operations and admin tasks.",
        ],
        stack: ["Web", "Frontend", "CRUD"],
      },
    ],
  };

  return { data };
}
