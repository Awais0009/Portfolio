import type { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    label: "Frontend",
    icon: "LayoutTemplate",
    skills: [
      { name: "React.js", level: "advanced", xp: 90 },
      { name: "Next.js", level: "advanced", xp: 85 },
      { name: "TypeScript", level: "proficient", xp: 75 },
      { name: "JavaScript", level: "advanced", xp: 90 },
      { name: "Tailwind CSS", level: "advanced", xp: 88 },
      { name: "shadcn/ui", level: "proficient", xp: 78 },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    icon: "Server",
    skills: [
      { name: "Node.js", level: "advanced", xp: 88 },
      { name: "Express.js", level: "advanced", xp: 85 },
      { name: ".NET / ASP.NET Core", level: "proficient", xp: 65 },
      { name: "REST APIs", level: "advanced", xp: 88 },
    ],
  },
  {
    id: "databases",
    label: "Databases",
    icon: "Database",
    skills: [
      { name: "PostgreSQL", level: "proficient", xp: 75 },
      { name: "MongoDB", level: "advanced", xp: 85 },
      { name: "MySQL", level: "proficient", xp: 78 },
      { name: "Firebase / Firestore", level: "advanced", xp: 82 },
      { name: "Supabase", level: "proficient", xp: 68 },
    ],
  },
  {
    id: "ai-ml",
    label: "AI / ML",
    icon: "BrainCircuit",
    skills: [
      { name: "Python", level: "advanced", xp: 85 },
      { name: "TensorFlow", level: "proficient", xp: 78 },
      { name: "OpenCV", level: "proficient", xp: 80 },
      { name: "MediaPipe", level: "proficient", xp: 76 },
      { name: "LSTM / Deep Learning", level: "proficient", xp: 72 },
      { name: "PyTorch / Scikit-learn", level: "learning", xp: 55 },
    ],
  },
  {
    id: "tools",
    label: "Tools & Workflow",
    icon: "Wrench",
    skills: [
      { name: "Git & GitHub", level: "advanced", xp: 90 },
      { name: "VS Code", level: "expert", xp: 95 },
      { name: "Stripe / Auth0", level: "proficient", xp: 70 },
    ],
  },
];
