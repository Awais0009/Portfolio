export interface NavSection {
  id: string;
  label: string;
  href: string;
}

export const navSections: NavSection[] = [
  { id: "about", label: "About", href: "/about" },
  { id: "skills", label: "Skills", href: "/skills" },
  { id: "experience", label: "Experience", href: "/experience" },
  { id: "projects", label: "Projects", href: "/projects" },
  { id: "education", label: "Education", href: "/education" },
  { id: "contact", label: "Contact", href: "/contact" },
];

/** Full route order, home included — drives page-transition direction. */
export const routeOrder = ["/", ...navSections.map((s) => s.href)];
