import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { projects } from "@/data/portfolio";

const filters = ["All", "Web", "Tools", "Learning", "Cyber"] as const;

export function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const visible = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="Featured projects" title="Things I've shipped" />

        <Reveal className="mb-8 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full border px-4 py-2 text-xs font-semibold transition-all duration-300 ${
                filter === f
                  ? "border-transparent bg-gradient-gold text-primary-foreground shadow-glow-sm"
                  : "border-border text-muted-foreground hover:border-primary hover:text-primary"
              }`}
            >
              {f}
            </button>
          ))}
        </Reveal>

        <motion.div layout className="grid gap-5 sm:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {visible.map((p) => (
              <motion.article
                key={p.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="glass group flex flex-col rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:glow-ring"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold transition-colors group-hover:text-primary">
                    {p.title}
                  </h3>
                  <span className="rounded-full border border-border px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-primary">
                    {p.category}
                  </span>
                </div>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-secondary px-2 py-1 text-[11px] text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex items-center gap-4 text-sm">
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-1.5 font-medium text-primary hover:text-accent"
                    >
                      <ExternalLink className="h-4 w-4" /> Live
                    </a>
                  )}
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-primary"
                  >
                    <Github className="h-4 w-4" /> Code
                  </a>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
