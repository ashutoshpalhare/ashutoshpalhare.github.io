import { Reveal, SectionHeading } from "./Reveal";
import { profile, stats } from "@/data/portfolio";

export function About() {
  return (
    <section id="about" className="px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="About me" title="Curious builder, relentless shipper" />

        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-start">
          <Reveal className="space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            <p>
              I'm a frontend-first full stack developer from {profile.location}. I started with
              vanilla HTML, CSS and JavaScript — 50+ mini projects with zero frameworks — and that
              foundation still shows up in everything I build today: fast, clean, no bloat.
            </p>
            <p>
              Now I work mostly in React and TypeScript, building learning platforms, developer
              tools and product-grade interfaces. Cybersecurity is the other half of my brain:
              Linux tooling, terminal utilities and secure-by-default thinking.
            </p>
            <p>
              I use AI as an engineering multiplier — it speeds up the boring parts so I can spend
              my attention on architecture, craft and detail. Hand me a vague problem and I'll come
              back with something shipped.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-4 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="glass rounded-xl p-4 text-center">
                  <p className="font-display text-2xl text-gradient-gold">{s.value}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="glass relative overflow-hidden rounded-2xl p-3">
              <div className="absolute inset-0 bg-gradient-gold opacity-10" />
              <img
                src={profile.avatar}
                alt="Ashutosh Palhare at work"
                loading="lazy"
                className="relative aspect-square w-full rounded-xl object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
