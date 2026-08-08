import type { Metadata } from "next";
import { Contact } from "@/components/sections/contact";

export const metadata: Metadata = { title: "Contact — M. Awais Nadeem" };

export default function ContactPage() {
  return <Contact />;
}
