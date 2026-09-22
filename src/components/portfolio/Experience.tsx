import { Briefcase } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { experience } from "@/data/portfolio";

export function Experience() {
  return (
    <section id="experience" className="px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="Experience" title="Where I've been building" />

        <div className="relative space-y-5 border-l border-border pl-6 sm:pl-10">
          {experience.map((job, i) => (
            <Reveal key={job.role} delay={i * 0.1}>
              <div className="glass group relative rounded-2xl p-6 transition-all duration-300 hover:border-primary/50 hover:glow-ring">
                <span className="absolute -left-[31px] top-8 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-gold sm:-left-[47px]" />
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-lg font-semibold">{job.role}</h3>
                  <span className="rounded-full border border-border px-3 py-1 text-xs text-primary">
                    {job.period}
                  </span>
                </div>
                <p className="mt-1 inline-flex items-center gap-2 text-sm text-muted-foreground">
                  <Briefcase className="h-3.5 w-3.5 text-primary" />
                  {job.org}
                </p>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {job.points.map((p) => (
                    <li key={p} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
