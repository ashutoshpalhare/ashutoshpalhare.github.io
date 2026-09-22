import { Layout, Server, ShieldCheck, Sparkles, PenTool, Code2 } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { skills } from "@/data/portfolio";

const icons = { Layout, Server, ShieldCheck, Sparkles, PenTool, Code2 } as const;

export function Skills() {
  return (
    <section id="skills" className="px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="Skills" title="The toolkit" />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => {
            const Icon = icons[group.icon as keyof typeof icons];
            return (
              <Reveal key={group.title} delay={i * 0.07}>
                <div className="glass h-full rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:glow-ring">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-semibold">{group.title}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-md border border-border px-2.5 py-1 text-xs text-muted-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
