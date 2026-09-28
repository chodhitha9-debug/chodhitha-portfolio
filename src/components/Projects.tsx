import { useState } from "react";
import { ChevronDown, ExternalLink, Github } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { projects, type Project } from "@/data/portfolio";

const filters = ["All", "AI/ML", "NLP", "Web"] as const;

function CaseStudy({ project }: { project: Project }) {
  return (
    <div className="mt-5 space-y-5 border-t border-border pt-5">
      {project.architecture ? (
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wide text-primary">
            Architecture
          </h4>
          <ol className="mt-3 flex flex-wrap items-center gap-2">
            {project.architecture.map((step, i) => (
              <li key={step} className="flex items-center gap-2">
                <span className="rounded-lg border border-border bg-secondary/60 px-3 py-1.5 text-xs font-medium">
                  {step}
                </span>
                {i < project.architecture!.length - 1 ? (
                  <span aria-hidden="true" className="text-muted-foreground">
                    →
                  </span>
                ) : null}
              </li>
            ))}
          </ol>
        </div>
      ) : null}

      {project.caseStudy.map((block) => (
        <div key={block.heading}>
          <h4 className="text-xs font-semibold uppercase tracking-wide text-primary">
            {block.heading}
          </h4>
          {Array.isArray(block.body) ? (
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
              {block.body.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          ) : (
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{block.body}</p>
          )}
        </div>
      ))}
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);

  return (
    <article className="surface-card h-full p-6 hover:-translate-y-1">
      <p className="text-[11px] font-medium uppercase tracking-wide text-primary">
        {project.categoryLabel}
      </p>
      <h3 className="mt-2 text-lg font-semibold tracking-tight">{project.title}</h3>
      {project.subtitle ? (
        <p className="mt-1 text-sm text-muted-foreground">{project.subtitle}</p>
      ) : null}
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.description}</p>

      <ul className="mt-4 flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <li
            key={t}
            className="rounded-md border border-border bg-secondary/60 px-2 py-1 text-[11px] text-secondary-foreground"
          >
            {t}
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap items-center gap-2">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-3 py-2 text-xs font-medium transition-colors hover:bg-secondary"
        >
          <Github className="size-3.5" aria-hidden="true" /> GitHub
        </a>
        {project.demo ? (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-3 py-2 text-xs font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Live Demo <ExternalLink className="size-3.5" aria-hidden="true" />
          </a>
        ) : null}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-medium text-primary transition-colors hover:bg-primary-soft"
        >
          {open ? "Hide Case Study" : "View Case Study"}
          <ChevronDown
            className={`size-3.5 transition-transform ${open ? "rotate-180" : ""}`}
            aria-hidden="true"
          />
        </button>
      </div>

      {open ? <CaseStudy project={project} /> : null}
    </article>
  );
}

export function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const visible = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Projects"
          title="Selected Projects"
          subtitle="A collection of projects where I explore AI, machine learning, NLP, web development, and practical problem solving."
        />

        <Reveal className="mt-8">
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                aria-pressed={filter === f}
                onClick={() => setFilter(f)}
                className={`rounded-full border px-4 py-2 text-xs font-medium transition-colors sm:text-sm ${
                  filter === f
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-muted-foreground hover:border-primary hover:text-primary"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-8 grid items-start gap-5 lg:grid-cols-2">
          {visible.map((p, i) => (
            <Reveal key={p.id} delay={i * 60}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
