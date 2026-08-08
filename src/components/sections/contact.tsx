"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/shared/icons";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { profile } from "@/data/profile";

const CHANNELS = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "github.com/Awais0009",
    href: profile.github,
    icon: GithubIcon,
  },
  {
    label: "LinkedIn",
    value: "Connect on LinkedIn",
    href: profile.linkedin,
    icon: LinkedinIcon,
  },
];

export function Contact() {
  const [form, setForm] = useState({ name: "", message: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || "a visitor"}`);
    const body = encodeURIComponent(form.message);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="06 · Contact"
          title="Let's build something worth shipping"
          description="Have a role, a project, or just want to talk shop about pose-estimation models? My inbox is open."
          align="center"
        />

        <div className="mx-auto mt-14 grid max-w-4xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="space-y-3">
            {CHANNELS.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group flex items-center justify-between rounded-xl border border-border/60 bg-surface/50 p-5 transition-colors hover:border-primary/30"
              >
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <c.icon className="size-4.5" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">{c.label}</div>
                    <div className="text-xs text-muted-foreground">
                      {c.value}
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
              </a>
            ))}
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="space-y-4 rounded-2xl border border-border/60 bg-surface/50 p-6"
            >
              <div>
                <label className="mb-1.5 block font-mono text-xs text-muted-foreground uppercase">
                  Name
                </label>
                <Input
                  required
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  placeholder="Jane Doe"
                />
              </div>
              <div>
                <label className="mb-1.5 block font-mono text-xs text-muted-foreground uppercase">
                  Message
                </label>
                <Textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, message: e.target.value }))
                  }
                  placeholder="Tell me about the role or project…"
                />
              </div>
              <motion.div whileTap={{ scale: 0.98 }}>
                <Button type="submit" className="w-full" size="lg">
                  <Send className="size-4" />
                  Send Message
                </Button>
              </motion.div>
              <p className="text-center text-xs text-muted-foreground">
                Opens your email client with this pre-filled.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
