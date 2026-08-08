import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "fitmaster-ai",
    name: "FitMaster AI",
    tagline: "Real-time posture correction, powered by dual-LSTM pose analysis",
    description:
      "A full-stack AI fitness platform that watches a live camera feed, tracks body/joint angles in real time, and tells you when your form breaks — the way a coach would. Built as my final-year project and pushed well past the point of 'it works for the demo.'",
    year: "2024",
    featured: true,
    accent: "signal",
    stack: [
      "Next.js",
      "TypeScript",
      "React",
      "Node.js",
      "Express",
      "Python",
      "TensorFlow",
      "OpenCV",
      "MediaPipe",
      "Dual LSTM",
      "Firebase",
    ],
    features: [
      "Real-time exercise recognition from live video",
      "Joint-angle analysis for posture/form correction",
      "Dual-LSTM model for temporal movement classification",
      "AI-generated nutrition and diet guidance",
      "In-app fitness chatbot for form and workout questions",
    ],
    links: [{ label: "GitHub", href: "https://github.com/Awais0009" }],
  },
  {
    id: "eshop",
    name: "E-Shop",
    tagline: "Full-stack e-commerce with role-based admin control",
    description:
      "A full online store — browsing, filtering, product detail pages, persistent cart, and Stripe checkout — plus a role-based admin dashboard for catalog, inventory, and user management.",
    year: "2025",
    accent: "steel",
    stack: ["Angular", "ASP.NET Core", "MongoDB", "Stripe"],
    features: [
      "Product search, filtering, and detail pages",
      "Persistent shopping cart and Stripe checkout",
      "Role-based admin dashboard",
      "Catalog and inventory management",
    ],
    links: [{ label: "GitHub", href: "https://github.com/Awais0009" }],
  },
  {
    id: "food-ordering",
    name: "Enterprise Food Ordering Platform",
    tagline: "Scalable ordering platform with Stripe payments and Auth0",
    description:
      "A comprehensive food ordering platform built for a smooth end-to-end customer experience, from browsing to checkout, backed by a robust Node/Express service layer.",
    year: "2023",
    accent: "steel",
    stack: ["React", "Vite", "Node.js", "Express", "MongoDB", "Stripe", "Auth0"],
    features: [
      "Third-party payment processing via Stripe",
      "Authentication and session handling via Auth0",
      "Scalable data modeling with MongoDB",
    ],
    links: [{ label: "GitHub", href: "https://github.com/Awais0009" }],
  },
  {
    id: "skribble",
    name: "Real-Time Skribble Game",
    tagline: "Low-latency multiplayer drawing & guessing game",
    description:
      "A real-time multiplayer Skribble-style game built on WebSockets for instant drawing sync and guessing, backed by the MERN stack for a scalable, dynamic experience.",
    year: "2023",
    accent: "steel",
    stack: ["MERN Stack", "WebSockets", "React", "Node.js", "MongoDB"],
    features: [
      "Real-time drawing sync over WebSockets",
      "Multiplayer rooms with low-latency updates",
      "Responsive gameplay UI",
    ],
    links: [{ label: "GitHub", href: "https://github.com/Awais0009" }],
  },
];
