"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { navSections } from "@/data/navigation";
import { profile } from "@/data/profile";
import { ArrowRight, Home, Mail, Sparkles, Terminal } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/shared/icons";
import { useAchievements } from "@/components/shared/achievements-provider";

const SECRET_PHRASE = "sudo hire me";

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const router = useRouter();
  const { unlock } = useAchievements();

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
        if (e.key === "/" && document.activeElement?.tagName === "INPUT") return;
        e.preventDefault();
        setOpen((v) => !v);
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  function go(href: string) {
    setOpen(false);
    setValue("");
    router.push(href);
  }

  function runSecret() {
    setOpen(false);
    setValue("");
    unlock("Permission granted", "sudo access confirmed — redirecting to /contact");
    router.push("/contact");
  }

  const isSecret = value.trim().toLowerCase() === SECRET_PHRASE;

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="hidden items-center gap-2 rounded-full border border-border/60 bg-surface/60 px-3.5 py-1.5 font-mono text-xs text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground md:flex"
      >
        <Terminal className="size-3.5" />
        <span>jump to…</span>
        <kbd className="ml-1 rounded border border-border/60 bg-background/60 px-1.5 py-0.5 text-[10px]">
          ⌘K
        </kbd>
      </button>
      <CommandDialog
        open={open}
        onOpenChange={setOpen}
        title="Command Palette"
        description="Jump to a section or reach out"
      >
        <CommandInput
          value={value}
          onValueChange={setValue}
          placeholder="Type a section, a command, or try something…"
        />
        <CommandList>
          {isSecret ? (
            <CommandGroup heading="Whoa">
              <CommandItem onSelect={runSecret} value={SECRET_PHRASE}>
                <Sparkles />
                <span>Run: {SECRET_PHRASE}</span>
              </CommandItem>
            </CommandGroup>
          ) : (
            <>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Navigate">
                <CommandItem onSelect={() => go("/")}>
                  <Home />
                  <span>Home</span>
                </CommandItem>
                {navSections.map((s) => (
                  <CommandItem key={s.id} onSelect={() => go(s.href)}>
                    <ArrowRight />
                    <span>{s.label}</span>
                  </CommandItem>
                ))}
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Connect">
                <CommandItem
                  onSelect={() => window.open(profile.github, "_blank")}
                >
                  <GithubIcon />
                  <span>Open GitHub</span>
                </CommandItem>
                <CommandItem
                  onSelect={() =>
                    (window.location.href = `mailto:${profile.email}`)
                  }
                >
                  <Mail />
                  <span>Email me</span>
                  <CommandShortcut>{profile.email}</CommandShortcut>
                </CommandItem>
                <CommandItem
                  onSelect={() => window.open(profile.linkedin, "_blank")}
                >
                  <LinkedinIcon />
                  <span>Open LinkedIn</span>
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Secrets">
                <CommandItem disabled>
                  <Sparkles />
                  <span>Try typing &quot;{SECRET_PHRASE}&quot;… or the Konami code</span>
                </CommandItem>
              </CommandGroup>
            </>
          )}
        </CommandList>
      </CommandDialog>
    </>
  );
}
