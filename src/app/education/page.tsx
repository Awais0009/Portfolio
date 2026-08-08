import type { Metadata } from "next";
import { Education } from "@/components/sections/education";

export const metadata: Metadata = { title: "Education — M. Awais Nadeem" };

export default function EducationPage() {
  return <Education />;
}
