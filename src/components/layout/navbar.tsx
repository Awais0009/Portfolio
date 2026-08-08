"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
import { useExplorationState } from "@/components/shared/exploration-provider";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);
  const pathname = usePathname();
  const { visited, total } = useExplorationState();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 12);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
        <Link href="/" className="font-display text-sm font-semibold tracking-tight">
          <span className="text-primary">&lt;</span>
          {profile.initials}
          <span className="text-primary">/&gt;</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navSections.map((s) => {
            const isActive = pathname === s.href;
            return (
              <Link
                key={s.id}
                href={s.href}
                className={cn(
                  "relative rounded-full px-3.5 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground",
                  isActive && "text-foreground"
                )}
              >
                {isActive && (
                  <span className="absolute inset-0 rounded-full bg-surface" />
                )}
                <span className="relative flex items-center gap-1.5">
                  {s.label}
                  {visited.has(s.id) && (
                    <span
                      className="size-1 rounded-full bg-primary"
                      aria-hidden
                    />
                  )}
                </span>
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <div
            className="hidden items-center gap-1.5 font-mono text-[11px] text-muted-foreground md:flex"
            title="Sections explored"
          >
            <span className="text-primary">{visited.size}</span>/{total}{" "}
            explored
          </div>
          <CommandPalette />
          <Button size="sm" className="hidden sm:inline-flex" asChild>
            <Link href="/contact">Contact</Link>
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
                  <Link
                    key={s.id}
                    href={s.href}
                    onClick={() => setSheetOpen(false)}
                    className={cn(
                      "flex items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm text-muted-foreground transition-colors hover:bg-surface hover:text-foreground",
                      pathname === s.href && "bg-surface text-foreground"
                    )}
                  >
                    {s.label}
                    {visited.has(s.id) && (
                      <span className="size-1.5 rounded-full bg-primary" />
                    )}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
