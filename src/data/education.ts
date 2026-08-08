import type { EducationEntry, Achievement } from "@/types";

export const education: EducationEntry[] = [
  {
    id: "nust",
    institution: "National University of Sciences & Technology (NUST)",
    credential: "B.E. Computer Software Engineering",
    detail: "CGPA 3.56 / 4.0",
    period: "Graduated 2025",
  },
];

export const achievements: Achievement[] = [
  {
    id: "fitmaster",
    title: "FitMaster AI — Final Year Project",
    description:
      "Designed and shipped a dual-LSTM computer-vision system for real-time exercise form correction — the project I'm most proud of.",
    icon: "Trophy",
  },
  {
    id: "inotech-impact",
    title: "40% Faster Processing at InoTech",
    description:
      "Internship management system that cut HR's manual processing time by 40% across 150+ applications.",
    icon: "Zap",
  },
  {
    id: "one-year",
    title: "1 Year of Service — MTBC CareCloud",
    description:
      "Recognized for contributions to the EDI team's delivery and workflow automation.",
    icon: "Medal",
  },
];
