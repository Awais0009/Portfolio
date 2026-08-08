"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Github, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";

const ROLES = [
  "Software Engineer",
  "Full-Stack Developer",
  "AI/ML Tinkerer",
  "MERN Stack Builder",
];

function useTypewriter(words: string[], speed = 55, pause = 1400) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      setDeleting(false);
      setWordIndex((i) => i + 1);
    } else {
      timeout = setTimeout(
        () => {
          setText((t) =>
            deleting ? t.slice(0, -1) : current.slice(0, t.length + 1)
          );
        },
        deleting ? speed / 2 : speed
      );
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, speed, pause]);

  return text;
}

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export function Hero() {
  const typed = useTypewriter(ROLES);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
    >
      <div className="bg-blueprint-grid absolute inset-0 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_35%,black,transparent)]" />
      <div
        aria-hidden
        className="absolute top-1/3 left-1/2 -z-10 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]"
      />

      <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/60 bg-surface/60 px-3.5 py-1.5 font-mono text-xs text-muted-foreground"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/60" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            open to new opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-balance text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            {profile.name}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 font-mono text-lg text-primary sm:text-xl"
          >
            <span>{typed}</span>
            <span className="ml-0.5 inline-block h-[1.1em] w-[2px] -translate-y-[1px] animate-pulse bg-primary align-middle" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 max-w-xl text-balance text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {profile.tagline} I build scalable web applications with React
            and Node.js, and point computer vision at real problems — like
            teaching a camera to correct your squat.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Button size="lg" onClick={() => scrollTo("projects")} className="group">
              View Projects
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollTo("contact")}
            >
              <Mail className="size-4" />
              Contact Me
            </Button>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex size-11 items-center justify-center rounded-md border border-border/60 text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
              aria-label="GitHub"
            >
              <Github className="size-5" />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <TerminalCard />
        </motion.div>
      </div>

      <button
        onClick={() => scrollTo("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground transition-colors hover:text-primary"
        aria-label="Scroll to About"
      >
        <ArrowDown className="size-5 animate-bounce" />
      </button>
    </section>
  );
}

function TerminalCard() {
  return (
    <div className="overflow-hidden rounded-xl border border-border/60 bg-surface shadow-2xl shadow-black/40">
      <div className="flex items-center gap-1.5 border-b border-border/60 bg-background/40 px-4 py-3">
        <span className="size-2.5 rounded-full bg-red-500/70" />
        <span className="size-2.5 rounded-full bg-yellow-500/70" />
        <span className="size-2.5 rounded-full bg-green-500/70" />
        <span className="ml-3 font-mono text-xs text-muted-foreground">
          whoami.ts
        </span>
      </div>
      <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed text-muted-foreground">
        <code>
          <span className="text-steel">const</span>{" "}
          <span className="text-foreground">engineer</span> = {"{"}
          {"\n  "}
          <span className="text-primary">name</span>:{" "}
          <span className="text-green-400">&quot;M. Awais Nadeem&quot;</span>,
          {"\n  "}
          <span className="text-primary">focus</span>: [
          <span className="text-green-400">&quot;full-stack&quot;</span>,{" "}
          <span className="text-green-400">&quot;computer vision&quot;</span>
          ],
          {"\n  "}
          <span className="text-primary">currentRole</span>:{" "}
          <span className="text-green-400">&quot;SWE @ MTBC CareCloud&quot;</span>,
          {"\n  "}
          <span className="text-primary">stack</span>: [
          <span className="text-green-400">&quot;React&quot;</span>,{" "}
          <span className="text-green-400">&quot;Next.js&quot;</span>,{" "}
          <span className="text-green-400">&quot;Node&quot;</span>,{" "}
          <span className="text-green-400">&quot;TensorFlow&quot;</span>
          ],
          {"\n  "}
          <span className="text-primary">shipping</span>:{" "}
          <span className="text-steel">true</span>,
          {"\n"}
          {"}"};
        </code>
      </pre>
    </div>
  );
}
