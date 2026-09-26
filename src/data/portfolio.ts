export const profile = {
  name: "Ashutosh Palhare",
  first: "Ashutosh",
  last: "Palhare",
  short: "AP",
  role: "Frontend-first Full Stack Developer • Cybersecurity Enthusiast",
  location: "Maharashtra, India",
  avatar: "https://avatars.githubusercontent.com/u/53346137?v=4",
  bio: "I design and build clean, high-performance web interfaces and practical developer tools. I treat AI as an engineering multiplier — using it to move faster on the repetitive work so I can focus on architecture, user experience, and shipping quality products.", 
  tagline: "Give me a problem → I'll figure out how to ship it.",
  socials: {
    github: "https://github.com/ashutoshpalhare",
    linkedin: "https://www.linkedin.com/in/ashutoshpalhare",
    twitter: "https://twitter.com/AshutoshPalhare",
    instagram: "https://instagram.com/ashutoshpalhare",
    site: "https://ashutoshpalhare.github.io",
  },
};

export const stats = [
  { value: "5+", label: "Years building" },
  { value: "19+", label: "Public projects" },
  { value: "6", label: "Core skill areas" },
  { value: "∞", label: "Curiosity" },
];

export const experience = [
  {
    role: "Full Stack Developer",
    org: "Trimurti Pawan Pratishthan",
    period: "Dec 2024 — Present",
    points: [
      "Developing and maintaining websites using React, WordPress, PHP, HTML, CSS, and JavaScript across multiple domains.",
      "Built and delivered 5–6 production-ready websites for the institute and related projects.",
      "Conducting technical lectures and hands-on training sessions for students on modern web development.",
      "Handling end-to-end development including UI design, frontend, backend integration, and deployment.",
    ],
  },
  {
    role: "Founder & Full Stack Developer",
    org: "Dev Culture",
    period: "2023 — Present",
    points: [
      "Building and shipping developer tools, learning platforms, and product-grade web applications.",
      "Owning the complete product lifecycle — from concept and UI/UX design to development and deployment.",
      "Working primarily with React, TypeScript, Tailwind CSS, and modern frontend architecture.",
      "Publishing open tools and platforms on GitHub Pages used by the developer community.",
    ],
  },
  {
    role: "Freelance Full Stack Developer",
    org: "Independent",
    period: "2021 — Present",
    points: [
      "Delivered multiple client projects across different domains including business websites, redesigns, and custom solutions.",
      "Worked with a wide range of technologies — HTML, CSS, JavaScript, React, WordPress, and PHP.",
      "Focused on building responsive, accessible, and high-performance front-ends with clean and maintainable code.",
      "Managed projects end-to-end: requirement gathering, design, development, and delivery.",
    ],
  },
  {
    role: "Cybersecurity & Open Source Contributor",
    org: "Self-directed",
    period: "2019 — Present",
    points: [
      "Built practical Linux tooling, terminal utilities, and security-focused projects (Termy, FaceWise).",
      "Completed 50+ vanilla JavaScript mini-projects to strengthen core fundamentals without relying on frameworks.",
      "Continuously exploring system-level concepts, networking basics, and secure coding practices.",
    ],
  },
];


export type Category = "Web" | "Tools" | "Learning" | "Cyber";

export const projects: {
  title: string;
  description: string;
  tags: string[];
  category: Category;
  live?: string;
  repo: string;
  featured?: boolean;
}[] = [
  {
    title: "craftc",
    description:
      "Free, structured C and C++ learning platform with interactive lessons, roadmaps, projects, interview questions and cheatsheets.",
    tags: ["TypeScript", "React", "Tailwind"],
    category: "Learning",
    live: "https://ashutoshpalhare.github.io/craftc/",
    repo: "https://github.com/ashutoshpalhare/craftc",
    featured: true,
  },
  {
    title: "CodeMuseum",
    description:
      "A museum-themed developer portfolio in pure HTML, CSS and JS — project exhibits, category filters and elegant animations.",
    tags: ["JavaScript", "CSS", "UI"],
    category: "Web",
    live: "https://ashutoshpalhare.github.io/CodeMuseum/",
    repo: "https://github.com/ashutoshpalhare/CodeMuseum",
    featured: true,
  },
  {
    title: "CommandKit",
    description:
      "A curated, searchable library of 100+ ChatGPT slash commands to discover, organize, copy and favorite prompt shortcuts.",
    tags: ["JavaScript", "AI", "Productivity"],
    category: "Tools",
    live: "https://ashutoshpalhare.github.io/CommandKit/",
    repo: "https://github.com/ashutoshpalhare/CommandKit",
    featured: true,
  },
  {
    title: "VibeHai",
    description:
      "A modern music streaming platform inspired by Spotify — sleek UI, immersive playback and a fresh take on discovery.",
    tags: ["JavaScript", "UI", "Media"],
    category: "Web",
    repo: "https://github.com/ashutoshpalhare/VibeHai",
    featured: true,
  },
  {
    title: "verse",
    description:
      "AP VERSE — a cinematic, local-first visual archive built with TanStack Start, Zustand and Framer Motion.",
    tags: ["TanStack Start", "React", "Zustand"],
    category: "Web",
    live: "https://ashutoshpalhare.github.io/verse/",
    repo: "https://github.com/ashutoshpalhare/verse",
    featured: true,
  },
  {
    title: "WebDev-Projects",
    description:
      "50 responsive mini web projects in pure HTML5, CSS3 and vanilla JavaScript. Zero frameworks, zero dependencies.",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "Learning",
    live: "https://ashutoshpalhare.github.io/WebDev-Projects/",
    repo: "https://github.com/ashutoshpalhare/WebDev-Projects",
    featured: true,
  },
  {
    title: "BioLinks V2",
    description:
      "A premium Linktree-inspired digital business card with a modern glassmorphism UI for every profile and link.",
    tags: ["CSS", "Glassmorphism"],
    category: "Web",
    live: "https://ashutoshpalhare.github.io/BioLinksV2/",
    repo: "https://github.com/ashutoshpalhare/BioLinksV2",
  },
  {
    title: "Termy",
    description:
      "A colourful terminal emulator for Linux — shell tooling built for people who live in the command line.",
    tags: ["Shell", "Linux"],
    category: "Cyber",
    repo: "https://github.com/ashutoshpalhare/Termy",
  },
  {
    title: "FaceWise",
    description:
      "Attendance management powered by face recognition: register faces, mark attendance and generate reports.",
    tags: ["Python", "OpenCV"],
    category: "Cyber",
    repo: "https://github.com/ashutoshpalhare/FaceWise",
  },
  {
    title: "E-Start 2",
    description:
      "A feature-rich custom Chrome start page with speed dials, quotes, search and a personalised layout.",
    tags: ["CSS", "JavaScript"],
    category: "Tools",
    live: "https://ashutoshpalhare.github.io/E-Start2/",
    repo: "https://github.com/ashutoshpalhare/E-Start2",
  },
  {
    title: "Python Micro Projects",
    description:
      "A growing collection of small, documented Python programs — each self-contained with its own docs and requirements.",
    tags: ["Python", "Automation"],
    category: "Learning",
    live: "https://ashutoshpalhare.github.io/Python-Micro-Projects/",
    repo: "https://github.com/ashutoshpalhare/Python-Micro-Projects",
  },
  {
    title: "TrimurtiACSD",
    description:
      "A modern, responsive static redesign concept for a college website with a clean multi-page architecture.",
    tags: ["HTML", "CSS", "Redesign"],
    category: "Web",
    live: "https://ashutoshpalhare.github.io/TrimurtiACSD/",
    repo: "https://github.com/ashutoshpalhare/TrimurtiACSD",
  },
];

export const skills = [
  {
    title: "Frontend",
    icon: "Layout",
    items: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "HTML5", "CSS3"],
  },
  {
    title: "Backend",
    icon: "Server",
    items: ["Node.js", "TanStack Start", "REST APIs", "Supabase", "Python"],
  },
  {
    title: "Cybersecurity",
    icon: "ShieldCheck",
    items: ["Linux", "Bash", "Network basics", "OSINT", "Secure coding"],
  },
  {
    title: "AI Tools",
    icon: "Sparkles",
    items: ["Prompt engineering", "ChatGPT workflows", "AI-assisted dev", "Automation"],
  },
  {
    title: "Design & Tools",
    icon: "PenTool",
    items: ["Figma", "Git & GitHub", "Vite", "Photoshop", "GitHub Pages"],
  },
  {
    title: "Languages",
    icon: "Code2",
    items: ["JavaScript", "TypeScript", "Python", "C / C++", "Shell"],
  },
];

export const education = [
  {
    degree: "B.Sc. — Computer Science",
    school: "Trimurti Arts, Commerce & Science College",
    period: "Maharashtra, India",
    note: "Core CS foundations: data structures, networks, operating systems and programming in C/C++ and Python.",
  },
  {
    degree: "Self-taught Web Engineering",
    school: "Open source & the internet",
    period: "Ongoing",
    note: "Learned by shipping: 50+ vanilla projects, full-stack apps, and open tooling published on GitHub.",
  },
  {
    degree: "Cybersecurity Fundamentals",
    school: "Independent study & labs",
    period: "Ongoing",
    note: "Linux internals, terminal tooling, and practical security practice alongside development work.",
  },
];
