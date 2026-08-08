"use client";

import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { navSections } from "@/data/navigation";
import { profile } from "@/data/profile";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CommandPalette } from "@/components/shared/command-palette";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("hero");
  const [sheetOpen, setSheetOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 12);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );
    navSections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  function goTo(id: string) {
    setSheetOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        scrolled
          ? "border-b border-border/60 bg-background/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <button
          onClick={() => goTo("hero")}
          className="font-display text-sm font-semibold tracking-tight"
        >
          <span className="text-primary">&lt;</span>
          {profile.initials}
          <span className="text-primary">/&gt;</span>
        </button>

        <nav className="hidden items-center gap-1 lg:flex">
          {navSections.map((s) => (
            <button
              key={s.id}
              onClick={() => goTo(s.id)}
              className={cn(
                "relative rounded-full px-3.5 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground",
                active === s.id && "text-foreground"
              )}
            >
              {active === s.id && (
                <span className="absolute inset-0 rounded-full bg-surface" />
              )}
              <span className="relative">{s.label}</span>
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <CommandPalette />
          <Button
            size="sm"
            className="hidden sm:inline-flex"
            onClick={() => goTo("contact")}
          >
            Contact
          </Button>
          <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button size="icon" variant="ghost" className="lg:hidden">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetHeader>
                <SheetTitle className="font-display">Navigate</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 px-4">
                {navSections.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => goTo(s.id)}
                    className={cn(
                      "rounded-lg px-3 py-2.5 text-left text-sm text-muted-foreground transition-colors hover:bg-surface hover:text-foreground",
                      active === s.id && "bg-surface text-foreground"
                    )}
                  >
                    {s.label}
                  </button>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
