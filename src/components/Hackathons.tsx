import { Award, Sparkles } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { hackathons, exploring } from "@/data/portfolio";

export function Hackathons() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow="Activities" title="Hackathons & Activities" />

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {hackathons.map((h, i) => (
            <Reveal key={h} delay={i * 40}>
              <div className="surface-card flex h-full items-start gap-3 p-4 hover:-translate-y-0.5">
                <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary-soft text-primary">
                  <Sparkles className="size-4" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-medium">{h}</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Participated — technology-focused hackathon/activity.
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <SectionHeading title="Certification" />
            <Reveal className="mt-6">
              <div className="surface-card p-6">
                <div className="flex items-start gap-3">
                  <span className="inline-flex size-10 items-center justify-center rounded-lg bg-primary-soft text-primary">
                    <Award className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold">NPTEL — E-Business</p>
                    <p className="mt-1 text-xs text-muted-foreground">Certification</p>
                  </div>
                </div>
                <div className="mt-5 rounded-lg border border-dashed border-border p-6 text-center text-xs text-muted-foreground">
                  Certificate image can be added here later.
                </div>
              </div>
            </Reveal>
          </div>

          <div>
            <SectionHeading title="What I'm Exploring" />
            <Reveal className="mt-6">
              <ul className="flex flex-wrap gap-2">
                {exploring.map((e) => (
                  <li
                    key={e}
                    className="rounded-full border border-border bg-card px-4 py-2 text-xs font-medium transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary sm:text-sm"
                  >
                    {e}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
