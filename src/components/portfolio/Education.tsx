import { GraduationCap } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { education } from "@/data/portfolio";

export function Education() {
  return (
    <section id="education" className="px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="Education" title="How I learned it" />

        <div className="grid gap-5 md:grid-cols-3">
          {education.map((e, i) => (
            <Reveal key={e.degree} delay={i * 0.08}>
              <div className="glass h-full rounded-2xl p-6 transition-all duration-300 hover:border-primary/50 hover:glow-ring">
                <GraduationCap className="mb-4 h-6 w-6 text-primary" />
                <h3 className="text-base font-semibold">{e.degree}</h3>
                <p className="mt-1 text-sm text-primary">{e.school}</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                  {e.period}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{e.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
