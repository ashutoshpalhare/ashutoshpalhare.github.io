import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <Reveal className="mb-10">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-primary">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold sm:text-4xl">{title}</h2>
      <div className="mt-4 h-px w-24 bg-gradient-gold" />
    </Reveal>
  );
}
