import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { timeline } from "@/data/portfolio";

export function Journey() {
  return (
    <section id="journey" className="scroll-mt-24 bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow="Timeline" title="Journey" />

        <ol className="relative mt-10 space-y-6 border-l border-border pl-6">
          {timeline.map((item, i) => (
            <Reveal key={`${item.year}-${i}`} delay={i * 60}>
              <li className="relative">
                <span
                  className="absolute -left-[31px] top-2 size-2.5 rounded-full border-2 border-background bg-primary"
                  aria-hidden="true"
                />
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                  {item.year}
                </p>
                <p className="mt-1 text-sm text-muted-foreground sm:text-base">{item.text}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
