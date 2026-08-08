import type { ExperienceEntry } from "@/types";

export const experience: ExperienceEntry[] = [
  {
    id: "mtbc-carecloud",
    company: "MTBC CareCloud",
    role: "Software Engineer",
    start: "Jul 2025",
    end: "Present",
    current: true,
    summary:
      "Manage projects and day-to-day operations for the Electronic Data Interchange (EDI) team.",
    highlights: [
      "Oversee new development across the team and ensure timely delivery",
      "Coordinate and implement payer (insurance) and client-requested changes",
      "Maintain and update EDI software and integrations",
      "Automate repetitive workflows to reduce manual effort and errors",
    ],
    stack: ["EDI", "SQL", ".NET", "Automation"],
  },
  {
    id: "inotech",
    company: "InoTech Solutions",
    role: "Software Engineering Intern",
    location: "Islamabad",
    start: "Jul 2024",
    end: "Sep 2024",
    summary:
      "Built an internship management system handling 150+ intern applications end to end.",
    highlights: [
      "Built the full application flow with PHP and MySQL — intern submissions, approval/rejection status tracking",
      "Gave HR a dashboard to manage 30+ department assignments, applications, and advisor assignments",
      "Reduced manual processing time by 40%",
    ],
    stack: ["PHP", "MySQL"],
  },
  {
    id: "stress-saviors",
    company: "Stress Saviors",
    role: "Product Development",
    location: "Islamabad",
    start: "Aug 2023",
    end: "Sep 2023",
    summary:
      "Collaborated with the Product team to design and implement a mental wellness application.",
    highlights: [
      "Assisted in managing and updating app content for accuracy and relevance",
      "Participated in troubleshooting and problem-solving to improve app functionality and UX",
    ],
  },
];
