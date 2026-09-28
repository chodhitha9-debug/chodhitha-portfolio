import { Github, Linkedin, Mail } from "lucide-react";
import { Reveal } from "./Reveal";
import { profile } from "@/data/portfolio";

export function Contact() {
  return (
    <section id="contact" className="hero-glow scroll-mt-24 border-t border-border py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Reveal>
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Let's Build Something Useful
            </h2>
            <p className="mt-3 text-sm text-muted-foreground sm:text-base">
              Have an idea, project, collaboration, or opportunity? I'd be happy to connect.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                <Mail className="size-4" aria-hidden="true" /> Email Me
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-medium transition-colors hover:bg-secondary"
              >
                <Linkedin className="size-4" aria-hidden="true" /> LinkedIn
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-medium transition-colors hover:bg-secondary"
              >
                <Github className="size-4" aria-hidden="true" /> GitHub
              </a>
            </div>

            <p className="mt-8 text-xs text-muted-foreground">
              <a className="underline-offset-4 hover:underline" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
