import { GraduationCap, School, CalendarDays, Cpu } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { profile } from "@/data/portfolio";

const facts = [
  { icon: GraduationCap, label: "Education", value: "B.Tech — CSE(AIML)" },
  { icon: School, label: "College", value: profile.college },
  { icon: CalendarDays, label: "Graduation", value: profile.graduation },
  { icon: Cpu, label: "Focus Areas", value: "AI / ML / NLP / RAG" },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow="About" title="About Me" />
        <div className="mt-10 grid gap-10 lg:grid-cols-[1.15fr_1fr]">
          <Reveal className="space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            <div className="space-y-4">
              <p>
                I’m a third-year CSE-AIML student at {profile.college}, interested in Artificial
                Intelligence, Machine Learning, NLP, and practical software development.
              </p>
              <p>
                I enjoy turning ideas into working projects and learning through hands-on problem
                solving. My projects range from AI-powered safety analysis and document-based
                assistants to multilingual web applications and interactive frontend tools.
              </p>
              <p>
                I’m continuously improving my technical and problem-solving skills while exploring
                new areas of AI.
              </p>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <dl className="surface-card divide-y divide-border p-2">
              {facts.map((f) => (
                <div key={f.label} className="flex items-start gap-3 p-4">
                  <span className="mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary-soft text-primary">
                    <f.icon className="size-4" aria-hidden="true" />
                  </span>
                  <div>
                    <dt className="text-xs uppercase tracking-wide text-muted-foreground">
                      {f.label}
                    </dt>
                    <dd className="mt-1 text-sm font-medium">{f.value}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
