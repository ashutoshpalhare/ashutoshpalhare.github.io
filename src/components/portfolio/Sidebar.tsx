import { useEffect, useState } from "react";
import {
  Home,
  User,
  Briefcase,
  FolderGit2,
  Cpu,
  GraduationCap,
  Mail,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  MessageCircle,
} from "lucide-react";
import { profile } from "@/data/portfolio";

const nav = [
  { id: "home", label: "Home", Icon: Home },
  { id: "about", label: "About", Icon: User },
  { id: "experience", label: "Experience", Icon: Briefcase },
  { id: "projects", label: "Projects", Icon: FolderGit2 },
  { id: "skills", label: "Skills", Icon: Cpu },
  { id: "education", label: "Education", Icon: GraduationCap },
  { id: "contact", label: "Contact", Icon: Mail },
];

export const socials = [
  { href: profile.socials.github, label: "GitHub", Icon: Github },
  { href: profile.socials.linkedin, label: "LinkedIn", Icon: Linkedin },
  { href: profile.socials.twitter, label: "Twitter / X", Icon: Twitter },
  { href: profile.socials.instagram, label: "Instagram", Icon: Instagram },
];

function useActiveSection() {
  const [active, setActive] = useState("home");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0.01, 0.25, 0.6] },
    );
    nav.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);
  return active;
}

export function Sidebar() {
  const active = useActiveSection();

  return (
    <>
      <nav
        aria-label="Section navigation"
        className="fixed left-0 top-0 z-40 hidden h-screen w-20 flex-col items-center justify-center gap-3 border-r border-border bg-background/70 backdrop-blur-xl lg:flex"
      >
        <a
          href="#home"
          className="absolute top-7 font-display text-xl font-bold text-gradient-gold"
          aria-label="Home"
        >
          AP
        </a>
        {nav.map(({ id, label, Icon }) => {
          const isActive = active === id;
          return (
            <a
              key={id}
              href={`#${id}`}
              aria-label={label}
              aria-current={isActive ? "true" : undefined}
              className={`group relative flex h-11 w-11 items-center justify-center rounded-xl border transition-all duration-300 ${
                isActive
                  ? "border-border bg-primary/15 text-primary glow-ring"
                  : "border-transparent text-muted-foreground hover:border-border hover:text-primary"
              }`}
            >
              <Icon className="h-[18px] w-[18px]" />
              <span className="pointer-events-none absolute left-14 whitespace-nowrap rounded-md border border-border bg-card px-2 py-1 text-xs opacity-0 transition-opacity group-hover:opacity-100">
                {label}
              </span>
            </a>
          );
        })}
      </nav>

      {/* Mobile bottom bar */}
      <nav
        aria-label="Section navigation"
        className="fixed bottom-0 left-0 z-40 flex w-full items-center justify-around border-t border-border bg-background/90 px-2 py-2 backdrop-blur-xl lg:hidden"
      >
        {nav.map(({ id, label, Icon }) => (
          <a
            key={id}
            href={`#${id}`}
            aria-label={label}
            className={`flex h-10 w-10 items-center justify-center rounded-lg transition-colors ${
              active === id ? "bg-primary/15 text-primary" : "text-muted-foreground"
            }`}
          >
            <Icon className="h-[18px] w-[18px]" />
          </a>
        ))}
      </nav>
    </>
  );
}

export function TopSocials() {
  return (
    <div className="fixed right-5 top-5 z-40 hidden items-center gap-2 sm:flex">
      {socials.map(({ href, label, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer noopener"
          aria-label={label}
          className="glass flex h-10 w-10 items-center justify-center rounded-xl text-muted-foreground transition-all duration-300 hover:text-primary hover:glow-ring"
        >
          <Icon className="h-[18px] w-[18px]" />
        </a>
      ))}
    </div>
  );
}

export function FloatingContact() {
  return (
    <a
      href="#contact"
      className="fixed bottom-20 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-gradient-gold px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform duration-300 hover:scale-105 lg:bottom-6"
    >
      <MessageCircle className="h-4 w-4" />
      Let's talk
    </a>
  );
}
