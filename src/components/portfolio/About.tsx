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
  I'm a frontend-first full stack developer from Maharashtra, India. I started with pure HTML, CSS and JavaScript — building 50+ mini projects without any frameworks — and that foundation still shapes everything I ship today: clean, fast, and free of unnecessary complexity.
</p>

<p>
  Over the years I've worked across a wide range of technologies — modern web development, React and TypeScript applications, Python and its frameworks, WordPress, AI-assisted development, basic AI/ML concepts, IoT, cybersecurity, networking, and even graphic design. This breadth helps me understand problems from multiple angles and choose the right tools instead of forcing a single stack.
</p>

<p>
  My real strength is not memorizing every framework — it's the ability to take a vague problem or unfamiliar technology, research it, architect a solution, and ship it. I use AI as an engineering multiplier so I can move faster on implementation while staying fully responsible for architecture, integration, debugging, and final quality.
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
