import { useState } from "react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { skillCategories, skills, type SkillCategory } from "@/data/portfolio";

export function Skills() {
  const [active, setActive] = useState<SkillCategory>("All");
  const visible = active === "All" ? skills : skills.filter((s) => s.category === active);

  return (
    <section id="skills" className="scroll-mt-24 bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Skills"
          title="Skills & Technologies"
          subtitle="Technologies I use to build and experiment with AI-powered applications."
        />

        <Reveal className="mt-8">
          <div role="tablist" aria-label="Skill categories" className="flex flex-wrap gap-2">
            {skillCategories.map((c) => (
              <button
                key={c}
                role="tab"
                aria-selected={active === c}
                onClick={() => setActive(c)}
                className={`rounded-full border px-4 py-2 text-xs font-medium transition-colors sm:text-sm ${
                  active === c
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-muted-foreground hover:border-primary hover:text-primary"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((s, i) => (
            <Reveal key={s.name} delay={i * 40}>
              <div className="surface-card group h-full p-4 hover:-translate-y-0.5">
                <p className="text-sm font-medium">{s.name}</p>
                <p className="mt-1 text-xs text-muted-foreground opacity-80 transition-opacity group-hover:opacity-100">
                  {s.note}
                </p>
                <p className="mt-3 text-[11px] uppercase tracking-wide text-primary">{s.category}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
