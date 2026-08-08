import type { Metadata } from "next";
import { About } from "@/components/sections/about";

export const metadata: Metadata = { title: "About — M. Awais Nadeem" };

export default function AboutPage() {
  return <About />;
}
