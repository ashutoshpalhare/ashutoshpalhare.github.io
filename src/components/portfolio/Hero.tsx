import { motion } from "framer-motion";
import { ArrowDown, Download, MapPin } from "lucide-react";
import { profile } from "@/data/portfolio";

export function Hero() {
  return (
    <section
      id="home"
      className="radial-glow relative flex min-h-screen items-center px-6 py-24 sm:px-10"
    >
      <div className="mx-auto grid w-full max-w-5xl items-center gap-12 md:grid-cols-[auto_1fr]">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-gold opacity-25 blur-3xl" />
          <img
            src={profile.avatar}
            alt="Portrait of Ashutosh Palhare"
            width={208}
            height={208}
            className="relative h-40 w-40 rounded-full border border-border object-cover glow-ring sm:h-52 sm:w-52"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="text-center md:text-left"
        >
          <div className="mb-5 flex flex-wrap justify-center gap-2 md:justify-start">
            <span className="glass rounded-full px-3 py-1 text-xs font-medium text-primary">
              ● Open to Work
            </span>
            <span className="glass rounded-full px-3 py-1 text-xs font-medium text-accent">
              ● Open to Collab
            </span>
          </div>

          <p className="text-sm uppercase tracking-[0.35em] text-muted-foreground">
            Hey, I'm {profile.short}
          </p>
          <h1 className="mt-3 text-4xl font-semibold leading-tight sm:text-6xl">
            {profile.first} <span className="text-gradient-gold">{profile.last}</span>
          </h1>
          <p className="mt-4 text-base font-medium text-primary sm:text-lg">{profile.role}</p>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            {profile.bio}
          </p>
          <p className="mt-3 font-display text-lg italic text-foreground/90">
            “{profile.tagline}”
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <a
              href={profile.socials.site}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-gold px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform duration-300 hover:scale-[1.03]"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl border border-border px-6 py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:border-primary hover:text-primary hover:glow-ring"
            >
              View Projects
            </a>
          </div>

          <p className="mt-6 inline-flex items-center gap-2 text-xs text-muted-foreground">
            <MapPin className="h-3.5 w-3.5 text-primary" />
            {profile.location}
          </p>
        </motion.div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-24 left-1/2 hidden -translate-x-1/2 text-muted-foreground transition-colors hover:text-primary lg:block lg:bottom-8"
      >
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  );
}
