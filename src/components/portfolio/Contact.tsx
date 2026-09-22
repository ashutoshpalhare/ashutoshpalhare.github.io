import { useState } from "react";
import { Send } from "lucide-react";
import { toast } from "sonner";
import { Reveal, SectionHeading } from "./Reveal";
import { socials } from "./Sidebar";

export function Contact() {
  const [sending, setSending] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Message noted — reach me on GitHub or LinkedIn meanwhile.");
    }, 600);
  }

  return (
    <section id="contact" className="radial-glow px-6 pb-32 pt-24 sm:px-10 lg:pb-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="Contact" title="Let's build something amazing together" />

        <div className="grid gap-8 md:grid-cols-[1fr_1.1fr]">
          <Reveal className="space-y-6">
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              Got an idea, a role, or a half-finished project that needs a push? Tell me the
              problem — I'll figure out how to ship it.
            </p>
            <div className="flex flex-wrap gap-3">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="glass inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm text-muted-foreground transition-all duration-300 hover:text-primary hover:glow-ring"
                >
                  <Icon className="h-4 w-4" />
                  {label}
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <form onSubmit={onSubmit} className="glass space-y-4 rounded-2xl p-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Name" name="name" placeholder="Your name" />
                <Field label="Email" name="email" type="email" placeholder="you@email.com" />
              </div>
              <Field label="Subject" name="subject" placeholder="What's this about?" />
              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-xs uppercase tracking-wider text-muted-foreground"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about the problem…"
                  className="w-full rounded-xl border border-input bg-background/60 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
                />
              </div>
              <button
                type="submit"
                disabled={sending}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-gold px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform duration-300 hover:scale-[1.02] disabled:opacity-60"
              >
                <Send className="h-4 w-4" />
                {sending ? "Sending…" : "Send message"}
              </button>
            </form>
          </Reveal>
        </div>

        <footer className="mt-16 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Ashutosh Palhare — designed & built with care.
        </footer>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 block text-xs uppercase tracking-wider text-muted-foreground"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="w-full rounded-xl border border-input bg-background/60 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
      />
    </div>
  );
}
