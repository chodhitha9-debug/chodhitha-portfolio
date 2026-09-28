import { ArrowRight, Github } from "lucide-react";
import { profile } from "@/data/portfolio";
import { NetworkVisual } from "./NetworkVisual";
import { CommandPanel } from "./CommandPanel";

export function Hero() {
  return (
    <section id="home" className="hero-glow relative scroll-mt-24 pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <span className="inline-flex items-center rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
            3rd Year CSE-AIML Student
          </span>

          <h1 className="mt-5 text-3xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            Building practical AI solutions for real-world problems.
          </h1>

          <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            I’m a third-year CSE-AIML student who enjoys exploring AI and building practical
            projects. I like learning by working on real-world problems, especially in Machine
            Learning, NLP, and AI. I’m always curious to learn new technologies and improve my
            skills.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              View My Projects <ArrowRight className="size-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-medium transition-colors hover:bg-secondary"
            >
              Let's Connect
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1.5 px-1 text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
            >
              <Github className="size-4" /> View GitHub
            </a>
          </div>

          <p className="mt-8 inline-flex items-center gap-2 text-xs text-muted-foreground">
            <span className="status-dot size-2 rounded-full bg-primary" aria-hidden="true" />
            Currently learning &amp; building
          </p>

          <div className="mt-8 max-w-md">
            <CommandPanel />
          </div>
        </div>

        <NetworkVisual />
      </div>
    </section>
  );
}
