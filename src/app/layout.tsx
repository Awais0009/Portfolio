import type { Metadata } from "next";
import { Inter, Space_Grotesk, Geist_Mono } from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { CursorSpotlight } from "@/components/shared/cursor-spotlight";
import { KonamiEgg } from "@/components/shared/konami-egg";
import { AchievementsProvider } from "@/components/shared/achievements-provider";
import { ExplorationProvider } from "@/components/shared/exploration-provider";
import { PageTransition } from "@/components/shared/page-transition";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "M. Awais Nadeem — Software Engineer",
  description:
    "Software Engineer specializing in full-stack web development and AI/ML — React, Next.js, Node.js, TensorFlow, and OpenCV.",
  metadataBase: new URL("https://awaisnadeem.dev"),
  openGraph: {
    title: "M. Awais Nadeem — Software Engineer",
    description:
      "Full-stack developer and AI/ML engineer building scalable web applications and intelligent systems.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`dark ${inter.variable} ${spaceGrotesk.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <TooltipProvider>
          <AchievementsProvider>
            <ExplorationProvider>
              <CursorSpotlight />
              <KonamiEgg />
              <Navbar />
              <main className="flex-1 pt-16">
                <PageTransition>{children}</PageTransition>
              </main>
              <Footer />
            </ExplorationProvider>
          </AchievementsProvider>
        </TooltipProvider>
      </body>
    </html>
  );
}
